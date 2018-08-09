-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2018 at 02:25 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jaap`
--

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `idcliente` int(10) UNSIGNED NOT NULL,
  `cedula` varchar(13) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombres` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `telefono` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `referencia` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `observacion` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` (`idcliente`, `cedula`, `nombres`, `direccion`, `email`, `telefono`, `referencia`, `observacion`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, '0400208955', 'Segundo Salvador Tates Cuaspud', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, '1000696532', 'Luis Gualberto Armas Guarderas', 'San Jose de Chorlavi', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 15:20:43'),
(3, '0400425484', 'Guillermo Tulio Guachagmira Benalcazar', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, '1000665297', 'Luis Alfredo Anrango', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '1002336053', 'Luis Anibal Morillo Nieto', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, '1000956854', 'Julio Cesar Leon Cruz', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, '1002310405', 'Luis Roberto Leon Farinango', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, '1002450219', 'Oscar Ramiro Yamberla Leon', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, '0986864517', 'Jorge Alvarez Martinez ', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, '1001795846', 'Maria del Carmen Leon Cevallos', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, '1002086674', 'Cruz Esperanza Leon Cevallos', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, '1001862257', 'Rocio Consuelo Benavides Morillo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, '1001487865', 'Pedro German Cevallos', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, '1001681111', 'Nely Elvira Benavides Morillo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, '1003079348', 'Nelly Cordova', 'San José de Chorlaví', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 16:34:14'),
(16, '1002187464', 'Narciza de Jesus Sevillano Potosi', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, '1001047016', 'Gerardo Jaque Gusqui', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, '1001141256', 'Ruby Azucena Lopez Torres', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, '1000284859', 'David Elizar Armas Guarderas', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, '1000060374', 'Luis Alberto Villarreal Erazo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, '1003621958', 'Victor Manuel Obando Ruiz', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, '1002970208', 'Mariana Ibadango', 'San José de Chorlaví', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 16:38:48'),
(23, '1001484417', 'Rosa Matilde Moreno', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, '100001881', 'Segundo Manuel Mora Leon', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, '1000044006', 'Juan Elias Guaman Cacuango', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, '1002181509', 'Blanca Elena Mora Farinango', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, '1705847638', 'Blanca Aida Galeano Almache', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, '1001655149', 'Jose Orlando Galeano Almache', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, '0400646063', 'Hugo Ruben Galeano Almachi', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, '1000375467', 'Segundo Rafael Guaman Jacome', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, '1000187979', 'German Andrade', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, '1002400289', 'Guadalupe Guerra', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, '1000487759', 'Luz Clara Castillo Guerra', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, '1000357705', 'Miguel Angel Campues Tocagon', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, '1050149432', 'Aura Eliza Molina Benalcazar', 'San José de Chorlaví', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 16:48:55'),
(36, '1001220746', 'Melchor Inlago Imbaquingo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, '1001866399', 'Victor Gonzalo Aguirre Mantilla', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, '1002686234', 'Klever Samuel Farinando Hernandez', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, '0400924254', 'Flavio Irúa', 'San Jose de Chorlavi', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 16:00:10'),
(40, '1000328276', 'Ernulfo Gerardo Lara Reyes', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, '1000988715', 'Bayardo Ruben Benavides Carrillo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, '1001207081', 'Segundo Ruben Suarez Casanova', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, '1001510229', 'Fabian Raul Lara Casanova', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, '1001356359', 'Maria Magdalena Suarez Casanova', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, '1001977790', 'Miguel Ramiro Juma Potosi', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, '1000814655', 'María Leticia Vilañez Anrrango', 'San José de Chorlaví', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 16:57:27'),
(47, '1001629151', 'Raul  Silvio Potosi Ramirez', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, '1002548509', 'Jose Rufino Guaman Guerra', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, '1002651501', 'Segundo Miguel Chacon Vargas', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, '1002736815', 'Lilian Gimena Coral Molina', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, '1002797742', 'Guido Otavalo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, '1002049615', 'Aura Ligia Sevillano Potosi', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, '1003933841', 'Monica Patricia Viveros Padilla', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, '1003012166', 'Adriana Maria Hernandez Potosi', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, '1001351798', 'Aida Maria Robles Martinez', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, '1001837424', 'Judit Eulalia Armas Guarderas', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, '1000810513', 'Lourdes Hidalgo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, '1000857449', 'Maria Raquel Almache Moreno', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, '1001052743', 'Blanca Celia Potosi Ramirez', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, '1003582531', 'Silvana Guadalupe Mora Moreno', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(61, '1000044097', 'Luis Enrique Leon Endara', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(62, '1001896388', 'Carmen Laura Lara Casanova', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(63, '1001603602', 'Victor Elias Cortez Jaitia', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(64, '1000289569', 'Ines Margarita Andrade Bastidas', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(65, '1000938181', 'Luis Tarquino Galeano Almachi', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(66, '1001727161', 'Maria Esther Guaman Leon', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(67, '1000772499', 'Segundo Jose Anrrango Sandoval', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(68, '1002013884', 'Gloria Azucena Guaman Guerra', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(69, '1002041901', 'Wilson Eduardo Hernandez Potosi', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(70, '1001115516', 'Luis Eduardo Suarez Casanova', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(71, '1001687175', 'Estalislao Hurtado Armas', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(72, '1000787026', 'Blanca Gullermina Chacon Vargas', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(73, '1000061331', 'Ines Maria Casanova Acero', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(74, '1002168886', 'Nelly Milena Andrade Moncayo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(75, '1003038872', 'Hilda Jeaneth Herrera Castillo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(76, '1000782456', 'Carmen Marimenda Rosero Andrade', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(77, '0400469748', 'Olga Georgina Morillo Enriquez', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(78, '1091731521001', 'Conjunto Habitacional Cascadas de Chorlavi', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(79, '1002479440', 'Maria Yolanda Andrango Leon', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(80, '1001429800', 'Luis Ramiro Benavides Morillo', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(81, '1002605721', 'Francisco Javier Campues Casanova', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(82, '1001224979', 'Carmen Margarita Cevallos Estevez', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(83, '1001991882', 'Rosa Ermelinda Lara Casanova', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(84, '0916580004', 'Alfredo Hernadez', 'San José de Chorlaví', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 17:38:05'),
(85, '1003401385', 'Jorge Emilio Alvarez Robles', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(86, '1002590402', 'Jesus Antonio Guaman Mora', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(87, '1003230131', 'Campo Raul Juma Salazar', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(88, '1002823456', 'María José Vallejos', 'San José de Chorlaví', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 16:19:57'),
(89, '1001976735', 'Amparo Mercedes Casanova', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(90, '1002253100', 'Lorena Elizabeth Villarreal Alvarez', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(91, '1002810909', 'Mirian Alexandra Tates Alvear', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(92, ' 1002873303', 'Ana Maria Tates Tates Alvear', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(93, ' 1003586656', 'Ana Cristina Armas Reinoso', 'San Jose de Chorlavi', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(94, '0100978097', 'Manuel Klever Torres Rodas', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(95, '1091717642001', 'Pilonera del Norte', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(96, '1000050524', 'Felix Plutarco Espin Tapia', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(97, '1001596202', 'Fernando Patricio Perez Reina ', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(98, '0401218151', 'Doris Lucia Arias Guaman', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(99, '1002522934', 'Piedad Benavides ', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(100, '1002136891', 'Janeth Benavides', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(101, '1001914470', 'Pineda Insuati Julio Amilcar', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(102, '1001225026', 'Edgar Boanerger Flores Garzon ', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(103, '1705180642', 'Alicia Noemi Lopez Contreras', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(104, '1001785094', 'Galo Eduardo Hidalgo Vallejos', 'San Agustin', '', '', '', '', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(105, '1001755071', 'Ximena Teresa Bolaños Fuentes', 'San Agustin', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 15:27:44'),
(106, '1002109773', 'Rosero Rosales Sara Adriana', 'San Agustin', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2018-08-04 15:08:02'),
(108, '1002886362', 'Bolivar Alvarez', 'San José de Chorlaví', NULL, '0969731954', NULL, NULL, NULL, '2018-08-04 17:45:56', '2018-08-04 17:45:56'),
(109, '1002415949', 'Ignacio Bayardo Benavides Cevallos', 'San José de Chorlaví', NULL, NULL, NULL, NULL, NULL, '2018-08-04 17:51:31', '2018-08-04 17:51:31'),
(110, '1003833447', 'Washington Figueroa', 'San José de Chorlaví', 'w.figo.1991@gmail.com', '0969191290', NULL, 'San Antonio', NULL, '2018-08-05 02:38:10', '2018-08-05 02:38:10'),
(111, '1002082806', 'rosa cuaspud', 'San José de Chorlaví', NULL, NULL, NULL, NULL, NULL, '2018-08-05 03:26:01', '2018-08-05 03:26:01'),
(112, '100200', 'JUAN MAGAN', 'San José de Chorlaví', 'rosa@gmail.com', '0969191290', NULL, 'CALLE xyz', NULL, '2018-08-07 02:48:25', '2018-08-07 02:50:54'),
(113, '1002003000', 'Fausto Salazar', 'San José de Chorlaví', 'fausto@gmail.com', '0969191290', NULL, NULL, NULL, '2018-08-07 20:56:37', '2018-08-08 02:45:49');

-- --------------------------------------------------------

--
-- Table structure for table `factura_ventas`
--

CREATE TABLE `factura_ventas` (
  `idfacturaventa` int(10) UNSIGNED NOT NULL,
  `idservicio` int(10) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `valor` double(8,2) NOT NULL,
  `responsable` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `impreso` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mes` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `factura_ventas`
--

INSERT INTO `factura_ventas` (`idfacturaventa`, `idservicio`, `fecha`, `valor`, `responsable`, `estado`, `impreso`, `mes`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 98, '2018-08-04', 2.00, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-05 03:12:18', '2018-08-05 03:12:18'),
(2, 98, '2018-08-04', 2.00, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-05 03:17:10', '2018-08-05 03:17:10'),
(3, 98, '2018-08-04', 2.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-05 03:20:13', '2018-08-05 03:20:13'),
(4, 98, '2018-08-04', 2.00, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-05 04:05:28', '2018-08-05 04:05:28'),
(5, 98, '2018-08-04', 2.00, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-05 04:42:14', '2018-08-05 04:42:14'),
(6, 99, '2018-08-07', 7.00, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-07 16:57:44', '2018-08-07 16:57:44'),
(7, 54, '2018-08-07', 2.20, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-07 18:58:37', '2018-08-07 18:58:37'),
(8, 55, '2018-08-07', 4.20, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-07 18:58:57', '2018-08-07 18:58:57'),
(9, 85, '2018-08-07', 2.00, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-07 18:59:13', '2018-08-07 18:59:13'),
(10, 90, '2018-08-07', 2.20, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-07 18:59:28', '2018-08-07 18:59:28'),
(11, 35, '2018-08-07', 2.00, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-07 19:00:11', '2018-08-07 19:00:11'),
(12, 99, '2018-08-07', 3.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-07 20:45:48', '2018-08-07 20:45:48'),
(13, 100, '2018-08-07', 12.00, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-07 21:00:28', '2018-08-07 21:00:28'),
(14, 99, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 00:34:04', '2018-08-08 00:34:04'),
(15, 98, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 01:10:34', '2018-08-08 01:10:34'),
(16, 98, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 01:15:38', '2018-08-08 01:15:38'),
(17, 98, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 01:28:41', '2018-08-08 01:28:41'),
(18, 98, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 01:37:52', '2018-08-08 01:37:52'),
(19, 99, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:15:52', '2018-08-08 02:15:52'),
(20, 99, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:18:02', '2018-08-08 02:18:02'),
(21, 99, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:21:37', '2018-08-08 02:21:37'),
(22, 99, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:24:32', '2018-08-08 02:24:32'),
(23, 100, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:26:55', '2018-08-08 02:26:55'),
(24, 100, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:35:09', '2018-08-08 02:35:09'),
(25, 100, '2018-08-07', 16.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:37:39', '2018-08-08 02:37:39'),
(26, 100, '2018-08-07', 3.30, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:46:17', '2018-08-08 02:46:17'),
(27, 100, '2018-08-07', 2.70, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:51:21', '2018-08-08 02:51:21'),
(28, 100, '2018-08-07', 3.80, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:53:35', '2018-08-08 02:53:35'),
(29, 100, '2018-08-07', 3.20, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:55:12', '2018-08-08 02:55:12'),
(30, 100, '2018-08-07', 3.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 02:57:24', '2018-08-08 02:57:24'),
(31, 100, '2018-08-07', 6.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 03:20:14', '2018-08-08 03:20:14'),
(32, 98, '2018-08-07', 10.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 03:36:51', '2018-08-08 03:36:51'),
(33, 98, '2018-08-07', 10.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 03:39:04', '2018-08-08 03:39:04'),
(34, 100, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 03:40:23', '2018-08-08 03:40:23'),
(35, 98, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 03:48:43', '2018-08-08 03:48:43'),
(36, 98, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 03:51:39', '2018-08-08 03:51:39'),
(37, 100, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 03:56:21', '2018-08-08 03:56:21'),
(38, 98, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 03:59:41', '2018-08-08 03:59:41'),
(39, 98, '2018-08-07', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 04:04:56', '2018-08-08 04:04:56'),
(40, 54, '2018-08-07', 2.00, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 04:06:15', '2018-08-08 04:06:15'),
(41, 100, '2018-08-08', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 14:43:19', '2018-08-08 14:43:19'),
(42, 98, '2018-08-08', 5.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 14:46:20', '2018-08-08 14:46:20'),
(43, 98, '2018-08-08', 10.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 14:47:37', '2018-08-08 14:47:37'),
(44, 98, '2018-08-08', 10.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 15:07:52', '2018-08-08 15:07:52'),
(45, 98, '2018-08-08', 10.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 15:10:03', '2018-08-08 15:10:03'),
(46, 100, '2018-08-08', 25.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 15:13:00', '2018-08-08 15:13:00'),
(47, 98, '2018-08-08', 15.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-08 16:09:29', '2018-08-08 16:09:29'),
(48, 100, '2018-08-08', 20.50, 'Washington', 'Pagado', 'si', 'Agosto', NULL, '2018-08-09 00:03:45', '2018-08-09 00:03:45');

-- --------------------------------------------------------

--
-- Table structure for table `inventarios`
--

CREATE TABLE `inventarios` (
  `idinventario` int(10) UNSIGNED NOT NULL,
  `idmaterial` int(10) UNSIGNED NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `responsable` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `estado` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inventarios`
--

INSERT INTO `inventarios` (`idinventario`, `idmaterial`, `descripcion`, `cantidad`, `responsable`, `fecha`, `estado`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'ingreso bodega', 1, 'tesorera', '2018-08-05', 'Ingreso', NULL, '2018-08-04 17:59:45', '2018-08-04 17:59:45'),
(2, 2, 'Para mingas', 10, 'Geovanny Cevallos', '2018-08-07', 'Ingreso', NULL, '2018-08-07 18:11:38', '2018-08-07 18:11:38'),
(3, 3, 'Ingreso Bodega', 15, 'Geovanny Cevallos', '2018-08-07', 'Ingreso', NULL, '2018-08-07 18:12:14', '2018-08-07 18:12:14'),
(4, 4, 'Ingreso bodega', 19, 'Geovanny Cevallos', '2018-08-07', 'Ingreso', NULL, '2018-08-07 18:12:49', '2018-08-07 18:12:49'),
(5, 4, 'Ingreso bodega', 9, 'Geovanny Cevallos', '2018-08-07', 'Ingreso', NULL, '2018-08-07 18:13:26', '2018-08-07 18:13:26'),
(6, 4, 'Salida de Bodega a casa de don marcelo', 3, 'Mauricio Carvajal', '2018-08-07', 'Salida', NULL, '2018-08-07 18:14:30', '2018-08-07 18:14:30');

-- --------------------------------------------------------

--
-- Table structure for table `lecturas`
--

CREATE TABLE `lecturas` (
  `idlectura` int(10) UNSIGNED NOT NULL,
  `idservicio` int(10) UNSIGNED NOT NULL,
  `observacion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `fecha` date NOT NULL,
  `anterior` int(11) DEFAULT NULL,
  `actual` int(11) DEFAULT NULL,
  `consumo` int(11) DEFAULT NULL,
  `tarifa` double(8,2) NOT NULL,
  `excedente` double DEFAULT NULL,
  `estado` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lecturas`
--

INSERT INTO `lecturas` (`idlectura`, `idservicio`, `observacion`, `fecha`, `anterior`, `actual`, `consumo`, `tarifa`, `excedente`, `estado`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, '2018-08-04', 7778, 7838, 60, 6.50, 45, 'Deber', NULL, '2018-08-04 16:25:48', '2018-08-04 16:25:48'),
(2, 2, NULL, '2018-08-04', 2205, 2205, 0, 2.00, 0, 'Deber', NULL, '2018-08-04 16:26:52', '2018-08-04 16:26:52'),
(3, 3, NULL, '2018-08-04', 1704, 1732, 28, 3.30, 13, 'Deber', NULL, '2018-08-04 16:27:25', '2018-08-04 16:27:25'),
(4, 4, NULL, '2018-08-04', 3496, 3529, 33, 3.80, 18, 'Deber', NULL, '2018-08-04 16:28:05', '2018-08-04 16:28:05'),
(5, 5, NULL, '2018-08-04', 921, 945, 24, 2.90, 9, 'Deber', NULL, '2018-08-04 16:29:27', '2018-08-04 16:29:27'),
(6, 6, NULL, '2018-08-04', 2158, 2209, 51, 5.60, 36, 'Deber', NULL, '2018-08-04 16:29:52', '2018-08-04 16:29:52'),
(7, 7, NULL, '2018-08-04', 637, 694, 57, 6.20, 42, 'Deber', NULL, '2018-08-04 16:30:18', '2018-08-04 16:30:18'),
(8, 8, NULL, '2018-08-04', 2364, 2395, 31, 3.60, 16, 'Deber', NULL, '2018-08-04 16:30:40', '2018-08-04 16:30:40'),
(9, 9, NULL, '2018-08-04', 3870, 3915, 45, 5.00, 30, 'Deber', NULL, '2018-08-04 16:31:04', '2018-08-04 16:31:04'),
(10, 10, NULL, '2018-08-04', 2184, 2223, 39, 4.40, 24, 'Deber', NULL, '2018-08-04 16:31:31', '2018-08-04 16:31:31'),
(11, 11, NULL, '2018-08-04', 97, 108, 11, 2.00, 0, 'Deber', NULL, '2018-08-04 16:31:53', '2018-08-04 16:31:53'),
(12, 12, NULL, '2018-08-04', 2735, 2735, 0, 2.00, 0, 'Deber', NULL, '2018-08-04 16:32:15', '2018-08-04 16:32:15'),
(13, 13, NULL, '2018-08-04', 219, 241, 22, 2.70, 7, 'Deber', NULL, '2018-08-04 16:32:43', '2018-08-04 16:32:43'),
(14, 14, NULL, '2018-08-04', 3648, 3649, 1, 2.00, 0, 'Deber', NULL, '2018-08-04 16:33:11', '2018-08-04 16:33:11'),
(15, 15, NULL, '2018-08-04', 2248, 2283, 35, 4.00, 20, 'Deber', NULL, '2018-08-04 16:34:40', '2018-08-04 16:34:40'),
(16, 16, NULL, '2018-08-04', 320, 320, 0, 2.00, 0, 'Deber', NULL, '2018-08-04 16:35:01', '2018-08-04 16:35:01'),
(17, 17, NULL, '2018-08-04', 2109, 2120, 11, 2.00, 0, 'Deber', NULL, '2018-08-04 16:35:22', '2018-08-04 16:35:22'),
(18, 18, NULL, '2018-08-04', 4715, 4844, 129, 13.40, 114, 'Deber', NULL, '2018-08-04 16:35:45', '2018-08-04 16:35:45'),
(19, 19, NULL, '2018-08-04', 3067, 3111, 44, 4.90, 29, 'Deber', NULL, '2018-08-04 16:36:10', '2018-08-04 16:36:10'),
(20, 20, NULL, '2018-08-04', 861, 876, 15, 2.00, 0, 'Deber', NULL, '2018-08-04 16:36:33', '2018-08-04 16:36:33'),
(21, 21, NULL, '2018-08-04', 5997, 6019, 22, 2.70, 7, 'Deber', NULL, '2018-08-04 16:36:57', '2018-08-04 16:36:57'),
(22, 22, NULL, '2018-08-04', 2200, 2227, 27, 3.20, 12, 'Deber', NULL, '2018-08-04 16:39:20', '2018-08-04 16:39:20'),
(23, 23, NULL, '2018-08-01', 3765, 3779, 14, 2.00, 0, 'Deber', NULL, '2018-08-04 16:39:47', '2018-08-04 16:39:47'),
(24, 24, NULL, '2018-08-04', 7184, 7184, 0, 2.00, 0, 'Deber', NULL, '2018-08-04 16:40:17', '2018-08-04 16:40:17'),
(25, 25, NULL, '2018-08-04', 2528, 2550, 22, 2.70, 7, 'Deber', NULL, '2018-08-04 16:40:42', '2018-08-04 16:40:42'),
(26, 26, NULL, '2018-08-04', 620, 728, 108, 11.30, 93, 'Deber', NULL, '2018-08-04 16:41:07', '2018-08-04 16:41:07'),
(27, 27, NULL, '2018-08-04', 7219, 7246, 27, 3.20, 12, 'Deber', NULL, '2018-08-04 16:45:20', '2018-08-04 16:45:20'),
(28, 28, NULL, '2018-08-04', 8234, 8239, 5, 2.00, 0, 'Deber', NULL, '2018-08-04 16:45:43', '2018-08-04 16:45:43'),
(29, 29, NULL, '2018-08-04', 2712, 2772, 60, 6.50, 45, 'Deber', NULL, '2018-08-04 16:46:04', '2018-08-04 16:46:04'),
(30, 30, NULL, '2018-08-04', 5027, 5088, 61, 6.60, 46, 'Deber', NULL, '2018-08-04 16:46:22', '2018-08-04 16:46:22'),
(31, 31, NULL, '2018-08-04', 5578, 5607, 29, 3.40, 14, 'Deber', NULL, '2018-08-04 16:46:48', '2018-08-04 16:46:48'),
(32, 33, NULL, '2018-08-04', 9054, 9151, 97, 10.20, 82, 'Deber', NULL, '2018-08-04 16:47:19', '2018-08-04 16:47:19'),
(33, 34, NULL, '2018-08-04', 268, 296, 28, 3.30, 13, 'Deber', NULL, '2018-08-04 16:47:42', '2018-08-04 16:47:42'),
(34, 35, NULL, '2018-08-04', 283, 296, 13, 2.00, 0, 'Pagado', NULL, '2018-08-04 16:49:16', '2018-08-07 19:00:11'),
(35, 36, NULL, '2018-08-04', 556, 606, 50, 5.50, 35, 'Deber', NULL, '2018-08-04 16:49:34', '2018-08-04 16:49:34'),
(36, 37, NULL, '2018-08-04', 2998, 3139, 141, 14.60, 126, 'Deber', NULL, '2018-08-04 16:50:01', '2018-08-04 16:50:01'),
(37, 38, NULL, '2018-08-04', 2745, 2745, 0, 2.00, 0, 'Deber', NULL, '2018-08-04 16:50:26', '2018-08-04 16:50:26'),
(38, 39, NULL, '2018-08-04', 1168, 1168, 0, 2.00, 0, 'Deber', NULL, '2018-08-04 16:50:53', '2018-08-04 16:50:53'),
(39, 40, NULL, '2018-08-02', 6413, 6491, 78, 8.30, 63, 'Deber', NULL, '2018-08-04 16:51:23', '2018-08-04 16:51:23'),
(40, 41, NULL, '2018-08-04', 10564, 10624, 60, 6.50, 45, 'Pagado', NULL, '2018-08-04 16:51:53', '2018-08-08 00:53:18'),
(41, 42, NULL, '2018-08-04', 2279, 2285, 6, 2.00, 0, 'Deber', NULL, '2018-08-04 16:53:11', '2018-08-04 16:53:11'),
(42, 43, NULL, '2018-08-03', 5249, 5281, 32, 3.70, 17, 'Deber', NULL, '2018-08-04 16:53:31', '2018-08-04 16:53:31'),
(43, 44, NULL, '2018-08-04', 487, 553, 66, 7.10, 51, 'Deber', NULL, '2018-08-04 16:55:12', '2018-08-04 16:55:12'),
(44, 45, NULL, '2018-08-04', 3911, 3940, 29, 3.40, 14, 'Deber', NULL, '2018-08-04 16:55:35', '2018-08-04 16:55:35'),
(45, 46, NULL, '2018-08-02', 5104, 5134, 30, 3.50, 15, 'Deber', NULL, '2018-08-04 16:57:57', '2018-08-04 16:57:57'),
(46, 47, NULL, '2018-08-04', 3537, 3576, 39, 4.40, 24, 'Deber', NULL, '2018-08-04 16:58:23', '2018-08-04 16:58:23'),
(47, 48, NULL, '2018-08-03', 3598, 3647, 49, 5.40, 34, 'Deber', NULL, '2018-08-04 16:58:48', '2018-08-04 16:58:48'),
(48, 49, NULL, '2018-08-04', 911, 911, 0, 2.00, 0, 'Deber', NULL, '2018-08-04 16:59:38', '2018-08-04 16:59:38'),
(49, 50, NULL, '2018-08-04', 5190, 5210, 20, 2.50, 5, 'Deber', NULL, '2018-08-04 17:00:08', '2018-08-04 17:00:08'),
(50, 51, NULL, '2018-08-04', 4100, 4100, 0, 2.00, 0, 'Deber', NULL, '2018-08-04 17:00:29', '2018-08-04 17:00:29'),
(51, 95, NULL, '2018-08-04', 3205, 3224, 19, 2.40, 4, 'Deber', NULL, '2018-08-04 17:10:09', '2018-08-04 17:10:09'),
(52, 53, NULL, '2018-08-04', 4083, 4182, 99, 10.40, 84, 'Deber', '2018-08-04 17:11:31', '2018-08-04 17:10:35', '2018-08-04 17:11:31'),
(53, 53, NULL, '2018-08-04', 4083, 4132, 49, 5.40, 34, 'Deber', NULL, '2018-08-04 17:12:02', '2018-08-04 17:12:02'),
(54, 54, NULL, '2018-08-04', 2661, 2678, 17, 2.20, 2, 'Pagado', NULL, '2018-08-04 17:13:12', '2018-08-07 18:58:36'),
(55, 55, NULL, '2018-08-04', 6786, 6823, 37, 4.20, 22, 'Pagado', NULL, '2018-08-04 17:13:34', '2018-08-07 18:58:56'),
(56, 56, NULL, '2018-08-04', 129, 138, 9, 2.00, 0, 'Deber', NULL, '2018-08-04 17:13:50', '2018-08-04 17:13:50'),
(57, 57, NULL, '2018-08-04', 1719, 1721, 2, 2.00, 0, 'Deber', NULL, '2018-08-04 17:14:09', '2018-08-04 17:14:09'),
(58, 58, NULL, '2018-08-04', 6783, 6794, 11, 2.00, 0, 'Deber', NULL, '2018-08-04 17:14:33', '2018-08-04 17:14:33'),
(59, 59, NULL, '2018-08-04', 63, 66, 3, 2.00, 0, 'Deber', NULL, '2018-08-04 17:15:03', '2018-08-04 17:15:03'),
(60, 60, NULL, '2018-08-04', 2255, 2287, 32, 3.70, 17, 'Deber', NULL, '2018-08-04 17:15:27', '2018-08-04 17:15:27'),
(61, 61, NULL, '2018-08-04', 3278, 3307, 29, 3.40, 14, 'Deber', NULL, '2018-08-04 17:15:53', '2018-08-04 17:15:53'),
(62, 62, NULL, '2018-08-04', 8332, 8389, 57, 6.20, 42, 'Deber', NULL, '2018-08-04 17:16:19', '2018-08-04 17:16:19'),
(63, 63, NULL, '2018-08-04', 4017, 4020, 3, 2.00, 0, 'Deber', NULL, '2018-08-04 17:16:38', '2018-08-04 17:16:38'),
(64, 79, NULL, '2018-08-04', 6837, 6842, 5, 2.00, 0, 'Deber', NULL, '2018-08-04 17:17:02', '2018-08-04 17:17:02'),
(65, 65, NULL, '2018-08-04', 2869, 2894, 25, 3.00, 10, 'Deber', NULL, '2018-08-04 17:17:26', '2018-08-04 17:17:26'),
(66, 66, NULL, '2018-08-04', 5392, 5432, 40, 4.50, 25, 'Deber', NULL, '2018-08-04 17:17:46', '2018-08-04 17:17:46'),
(67, 67, NULL, '2018-08-04', 295, 312, 17, 2.20, 2, 'Deber', NULL, '2018-08-04 17:18:12', '2018-08-04 17:18:12'),
(68, 68, NULL, '2018-08-04', 10550, 10573, 23, 2.80, 8, 'Deber', NULL, '2018-08-04 17:18:43', '2018-08-04 17:18:43'),
(69, 69, NULL, '2018-08-04', 6185, 6233, 48, 5.30, 33, 'Deber', NULL, '2018-08-04 17:19:16', '2018-08-04 17:19:16'),
(70, 70, NULL, '2018-08-04', 2055, 2062, 7, 2.00, 0, 'Deber', NULL, '2018-08-04 17:19:36', '2018-08-04 17:19:36'),
(71, 71, NULL, '2018-08-04', 5336, 5371, 35, 4.00, 20, 'Deber', NULL, '2018-08-04 17:19:56', '2018-08-04 17:19:56'),
(72, 72, NULL, '2018-08-04', 2845, 2858, 13, 2.00, 0, 'Deber', NULL, '2018-08-04 17:20:15', '2018-08-04 17:20:15'),
(73, 73, NULL, '2018-08-04', 5412, 5442, 30, 3.50, 15, 'Deber', NULL, '2018-08-04 17:20:34', '2018-08-04 17:20:34'),
(74, 74, NULL, '2018-08-04', 1847, 1848, 1, 2.00, 0, 'Deber', NULL, '2018-08-04 17:20:59', '2018-08-04 17:20:59'),
(75, 76, NULL, '2018-08-04', 2135, 2137, 2, 2.00, 0, 'Deber', NULL, '2018-08-04 17:22:45', '2018-08-04 17:22:45'),
(76, 77, NULL, '2018-08-04', 16244, 16309, 65, 7.00, 50, 'Deber', NULL, '2018-08-04 17:23:24', '2018-08-04 17:23:24'),
(77, 78, NULL, '2018-08-04', 2779, 2792, 13, 2.00, 0, 'Deber', NULL, '2018-08-04 17:23:45', '2018-08-04 17:23:45'),
(78, 80, NULL, '2018-08-04', 1558, 1576, 18, 2.30, 3, 'Deber', NULL, '2018-08-04 17:34:36', '2018-08-04 17:34:36'),
(79, 81, NULL, '2018-08-04', 604, 620, 16, 2.10, 1, 'Deber', NULL, '2018-08-04 17:34:56', '2018-08-04 17:34:56'),
(80, 82, NULL, '2018-08-04', 187, 189, 2, 2.00, 0, 'Deber', NULL, '2018-08-04 17:35:17', '2018-08-04 17:35:17'),
(81, 83, NULL, '2018-08-04', 10510, 10593, 83, 8.80, 68, 'Deber', NULL, '2018-08-04 17:35:42', '2018-08-04 17:35:42'),
(82, 84, NULL, '2018-08-04', 5080, 5129, 49, 5.40, 34, 'Deber', NULL, '2018-08-04 17:36:04', '2018-08-04 17:36:04'),
(83, 85, NULL, '2018-08-04', 1044, 1052, 8, 2.00, 0, 'Pagado', NULL, '2018-08-04 17:38:34', '2018-08-07 18:59:13'),
(84, 86, NULL, '2018-08-04', 1218, 1231, 13, 2.00, 0, 'Deber', NULL, '2018-08-04 17:39:00', '2018-08-04 17:39:00'),
(85, 87, NULL, '2018-08-04', 891, 901, 10, 2.00, 0, 'Deber', NULL, '2018-08-04 17:39:17', '2018-08-04 17:39:17'),
(86, 88, NULL, '2018-08-04', 430, 446, 16, 2.10, 1, 'Deber', NULL, '2018-08-04 17:39:33', '2018-08-04 17:39:33'),
(87, 89, NULL, '2018-08-04', 559, 570, 11, 2.00, 0, 'Deber', NULL, '2018-08-04 17:40:17', '2018-08-04 17:40:17'),
(88, 90, NULL, '2018-08-04', 537, 554, 17, 2.20, 2, 'Pagado', NULL, '2018-08-04 17:40:41', '2018-08-07 18:59:27'),
(89, 91, NULL, '2018-08-04', 293, 307, 14, 2.00, 0, 'Deber', NULL, '2018-08-04 17:41:00', '2018-08-04 17:41:00'),
(90, 92, NULL, '2018-08-04', 75, 80, 5, 2.00, 0, 'Deber', NULL, '2018-08-04 17:41:24', '2018-08-04 17:41:24'),
(91, 93, NULL, '2018-08-04', 441, 477, 36, 4.10, 21, 'Deber', NULL, '2018-08-04 17:41:47', '2018-08-04 17:41:47'),
(92, 94, NULL, '2018-08-04', 153, 161, 8, 2.00, 0, 'Deber', NULL, '2018-08-04 17:42:09', '2018-08-04 17:42:09'),
(93, 96, NULL, '2018-08-04', 13, 15, 2, 2.00, 0, 'Deber', NULL, '2018-08-04 17:49:41', '2018-08-04 17:49:41'),
(94, 97, NULL, '2018-08-04', 498, 579, 81, 8.60, 66, 'Deber', NULL, '2018-08-04 17:54:13', '2018-08-04 17:54:13'),
(95, 98, NULL, '2018-08-04', 10, 20, 10, 2.00, 0, 'Pagado', NULL, '2018-08-05 02:56:27', '2018-08-05 03:12:18'),
(96, 98, NULL, '2018-08-04', 20, 30, 10, 2.00, 0, 'Pagado', NULL, '2018-08-05 03:16:53', '2018-08-05 03:17:10'),
(97, 98, NULL, '2018-08-04', 30, 50, 20, 2.50, 5, 'Pagado', NULL, '2018-08-05 03:19:14', '2018-08-05 03:20:13'),
(98, 98, NULL, '2018-08-04', 50, 65, 15, 2.00, 0, 'Pagado', NULL, '2018-08-05 04:05:13', '2018-08-05 04:05:28'),
(99, 98, NULL, '2018-08-04', 65, 80, 15, 2.00, 0, 'Pagado', NULL, '2018-08-05 04:42:02', '2018-08-05 04:42:14'),
(100, 99, NULL, '2018-08-07', 10, 20, 10, 2.00, 0, 'Pagado', NULL, '2018-08-07 16:50:04', '2018-08-07 16:57:44'),
(101, 99, NULL, '2018-08-07', 20, 50, 30, 3.50, 15, 'Pagado', NULL, '2018-08-07 20:44:18', '2018-08-07 20:45:48'),
(102, 100, NULL, '2018-08-07', NULL, 10, 10, 2.00, 0, 'Pagado', NULL, '2018-08-07 20:59:41', '2018-08-07 21:00:27'),
(103, 99, NULL, '2018-08-07', 50, 100, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 00:33:46', '2018-08-08 00:34:04'),
(104, 99, NULL, '2018-08-07', 100, 150, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 00:48:37', '2018-08-08 00:49:50'),
(105, 98, NULL, '2018-08-07', 80, 120, 40, 4.50, 25, 'Pagado', NULL, '2018-08-08 00:52:13', '2018-08-08 00:52:30'),
(106, 98, NULL, '2018-08-07', 120, 200, 80, 8.50, 65, 'Pagado', NULL, '2018-08-08 01:07:12', '2018-08-08 01:07:31'),
(107, 98, NULL, '2018-08-07', 200, 250, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 01:10:19', '2018-08-08 01:10:34'),
(108, 98, NULL, '2018-08-07', 250, 300, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 01:15:05', '2018-08-08 01:15:38'),
(109, 98, NULL, '2018-08-07', 300, 350, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 01:21:22', '2018-08-08 01:28:41'),
(110, 98, NULL, '2018-08-07', 350, 400, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 01:37:36', '2018-08-08 01:37:51'),
(111, 99, NULL, '2018-08-07', 150, 200, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 02:15:38', '2018-08-08 02:15:51'),
(112, 99, NULL, '2018-08-07', 200, 250, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 02:17:51', '2018-08-08 02:18:02'),
(113, 99, NULL, '2018-08-07', 250, 300, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 02:21:20', '2018-08-08 02:21:37'),
(114, 99, NULL, '2018-08-07', 300, 350, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 02:24:22', '2018-08-08 02:24:32'),
(115, 100, NULL, '2018-08-07', 0, 50, 50, 5.50, 35, 'Deber', '2018-08-08 02:26:02', '2018-08-08 02:25:40', '2018-08-08 02:26:02'),
(116, 100, NULL, '2018-08-07', 0, 50, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 02:26:33', '2018-08-08 02:26:55'),
(117, 100, NULL, '2018-08-07', 50, 100, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 02:34:25', '2018-08-08 02:35:09'),
(118, 100, NULL, '2018-08-07', 100, 150, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 02:34:43', '2018-08-08 02:37:39'),
(119, 100, NULL, '2018-08-07', 150, 178, 28, 3.30, 13, 'Pagado', NULL, '2018-08-08 02:46:06', '2018-08-08 02:46:17'),
(120, 100, NULL, '2018-08-07', 178, 200, 22, 2.70, 7, 'Pagado', NULL, '2018-08-08 02:51:10', '2018-08-08 02:51:21'),
(121, 100, NULL, '2018-08-07', 200, 233, 33, 3.80, 18, 'Pagado', NULL, '2018-08-08 02:53:23', '2018-08-08 02:53:35'),
(122, 100, NULL, '2018-08-07', 233, 260, 27, 3.20, 12, 'Pagado', NULL, '2018-08-08 02:55:05', '2018-08-08 02:55:12'),
(123, 100, NULL, '2018-08-07', 260, 290, 30, 3.50, 15, 'Pagado', NULL, '2018-08-08 02:55:55', '2018-08-08 02:57:24'),
(124, 100, NULL, '2018-08-07', 290, 350, 60, 6.50, 45, 'Pagado', NULL, '2018-08-08 02:56:52', '2018-08-08 03:20:14'),
(125, 98, NULL, '2018-08-07', 400, 500, 100, 10.50, 85, 'Pagado', NULL, '2018-08-08 03:36:31', '2018-08-08 03:36:51'),
(126, 100, NULL, '2018-08-07', 350, 400, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 03:39:28', '2018-08-08 03:40:23'),
(127, 98, NULL, '2018-08-07', 500, 550, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 03:48:22', '2018-08-08 03:48:43'),
(128, 98, NULL, '2018-08-07', 550, 600, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 03:51:24', '2018-08-08 03:51:39'),
(129, 100, NULL, '2018-08-07', 400, 450, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 03:56:10', '2018-08-08 03:56:21'),
(130, 98, NULL, '2018-08-07', 600, 650, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 03:59:31', '2018-08-08 03:59:41'),
(131, 98, NULL, '2018-08-07', 650, 700, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 04:04:48', '2018-08-08 04:04:56'),
(132, 54, NULL, '2018-08-07', 2678, 2690, 12, 2.00, 0, 'Pagado', NULL, '2018-08-08 04:06:06', '2018-08-08 04:06:15'),
(133, 100, NULL, '2018-08-08', 450, 500, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 14:42:17', '2018-08-08 14:43:19'),
(134, 98, NULL, '2018-08-08', 700, 750, 50, 5.50, 35, 'Pagado', NULL, '2018-08-08 14:46:08', '2018-08-08 14:46:20'),
(135, 98, NULL, '2018-08-08', 750, 850, 100, 10.50, 85, 'Pagado', NULL, '2018-08-08 14:47:20', '2018-08-08 14:47:37'),
(136, 98, NULL, '2018-08-08', 850, 950, 100, 10.50, 85, 'Pagado', NULL, '2018-08-08 15:07:39', '2018-08-08 15:07:52'),
(137, 98, NULL, '2018-08-08', 950, 1050, 100, 10.50, 85, 'Pagado', NULL, '2018-08-08 15:09:50', '2018-08-08 15:10:03'),
(138, 100, NULL, '2018-08-08', 500, 750, 250, 25.50, 235, 'Pagado', NULL, '2018-08-08 15:11:46', '2018-08-08 15:13:00'),
(139, 100, NULL, '2018-08-08', 750, 950, 200, 20.50, 185, 'Pagado', NULL, '2018-08-08 15:26:17', '2018-08-09 00:03:45'),
(140, 98, NULL, '2018-08-08', 1050, 1200, 150, 15.50, 135, 'Pagado', NULL, '2018-08-08 16:08:52', '2018-08-08 16:09:29');

-- --------------------------------------------------------

--
-- Table structure for table `materiales`
--

CREATE TABLE `materiales` (
  `idmaterial` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `materiales`
--

INSERT INTO `materiales` (`idmaterial`, `nombre`, `descripcion`, `stock`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'tarraja', 'para sacar rosca', 1, NULL, '2018-08-04 17:57:56', '2018-08-04 17:59:45'),
(2, 'Picos', NULL, 10, NULL, '2018-08-07 18:10:03', '2018-08-07 18:11:38'),
(3, 'Palas', NULL, 15, NULL, '2018-08-07 18:10:11', '2018-08-07 18:12:14'),
(4, 'Tubería 2\'', NULL, 25, NULL, '2018-08-07 18:10:39', '2018-08-07 18:14:30'),
(5, 'Tubería 3\'', NULL, 0, NULL, '2018-08-07 18:10:48', '2018-08-07 18:10:48'),
(6, 'Tubería 4\'', NULL, 0, NULL, '2018-08-07 18:10:56', '2018-08-07 18:10:56');

-- --------------------------------------------------------

--
-- Table structure for table `medidores`
--

CREATE TABLE `medidores` (
  `idmedidor` int(10) UNSIGNED NOT NULL,
  `codigo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `observacion` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `estado` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medidores`
--

INSERT INTO `medidores` (`idmedidor`, `codigo`, `observacion`, `estado`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, '417903', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:18:45'),
(2, '418040', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:21:24'),
(3, 'ISO 4064 - 1 ', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:21:58'),
(4, '0704018402', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:29:22'),
(5, '418039', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:29:53'),
(6, '0704018407', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:30:30'),
(7, '160612193A', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:30:59'),
(8, '0704018403', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:31:21'),
(9, '0906021259', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:31:43'),
(10, '417905', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:32:14'),
(11, '417909', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:32:46'),
(12, '418038', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:33:07'),
(13, '417901', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:33:30'),
(14, '417910', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:33:56'),
(15, '120813613', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:34:18'),
(16, '126707', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:34:49'),
(17, '0906021260', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:35:35'),
(18, 'FA034201-03', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:35:58'),
(19, '0903001997', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:36:19'),
(20, '706949-02', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:36:44'),
(21, '417936', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:38:20'),
(22, '418037', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:39:14'),
(23, '417932', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:39:43'),
(24, '020302193', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:40:11'),
(25, '0704018406', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:40:39'),
(26, '417916', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:47:06'),
(27, '417940', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:47:36'),
(28, '417929', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:47:56'),
(29, '0704019054', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:48:15'),
(30, '0903001999', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:48:47'),
(31, '0401001248', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:51:05'),
(32, '417917', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:52:27'),
(33, '417937', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:52:46'),
(34, '41791', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:53:09'),
(35, '160612197A', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:53:36'),
(36, '160612182A', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:53:57'),
(37, '126706', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:54:21'),
(38, '1002686234', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:54:48'),
(39, '0400924254', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:57:26'),
(40, '0805028710', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:57:51'),
(41, '001615', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 15:58:08'),
(42, '09030019', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:03:19'),
(43, '05189884', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:03:55'),
(44, '417926', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:04:16'),
(45, '0612033901', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:04:37'),
(46, '417913', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:05:50'),
(47, '0704019098', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:06:11'),
(48, '0704019539', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:06:29'),
(49, 'B89-31708', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:07:08'),
(50, 'ARAD51011', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:08:30'),
(51, '51146', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:08:42'),
(52, '051089178', NULL, 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 17:08:03'),
(53, '05108917', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:09:15'),
(54, '0612034801', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:09:29'),
(55, '79750ARAD', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:09:42'),
(56, '16061218', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:09:57'),
(57, '001617', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:10:13'),
(58, '92-163368', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:10:36'),
(59, '160612194A', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:10:53'),
(60, 'ARAD51067', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:11:06'),
(61, '47174', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:11:20'),
(62, '509025766', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:11:34'),
(63, 'ARAD79556', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:11:49'),
(64, 'FA037499', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:12:14'),
(65, '010501086', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:12:29'),
(66, '50344', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:12:46'),
(67, '418031', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:13:05'),
(68, 'ARAD51005', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:13:22'),
(69, 'ARAD79643', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:13:43'),
(70, 'ARAD79646', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:13:56'),
(71, '051089886', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:14:09'),
(72, 'FA03643403', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:14:28'),
(73, '001127561', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:14:45'),
(74, '001232133', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:14:58'),
(75, '001619', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:15:36'),
(76, 'FA03291903', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:15:57'),
(77, '0165400', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:16:11'),
(78, '0401001243', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:16:24'),
(79, '051089483', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:16:40'),
(80, 'FA03412606', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:17:04'),
(81, '0903000873', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:17:20'),
(82, '0805027811', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:17:34'),
(83, '0805028706', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:17:55'),
(84, '0711045020', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:18:08'),
(85, '126730', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:18:23'),
(86, '001620', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:18:36'),
(87, 'ISO 4064 - 2 ', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:18:51'),
(88, '0704019095', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:19:03'),
(89, '1104023104', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:20:33'),
(90, '120813612', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:20:49'),
(91, '1411025259', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:21:02'),
(92, '160612196A', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:21:18'),
(93, '160612190A', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:21:45'),
(94, '160612180A', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-04 16:22:03'),
(95, '210012746', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(96, '612033905', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(97, '19263', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(98, '1605013158', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(99, '9605257', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(100, '990104351', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(101, '21208897', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(102, '001618', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(103, '1001225026', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(104, '1208022473', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(105, '1104023709', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(106, '120813612', '', 'Activo', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(107, '1002109773', '', 'Pasivo', NULL, '0000-00-00 00:00:00', '2018-08-07 20:57:36'),
(108, 'DN15R80', 'Instalado', 'Pasivo', NULL, '2018-08-04 17:47:26', '2018-08-04 17:48:35'),
(109, '1002415949', 'Instalado', 'Pasivo', NULL, '2018-08-04 17:52:44', '2018-08-04 17:53:20'),
(110, '00PRU', 'Instalado', 'Pasivo', NULL, '2018-08-05 02:38:27', '2018-08-05 02:40:00'),
(111, '100', 'Instalado', 'Pasivo', NULL, '2018-08-07 04:12:01', '2018-08-07 16:19:32');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2018_07_22_151522_create_contribuyentes_table', 1),
(3, '2018_07_22_154922_create_medidors_table', 1),
(4, '2018_07_22_161320_create_servicios_table', 1),
(5, '2018_07_22_165116_create_multas_table', 1),
(6, '2018_07_22_165139_create_lecturas_table', 1),
(7, '2018_07_22_165210_create_movimientos_table', 1),
(8, '2018_07_22_165230_create_parametros_table', 1),
(9, '2018_07_22_165257_create_factura_ventas_table', 1),
(10, '2018_07_22_224205_create_pago_medidors_table', 1),
(11, '2018_08_02_102311_create_materials_table', 1),
(12, '2018_08_02_102344_create_inventarios_table', 1),
(13, '2018_08_02_224005_create_tipo_usuarios_table', 1),
(14, '2018_08_02_224106_create_usuarios_table', 1),
(15, '2018_08_02_224305_create_privilegios_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `movimientos`
--

CREATE TABLE `movimientos` (
  `idmovimiento` int(10) UNSIGNED NOT NULL,
  `tipo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` date DEFAULT NULL,
  `detalle` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intermediario` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numfac` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor` double(8,2) NOT NULL,
  `documento` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movimientos`
--

INSERT INTO `movimientos` (`idmovimiento`, `tipo`, `fecha`, `detalle`, `intermediario`, `numfac`, `valor`, `documento`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Egreso', '2018-08-07', 'Compra medidores', 'Geonny Cevallos', '0000100', 20.00, 'documentos/JSRRjJdAowwWVM7MZsIownU5YLbZ2fRjJDO1tC2u.jpeg', NULL, '2018-08-07 18:06:24', '2018-08-07 18:06:24'),
(2, 'Egreso', '2018-08-07', 'Taxia', 'Mirian Tates', '001', 10.00, 'documentos/xs0T8mErofZFR5ULUv8wGFA3Qn7ihg4QTzqFNSGz.jpeg', NULL, '2018-08-07 18:09:25', '2018-08-07 18:09:25'),
(3, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 00:34:04', '2018-08-08 00:34:04'),
(4, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 01:10:34', '2018-08-08 01:10:34'),
(5, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 01:15:38', '2018-08-08 01:15:38'),
(6, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 01:28:41', '2018-08-08 01:28:41'),
(7, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 01:37:52', '2018-08-08 01:37:52'),
(8, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 02:15:52', '2018-08-08 02:15:52'),
(9, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 02:18:02', '2018-08-08 02:18:02'),
(10, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 02:21:38', '2018-08-08 02:21:38'),
(11, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 02:24:32', '2018-08-08 02:24:32'),
(12, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 02:26:55', '2018-08-08 02:26:55'),
(13, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 02:35:09', '2018-08-08 02:35:09'),
(14, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 16.50, NULL, NULL, '2018-08-08 02:37:39', '2018-08-08 02:37:39'),
(15, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 3.30, NULL, NULL, '2018-08-08 02:46:17', '2018-08-08 02:46:17'),
(16, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 2.70, NULL, NULL, '2018-08-08 02:51:21', '2018-08-08 02:51:21'),
(17, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 3.80, NULL, NULL, '2018-08-08 02:53:35', '2018-08-08 02:53:35'),
(18, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 3.20, NULL, NULL, '2018-08-08 02:55:12', '2018-08-08 02:55:12'),
(19, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 3.50, NULL, NULL, '2018-08-08 02:57:24', '2018-08-08 02:57:24'),
(20, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '001', 6.50, NULL, NULL, '2018-08-08 03:20:14', '2018-08-08 03:20:14'),
(21, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '36', 5.50, NULL, NULL, '2018-08-08 03:51:39', '2018-08-08 03:51:39'),
(22, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '36', 5.50, NULL, NULL, '2018-08-08 03:56:21', '2018-08-08 03:56:21'),
(23, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '38', 5.50, NULL, NULL, '2018-08-08 03:59:41', '2018-08-08 03:59:41'),
(24, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '39', 5.50, NULL, NULL, '2018-08-08 04:04:56', '2018-08-08 04:04:56'),
(25, 'Ingreso', '2018-08-07', 'Pago planilla', 'Washington', '00111', 2.00, NULL, NULL, '2018-08-08 04:06:15', '2018-08-08 04:06:15'),
(26, 'Ingreso', '2018-08-08', 'Pago planilla', 'Washington', '41', 5.50, NULL, NULL, '2018-08-08 14:43:19', '2018-08-08 14:43:19'),
(27, 'Ingreso', '2018-08-08', 'Pago planilla', 'Washington', '001', 5.50, NULL, NULL, '2018-08-08 14:46:21', '2018-08-08 14:46:21'),
(28, 'Ingreso', '2018-08-08', 'Pago planilla', 'Washington', '001', 10.50, NULL, NULL, '2018-08-08 14:47:38', '2018-08-08 14:47:38'),
(29, 'Ingreso', '2018-08-08', 'Pago planilla', 'Washington', '001', 10.50, NULL, NULL, '2018-08-08 15:07:52', '2018-08-08 15:07:52'),
(30, 'Ingreso', '2018-08-08', 'Pago planilla', 'Washington', '001', 10.50, NULL, NULL, '2018-08-08 15:10:03', '2018-08-08 15:10:03'),
(31, 'Ingreso', '2018-08-08', 'Pago planilla', 'Washington', '46', 25.50, NULL, NULL, '2018-08-08 15:13:01', '2018-08-08 15:13:01'),
(32, 'Ingreso', '2018-08-08', 'Pago planilla', 'Washington', '47', 15.50, NULL, NULL, '2018-08-08 16:09:30', '2018-08-08 16:09:30'),
(33, 'Egreso', '2018-08-08', 'compra tubos', 'juan', '242', 20.00, 'documentos/9fqFxXUu4d9HreW31Ecqxe4JrpVPhnVavLja8Zei.jpeg', NULL, '2018-08-08 17:17:28', '2018-08-08 17:17:28'),
(34, 'Egreso', '2018-08-08', 'dasdasd', 'asdasd', '4324', 34.00, '', NULL, '2018-08-08 17:23:05', '2018-08-08 17:23:05'),
(35, 'Egreso', '2018-08-08', 'gdfgfdg', 'fdgfdgfd', '534534', 45.00, 'documentos/log.png', NULL, '2018-08-08 17:27:28', '2018-08-08 17:27:28'),
(36, 'Egreso', '2018-08-05', 'gfdg', 'fdgfd', '34543', 21.00, 'documentos/3gaMSE9Mcv22J70FytfTfSi8Xp5iBVnvY8fDPrnR.jpeg', NULL, '2018-08-08 17:27:57', '2018-08-08 17:27:57'),
(37, 'Egreso', '2018-08-10', 'asdad', 'dasdasd', '3242', 43.00, 'documentos/log.png', NULL, '2018-08-08 18:36:12', '2018-08-08 18:36:12'),
(38, 'Egreso', '2018-08-11', 'dasd', 'dasdsa', '423', 23.00, 'documentos/log.png', NULL, '2018-08-08 18:48:28', '2018-08-08 18:48:28'),
(39, 'Egreso', '2018-08-06', 'czxc', 'czxc', 'cdcz', 34.00, 'documentos/log.png', NULL, '2018-08-08 18:52:49', '2018-08-08 18:52:49'),
(40, 'Egreso', '2018-08-08', 'fdsf', 'dsfds', '5435', 34.00, 'documentos/log.png', NULL, '2018-08-08 18:58:01', '2018-08-08 18:58:01'),
(41, 'Egreso', '2018-08-09', 'dsf', 'fdsf', '534', 45.00, 'documentos/log.png', NULL, '2018-08-08 18:58:20', '2018-08-08 18:58:20'),
(42, 'Egreso', '2018-08-11', 'gfdg', 'dfgdf', 'gdfg', 56.00, 'documentos/log.png', NULL, '2018-08-08 19:00:15', '2018-08-08 19:00:15'),
(43, 'Egreso', '2018-08-08', 'dfgfd', 'dfg', 'dsf', 45.00, 'documentos/log.png', NULL, '2018-08-08 19:04:36', '2018-08-08 19:04:36'),
(44, 'Ingreso', '2018-08-08', 'Pago planilla', 'Washington', '48', 20.50, NULL, NULL, '2018-08-09 00:03:45', '2018-08-09 00:03:45');

-- --------------------------------------------------------

--
-- Table structure for table `multas`
--

CREATE TABLE `multas` (
  `idmulta` int(10) UNSIGNED NOT NULL,
  `idservicio` int(10) UNSIGNED NOT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor` double(8,2) NOT NULL,
  `fecha` date NOT NULL,
  `estado` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `multas`
--

INSERT INTO `multas` (`idmulta`, `idservicio`, `descripcion`, `valor`, `fecha`, `estado`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 99, 'reunion', 5.00, '2018-08-07', 'Pagado', NULL, '2018-08-07 16:27:55', '2018-08-07 16:57:44'),
(2, 100, 'reunion', 10.00, '2018-08-10', 'Pagado', NULL, '2018-08-07 20:58:42', '2018-08-07 21:00:28'),
(3, 100, 'minga', 11.00, '2018-08-07', 'Pagado', NULL, '2018-08-08 02:37:07', '2018-08-08 02:37:39');

-- --------------------------------------------------------

--
-- Table structure for table `pago_medidores`
--

CREATE TABLE `pago_medidores` (
  `idpagomedidor` int(10) UNSIGNED NOT NULL,
  `idservicio` int(10) UNSIGNED NOT NULL,
  `fecha` date DEFAULT NULL,
  `descripcion` date NOT NULL,
  `valor` double(8,2) NOT NULL,
  `estado` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parametros`
--

CREATE TABLE `parametros` (
  `idparametro` int(10) UNSIGNED NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor` double(8,2) NOT NULL,
  `detalle` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `estado` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `parametros`
--

INSERT INTO `parametros` (`idparametro`, `descripcion`, `valor`, `detalle`, `estado`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Base M3', 15.00, 'Base consumo', 'Activo', NULL, '2018-08-04 14:57:16', '2018-08-04 14:57:16'),
(2, 'Base M3 Chorlavi', 2.00, 'Valor base consumo', 'Activo', NULL, '2018-08-04 14:57:16', '2018-08-04 14:57:16'),
(3, 'M3 Agua Chorlavi', 0.10, 'Valor m3 agua', 'Activo', NULL, '2018-08-04 14:57:16', '2018-08-04 14:57:16'),
(4, 'Servicio', 300.00, 'Valor instalación', 'Activo', NULL, '2018-08-04 14:57:17', '2018-08-04 14:57:17'),
(5, 'Multa 3 meses', 0.50, 'Valor a pagar en la factura', 'Activo', NULL, '2018-08-07 03:50:14', '2018-08-07 04:00:51');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `privilegios`
--

CREATE TABLE `privilegios` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `servicios`
--

CREATE TABLE `servicios` (
  `idservicio` int(10) UNSIGNED NOT NULL,
  `idcliente` int(10) UNSIGNED NOT NULL,
  `idmedidor` int(10) UNSIGNED NOT NULL,
  `fecha` date DEFAULT NULL,
  `observacion` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `saldo` double(8,2) NOT NULL,
  `estado` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `servicios`
--

INSERT INTO `servicios` (`idservicio`, `idcliente`, `idmedidor`, `fecha`, `observacion`, `saldo`, `estado`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:18:45', '2018-08-04 15:18:45'),
(2, 2, 2, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:21:23', '2018-08-04 15:21:23'),
(3, 3, 3, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:21:57', '2018-08-04 15:21:57'),
(4, 4, 4, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:29:22', '2018-08-04 15:29:22'),
(5, 5, 5, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:29:53', '2018-08-04 15:29:53'),
(6, 6, 6, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:30:30', '2018-08-04 15:30:30'),
(7, 7, 7, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:30:59', '2018-08-04 15:30:59'),
(8, 8, 8, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:31:21', '2018-08-04 15:31:21'),
(9, 9, 9, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:31:43', '2018-08-04 15:31:43'),
(10, 10, 10, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:32:14', '2018-08-04 15:32:14'),
(11, 11, 11, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:32:46', '2018-08-04 15:32:46'),
(12, 12, 12, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:33:07', '2018-08-04 15:33:07'),
(13, 13, 13, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:33:30', '2018-08-04 15:33:30'),
(14, 14, 14, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:33:55', '2018-08-04 15:33:55'),
(15, 15, 15, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:34:18', '2018-08-04 15:34:18'),
(16, 16, 16, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:34:49', '2018-08-04 15:34:49'),
(17, 17, 17, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:35:35', '2018-08-04 15:35:35'),
(18, 18, 18, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:35:58', '2018-08-04 15:35:58'),
(19, 19, 19, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:36:19', '2018-08-04 15:36:19'),
(20, 20, 20, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:36:44', '2018-08-04 15:36:44'),
(21, 21, 21, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:38:20', '2018-08-04 15:38:20'),
(22, 22, 22, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:39:13', '2018-08-04 15:39:13'),
(23, 23, 23, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:39:43', '2018-08-04 15:39:43'),
(24, 24, 24, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:40:11', '2018-08-04 15:40:11'),
(25, 25, 25, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:40:39', '2018-08-04 15:40:39'),
(26, 26, 26, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:47:06', '2018-08-04 15:47:06'),
(27, 27, 27, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:47:35', '2018-08-04 15:47:35'),
(28, 28, 28, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:47:56', '2018-08-04 15:47:56'),
(29, 29, 29, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:48:15', '2018-08-04 15:48:15'),
(30, 30, 30, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:48:47', '2018-08-04 15:48:47'),
(31, 31, 31, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:51:05', '2018-08-04 15:51:05'),
(32, 32, 32, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:52:27', '2018-08-04 15:52:27'),
(33, 33, 33, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:52:46', '2018-08-04 15:52:46'),
(34, 34, 34, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:53:09', '2018-08-04 15:53:09'),
(35, 35, 35, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:53:36', '2018-08-04 15:53:36'),
(36, 36, 36, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:53:57', '2018-08-04 15:53:57'),
(37, 37, 37, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:54:21', '2018-08-04 15:54:21'),
(38, 38, 38, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:54:48', '2018-08-04 15:54:48'),
(39, 39, 39, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:57:26', '2018-08-04 15:57:26'),
(40, 40, 40, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:57:51', '2018-08-04 15:57:51'),
(41, 41, 41, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 15:58:08', '2018-08-04 15:58:08'),
(42, 42, 42, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:03:19', '2018-08-04 16:03:19'),
(43, 43, 43, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:03:55', '2018-08-04 16:03:55'),
(44, 44, 44, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:04:15', '2018-08-04 16:04:15'),
(45, 45, 45, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:04:37', '2018-08-04 16:04:37'),
(46, 46, 46, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:05:50', '2018-08-04 16:05:50'),
(47, 47, 47, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:06:11', '2018-08-04 16:06:11'),
(48, 48, 48, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:06:29', '2018-08-04 16:06:29'),
(49, 49, 49, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:07:08', '2018-08-04 16:07:08'),
(50, 50, 50, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:08:30', '2018-08-04 16:08:30'),
(51, 51, 51, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:08:42', '2018-08-04 16:08:42'),
(52, 62, 52, '2018-08-04', NULL, 300.00, 'Activo', '2018-08-04 17:07:00', '2018-08-04 16:09:02', '2018-08-04 17:07:00'),
(53, 53, 53, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:09:15', '2018-08-04 16:09:15'),
(54, 54, 54, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:09:29', '2018-08-04 16:09:29'),
(55, 55, 55, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:09:42', '2018-08-04 16:09:42'),
(56, 56, 56, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:09:57', '2018-08-04 16:09:57'),
(57, 57, 57, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:10:12', '2018-08-04 16:10:12'),
(58, 58, 58, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:10:36', '2018-08-04 16:10:36'),
(59, 59, 59, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:10:52', '2018-08-04 16:10:52'),
(60, 60, 60, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:11:06', '2018-08-04 16:11:06'),
(61, 61, 61, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:11:19', '2018-08-04 16:11:19'),
(62, 62, 62, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:11:34', '2018-08-04 16:11:34'),
(63, 63, 63, '2018-08-05', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:11:49', '2018-08-04 16:11:49'),
(64, 64, 64, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:12:14', '2018-08-04 16:12:14'),
(65, 65, 65, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:12:29', '2018-08-04 16:12:29'),
(66, 66, 66, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:12:46', '2018-08-04 16:12:46'),
(67, 49, 67, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:13:05', '2018-08-04 16:13:05'),
(68, 67, 68, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:13:22', '2018-08-04 16:13:22'),
(69, 68, 69, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:13:43', '2018-08-04 16:13:43'),
(70, 69, 70, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:13:55', '2018-08-04 16:13:55'),
(71, 70, 71, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:14:09', '2018-08-04 16:14:09'),
(72, 71, 72, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:14:28', '2018-08-04 16:14:28'),
(73, 72, 73, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:14:45', '2018-08-04 16:14:45'),
(74, 73, 74, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:14:57', '2018-08-04 16:14:57'),
(75, 74, 75, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:15:35', '2018-08-04 16:15:35'),
(76, 75, 76, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:15:56', '2018-08-04 16:15:56'),
(77, 76, 77, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:16:11', '2018-08-04 16:16:11'),
(78, 77, 78, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:16:24', '2018-08-04 16:16:24'),
(79, 78, 79, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:16:40', '2018-08-04 16:16:40'),
(80, 79, 80, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:17:04', '2018-08-04 16:17:04'),
(81, 80, 81, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:17:20', '2018-08-04 16:17:20'),
(82, 81, 82, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:17:34', '2018-08-04 16:17:34'),
(83, 82, 83, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:17:55', '2018-08-04 16:17:55'),
(84, 83, 84, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:18:08', '2018-08-04 16:18:08'),
(85, 84, 85, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:18:23', '2018-08-04 16:18:23'),
(86, 85, 86, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:18:35', '2018-08-04 16:18:35'),
(87, 86, 87, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:18:51', '2018-08-04 16:18:51'),
(88, 87, 88, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:19:03', '2018-08-04 16:19:03'),
(89, 88, 89, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:20:33', '2018-08-04 16:20:33'),
(90, 89, 90, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:20:48', '2018-08-04 16:20:48'),
(91, 90, 91, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:21:02', '2018-08-04 16:21:02'),
(92, 91, 92, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:21:18', '2018-08-04 16:21:18'),
(93, 92, 93, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:21:45', '2018-08-04 16:21:45'),
(94, 93, 94, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 16:22:03', '2018-08-04 16:22:03'),
(95, 52, 52, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 17:08:03', '2018-08-04 17:08:03'),
(96, 108, 108, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 17:48:35', '2018-08-04 17:48:35'),
(97, 109, 109, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-04 17:53:20', '2018-08-04 17:53:20'),
(98, 110, 110, '2018-08-04', NULL, 300.00, 'Activo', NULL, '2018-08-05 02:40:00', '2018-08-05 02:40:00'),
(99, 110, 111, '2018-08-07', NULL, 300.00, 'Activo', NULL, '2018-08-07 16:19:32', '2018-08-07 16:19:32'),
(100, 113, 107, '2018-09-07', NULL, 300.00, 'Activo', NULL, '2018-08-07 20:57:36', '2018-08-07 20:57:36');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_usuarios`
--

CREATE TABLE `tipo_usuarios` (
  `idtipo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tipo_usuarios`
--

INSERT INTO `tipo_usuarios` (`idtipo`, `nombre`, `estado`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', 'activo', NULL, '2018-08-04 14:57:16', '2018-08-04 14:57:16'),
(2, 'Secretaria', 'Activo', NULL, '2018-08-07 00:01:22', '2018-08-07 00:01:22');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `iduser` int(10) UNSIGNED NOT NULL,
  `idtipo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`iduser`, `idtipo`, `nombre`, `correo`, `password`, `deleted_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 'Washington', 'washington@gmail.com', '$2y$10$Jbpv3uCnxcCJWWa8Q3GHbOEBLgXCzX6mz1tbUGCU3g4WWd3syKahS', NULL, NULL, '2018-08-04 14:57:16', '2018-08-04 14:57:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idcliente`);

--
-- Indexes for table `factura_ventas`
--
ALTER TABLE `factura_ventas`
  ADD PRIMARY KEY (`idfacturaventa`),
  ADD KEY `factura_ventas_idservicio_foreign` (`idservicio`);

--
-- Indexes for table `inventarios`
--
ALTER TABLE `inventarios`
  ADD PRIMARY KEY (`idinventario`),
  ADD KEY `inventarios_idmaterial_foreign` (`idmaterial`);

--
-- Indexes for table `lecturas`
--
ALTER TABLE `lecturas`
  ADD PRIMARY KEY (`idlectura`),
  ADD KEY `lecturas_idservicio_foreign` (`idservicio`);

--
-- Indexes for table `materiales`
--
ALTER TABLE `materiales`
  ADD PRIMARY KEY (`idmaterial`),
  ADD UNIQUE KEY `materiales_nombre_unique` (`nombre`);

--
-- Indexes for table `medidores`
--
ALTER TABLE `medidores`
  ADD PRIMARY KEY (`idmedidor`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movimientos`
--
ALTER TABLE `movimientos`
  ADD PRIMARY KEY (`idmovimiento`);

--
-- Indexes for table `multas`
--
ALTER TABLE `multas`
  ADD PRIMARY KEY (`idmulta`),
  ADD KEY `multas_idservicio_foreign` (`idservicio`);

--
-- Indexes for table `pago_medidores`
--
ALTER TABLE `pago_medidores`
  ADD PRIMARY KEY (`idpagomedidor`),
  ADD KEY `pago_medidores_idservicio_foreign` (`idservicio`);

--
-- Indexes for table `parametros`
--
ALTER TABLE `parametros`
  ADD PRIMARY KEY (`idparametro`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`idservicio`),
  ADD KEY `servicios_idcliente_foreign` (`idcliente`),
  ADD KEY `servicios_idmedidor_foreign` (`idmedidor`);

--
-- Indexes for table `tipo_usuarios`
--
ALTER TABLE `tipo_usuarios`
  ADD PRIMARY KEY (`idtipo`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`iduser`),
  ADD UNIQUE KEY `usuarios_correo_unique` (`correo`),
  ADD KEY `usuarios_idtipo_foreign` (`idtipo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idcliente` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `factura_ventas`
--
ALTER TABLE `factura_ventas`
  MODIFY `idfacturaventa` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `inventarios`
--
ALTER TABLE `inventarios`
  MODIFY `idinventario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `lecturas`
--
ALTER TABLE `lecturas`
  MODIFY `idlectura` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `materiales`
--
ALTER TABLE `materiales`
  MODIFY `idmaterial` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `medidores`
--
ALTER TABLE `medidores`
  MODIFY `idmedidor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `movimientos`
--
ALTER TABLE `movimientos`
  MODIFY `idmovimiento` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `multas`
--
ALTER TABLE `multas`
  MODIFY `idmulta` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pago_medidores`
--
ALTER TABLE `pago_medidores`
  MODIFY `idpagomedidor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parametros`
--
ALTER TABLE `parametros`
  MODIFY `idparametro` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `servicios`
--
ALTER TABLE `servicios`
  MODIFY `idservicio` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `tipo_usuarios`
--
ALTER TABLE `tipo_usuarios`
  MODIFY `idtipo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `iduser` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `factura_ventas`
--
ALTER TABLE `factura_ventas`
  ADD CONSTRAINT `factura_ventas_idservicio_foreign` FOREIGN KEY (`idservicio`) REFERENCES `servicios` (`idservicio`) ON DELETE CASCADE;

--
-- Constraints for table `inventarios`
--
ALTER TABLE `inventarios`
  ADD CONSTRAINT `inventarios_idmaterial_foreign` FOREIGN KEY (`idmaterial`) REFERENCES `materiales` (`idmaterial`) ON DELETE CASCADE;

--
-- Constraints for table `lecturas`
--
ALTER TABLE `lecturas`
  ADD CONSTRAINT `lecturas_idservicio_foreign` FOREIGN KEY (`idservicio`) REFERENCES `servicios` (`idservicio`) ON DELETE CASCADE;

--
-- Constraints for table `multas`
--
ALTER TABLE `multas`
  ADD CONSTRAINT `multas_idservicio_foreign` FOREIGN KEY (`idservicio`) REFERENCES `servicios` (`idservicio`) ON DELETE CASCADE;

--
-- Constraints for table `pago_medidores`
--
ALTER TABLE `pago_medidores`
  ADD CONSTRAINT `pago_medidores_idservicio_foreign` FOREIGN KEY (`idservicio`) REFERENCES `servicios` (`idservicio`) ON DELETE CASCADE;

--
-- Constraints for table `servicios`
--
ALTER TABLE `servicios`
  ADD CONSTRAINT `servicios_idcliente_foreign` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`idcliente`) ON DELETE CASCADE,
  ADD CONSTRAINT `servicios_idmedidor_foreign` FOREIGN KEY (`idmedidor`) REFERENCES `medidores` (`idmedidor`) ON DELETE CASCADE;

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_idtipo_foreign` FOREIGN KEY (`idtipo`) REFERENCES `tipo_usuarios` (`idtipo`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
