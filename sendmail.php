<?php 

if(isset($_REQUEST['fname']) && $_REQUEST['lname']!="" && $_REQUEST['email1']!="" && $_REQUEST['zipcode']!="" ) {

		$fname = $_REQUEST['fname'];
		$lname = $_REQUEST['lname'];
		$email1 = $_REQUEST['email1'];
		$zipcode = $_REQUEST['zipcode'];

		$email_to = 'admin@tammystokesforsuperiorcourtjudge.com';
		$email = "";
		$email_subject = 'Contact us form has been submitted';

				/*	Email Body Content */

				$message = '<html><head><title>'.$email_subject.'</title></head><body>';
				$message .= '<p>Hello,</p>';
				$message .= '<p>Here are the details of the submitted form.</p>';
				$message .= '<table width="100%">';
					$message .= '
					<tr>
					<td width="100"><strong>First Name</strong></td>
					<td width="1%">:</td>
					<td>'.$fname.'</td></tr>';
					$message .= '<tr width="100"><td><strong>Last Name</strong></td><td width="1%">:</td><td>'.$lname.'</td></tr>';
					$message .= '<tr width="100"><td><strong>Email</strong></td><td width="1%">:</td><td>'.$email1.'</td></tr>';
					$message .= '<tr width="100"><td><strong>Zipcode</strong></td><td width="1%">:</td><td>'.$zipcode.'</td></tr>';
				$message .= '</table>';
				$message .= '<p>Thank You.</p>';
				$message .= '</body></html>';
				$headers  = 'MIME-Version: 1.0' . "\r\n";
				$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
				$headers .= 'From: '.$fname.' <'.$email.'>' . "\r\n";
				
				mail($email_to, $email_subject, $message, $headers);
				echo '1';
		?>
		<?php } else { 
				echo '0';
}

?>


