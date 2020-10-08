'use strict';
goog.provide('Blockly.Msg.fr');
goog.require('Blockly.Msg');
// commun à tous les blocs
Blockly.Msg.HELPURL="http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi"; //ne pas traduire
Blockly.Msg.pin="sur la broche";
Blockly.Msg._AT="à";
Blockly.Msg.AV="avant";
Blockly.Msg.AR="arrière";
Blockly.Msg.high="HIGH"; //ne pas traduire
Blockly.Msg.low="LOW"; //ne pas traduire
Blockly.Msg.right="droit";
Blockly.Msg.left="gauche";
Blockly.Msg.direction="direction";
Blockly.Msg.vitesse="vitesse [0-90]";
//categories (menu)
Blockly.Msg.CAT_numerique=" - Binary";
Blockly.Msg.CAT_STOCKAGE=" - Storage";
Blockly.Msg.CAT_analogique=" - Other";
Blockly.Msg.CAT_wifi=" - Wifi";
Blockly.Msg.CAT_TAB="Board";
Blockly.Msg.CAT_servo=" - Servo";
Blockly.Msg.CAT_del=" - LED";
Blockly.Msg.CAT_LOOPS="Loop";
Blockly.Msg.CAT_LOGIC="Logic";
Blockly.Msg.CAT_MATH="Math";
Blockly.Msg.CAT_TEXT="Text";
Blockly.Msg.CAT_VARIABLES="Variable";
Blockly.Msg.CAT_FUNCTIONS="Function";
Blockly.Msg.CAT_ARDUINO="Arduino";
Blockly.Msg.CAT_ARDUINO_IN=" - Entry / Exit";
Blockly.Msg.CAT_ARDUINO_OUT=" - Output";
Blockly.Msg.CAT_ARDUINO_TIME=" - Temps";
Blockly.Msg.CAT_actionneur="Actuator";
Blockly.Msg.CAT_com="Communication";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL=" - Series";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL=" - Software";
Blockly.Msg.CAT_ARDUINO_moteur=" - Motor";
Blockly.Msg.CAT_ultrason="Sensor";
Blockly.Msg.CAT_bluetooth=" - Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8=" - Matrix";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD=" - LCD screen";
Blockly.Msg.CAT_DFPLAYER=" - Audio";
//wifi
Blockly.Msg.TOOLTIP_esp8266="initialisation du module wifi avec le nom du réseau et la clé";
Blockly.Msg.esp8266_1="Esp 8266";
Blockly.Msg.esp8266_2="ssid";
Blockly.Msg.esp8266_3="clé";
Blockly.Msg.esp8266_4="mode";
Blockly.Msg.esp8266_5=[["client", "c"],["serveur", "s"]];
Blockly.Msg.esp8266_tooltip="reception";
Blockly.Msg.esp8266_url="http://julien.coron.free.fr/?p=928";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN='Interruption : quand un';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN="désactiver l'interruption sur la broche";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT="Spécifie une action à réaliser lorsqu'une interruption externe (4 modes possibles) survient sur la broche 2 ou 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT="Désactive l'interruption externe spécifiée précédement";
Blockly.Msg.LKL_MODE='est détecté sur la broche';
//FIELDDROPDOWN
Blockly.Msg.menublink=[["slowly", "1000"],["quickly", "100"]];
Blockly.Msg.AV_AR=[[Blockly.Msg.AV, "FORWARD"],[Blockly.Msg.AR, "BACKWARD"]];//ne pas traduire
Blockly.Msg.time=[["secondes", "s"],["millisecondes", "m"],["microsecondes", "u"]];
Blockly.Msg.char_lcd=[["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"]];
Blockly.Msg.rxtx=[["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"]];
Blockly.Msg.FIELDDROPDOWN=[["1(état haut)", Blockly.Msg.high], ["0(état bas)",Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1=[["HAUT", Blockly.Msg.high], ["BAS",Blockly.Msg.low]];
Blockly.Msg.ligne=[["1", "0"], ["2", "1"]];
Blockly.Msg.colonne=[["1","0"],["2","1"],["3","2"],["4","3"],["5","4"],["6","5"],["7","6"],["8","7"],["9","8"],["10","9"],["11","10"],["12","11"],["13","12"],["14","13"],["15", "14"],["16", "15"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF=[["turn on", Blockly.Msg.high], ["turn off",Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice=[["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar=[[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR,Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN=[['front montant', "RISING"], ['front descendant', "FALLING"], ["changement d'état", "CHANGE"], ["état bas",Blockly.Msg.low]];
Blockly.Msg.menudht=[["humidité", "h"],["température", "t"]];
Blockly.Msg.couleur=[["bleu", "bleu"],["jaune", "jaune"],["rouge", "rouge"],["vert", "vert"]];
Blockly.Msg.sens=[["avancer", "a"],["tourner à droite", "d"],["tourner à gauche", "g"]];
//capteur
Blockly.Msg.bp="bouton pressé sur la broche";
Blockly.Msg.bp_tooltip="retourne vrai (faux) si un bouton poussoir est (n'est pas) pressé";
Blockly.Msg.dht_tooltip="DHT11 :\nretourne l'humidité de l'air (de 20 à 80%) ou \n la température (de 2 à 50°C)";
Blockly.Msg.suiveur_ligne="ligne noire détectée sur la broche";
Blockly.Msg.suiveur_ligne_tooltip= "CAP227 :\nretourne vrai (faux) si une ligne noire est (n'est pas) détectée";
Blockly.Msg.light= "luminosité sur la broche";
Blockly.Msg.light_tooltip= "retourne une valeur en fonction de la luminosité\n0 : obscurité\n255 : pleine lumière";
Blockly.Msg.hum= "humidité du sol sur la broche";
Blockly.Msg.hum_tooltip= "CAP 615 :\nretourne l'humidité du sol de 0 à 100%";
Blockly.Msg.light_tooltip= "retourne une valeur en fonction de la luminosité\n0 : obscurité\n255 : pleine lumière";
Blockly.Msg.grove_ldr= "luminosité sur la broche";
Blockly.Msg.grove_ldr_tooltip= "retourne la luminosité mesurée\n0 : aucune lumière\n100 : lumière très intense";
Blockly.Msg.potar= "position du curseur sur la broche";
Blockly.Msg.potar_tooltip= "retourne une valeur en fonction de la position du curseur\n0 : curseur à gauche\n255 : curseur à droite";
Blockly.Msg.lm35= "température sur la broche";
Blockly.Msg.lm35_tooltip="LM35 :\nretourne la température mesurée en degré celcius (de 0 à 80°)";
Blockly.Msg.ultrason_1="distance < limite";
Blockly.Msg.ultrason_2="retourne un état Haut si la distance mesurée est inférieur à la limite";
Blockly.Msg.ultrason_distance1="distance mesurée";
Blockly.Msg.ultrason_tooltip="HC-SR04 :\ncapteur à ultrason qui permet de faire des mesures de distance (de 3 cm et 4 m)\nindiquer les broches de l'arduino sur lesquelles vont être connectées TRIG et ECHO";
Blockly.Msg.ultrason="détecteur à ultrason";
Blockly.Msg.ultrason_distance2="HC-SR04 :\nretourne la distance mesurée en cm par le détecteur à ultrason";
Blockly.Msg.ultrason_helpurl="https://www.carnetdumaker.net/articles/mesurer-une-distance-avec-un-capteur-ultrason-hc-sr04-et-une-carte-arduino-genuino/";//ne pas traduire
Blockly.Msg.pir="mouvement détecté ";
Blockly.Msg.feu="flamme détectée ";
Blockly.Msg.presence="obstacle détecté ";
Blockly.Msg.appui="appui digital ";
Blockly.Msg.pir_tooltip="HC-SR501 :\nretourne vrai (faux) si une présence est (n'est pas) détectée";
Blockly.Msg.feu_tooltip="CAP168 :\nretourne vrai (faux) si une flamme est (n'est pas) détectée";
Blockly.Msg.presence_tooltip="CAP711:\nretourne vrai (faux) si un contact a (n'a pas) lieu";
Blockly.Msg.appui_tooltip="CAP831:\nretourne vrai (faux) si un appui est (n'est pas) détecté";
//bluetooth
Blockly.Msg.bluetooth1="si la donnée reçue";
Blockly.Msg.bluetooth1_tooltip= "réception de données par bluetooth\nconnecter le module HC-06 sur les broches 0 et 1\net croiser les broches Rx et Tx";
Blockly.Msg.bluetooth2= "envoyer";
Blockly.Msg.bluetooth2_tooltip= "envoie des données par bluetooth\nconnecter le module HC-06 sur les broches 0 et 1\net croiser les broches Rx et Tx";
Blockly.Msg.bluetooth_helpurl="http://tiptopboards.free.fr/arduino_forum/viewtopic.php?f=2&t=57&sid=cedb66db91596dd8926d167142dbf307";//ne pas traduire
//écran LCD
Blockly.Msg.lcd_fond="fond";
Blockly.Msg.LCD="écran LCD";
Blockly.Msg.LCDi2c_tooltip="initialise l'écran LCD I2C, de 2 lignes et 16 caractères avec rétro-éclairage RGB.\nAfficheur <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.LCD_tooltip= "initialise l'écran LCD, de 2 lignes et 16 caractères, en indiquant les broches à connecter";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL= "http://electroniqueamateur.blogspot.fr/2017/01/utiliser-un-afficheur-lcd-2-x-16-avec.html";//ne pas traduire
Blockly.Msg.LCD_SHIELD_PRINT_TEXT="afficher sur l'écran LCD";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip="affiche le texte à l'emplacement indiqué";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP="écris le(s) texte(s) sur l'écran LCD";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1="ligne 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2="ligne 2";
Blockly.Msg.LCD_line="ligne";
Blockly.Msg.LCD_col="colonne";
Blockly.Msg.LCD_raz="effacer l'écran LCD";
Blockly.Msg.LCD_raz_tooltip="efface l'écran";
Blockly.Msg.lcd_aff_symbole="afficher le caractère";
Blockly.Msg.lcd_aff_symbole_tooltip="affiche le caractère qui a été défini auparavant";
Blockly.Msg.lcd_symbole="définir le caractère";
Blockly.Msg.lcd_symbole_tooltip="définition d'un caractère pour l'afficheur LCD :\n 0 éteint une pixel\n 1 allume une pixel";
//arduino
Blockly.Msg.loop="loop";
Blockly.Msg.init="initialization";
Blockly.Msg.base_setup_loop="La fonction initialization :\nElle est utilisée pour initialiser les variables, le sens des broches...\nElle n'est exécutée qu'une seule fois\nLa fonction boucle :\nC'est la partie principale du programme, tous les blocs placés ici s'éxécuteront en boucle et indéfiniment (plusieurs milliers de fois par seconde)";
Blockly.Msg.loop_tooltip="tous les blocs placés ici s'éxécuteront en boucle et indéfiniment (plusieurs milliers de fois par seconde)";
Blockly.Msg.begin_tooltip="ce bloc permet de définir l'ordre dans lequel le programme doit s'exécuter";
Blockly.Msg.begin="START NesBot";
Blockly.Msg.def="declarations";
Blockly.Msg.def_tooltip="tous les blocs placés ici ne s'éxécuteront qu'une seule fois, c'est ici qu'on configure les différents capteurs ou actionneurs";
Blockly.Msg.END="END of program";
Blockly.Msg.END_tooltip="Stoppe le programme, les blocs placés à la suite seront ignorés";
Blockly.Msg.code_tooltip="Tapez ici une instruction qui ne se trouve pas sous forme de blocs";
//matrice
Blockly.Msg.matriceLC="mettre la DEL, ligne";
Blockly.Msg.matrice_create_aff="Créer le bloc 'afficher le symbole %1'";
Blockly.Msg.matrice_create_symbole="Créer le bloc 'définir le symbole %1'";
Blockly.Msg.matrice8x8="matrice 8x8";
Blockly.Msg.matrice8x8_tooltip="Initialization de la matrice à 64 DEL, il faut indiquer les broches de l'arduino sur lesquelles vont être connectées DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole="définir le symbole";
Blockly.Msg.matrice8x8_symbole_tooltip="définition d'un symbole pour la matrice :\n 0 éteint une DEL\n 1 allume une DEL";
Blockly.Msg.matrice8x8_efface="éteindre les DEL de la matrice";
Blockly.Msg.matrice8x8_aff="afficher le symbole";
Blockly.Msg.matrice8x8_binaire_tooltip="1 allume une DEL de la matrice et 0 l'éteint";
Blockly.Msg.matrice8x8_del_tooltip= "Allume (éteint) une DEL de la matrice en indiquant les coordonnées de celle-ci\nAttention la numérotation commence à 0";
Blockly.Msg.matrice8x8_aff_tooltip= "Affiche le symbole qui aura été préalablement défini";
Blockly.Msg.matrice8x8_efface_tooltip= "Eteint toutes les DEL de la matrice";
Blockly.Msg.matrice8x8_helpurl="http://tiptopboards.free.fr/arduino_forum/viewtopic.php?t=6&p=6";//ne pas traduire
//temps
Blockly.Msg.ARDUINO_INOUT_Pulsein="retourne la durée en microsecondes d'une impulsion de niveau HAUT ou BAS appliquée sur une broche. Si le paramètre valeur est HAUT (BAS), le bloc attend que la broche passe à HAUT (BAS), commence alors le chronométrage, attend que la broche repasse au niveau BAS (HAUT) et stoppe alors le chronométrage";
Blockly.Msg.ARDUINO_BASE_DELAY="wait";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP="Specify the wait time in seconds, milliseconds, or microseconds.\nThe program does nothing else during this time";
Blockly.Msg.millis1="durée en";
Blockly.Msg.millis2="depuis le début";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP="retourne la durée en millisecondes, secondes ou microsecondes depuis que le programme a commencé";
Blockly.Msg.ARDUINO_PULSEIN="durée de l'état";
Blockly.Msg.tempo_helpurl="http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ExempleBlinkWithoutDelay";
Blockly.Msg.tempo_tooltip="Ce bloc vérifie si le temps indiqué est arrivé, si c'est le cas alors il éxécute les blocs placés à l'intérieur. Contrairement au bloc 'attendre' celui-ci n'est pas bloquant.";
Blockly.Msg.tempo1="quand";
Blockly.Msg.tempo2="se sont écoulés";
//LED
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT="the LCD";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP="turn off or on the LED on the Arduino board";
Blockly.Msg.blink="flash the LED";
Blockly.Msg.blink_tooltip= "the LED flashes 1 or 10 times per second";
Blockly.Msg.del="the LED connected to the pin";
Blockly.Msg.del_tooltip="turns on (off) the LED connected to the indicated pin";
Blockly.Msg.bargraphe="bargraphe";
Blockly.Msg.bargraphe_allume="allumer les DEL du bargraphe jusqu'à";
Blockly.Msg.bargraphe_allume_tooltip= "0 n'allume aucune DEL\n2,5 allume les 2 premières DEL et la 3ème à moitié\n10 allume toutes les DEL";
Blockly.Msg.bargraphe_tooltip= "module bargraphe composé de 10 DEL (8 vertes, 1 jaune et 1 rouge), il faut indiquer les broches de l'arduino sur lesquelles vont être connectées DCKI et DI";
//sortie
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1="mettre la broche NUMERIQUE";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP="écrire un état logique 0 ou 1 sur une sortie spécifique";
Blockly.Msg.toggle="basculer l'état de la broche";
Blockly.Msg.toggle_tooltip="Toggle :\nécrire un état logique 0 si auparavant il y avait un état 1 (et inversement) sur la sortie spécifiée";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1="mettre la broche PWM";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP="envoyer une valeur comprise entre 0 et 255 sur une sortie spécifique";
//entrée
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT="état de la broche NUMERIQUE";
Blockly.Msg.in_pullup ="Pull-Up";
Blockly.Msg.in_pullup_tooltip="retourne l'état logique (0 ou 1) de la broche indiquée\nretourne 1(état haut) par défaut si pull-up activé";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP="lecture de l'état logique 0 ou 1 de la broche numérique";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT="valeur de la broche ANALOGIQUE";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP="retourne une valeur comprise entre 0 et 1023";
//audio
Blockly.Msg.beep="émettre un bip sur la broche";
Blockly.Msg.beep_TOOLTIP="émet un bip (à 440Hz pendant 1s) sur la broche selectionnée";
Blockly.Msg.ARDUINO_TONE_INPUT1="émettre un son sur la broche";
Blockly.Msg.ARDUINO_TONE_INPUT2="fréquence (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3="durée (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP="émettre un son sur la broche selectionnée, à la fréquence désirée et pendant la durée souhaitée";
Blockly.Msg.ARDUINO_NOTONE_INPUT="stopper le son sur la broche";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP="arrêter le son sur la broche selectionnée";
Blockly.Msg.lp2i_mp3_helpurl="http://ouilogique.com/tests_DFPlayer/";//ne pas traduire
Blockly.Msg.lp2i_mp3_Volume="volume [0-30]";
Blockly.Msg.lp2i_mp3="lecteur MP3";
Blockly.Msg.lp2i_mp3_tooltip="DFPlayer Mini mp3 :\ninitialisation du module en mode lecture et du volume à la valeur indiquée\nModule MP3 <--> Arduino\nRx(2) <---------------> Tx(1)";
Blockly.Msg.lp2i_mp3_play="lire le fichier mp3";
Blockly.Msg.lp2i_mp3_play_tooltip="joue le morceau en cours";
Blockly.Msg.lp2i_mp3_pause="mettre le fichier mp3 en pause";
Blockly.Msg.lp2i_mp3_pause_tooltip="stoppe le morceau en cours" ;
Blockly.Msg.lp2i_mp3_prev="lire le fichier mp3 précédent";
Blockly.Msg.lp2i_mp3_prev_tooltip="joue le morceau précédent";
Blockly.Msg.lp2i_mp3_vol="mettre le volume à";
Blockly.Msg.lp2i_mp3_vol_tooltip="mettre le volume à la valeur indiquée";
Blockly.Msg.lp2i_mp3_next="lire le fichier mp3 suivant";
Blockly.Msg.lp2i_mp3_next_tooltip="joue le morceau suivant";
//servomoteur
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1="orienter le servomoteur";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE="angle [0-180]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP="rotation possible entre 0 et 180 degrés";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT="actionner le servomoteur en continue";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP="actionne le servomoteur connecté à la broche spécifiée, à la vitesse indiquée et dans le sens sélectionné";
//moteur
Blockly.Msg.mot_tooltip="Shield contrôleur de moteurs L293D :\nactionne les deux moteurs (M1 et M2) pour avancer ou tourner, la vitesse peut être réglée entre 0 et 90";
Blockly.Msg.mot_stop="arrêter";
Blockly.Msg.mot_stop_tooltip="Shield contrôleur de moteurs L293D :\nstoppe les deux moteurs (M1 et M2)";
Blockly.Msg.moteur="actionner le moteur ";
Blockly.Msg.moteurstop="arrêter le moteur ";
Blockly.Msg.moteur_tooltip="met en route le moteur à courant continu connecté à la broche indiquée, à la vitesse indiquée\nvitesse=0 --> arrêt du moteur";
Blockly.Msg.moteurdagu_tooltiprs040= "Carte RS 040 :\nactionne une des 2 sorties pour piloter des moteurs à courant continu, la vitesse peut être réglée entre 0 et 90";
Blockly.Msg.moteurdagu_tooltiprs040stop= "Carte RS 040 :\nstoppe un des 2 moteurs";
Blockly.Msg.moteurdagu_tooltiprs027= "Carte RS 027 :\nactionne une des 2 sorties pour piloter des moteurs à courant continu, la vitesse peut être réglée entre 0 et 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1="v1 - Moteur CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2="v2 - Moteur CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION="direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE="vitesse [0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT="avant";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE="arrière";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP="stop";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1="v1 - moteur Pas-à-pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2="v2 - moteur Pas-à-pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT="broche";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT="pas par tour";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM="vitesse (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS="nombre de pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1="moteur DC 1";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2="moteur DC 2";
Blockly.Msg.m_pap_tooltip="Initialisation d'un moteur pas à pas.\nIndiquer le nombre de pas, la vitesse en tr/min et les broches à connecter";
Blockly.Msg.m_pap_step_tooltip="actionne le moteur pas à pas du nombre de pas indiqué, l'instruction suivante ne sera éxécutée qu'une fois la rotation du moteur effectuée";
//com série
Blockly.Msg.Serial_Init="port série sur";
Blockly.Msg.Serial_Init_tooltip="Fixe le débit de communication en nombre de caractères par seconde pour la communication série";
Blockly.Msg.Serial_Write="envoyer sur le port série";
Blockly.Msg.Serial_write_tooltip="Envoie des données sur le port série";
Blockly.Msg.Serial_read="donnée lue sur le port série";
Blockly.Msg.Serial_read_tooltip="retourne le premier octet de donnée entrant disponible dans le port série, ou -1 si aucune donnée n'est disponible";
Blockly.Msg.Serial_available="quantité de données sur le port série";
Blockly.Msg.Serial_available_tooltip="retourne le nombre d'octet disponible dans la file d'attente du port série, ou 0 si rien n'est disponible";
Blockly.Msg.Serial_saut="un saut de ligne";
Blockly.Msg.Serial_saut_tooltip="retourne un saut de ligne sur le moniteur série";
//com logicielle
Blockly.Msg.SSERIAL_Init="port logiciel sur Rx";
Blockly.Msg.SSERIAL_tooltip="Création d'un nouveau port de communication en utilisant les broches et la vitesse spécifiées";
Blockly.Msg.SSERIAL_Read="donnée lue sur le port logiciel";
Blockly.Msg.SSERIAL_Read_tooltip="retourne le premier octet de donnée entrant disponible dans le port logiciel, ou -1 si aucune donnée n'est disponible";
Blockly.Msg.SSERIAL_Write="envoyer sur le port logiciel";
Blockly.Msg.SSERIAL_Write_tooltip="Envoie des données sur le port logiciel";
Blockly.Msg.SSERIAL_Read_tooltip="retourne le premier octet de donnée entrant disponible dans le port logiciel, ou -1 si aucune donnée n'est disponible";
Blockly.Msg.SSERIAL_Available="quantité de données sur le port logiciel";
Blockly.Msg.SSERIAL_Available_tooltip="retourne le nombre d'octet disponible dans la file d'attente du port logiciel, ou 0 si rien n'est disponible";
//platine
Blockly.Msg.note=[["do", "c"],["ré", "d"],["mi", "e"],["fa", "f"],["sol", "g"],["la", "a"],["si", "b"]];
Blockly.Msg.type_note=[["ronde", "r"],["blanche", "b"],["noire", "n"],["croche", "c"]];
