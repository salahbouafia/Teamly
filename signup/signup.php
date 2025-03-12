<?php
// signup.php
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];


$users = [];
if (file_exists('../users.json')) {
    $users = json_decode(file_get_contents('../users.json'), true);
}

if (array_key_exists($username, $users)) {
    echo json_encode(['success' => false, 'message' => 'Username already exists.']);
} else {
    $users[$username] = $password;
    file_put_contents('../users.json', json_encode($users));
    echo json_encode(['success' => true, 'message' => 'Signup successful.']);
}
?>