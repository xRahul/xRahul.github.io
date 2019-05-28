---
title: Using nmap (Network Mapper) for debugging SSL security
description: A free, open-source utility for network exploration and security auditing.
tags: [security, utility]
---

**nmap** _is a free, open-source utility for network exploration and security auditing._ This utility has a great many features like determining the hosts on the network, services offered by them, their OS, firewalls, and dozens of other characteristics. You can find details in the references I'm providing below.

This is a utility I've used recently and would like to give it a shoutout while explaining how it helped me. The task was to upgrade a web server from using TLSv1.0 to TLSv1.2 SSL encryption. If you're unaware, older versions of TLS and SSL have _unfixable threats_ that can be utilized by hackers to gain access to your valuable data. It is also a matter of compliance now for systems that require high-security standards.

So, I have [added TLSv1.2 support in my Tomcat server](https://tomcat.apache.org/tomcat-7.0-doc/ssl-howto.html), setup mutual auth with an older client and was in the middle of testing the upgrade, when the client received **SSL Handshake error**. Now, this error can occur due to any number of reasons, and unlike curl output that gives very detailed information on SSL Handshake as you can see below, The application just returned a very unhelpful stacktrace with the message: SSL Handshake error

###### Curl
```
○ → curl -v https://rahulja.in
* Rebuilt URL to: https://rahulja.in/
*   Trying 104.27.142.136...
* TCP_NODELAY set
* Connected to rahulja.in (104.27.142.136) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/cert.pem
  CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
* TLSv1.2 (IN), TLS handshake, Server finished (14):
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.2 (OUT), TLS change cipher, Client hello (1):
* TLSv1.2 (OUT), TLS handshake, Finished (20):
* TLSv1.2 (IN), TLS change cipher, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.2 / ECDHE-ECDSA-CHACHA20-POLY1305
* ALPN, server accepted to use h2
* Server certificate:
*  subject: OU=Domain Control Validated; OU=PositiveSSL Multi-Domain; CN=sni145373.cloudflaressl.com
*  start date: May 22 00:00:00 2019 GMT
*  expire date: Nov 28 23:59:59 2019 GMT
*  subjectAltName: host "rahulja.in" matched cert's "rahulja.in"
*  issuer: C=GB; ST=Greater Manchester; L=Salford; O=COMODO CA Limited; CN=COMODO ECC Domain Validation Secure Server CA 2
*  SSL certificate verify ok.
* Using HTTP2, server supports multi-use
* Connection state changed (HTTP/2 confirmed)
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
* Using Stream ID: 1 (easy handle 0x7fbeb4000400)
> GET / HTTP/2
```

In the above curl output, you can see that the SSL Handshake succeeded with `TLSv1.2 (IN), TLS handshake, Finished (20):`, you can see the cipher used for SSL `TLSv1.2 / ECDHE-ECDSA-CHACHA20-POLY1305` and even that HTTP2 is being used.

So, I needed a way to get some of the above details using some other method. This is when I stumbled upon nmap. The result I received was precisely what I wanted:

###### Command
```
○ → nmap --script ssl-enum-ciphers -p 443 rahulja.in
```

###### Result
```
Starting Nmap 7.70 ( https://nmap.org ) at 2019-05-29 01:56 IST
Nmap scan report for rahulja.in (104.27.143.136)
Host is up (0.13s latency).
Other addresses for rahulja.in (not scanned): 104.27.142.136

PORT    STATE SERVICE
443/tcp open  https
| ssl-enum-ciphers:
|   TLSv1.0:
|     ciphers:
|       TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (ecdh_x25519) - A
|       TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (ecdh_x25519) - A
|     compressors:
|       NULL
|     cipher preference: server
|   TLSv1.1:
|     ciphers:
|       TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (ecdh_x25519) - A
|       TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (ecdh_x25519) - A
|     compressors:
|       NULL
|     cipher preference: server
|   TLSv1.2:
|     ciphers:
|       TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (ecdh_x25519) - A
|       TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 (ecdh_x25519) - A
|       TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 (ecdh_x25519) - A
|       TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (ecdh_x25519) - A
|       TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 (ecdh_x25519) - A
|       TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 (ecdh_x25519) - A
|       TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 (ecdh_x25519) - A
|       TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256-draft (ecdh_x25519) - A
|     compressors:
|       NULL
|     cipher preference: client
|_  least strength: A

Nmap done: 1 IP address (1 host up) scanned in 6.21 seconds
```

Above there, you can easily see that with a simple command, you can see all the supported TLS versions and ciphers they support. After this information, it is just a matter of checking whether your client can use the ciphers supported by the server and you're good to go. Check out the references for more details.




---
<br>

##### References
[SSL To TLS V1.2: Tips For Migration](https://www.securitymetrics.com/blog/ssl-tls-v12-tips-migration){:target="_blank" rel="noopener noreferrer"}
<br>
[Getting Started with Nmap](https://nmap.org/book/intro.html){:target="_blank" rel="noopener noreferrer"}
<br>
[Use nMap to check used SSL/TLS protocol and ciphers](https://www.admin-enclave.com/en/articles/windows/167-use-nmap-to-check-used-ssl-tls-protocol-and-ciphers.html){:target="_blank" rel="noopener noreferrer"}
<br>
[SSL/TLS Configuration HOW-TO - Tomcat](https://tomcat.apache.org/tomcat-7.0-doc/ssl-howto.html){:target="_blank" rel="noopener noreferrer"}
<br>
[Nmap Tutorial: from the Basics to Advanced Tips](https://hackertarget.com/nmap-tutorial/){:target="_blank" rel="noopener noreferrer"}
<br>
[Java: Diagnosing TLS, SSL, and HTTPS](https://blogs.oracle.com/java-platform-group/diagnosing-tls,-ssl,-and-https){:target="_blank" rel="noopener noreferrer"}
