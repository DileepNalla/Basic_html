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

def deleteAccounts(inputFile, apiKey, accountIdColName, isDryRun, hardDelete):
    headers = {
        'content-type': 'application/json', 
        'X-APTRINSIC-API-KEY': apiKey 
    } 
    getAccountEndpoint = ENDPOINT_ROOT + "/accounts"
    deleteAccountEndpoint = ENDPOINT_ROOT + "/accounts"
    csvReader = csv.DictReader(inputFile)
    for (rowIndex,csvRow) in enumerate(csvReader):
        accountId = csvRow[accountIdColName]
        getAccountURL = getAccountEndpoint + "/" + accountId
        response = requests.get(getAccountURL, headers=headers)
        if (response.status_code != 200):
            print("Missing Account '%s'" % (accountId), file=sys.stderr)
            #sys.exit(1)
            #continue
        if not isDryRun:
            print("Deleting '%s'" % accountId)
            request = "%s/%s?hardDelete=%s" % (deleteAccountEndpoint,accountId,("true" if hardDelete else "false")) 
            response = requests.delete(request, headers=headers)
            if response.status_code != 200:
                print("Error deleting Account '%s' : '%d/%s' '%s'" % (accountId, response.status_code, response.text, request), file=sys.stderr)
                sys.exit(1)
            
        else:
            print("Deleting '%s' (DRYRUN)" % accountId)
                

if __name__ == "__main__":
    usage = """usage: %prog [options] input_file apiKey"""
    parser = optparse.OptionParser(usage=usage)
    parser.add_option("-d", "--dryRun", dest="dryRun", action="store_true", default=False, help="If set, will not insert/update data Default: %default")
    parser.add_option("-i", "--accountIdColName", dest="accountIdColName", default="Account Id", help="The column name of the accountId column. Default: '%default'")
    parser.add_option("-x", "--hardDelete", dest="hardDelete", action="store_true", default=False, help="If set, will set the delete date in the distant past so they will not be revived. Default: %default")

    (opts, args) = parser.parse_args()

    if len(args) != 2:
        parser.print_help()
        sys.exit(1)

    inputFilename = args[0]
    inputFile = open(inputFilename,'rb')
    apiKey = args[1]
    accountIdColName = opts.accountIdColName
    hardDelete = opts.hardDelete

    deleteAccounts(inputFile, apiKey, accountIdColName, opts.dryRun, hardDelete)
