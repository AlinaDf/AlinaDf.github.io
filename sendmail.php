<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('alinakulikova964@gmail.com', 'Новое письмо');
    $mail->addAddress('alinakulikova972@gmail.com');
    $mail->Subject = 'Привет, это тестовое задание';

    $body = '<h1>Встречайте письмо</h1>';

    if(trim(!empty($_POST['name']))) {
        $body.= '<p><strong>Телефон:</strong>'.$_POST['name'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?> 