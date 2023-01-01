<?php
    if (isset($_POST['name']) && isset($_POST['tel'])) {
        $name = $_POST['name'];
        $tel = $_POST['tel'];

        if(mail('alinakulikova964@gmail.com',
                'Новое письмо',
                'Вы успешно зарегистрированы'."\n".
                'Вы ввели имя: '.$name."\n".
                'Вы ввели телефон: '.$tel

        )) {
            echo('Успешно отправлено');
        } else {
            echo('Ошибка');
        }
    }
 ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <form method="POST">
        <input type="text" name="name" placeholder="Имя">
        <input type="tel" name="tel" placeholder="Number">

        <input type="submit" value="Отправить">
    </form>
</body>
</html>
