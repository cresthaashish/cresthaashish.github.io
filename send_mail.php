<?php
$referer = $_SERVER['HTTP_REFERER'];
header("Location: $referer");
  if(isset($_POST['submit'])){
  $to = "cresthaa135@gmail.com";
  $subject = "Contact Form Mail";
  $name = $_POST['fname'];
  $email = $_POST['email'];
  $subject1 = $_POST['subject'];
  $message = $_POST['message'];
  $main = 'Hello Objectway, <br/> You have received mail from  <br/><br/> <strong> Full Name: </strong> '.$name.'<br/> <strong> Email: </strong>' .$email.'<br/><strong>Subject: </strong>'.$subject1.'<br/><strong>Message: </strong>'.$message.'<br/><br/> Thank you.';
  // Always set content-type when sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  // More headers
  $headers .= 'From: <info@splendourgroup.org>' . "\r\n";
  mail($to, $subject, $main, $headers);
}
