# -nodejs-dns-resolver

NodeJS App to Resolve DNS Names

## Overview

This is a simple NodeJS application that creates a method named /checkDNS which accepts 'domain' to perform an DNS lookup on the domain name.  This is useful for Azure App Service deployments with VNet integration to determine if the DNS names of private endpoints and other internal systems are resolving internally.  Since this does allow querying sensitive internal information (resolution information), either IP restrict the Web App or add authentication to the site.

** This is NOT intended to be a permanently deployed application.  It is only intended to be used to validate DNS resolution on a deployment and then deleted or overwritten.

## Usage Example

`/checkDNS?domain=google.com` appended to the DNS name of the Web App.