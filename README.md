Hashword
========
Hashword serves to provide a user entering a password with instant feedback as to whether their entrance was correct. Additionally, a routine user can become familiar with the pattern they are used to seeing in order to avoid typos.

![Hashword](preview.png)

Example
-------
To use hashword, include jQuery, the styles, and the library; then call `$.fn.hashword` on the username element with the password element, correct hash fetcher, and entered-password hash generator.

```javascript
$("#username").hashword("#password", function(user, cb) {
	cb({
		"matt": "cc977f06610bcf4b092e44fa6583ac70ee4b4c46"
	}[user]);
}, function(entry, cb) {				
	cb(SHA1(entry));
});
```

Security
--------
Keep in mind, that of course the encoding should be more sophisticated than a plain SHA, and not made evident on the client side. Rather, you should fetch the hash from the server-side. Exposing such an endpoint will essentially allow the same analysis by hackers as a database dump. This means that you will need an algorithm effective enough to survive a database-dump analysis.