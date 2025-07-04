<?php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $country = $_POST['country'];
    $business = $_POST['business'];
    $offer = $_POST['offer'];
    $stage = $_POST['stage'];
    $service = $_POST['service'];
    $deadline = $_POST['deadline'];
    $referral = $_POST['referral'];

    // Example: Display the info (for testing) 
    echo "<h2>Thank you for connecting!</h2>";
    echo "<strong>Name:</strong> $fullname<br>";
    echo "<strong>Email:</strong> $email<br>";
    echo "<strong>Phone:</strong> $phone<br>";
    echo "<strong>Country:</strong> $country<br>";
    echo "<strong>Business:</strong> $business<br>";
    echo "<strong>Offer:</strong> $offer<br>";
    echo "<strong>Stage:</strong> $stage<br>";
    echo "<strong>Service:</strong> $service<br>";
    echo "<strong>Deadline:</strong> $deadline<br>";
    echo "<strong>Referral:</strong> $referral<br>";
}
?>