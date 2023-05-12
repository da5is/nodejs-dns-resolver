const express = require('express')
const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
	res.send('To use this, append the DNS name to "/checkDNS?domain=" like this: <a href="/checkDNS?domain=google.com">/checkDNS?domain=google.com</a> (for google.com)')
})

app.get('/checkDNS', (req, res) => {
	const dns = require('dns')
	let domainname = req.query.domain
	var response =""

// The following code was intended to show the DNS servers, but on App Service it returns
// the Azure Resolver (Windows) or localhost (Linux).
//	let servers = dns.getServers()
//	response += `System DNS servers: ${servers}<br>`

	dns.lookup(domainname, (err, addresses) => {
		if (err) {
			console.error(`Error resolving DNS name ${domainname} `);
			res.send(`Error resolving DNS name ${domainname} `)
			return;
		}
		response += `${domainname} resolved to ${addresses}`;
		res.send(`${response}`)
	});
})


app.listen(port, host)