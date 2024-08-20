<?php
$name = $_POST['name'];
$email = $_POST[ 'email'];
$password = $_POST['password'];

//Database connection

$conn = new mysqli('localhost', 'root', '', 'register');
if ($conn->connect_error){
    die('Connection Failed : '. $conn->connect_error);

}else{
    $stmt = $conn->prepare("insert into registration(name,email,password)
    values(?,?,?)");
    $stmt->bind_param("sssssi", $name, $email, $password);
    $stmt->execute();
    echo "registration Successfully...";
    $stmt->close();
    $conn->close();
}
?>
