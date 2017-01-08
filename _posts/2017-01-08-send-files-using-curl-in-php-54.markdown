---
layout: post
title: Send Files using cURL in Php 5.4
description: Learn how to send files using cURL in php 5.4 and an example code for that.
tags: [php, code]
---

{:.reveal}
Since php 5.5, sending files in php has improved a lot. You can use [CURLFile](http://php.net/manual/en/class.curlfile.php) class or [curl_file_create()](http://php.net/manual/en/function.curl-file-create.php) to upload a file with `CURLOPT_POSTFIELDS`. 

{:.reveal}
{% highlight php %}
<?
// Create a CURLFile object / procedural method 
$cfile = curl_file_create('resource/test.png','image/png','testpic'); // try adding 

// Create a CURLFile object / oop method 
$cfile = new CURLFile('resource/test.png','image/png','testpic');
{% endhighlight %}

{:.reveal}
But for older versions, it's a struggle.

{:.reveal}
First of all, you can not send files using GET method.  That doesn't even make sense. Also you need the absolute path of the file. Relative paths won't work. 

{:.reveal}
Here's a sample code that will work-

{:.reveal}
{% highlight php %}
<?
// Create a string with file data
$cfile = "@" . $fileAbsolutePath
             . ";type=" . mime_content_type($fileAbsolutePath)
             . ";filename=" . basename($fileAbsolutePath);
{% endhighlight %}

{:.reveal}
Above code has 3 parts-

* {:.reveal}`"@" . $fileAbsolutePath`
  
  {:.reveal}
  This gives the cURL library full path to the file so it knows which file to send.
  
* {:.reveal}`";type=" . mime_content_type($fileAbsolutePath)`

  {:.reveal}
  This is used to set a MIME Content-type for the uploaded file. Without it, MIME type defaults to `application/octet-stream`
  
* {:.reveal}`";filename=" . basename($fileAbsolutePath)`

  {:.reveal}
  This is used to give uploaded file a new name. Use this to change the name of the file that is received by the server on which request is sent.
  
{:.reveal}
Now you can use the `$cfile` variable to send file by setting it as a parameter to `CURLOPT_POSTFIELDS`.

{:.reveal}
{% highlight php %}
<?
// initialise the curl request
$conn = curl_init('http://abc.xyz');

// send a file
curl_setopt($conn, CURLOPT_POST, true);
curl_setopt(
    $conn,
    CURLOPT_POSTFIELDS,
    array(
      'file' => '@' . realpath('example.txt')
    )
);

// output the response
curl_setopt($conn, CURLOPT_RETURNTRANSFER, true);
echo curl_exec($conn);

// close the session
curl_close($conn);
{% endhighlight %}

{:.reveal}
#### Reference

{:.reveal}
[Function definition for curl\_file\_create on PHP < 5.5](http://php.net/manual/en/function.curl-file-create.php#114538)
<br>
[Sending files using cURL in PHP](http://code.stephenmorley.org/php/sending-files-using-curl/) (2009)