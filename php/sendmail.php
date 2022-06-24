<?php 

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require '../phpmailer/src/Exception.php';
    require '../phpmailer/src/PHPMailer.php';
    require '../phpmailer/src/SMTP.php';
    require_once('../phpmailer/src/PHPMailerAutoload.php');


    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', '../phpmailer/language/');
    $mail->IsHTML(true);

    $email = $_POST['email'];

    // $mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'vanish.danilov@gmail.com';                 // Наш логин
    $mail->Password = 'HomerSimpson01';                           // Наш пароль от ящика
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to
    
    $mail->setFrom('vanish.danilov@gmail.com', 'RebootService');
    if(trim(!empty($email))){
        $mail->addAddress($email);
        $mail->Subject = 'Ваш чек-лист!';
        $body = '
        <h1>Что делать если медленно работает ноутбук или компьютер?</h1>
        <ol>
            <li>Проверить сколько доступно места на системном диске(обычно этим диском является диcк C)</li>
            <li>Проверить, с помощью бесплатной утилиты Dr.Web, компьютер на вирусы</li>
            <p>Обычно этих действий достаточно, чтобы ноутбук или компьютер начал работать нормально,<br>
            если же после данных действий компьютер все также работает медленно, советуем вам обратиться<br>
            в наш сервисный центр, потому что проблема, скорее всего, "в железе".</p>
        </ol>
        <h1>Что делать если медленно работает телефон на Андроиде?</h1>
        <ol>
            <li>Как и в компьютере первое на что стоит обратить внимание - это память. Проверьте сколько ее доступно,<br>
            для комфортной работы телефону нужно минимум от 500мб свободной памяти</li>
            <li>Не скачивайте на смартфон программы, которые "очищают кэш" и т.д. Сделаете только хуже, <br>
            по скольку такие программы обычно только нагружают смартфон</li>
            <li>Если у вас очень бюджетный смартфон и вам не нравятся различные анимации, которые из-за слабого железа <br>
            смартфона часто тормозят, то советуем вам включить режим разработчика, для этого зайдите в настройки->о телефоне-><br>
            жмите по несколько раз на надписи, которые нажимаются, например на Huawei/honor нужно жать на номер сборки несколько раз<br>
            далее у вас появится надпись, что вы стали разработчиком. После этого зайдите в специальные возможности/система и обновления->для разработчика-><br>
            здесь пролистайте ниже и найдите пункты "Анимация окон", "Анимация переходов","Скорость анимации" и измените у них знаечния<br>
            с 1 до 0.5 или можете вообще оставить без анимации</li>
        </ol>';
    } else {
        $mail->addAddress('daniloffivan0@gmail.com');
        $mail->Subject = 'Пользователь оставил заявку!';
        $body = '<h1>Пользователь оставил заявку!</h1>';
    }          

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['tel']))){
        $body.='<p><strong>Номер телефона:</strong> '.$_POST['tel'].'</p>';
    }
    if(trim(!empty($_POST['date']))){
        $body.='<p><strong>Дата:</strong> '.$_POST['date'].'</p>';
    }
    if(trim(!empty($_POST['time']))){
        $body.='<p><strong>Время:</strong> '.$_POST['time'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Номер телефона:</strong> '.$_POST['phone'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>