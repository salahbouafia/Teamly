<?php
// login.php
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];

$users = [];
if (file_exists('../users.json')) {
    $users = json_decode(file_get_contents('../users.json'), true);
}

if (array_key_exists($username, $users) && $users[$username] === $password) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Username or password are wrong.']);
}
?>