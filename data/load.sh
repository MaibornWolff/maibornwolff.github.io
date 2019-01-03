#!/bin/bash

cd $(dirname $0)

# Fetch repositories
repositories=$(curl -s -L https://api.github.com/users/maibornwolff/repos)
echo $repositories > repositories.json

# Fetch members
members=$(curl -s -L https://api.github.com/orgs/maibornwolff/members)
echo $members > members.json
