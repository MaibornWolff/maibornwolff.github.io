#!/bin/bash

cd $(dirname $0)

# Fetch repositories
repositories=$(curl -L https://api.github.com/users/maibornwolff/repos)
echo $repositories > repositories.json

# Fetch members
members=$(curl -L https://api.github.com/users/maibornwolff/repos)
echo $members > members.json
