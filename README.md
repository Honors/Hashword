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