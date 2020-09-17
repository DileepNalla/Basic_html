#!/usr/bin/env python
from __future__ import print_function
import csv
import sys
import optparse
import os
import os.path
import datetime
import json
from sets import Set
import requests
# If you get an error on the above statement, install the requests library with this command: 
#   pip install requests

ENDPOINT_ROOT = "http://api.aptrinsic.com/v1" 

def deleteUsers(inputFile, apiKey, identifyIdColName, isDryRun, hardDelete):
    headers = {
        'content-type': 'application/json', 
        'X-APTRINSIC-API-KEY': apiKey 
    } 
    getUserEndpoint = ENDPOINT_ROOT + "/users"
    deleteUserEndpoint = ENDPOINT_ROOT + "/users"
    csvReader = csv.DictReader(inputFile)
    for (rowIndex,csvRow) in enumerate(csvReader):
        identifyId = csvRow[identifyIdColName]
        getUserURL = getUserEndpoint + "/" + identifyId
        response = requests.get(getUserURL, headers=headers)
        if (response.status_code != 200):
            print("Missing user '%s'" % (identifyId), file=sys.stderr)
            #sys.exit(1)
            #continue
        if not isDryRun:
            print("Deleting '%s'" % identifyId)
            request = "%s/%s?hardDelete=%s" % (deleteUserEndpoint,identifyId,("true" if hardDelete else "false")) 
            response = requests.delete(request, headers=headers)
            if response.status_code != 200:
                print("Error deleting user '%s' : '%d/%s' '%s'" % (identifyId, response.status_code, response.text, request), file=sys.stderr)
                sys.exit(1)
            
        else:
            print("Deleting '%s' (DRYRUN)" % identifyId)
                

if __name__ == "__main__":
    usage = """usage: %prog [options] input_file apiKey"""
    parser = optparse.OptionParser(usage=usage)
    parser.add_option("-d", "--dryRun", dest="dryRun", action="store_true", default=False, help="If set, will not insert/update data Default: %default")
    parser.add_option("-i", "--identifyIdColName", dest="identifyIdColName", default="Identify Id", help="The column name of the identifyId column. Default: '%default'")
    parser.add_option("-x", "--hardDelete", dest="hardDelete", action="store_true", default=False, help="If set, will set the delete date in the distant past so they will not be revived. Default: %default")

    (opts, args) = parser.parse_args()

    if len(args) != 2:
        parser.print_help()
        sys.exit(1)

    inputFilename = args[0]
    inputFile = open(inputFilename,'rb')
    apiKey = args[1]
    identifyIdColName = opts.identifyIdColName
    hardDelete = opts.hardDelete

    deleteUsers(inputFile, apiKey, identifyIdColName, opts.dryRun, hardDelete)
