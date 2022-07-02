-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Lug 02, 2022 alle 09:58
-- Versione del server: 8.0.29-0ubuntu0.20.04.3
-- Versione PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prog_tw`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `cars`
--

CREATE TABLE `cars` (
  `id` int NOT NULL,
  `model` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_brand` int NOT NULL,
  `year` year NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `bhp` int NOT NULL,
  `torque` int NOT NULL,
  `weight` int NOT NULL,
  `top_speed` int NOT NULL,
  `transmission` enum('SEQUENTIAL','MANUAL') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `drivetrain` enum('AWD','RWD','FWD') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `rating` int NOT NULL DEFAULT '1',
  `price` int NOT NULL DEFAULT '0',
  `fuel_type` enum('hybrid','gasoline','diesel','electric','gpl','methane') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'gasoline',
  `car_type` enum('convertible','sedan','station_wagon','suv','van','coupe') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'sedan',
  `doors` smallint NOT NULL DEFAULT '3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `cars`
--

INSERT INTO `cars` (`id`, `model`, `id_brand`, `year`, `created_at`, `image`, `bhp`, `torque`, `weight`, `top_speed`, `transmission`, `drivetrain`, `rating`, `price`, `fuel_type`, `car_type`, `doors`) VALUES
(226, 'C63 AMG Black Series ', 125, 2012, '2021-11-09 18:24:17', 'https://i.imgur.com/n3QlIJO.jpg', 510, 620, 1710, 300, 'MANUAL', 'RWD', 8, 20000, 'gasoline', 'coupe', 2),
(228, 'Aventador LBW Edition', 142, 2014, '2021-11-09 18:24:17', 'https://i.imgur.com/t0e8spT.jpg', 735, 691, 1550, 335, 'SEQUENTIAL', 'AWD', 8, 80000, 'gasoline', 'coupe', 2),
(229, 'Focus MK2', 116, 2009, '2021-11-09 18:24:17', 'https://i.imgur.com/JPktWcF.jpg', 300, 440, 1468, 263, 'MANUAL', 'FWD', 8, 20000, 'gasoline', 'sedan', 3),
(230, 'Cooper S JCW Challenge Italia \"PRO\"', 126, 2020, '2021-11-09 18:24:17', 'https://i.imgur.com/6giaQUC.jpg', 265, 363, 1110, 150, 'SEQUENTIAL', 'FWD', 10, 40000, 'gasoline', 'sedan', 3),
(232, 'DB11', 145, 2016, '2021-11-09 18:24:17', 'https://i.imgur.com/h218Ani.jpg', 608, 700, 1770, 322, 'SEQUENTIAL', 'RWD', 7, 60000, 'gasoline', 'coupe', 2),
(234, 'NSX FE-BZ', 143, 2018, '2021-11-09 18:24:17', 'https://i.imgur.com/lL2KQPH.jpg', 650, 800, 1355, 345, 'SEQUENTIAL', 'RWD', 8, 50000, 'gasoline', 'coupe', 2),
(237, 'Fairlady Z S30 Tuned', 127, 1970, '2021-11-09 18:24:17', 'https://i.imgur.com/zXsyab0.jpg', 600, 597, 1065, 320, 'MANUAL', 'RWD', 7, 90000, 'gasoline', 'coupe', 2),
(238, 'Viper Striker', 113, 2014, '2021-11-09 18:24:17', 'https://i.imgur.com/Plxqpor.jpg', 659, 813, 1520, 310, 'MANUAL', 'RWD', 8, 80000, 'gasoline', 'coupe', 2),
(242, 'Stradale', 146, 2017, '2021-11-09 18:24:17', 'https://i.imgur.com/IJ8MPkt.jpg', 400, 500, 855, 280, 'SEQUENTIAL', 'RWD', 10, 100000, 'gasoline', 'coupe', 2),
(244, 'Fairlady Z S32', 127, 1994, '2021-11-09 18:24:17', 'https://i.imgur.com/nvqU1Cf.jpg', 279, 375, 1530, 250, 'MANUAL', 'RWD', 9, 50000, 'gasoline', 'coupe', 2),
(245, 'S2000 AP2', 119, 2006, '2021-11-09 18:24:17', 'https://i.imgur.com/qs61M2w.jpg', 243, 233, 1250, 237, 'MANUAL', 'RWD', 10, 50000, 'gasoline', 'convertible', 2),
(247, 'Silvia S14', 127, 1993, '2021-11-09 18:24:17', 'https://i.imgur.com/rEQY5BN.jpg', 319, 393, 1253, 270, 'MANUAL', 'RWD', 8, 40000, 'gasoline', 'coupe', 2),
(249, 'Golf', 118, 2014, '2021-11-09 18:24:17', 'https://i.imgur.com/sltdKzN.jpg', 300, 380, 1500, 250, 'MANUAL', 'AWD', 10, 20000, 'gasoline', 'sedan', 3),
(251, 'Integra Type R', 119, 1998, '2021-11-09 18:24:17', 'https://i.imgur.com/4FIIvyA.jpg', 202, 186, 1102, 0, 'MANUAL', 'FWD', 10, 40000, 'gasoline', 'coupe', 2),
(258, 'Silvia S14 Navan', 127, 1993, '2021-11-09 18:24:17', 'https://i.imgur.com/rTuDVAk.jpg', 366, 452, 1100, 270, 'MANUAL', 'RWD', 8, 50000, 'gasoline', 'coupe', 2),
(259, 'Skyline GT-R Hakosuka', 127, 1971, '2021-11-09 18:24:17', 'https://i.imgur.com/SQb4MlR.jpg', 160, 180, 1100, 200, 'MANUAL', 'AWD', 10, 70000, 'gasoline', 'coupe', 2),
(264, 'RS6', 109, 2020, '2021-11-09 18:24:17', 'https://i.imgur.com/yS1Vwj5.jpg', 624, 748, 1885, 300, 'SEQUENTIAL', 'RWD', 6, 50000, 'gasoline', 'station_wagon', 5),
(266, 'Mini Cooper S FIA App.K Historic Racing', 107, 1964, '2021-11-09 18:24:17', 'https://i.imgur.com/n5NnK6v.jpg', 126, 148, 620, 200, 'MANUAL', 'FWD', 10, 80000, 'gasoline', 'sedan', 3),
(267, '981 Cayman BFR', 129, 2018, '2021-11-09 18:24:17', 'https://i.imgur.com/bdlrqPr.jpg', 765, 850, 1265, 345, 'SEQUENTIAL', 'RWD', 7, 60000, 'gasoline', 'coupe', 2),
(268, '997', 129, 2012, '2021-11-09 18:24:17', 'https://i.imgur.com/qeNXLqy.jpg', 500, 460, 1360, 310, 'MANUAL', 'RWD', 7, 70000, 'gasoline', 'coupe', 2),
(270, 'Civic SiR-II', 119, 1991, '2021-11-09 18:24:17', 'https://i.imgur.com/ajGy8pC.jpg', 204, 193, 950, 240, 'MANUAL', 'FWD', 8, 40000, 'gasoline', 'sedan', 3),
(271, 'Corvette C1', 111, 1959, '2021-11-09 18:24:17', 'https://i.imgur.com/h9CrnG2.jpg', 352, 533, 1500, 230, 'MANUAL', 'RWD', 8, 100000, 'gasoline', 'convertible', 2),
(272, 'GT-AM', 105, 1970, '2021-11-09 18:24:17', 'https://i.imgur.com/DhD3yRB.jpg', 220, 272, 940, 230, 'MANUAL', 'RWD', 10, 200000, 'gasoline', 'coupe', 2),
(275, 'Silvia S15 Spec. R Aereo', 127, 1999, '2021-11-09 18:24:17', 'https://i.imgur.com/wRkHLFH.jpg', 246, 310, 1240, 263, 'MANUAL', 'RWD', 9, 70000, 'gasoline', 'coupe', 2),
(280, '205 Turbo 16', 128, 1984, '2021-11-09 18:24:17', 'https://i.imgur.com/dW9HhcX.jpg', 197, 254, 1145, 216, 'MANUAL', 'AWD', 10, 100000, 'gasoline', 'sedan', 3),
(286, 'Supra MK4 ABflug S900', 131, 1998, '2021-11-09 18:24:17', 'https://i.imgur.com/G8RuRgK.jpg', 702, 755, 1525, 250, 'MANUAL', 'RWD', 7, 100000, 'gasoline', 'coupe', 2),
(290, 'Sileighty', 127, 2019, '2021-11-09 18:24:17', 'https://i.imgur.com/OQVR8Wx.jpg', 356, 402, 1184, 270, 'MANUAL', 'RWD', 8, 50000, 'gasoline', 'coupe', 2),
(291, 'Silvia S15 Mitasu Spec.', 127, 2002, '2021-11-09 18:24:17', 'https://i.imgur.com/rQEo8Q6.jpg', 321, 390, 1212, 250, 'MANUAL', 'RWD', 8, 30000, 'gasoline', 'coupe', 2),
(293, 'Corvette ZR1 C6', 111, 2010, '2021-11-09 18:24:17', 'https://i.imgur.com/tEtXleU.jpg', 638, 819, 1508, 330, 'MANUAL', 'RWD', 9, 100000, 'gasoline', 'coupe', 2),
(298, 'MX-5 K spec', 133, 1989, '2021-11-09 18:24:17', 'https://i.imgur.com/n0L2ve8.jpg', 160, 162, 1040, 190, 'MANUAL', 'RWD', 7, 30000, 'gasoline', 'coupe', 2),
(299, 'Lancer EVO 6', 134, 2000, '2021-11-09 18:24:17', 'https://i.imgur.com/fyBGaMu.jpg', 308, 375, 1350, 257, 'MANUAL', 'AWD', 9, 50000, 'gasoline', 'sedan', 4),
(300, 'Lancer EVO 8', 134, 2000, '2021-11-09 18:24:17', 'https://i.imgur.com/cc3yT0Ml.jpg', 276, 374, 1455, 252, 'MANUAL', 'AWD', 9, 50000, 'gasoline', 'sedan', 4),
(302, 'Cooper JWC Uk Challenge', 126, 2019, '2021-11-09 18:24:17', 'https://i.imgur.com/69N9a66.jpg', 265, 369, 1085, 241, 'SEQUENTIAL', 'FWD', 10, 30000, 'gasoline', 'sedan', 4),
(303, 'Impreza Type-R GC8', 135, 2000, '2021-11-09 18:24:17', 'https://i.imgur.com/ZLfAKcG.jpg', 280, 353, 1260, 240, 'MANUAL', 'AWD', 9, 50000, 'gasoline', 'sedan', 2),
(304, 'Laurel', 127, 1989, '2021-11-09 18:24:17', 'https://i.imgur.com/TDJ5xeC.jpg', 212, 265, 1390, 230, 'MANUAL', 'RWD', 9, 40000, 'gasoline', 'sedan', 4),
(309, 'NSX NA2', 119, 2002, '2021-11-09 18:24:17', 'https://i.imgur.com/3aWdMnI.jpg', 290, 304, 1270, 272, 'MANUAL', 'RWD', 7, 80000, 'gasoline', 'coupe', 2),
(311, 'Panda 900', 115, 1992, '2021-11-09 18:24:17', 'https://i.imgur.com/aLZq3po.jpg', 45, 64, 715, 135, 'MANUAL', 'FWD', 9, 10000, 'gasoline', 'sedan', 3),
(313, 'Skyline V-Spec R32', 127, 1994, '2021-11-09 18:24:17', 'https://i.imgur.com/mVA2VsL.jpg', 314, 368, 1500, 254, 'MANUAL', 'AWD', 10, 60000, 'gasoline', 'coupe', 2),
(315, 'Ballade Sport CR-X', 119, 1985, '2021-11-09 18:24:17', 'https://i.imgur.com/0cYxTof.jpg', 146, 190, 860, 200, 'MANUAL', 'AWD', 10, 50000, 'gasoline', 'sedan', 3),
(316, '180SX', 127, 1996, '2021-11-09 18:24:17', 'https://i.imgur.com/v2PT8pD.jpg', 205, 275, 1220, 1, 'MANUAL', 'RWD', 9, 45000, 'gasoline', 'coupe', 2),
(317, 'Clio RS', 130, 2013, '2021-11-09 18:24:17', 'https://i.imgur.com/8ybiNB0.jpg', 200, 240, 1240, 229, 'MANUAL', 'FWD', 10, 30000, 'gasoline', 'sedan', 3),
(318, 'NSX', 119, 1991, '2021-11-09 18:24:17', 'https://i.imgur.com/tu0whO2.jpg', 290, 304, 1319, 1, 'MANUAL', 'RWD', 10, 40000, 'gasoline', 'coupe', 2),
(319, '911 GT2 RS MR', 129, 2020, '2021-11-09 18:24:17', 'https://i.imgur.com/WLwevao.jpg', 714, 797, 1470, 340, 'SEQUENTIAL', 'RWD', 7, 40000, 'gasoline', 'coupe', 2),
(320, 'GTR R-35 V-Spec', 127, 2009, '2021-11-09 18:24:17', 'https://i.imgur.com/29Bx6WZ.jpg', 480, 562, 1680, 310, 'SEQUENTIAL', 'AWD', 7, 60000, 'gasoline', 'coupe', 2),
(324, 'RX-7 FD3S Re Amemiya', 133, 2006, '2021-11-09 18:24:17', 'https://i.imgur.com/RiWYbJu.jpg', 554, 570, 1250, 320, 'MANUAL', 'RWD', 10, 70000, 'gasoline', 'coupe', 2),
(343, 'M4 Lenz Spec.', 149, 2014, '2021-11-09 18:24:17', 'https://i.imgur.com/KoJCFmt.jpg', 513, 675, 1476, 290, 'MANUAL', 'RWD', 8, 30000, 'gasoline', 'coupe', 2),
(344, 'Charger', 113, 1969, '2021-11-09 18:24:17', 'https://i.imgur.com/9Y04nxU.jpg', 568, 762, 1504, 300, 'SEQUENTIAL', 'RWD', 6, 80000, 'gasoline', 'coupe', 2),
(351, 'Civic Type R EK-9', 119, 1998, '2021-11-09 18:24:17', 'https://i.imgur.com/YqlEbRr.jpg', 182, 162, 1068, 230, 'MANUAL', 'FWD', 10, 40000, 'gasoline', 'sedan', 3),
(352, 'M3 E46', 149, 2003, '2021-11-09 18:24:17', 'https://i.imgur.com/6RcRdwL.jpg', 380, 340, 1470, 300, 'MANUAL', 'RWD', 9, 20000, 'gasoline', 'coupe', 2),
(353, 'MR2 SC AW11', 131, 1989, '2021-11-09 18:24:17', 'https://i.imgur.com/RLgEhwJ.jpg', 143, 186, 1100, 228, 'MANUAL', 'RWD', 10, 70000, 'gasoline', 'coupe', 2),
(358, '930 Turbo', 129, 1981, '2021-11-09 18:24:17', 'https://i.imgur.com/ffjUGNv.jpg', 330, 412, 1150, 0, 'MANUAL', 'RWD', 9, 100000, 'gasoline', 'coupe', 2),
(359, 'M5 E39', 149, 1998, '2021-11-09 18:24:17', 'https://i.imgur.com/Eg4g9BJ.jpg', 394, 500, 1720, 310, 'MANUAL', 'RWD', 8, 60000, 'gasoline', 'sedan', 4),
(362, 'Lancer EVO 4', 134, 1996, '2021-11-09 18:24:17', 'https://i.imgur.com/DhFHWVO.jpg', 276, 357, 1350, 243, 'MANUAL', 'AWD', 10, 50000, 'gasoline', 'sedan', 4),
(363, 'MR2 GT-S', 131, 1998, '2021-11-09 18:24:17', 'https://i.imgur.com/WEigGqX.jpg', 242, 304, 1270, 255, 'MANUAL', 'RWD', 10, 60000, 'gasoline', 'coupe', 2),
(364, 'S2000 AP1', 119, 1999, '2021-11-09 18:24:17', 'https://i.imgur.com/6wJ6Jqf.jpg', 245, 224, 1240, 233, 'MANUAL', 'RWD', 10, 40000, 'gasoline', 'coupe', 2),
(365, 'Supra RZ', 131, 1998, '2021-11-09 18:24:17', 'https://i.imgur.com/T57oNSC.jpg', 343, 465, 1510, 278, 'MANUAL', 'RWD', 10, 70000, 'gasoline', 'coupe', 2),
(366, 'Swift Sport', 136, 2007, '2021-11-09 18:24:17', 'https://i.imgur.com/Eb84d4p.jpg', 123, 152, 1060, 204, 'MANUAL', 'FWD', 9, 20000, 'gasoline', 'sedan', 5),
(367, 'Capuccino', 136, 1995, '2021-11-09 18:24:17', 'https://i.imgur.com/PB9livG.jpg', 75, 98, 690, 185, 'MANUAL', 'RWD', 9, 20000, 'gasoline', 'convertible', 2),
(369, 'Silvia S13', 127, 1991, '2021-11-09 18:24:17', 'https://i.imgur.com/cBOhiE7.jpg', 202, 279, 1170, 236, 'MANUAL', 'RWD', 10, 40000, 'gasoline', 'coupe', 2),
(370, 'Impreza 22b STi', 135, 1998, '2021-11-09 18:24:17', 'https://i.imgur.com/uhORnYU.jpg', 289, 381, 1270, 247, 'MANUAL', 'AWD', 10, 40000, 'gasoline', 'sedan', 2),
(371, 'RX7 FC3S', 133, 1989, '2021-11-09 18:24:17', 'https://i.imgur.com/2sDIlIh.jpg', 201, 266, 1250, 240, 'MANUAL', 'RWD', 9, 40000, 'gasoline', 'coupe', 2),
(372, 'RX-7 FC3S Infini', 133, 1991, '2021-11-09 18:24:17', 'https://i.imgur.com/S8BipKm.jpg', 212, 275, 1230, 245, 'SEQUENTIAL', 'RWD', 10, 45000, 'gasoline', 'sedan', 3),
(373, '911 Carrera RS Club Sport (993)', 129, 1995, '2021-11-09 18:24:17', 'https://i.imgur.com/9JOOrA9.jpg', 300, 358, 1173, 277, 'MANUAL', 'RWD', 9, 80000, 'gasoline', 'coupe', 2),
(374, 'RX-7 FD3S Spirit R Type-A', 133, 2002, '2021-11-09 18:24:17', 'https://i.imgur.com/f3elSgH.jpg', 300, 332, 1231, 0, 'MANUAL', 'RWD', 10, 40000, 'gasoline', 'coupe', 2),
(388, 'Civic Type R SS EK-9', 119, 1999, '2021-11-09 18:24:17', 'https://i.imgur.com/M7vOkT2.jpg', 213, 180, 972, 240, 'MANUAL', 'FWD', 10, 35000, 'gasoline', 'sedan', 3),
(390, 'Supra 3.0 GT Turbo', 131, 1988, '2021-11-09 18:24:17', 'https://i.imgur.com/jLPt36n.jpg', 267, 363, 1540, 254, 'MANUAL', 'RWD', 8, 50000, 'gasoline', 'coupe', 2),
(396, '1M E82 Acrapovic', 149, 2011, '2021-11-09 18:24:17', 'https://i.imgur.com/qLLFXHX.jpg', 420, 630, 1495, 250, 'MANUAL', 'RWD', 6, 25000, 'gasoline', 'coupe', 2),
(397, 'E34 540i', 149, 1994, '2021-11-09 18:24:17', 'https://i.imgur.com/Oa2FiAw.jpg', 340, 400, 1605, 250, 'MANUAL', 'RWD', 6, 30000, 'gasoline', 'sedan', 4),
(398, 'Supra A90', 131, 2019, '2021-11-09 18:24:17', 'https://i.imgur.com/Z7gAxv9.jpg', 384, 570, 1541, 250, 'SEQUENTIAL', 'RWD', 5, 50000, 'gasoline', 'coupe', 2),
(399, '207 RC', 128, 2007, '2021-11-09 18:24:17', 'https://i.imgur.com/lN9uIRw.jpg', 172, 260, 1240, 220, 'MANUAL', 'FWD', 10, 20000, 'gasoline', 'sedan', 3),
(400, 'F-Type R', 121, 2014, '2021-11-09 18:24:17', 'https://i.imgur.com/WZbgy5q.jpg', 550, 680, 1650, 314, 'SEQUENTIAL', 'RWD', 10, 80000, 'gasoline', 'coupe', 2),
(402, 'MR-S Haru Spec.', 131, 2003, '2021-11-09 18:24:17', 'https://i.imgur.com/BsCJfvR.jpg', 192, 190, 918, 230, 'MANUAL', 'RWD', 9, 40000, 'gasoline', 'convertible', 2),
(404, 'GSX', 153, 1970, '2021-11-09 18:24:17', 'https://i.imgur.com/0V0KRCk.jpg', 420, 691, 1758, 222, 'MANUAL', 'RWD', 8, 50000, 'gasoline', 'van', 2),
(406, 'RX-7 FD3S RE Amemiya AD-Facer', 133, 1995, '2021-11-09 18:24:17', 'https://i.imgur.com/WxVQGWC.jpg', 545, 570, 1250, 320, 'MANUAL', 'RWD', 10, 60000, 'gasoline', 'coupe', 2),
(409, 'Impreza WRX (GD) Tuned', 135, 2007, '2021-11-09 18:24:17', 'https://i.imgur.com/7tau3ML.jpg', 467, 693, 1383, 270, 'MANUAL', 'AWD', 10, 50000, 'gasoline', 'sedan', 4),
(410, 'Impreza WRX STi [GRB]', 135, 2008, '2021-11-09 18:24:17', 'https://i.imgur.com/43JQicI.jpg', 308, 422, 1480, 256, 'MANUAL', 'AWD', 8, 40000, 'gasoline', 'sedan', 4),
(412, '512 TR', 114, 1994, '2021-11-12 00:24:08', 'https://i.imgur.com/n0BgC73.jpg', 425, 491, 1573, 314, 'MANUAL', 'RWD', 10, 200000, 'gasoline', 'coupe', 2),
(413, 'Diablo VT', 142, 1995, '2021-11-12 00:27:22', 'https://i.imgur.com/1IXtD43.jpg', 492, 580, 1625, 325, 'MANUAL', 'AWD', 10, 200000, 'gasoline', 'coupe', 2),
(416, 'Fulvia 1.6 HF', 178, 1963, '2021-11-12 08:45:55', 'https://i.imgur.com/u0L6uz6.jpg', 165, 169, 825, 200, 'MANUAL', 'FWD', 9, 100000, 'gasoline', 'coupe', 2),
(417, '911 (993) Turbo', 129, 1995, '2021-11-12 08:59:42', 'https://i.imgur.com/49RPnpc.jpg', 403, 542, 1502, 295, 'MANUAL', 'AWD', 10, 90000, 'gasoline', 'coupe', 2),
(418, 'Diablo SE30 Jota', 142, 1995, '2021-11-12 09:05:25', 'https://i.imgur.com/Q25F6Vg.jpg', 595, 639, 1450, 340, 'MANUAL', 'RWD', 10, 100000, 'gasoline', 'coupe', 2),
(441, 'AMG GT Black Series', 125, 2020, '2021-11-29 15:21:46', 'https://i.imgur.com/ELEpeHl.jpg', 730, 800, 1540, 325, 'SEQUENTIAL', 'RWD', 6, 250000, 'gasoline', 'coupe', 2),
(442, 'M4 Competition G82', 149, 2021, '2021-11-29 15:32:59', 'https://i.imgur.com/tyl3vYc.jpg', 547, 714, 1572, 250, 'SEQUENTIAL', 'RWD', 8, 100000, 'gasoline', 'coupe', 2),
(443, 'A45 AMG', 125, 2017, '2021-11-29 21:54:54', 'https://i.imgur.com/kzioclo.jpg', 360, 461, 1555, 250, 'SEQUENTIAL', 'AWD', 8, 100000, 'gasoline', 'sedan', 5),
(444, 'AMG GT-S', 125, 2015, '2021-11-29 23:40:02', 'https://i.imgur.com/ZcEHswd.jpg', 520, 650, 1570, 325, 'SEQUENTIAL', 'RWD', 6, 100000, 'gasoline', 'coupe', 2),
(445, 'Supra MKIV Ridox Body Kit', 131, 2000, '2021-12-01 09:52:00', 'https://i.imgur.com/qYDbPJG.jpg', 494, 610, 1470, 0, 'MANUAL', 'RWD', 8, 70000, 'gasoline', 'coupe', 2),
(446, 'Levin AE86', 131, 1983, '2021-12-01 09:56:39', 'https://i.imgur.com/m0R1i22.jpg', 128, 150, 940, 207, 'MANUAL', 'RWD', 9, 30000, 'gasoline', 'sedan', 3),
(447, 'Civic Type R', 119, 2007, '2021-12-01 10:17:43', 'https://i.imgur.com/3ZkC1g7.jpg', 222, 215, 1263, 241, 'MANUAL', 'FWD', 9, 40000, 'gasoline', 'sedan', 4),
(448, 'Civic Si Coupe', 119, 2013, '2021-12-01 10:21:33', 'https://i.imgur.com/BQH9xZ9.jpg', 401, 462, 1310, 307, 'MANUAL', 'FWD', 9, 50000, 'gasoline', 'coupe', 2),
(449, '240SX', 127, 1993, '2021-12-01 23:24:04', 'https://i.imgur.com/hf6UWF8.jpg', 155, 217, 1225, 209, 'MANUAL', 'RWD', 9, 30000, 'gasoline', 'coupe', 2),
(459, 'Skyline R34 GT-R V-SPEC NUR II', 127, 1999, '2021-12-06 12:10:22', 'https://i.imgur.com/LPQehaX.jpg', 345, 470, 1540, 250, 'MANUAL', 'AWD', 9, 60000, 'gasoline', 'coupe', 2),
(461, 'M5 E60', 149, 2003, '2021-12-07 14:40:37', 'https://i.imgur.com/JApYQUW.jpg', 540, 535, 1750, 270, 'MANUAL', 'RWD', 8, 70000, 'gasoline', 'sedan', 4),
(462, 'Amuse NISMO 380RS Superleggera', 127, 2008, '2021-12-07 22:29:38', 'https://i.imgur.com/7nqkc62.jpg', 386, 400, 1358, 250, 'MANUAL', 'RWD', 10, 100000, 'gasoline', 'coupe', 2),
(463, 'WRX STI', 135, 2016, '2021-12-07 22:32:44', 'https://i.imgur.com/ltY91zX.jpg', 304, 405, 1450, 260, 'MANUAL', 'AWD', 9, 50000, 'gasoline', 'sedan', 4),
(464, 'BRZ', 135, 2021, '2021-12-07 22:35:42', 'https://i.imgur.com/2NUcKRZl.jpg', 235, 258, 1240, 180, 'MANUAL', 'RWD', 8, 40000, 'gasoline', 'coupe', 2),
(465, 'GT86', 131, 2016, '2021-12-07 22:41:08', 'https://i.imgur.com/SPC2MPY.jpg', 204, 218, 1240, 220, 'MANUAL', 'RWD', 8, 40000, 'gasoline', 'coupe', 2),
(466, 'GR86', 131, 2021, '2021-12-07 22:49:48', 'https://i.imgur.com/jhUGDIT.jpg', 235, 258, 1270, 180, 'MANUAL', 'RWD', 8, 40000, 'gasoline', 'coupe', 2),
(467, 'Giulietta Spider Racer', 105, 1960, '2021-12-08 17:42:34', 'https://i.imgur.com/dzY30kZ.jpg', 95, 143, 735, 155, 'MANUAL', 'RWD', 10, 90000, 'gasoline', 'convertible', 2),
(468, 'Zidantou CHB6401TA', 1102, 1994, '2021-12-10 00:05:37', 'https://i.imgur.com/65mbq84.jpg', 52, 75, 800, 150, 'MANUAL', 'FWD', 9, 1000, 'gasoline', 'station_wagon', 5),
(469, 'Civic Type-R (FK8)', 119, 2018, '2021-12-10 17:57:41', 'https://i.imgur.com/IF61YnM.jpg', 320, 400, 1460, 270, 'MANUAL', 'FWD', 8, 30000, 'gasoline', 'sedan', 5),
(470, 'GT63S AMG', 125, 2018, '2021-12-13 17:21:32', 'https://i.imgur.com/ryheKWf.jpg', 639, 900, 2015, 315, 'SEQUENTIAL', 'AWD', 7, 80000, 'gasoline', 'sedan', 4),
(472, 'Impreza WRX', 135, 2002, '2021-12-14 14:10:26', 'https://i.imgur.com/KMlQrzQ.jpg', 227, 298, 1403, 240, 'MANUAL', 'AWD', 10, 40000, 'gasoline', 'station_wagon', 5),
(477, 'GT-R Nismo', 127, 2017, '2021-12-16 19:17:39', 'https://i.imgur.com/hk2fYrD.jpg', 608, 747, 1750, 313, 'SEQUENTIAL', 'AWD', 9, 60000, 'gasoline', 'coupe', 2),
(478, '240 Turbo', 150, 1983, '2021-12-16 19:24:20', 'https://i.imgur.com/usbsuz5.jpg', 120, 333, 1095, 190, 'MANUAL', 'RWD', 7, 70000, 'gasoline', 'sedan', 4),
(479, '850 R', 150, 1997, '2021-12-16 19:31:25', 'https://i.imgur.com/YKFFz0r.jpg', 240, 344, 1490, 155, 'MANUAL', 'FWD', 7, 15000, 'gasoline', 'station_wagon', 5),
(480, 'Copen Street-Spec', 1238, 2002, '2021-12-16 23:07:22', 'https://i.imgur.com/9mXFSOr.jpg', 196, 213, 830, 223, 'MANUAL', 'FWD', 9, 20000, 'gasoline', 'coupe', 2),
(483, 'Skyline R31', 127, 1986, '2021-12-17 10:24:39', 'https://i.imgur.com/XLHfRQs.jpg', 374, 465, 1300, 250, 'MANUAL', 'AWD', 9, 40000, 'gasoline', 'coupe', 2),
(484, 'Lancer EVO X MR', 134, 2012, '2021-12-19 23:55:13', 'https://i.imgur.com/PTRrLUS.jpg', 295, 398, 1695, 240, 'SEQUENTIAL', 'AWD', 7, 50000, 'gasoline', 'sedan', 4),
(485, 'Astra GTC VXR', 1253, 2012, '2021-12-22 15:22:22', 'https://i.imgur.com/XPd3kJh.jpg', 276, 400, 1595, 250, 'MANUAL', 'FWD', 9, 20000, 'gasoline', 'sedan', 3),
(486, 'Phantom', 1257, 2019, '2021-12-24 12:41:59', 'https://i.imgur.com/INQMaLT.jpg', 563, 900, 2700, 250, 'SEQUENTIAL', 'RWD', 8, 500000, 'gasoline', 'sedan', 5),
(487, 'Silvia S15 Garage Mak', 127, 2002, '2021-12-24 17:12:11', 'https://i.imgur.com/DfFGgac.jpg', 431, 474, 1212, 250, 'MANUAL', 'RWD', 9, 100000, 'gasoline', 'coupe', 2),
(488, 'C-One Motorsport MR-S', 131, 1999, '2021-12-25 00:34:36', 'https://i.imgur.com/G993eOS.jpg', 198, 203, 877, 238, 'MANUAL', 'RWD', 9, 40000, 'gasoline', 'coupe', 2),
(494, 'A110 Premiere Edition', 108, 2017, '2022-01-02 22:36:03', 'https://i.imgur.com/l1WQ2Ed.jpg', 252, 320, 1080, 250, 'SEQUENTIAL', 'RWD', 9, 40000, 'gasoline', 'coupe', 2),
(496, 'Chiron Super Sport 300＋', 1305, 2020, '2022-01-10 17:36:33', 'https://i.imgur.com/jOGnmKd.jpg', 1600, 1663, 1995, 480, 'SEQUENTIAL', 'AWD', 9, 1000000, 'gasoline', 'coupe', 2),
(498, '720S Spider', 124, 2019, '2022-01-11 13:19:07', 'https://i.imgur.com/tXu9IUq.jpg', 720, 770, 1332, 340, 'SEQUENTIAL', 'RWD', 9, 150000, 'gasoline', 'coupe', 2),
(513, 'F50', 114, 1995, '2022-05-26 17:43:38', 'https://www.formulapassion.it/wp-content/uploads/2020/03/Ferrari-F50.jpg', 800, 500, 1200, 250, 'MANUAL', 'RWD', 5, 500000, 'gasoline', 'coupe', 2),
(515, 'F40', 114, 1987, '2022-06-01 10:13:27', 'https://i.imgur.com/EkjbMjo.jpg', 478, 577, 1100, 320, 'MANUAL', 'RWD', 5, 800000, 'gasoline', 'coupe', 2),
(530, 'Urus', 142, 2018, '2022-06-13 11:08:13', 'https://i.imgur.com/5xsrtGo.jpg', 650, 850, 2154, 305, 'SEQUENTIAL', 'AWD', 5, 270000, 'gasoline', 'suv', 5),
(531, 'Noah', 131, 2022, '2022-06-13 12:28:27', 'https://i.imgur.com/NbbF9aF.jpg', 138, 140, 1700, 160, 'SEQUENTIAL', 'AWD', 4, 180000, 'hybrid', 'van', 5),
(532, 'Model S Plaid', 1352, 2020, '2022-06-14 12:58:10', 'https://i.imgur.com/VLMjcn9.jpg', 1020, 1424, 2162, 322, 'SEQUENTIAL', 'AWD', 5, 130000, 'electric', 'coupe', 4),
(533, 'SF90 Stradale', 114, 2019, '2022-06-14 13:03:05', 'https://i.imgur.com/43lJdQ6.jpg', 1000, 770, 1540, 340, 'SEQUENTIAL', 'RWD', 5, 430000, 'hybrid', 'coupe', 2),
(534, 'i8', 149, 2018, '2022-06-14 13:08:09', 'https://i.imgur.com/xpSWmAQ.jpg', 374, 570, 1670, 250, 'SEQUENTIAL', 'RWD', 5, 150, 'hybrid', 'coupe', 2),
(540, 'GR Yaris', 131, 2020, '2022-06-28 14:17:42', 'https://i.imgur.com/Rhnh2wT.jpg', 272, 396, 1260, 230, 'MANUAL', 'AWD', 5, 40000, 'gasoline', 'sedan', 3),
(541, 'Ypsilon', 178, 2020, '2022-07-02 08:02:17', 'https://i.imgur.com/wsz8EOq.jpg', 70, 92, 980, 140, 'MANUAL', 'FWD', 3, 16, 'methane', 'sedan', 5);

--
-- Trigger `cars`
--
DELIMITER $$
CREATE TRIGGER `cars_insert_log` AFTER INSERT ON `cars` FOR EACH ROW INSERT INTO car_logs(id_car, action) VALUES(NEW.id, 'Insert')
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struttura della tabella `car_categories`
--

CREATE TABLE `car_categories` (
  `id` int NOT NULL,
  `id_car` int NOT NULL,
  `category` enum('Endurance','Formula','Street','Vintage','GT','Prototype','Rally','Stock Car','Touring','Tuned') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `car_categories`
--

INSERT INTO `car_categories` (`id`, `id_car`, `category`) VALUES
(170, 226, 'Street'),
(140, 228, 'Street'),
(141, 228, 'Tuned'),
(98, 229, 'Street'),
(175, 230, 'Touring'),
(18, 232, 'Street'),
(13, 234, 'Street'),
(14, 234, 'Tuned'),
(181, 237, 'Street'),
(183, 237, 'Vintage'),
(182, 237, 'Tuned'),
(84, 238, 'Street'),
(80, 242, 'Street'),
(184, 244, 'Street'),
(185, 244, 'Tuned'),
(126, 245, 'Street'),
(202, 247, 'Street'),
(203, 247, 'Tuned'),
(311, 249, 'Street'),
(118, 251, 'Street'),
(200, 258, 'Street'),
(201, 258, 'Tuned'),
(208, 259, 'Street'),
(207, 259, 'Vintage'),
(32, 264, 'Street'),
(35, 266, 'Vintage'),
(36, 266, 'Tuned'),
(260, 267, 'Street'),
(261, 267, 'Tuned'),
(262, 268, 'Street'),
(112, 270, 'Street'),
(69, 271, 'Street'),
(70, 271, 'Vintage'),
(16, 272, 'Vintage'),
(336, 272, 'Touring'),
(206, 275, 'Street'),
(233, 280, 'Vintage'),
(232, 280, 'Rally'),
(306, 286, 'Street'),
(305, 286, 'Tuned'),
(195, 290, 'Street'),
(196, 290, 'Tuned'),
(204, 291, 'Street'),
(205, 291, 'Tuned'),
(75, 293, 'Street'),
(153, 298, 'Street'),
(177, 299, 'Street'),
(178, 300, 'Street'),
(174, 302, 'Touring'),
(288, 303, 'Street'),
(192, 304, 'Street'),
(191, 304, 'Vintage'),
(121, 309, 'Street'),
(96, 311, 'Street'),
(95, 311, 'Vintage'),
(211, 313, 'Street'),
(212, 313, 'Vintage'),
(109, 315, 'Street'),
(111, 315, 'Vintage'),
(110, 315, 'Tuned'),
(5, 316, 'Street'),
(264, 317, 'Street'),
(4072, 318, 'Street'),
(246, 319, 'Street'),
(247, 319, 'Tuned'),
(190, 320, 'Street'),
(157, 324, 'Street'),
(158, 324, 'Tuned'),
(53, 343, 'Street'),
(52, 343, 'Tuned'),
(83, 344, 'Street'),
(82, 344, 'Vintage'),
(115, 351, 'Street'),
(47, 352, 'Street'),
(48, 352, 'Tuned'),
(299, 353, 'Street'),
(259, 358, 'Street'),
(258, 358, 'Vintage'),
(4151, 359, 'Street'),
(176, 362, 'Street'),
(4115, 363, 'Street'),
(125, 364, 'Street'),
(307, 365, 'Street'),
(293, 366, 'Street'),
(292, 367, 'Street'),
(197, 369, 'Street'),
(199, 369, 'Vintage'),
(198, 369, 'Tuned'),
(287, 370, 'Street'),
(160, 371, 'Street'),
(154, 372, 'Street'),
(241, 373, 'Street'),
(240, 373, 'Vintage'),
(159, 374, 'Street'),
(116, 388, 'Street'),
(303, 390, 'Street'),
(302, 390, 'Vintage'),
(43, 396, 'Street'),
(42, 396, 'Tuned'),
(45, 397, 'Street'),
(44, 397, 'Tuned'),
(304, 398, 'Street'),
(234, 399, 'Street'),
(135, 400, 'Street'),
(296, 402, 'Street'),
(297, 402, 'Tuned'),
(59, 404, 'Street'),
(60, 404, 'Vintage'),
(155, 406, 'Street'),
(156, 406, 'Tuned'),
(4181, 409, 'Street'),
(4182, 409, 'Tuned'),
(291, 410, 'Street'),
(92, 412, 'Street'),
(91, 412, 'Vintage'),
(145, 413, 'Street'),
(144, 413, 'Vintage'),
(149, 416, 'Street'),
(147, 416, 'Vintage'),
(148, 416, 'Tuned'),
(239, 417, 'Street'),
(238, 417, 'Vintage'),
(143, 418, 'Street'),
(142, 418, 'Vintage'),
(423, 441, 'Street'),
(424, 442, 'Street'),
(425, 443, 'Street'),
(426, 444, 'Street'),
(1611, 445, 'Street'),
(1610, 445, 'Tuned'),
(1612, 446, 'Street'),
(1616, 447, 'Street'),
(1620, 448, 'Street'),
(1621, 448, 'Tuned'),
(2105, 449, 'Street'),
(2723, 459, 'Street'),
(2740, 461, 'Street'),
(2745, 462, 'Street'),
(2744, 462, 'Tuned'),
(4066, 463, 'Street'),
(4127, 464, 'Street'),
(2748, 465, 'Street'),
(4133, 466, 'Street'),
(3237, 467, 'Street'),
(3238, 467, 'Vintage'),
(3242, 468, 'Street'),
(3246, 469, 'Street'),
(3268, 470, 'Street'),
(3277, 472, 'Street'),
(3854, 477, 'Street'),
(3858, 478, 'Street'),
(3859, 478, 'Vintage'),
(3860, 479, 'Street'),
(3906, 480, 'Street'),
(3926, 483, 'Street'),
(3942, 484, 'Street'),
(3970, 486, 'Street'),
(4004, 487, 'Street'),
(4005, 487, 'Tuned'),
(4037, 488, 'Street'),
(4038, 488, 'Tuned'),
(4076, 494, 'Street'),
(4095, 496, 'Street'),
(4099, 498, 'Street');

-- --------------------------------------------------------

--
-- Struttura della tabella `car_logs`
--

CREATE TABLE `car_logs` (
  `id` int NOT NULL,
  `id_car` int DEFAULT NULL,
  `action` enum('Update','Insert') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `happened_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `car_logs`
--

INSERT INTO `car_logs` (`id`, `id_car`, `action`, `happened_at`) VALUES
(178, 445, 'Insert', '2021-12-01 09:52:00'),
(179, 446, 'Insert', '2021-12-01 09:56:39'),
(180, 447, 'Insert', '2021-12-01 10:17:42'),
(181, 448, 'Insert', '2021-12-01 10:21:33'),
(189, 449, 'Insert', '2021-12-01 23:24:03'),
(202, 459, 'Insert', '2021-12-06 12:10:21'),
(204, 461, 'Insert', '2021-12-07 14:40:36'),
(205, 462, 'Insert', '2021-12-07 22:29:37'),
(206, 463, 'Insert', '2021-12-07 22:32:44'),
(207, 464, 'Insert', '2021-12-07 22:35:41'),
(208, 465, 'Insert', '2021-12-07 22:41:07'),
(209, 466, 'Insert', '2021-12-07 22:49:48'),
(210, 352, 'Update', '2021-12-08 16:42:37'),
(211, 467, 'Insert', '2021-12-08 17:42:34'),
(212, 468, 'Insert', '2021-12-10 00:05:37'),
(213, 469, 'Insert', '2021-12-10 17:57:40'),
(214, 470, 'Insert', '2021-12-13 17:21:32'),
(216, 443, 'Update', '2021-12-13 18:11:00'),
(217, 472, 'Insert', '2021-12-14 14:10:25'),
(223, 463, 'Update', '2021-12-16 16:19:46'),
(224, 463, 'Update', '2021-12-16 16:21:08'),
(225, 463, 'Update', '2021-12-16 16:25:01'),
(226, 477, 'Insert', '2021-12-16 19:17:39'),
(227, 478, 'Insert', '2021-12-16 19:24:19'),
(228, 479, 'Insert', '2021-12-16 19:31:25'),
(229, 369, 'Update', '2021-12-16 22:57:39'),
(230, 480, 'Insert', '2021-12-16 23:07:22'),
(233, 483, 'Insert', '2021-12-17 10:24:39'),
(234, 484, 'Insert', '2021-12-19 23:55:12'),
(235, 485, 'Insert', '2021-12-22 15:22:21'),
(236, 486, 'Insert', '2021-12-24 12:41:58'),
(237, 441, 'Update', '2021-12-24 13:14:30'),
(242, 459, 'Update', '2021-12-24 16:55:13'),
(243, 487, 'Insert', '2021-12-24 17:12:10'),
(244, 488, 'Insert', '2021-12-25 00:34:36'),
(250, 318, 'Update', '2022-01-01 09:51:50'),
(251, 494, 'Insert', '2022-01-02 22:36:02'),
(254, 496, 'Insert', '2022-01-10 17:36:32'),
(255, 498, 'Insert', '2022-01-11 13:19:06'),
(257, 363, 'Update', '2022-01-22 10:45:45'),
(259, 464, 'Update', '2022-01-27 14:57:08'),
(260, 466, 'Update', '2022-01-27 14:57:56'),
(267, 409, 'Update', '2022-02-10 10:31:44'),
(274, 513, 'Insert', '2022-05-26 17:43:38'),
(275, 515, 'Insert', '2022-06-01 10:13:27'),
(281, 530, 'Insert', '2022-06-13 11:08:13'),
(282, 531, 'Insert', '2022-06-13 12:28:27'),
(283, 532, 'Insert', '2022-06-14 12:58:10'),
(284, 533, 'Insert', '2022-06-14 13:03:05'),
(285, 534, 'Insert', '2022-06-14 13:08:09'),
(288, 540, 'Insert', '2022-06-28 14:17:42'),
(289, 541, 'Insert', '2022-07-02 08:02:17');

-- --------------------------------------------------------

--
-- Struttura stand-in per le viste `car_logs_view`
-- (Vedi sotto per la vista effettiva)
--
CREATE TABLE `car_logs_view` (
`model` text
,`brand` text
,`year` year
,`id` int
,`action` enum('Update','Insert')
,`happened_at` timestamp
);

-- --------------------------------------------------------

--
-- Struttura stand-in per le viste `car_mods`
-- (Vedi sotto per la vista effettiva)
--
CREATE TABLE `car_mods` (
`id` int
,`model` text
,`id_brand` int
,`year` year
,`created_at` timestamp
,`updated_at` timestamp
,`image` text
,`bhp` int
,`torque` int
,`weight` int
,`top_speed` int
,`transmission` enum('SEQUENTIAL','MANUAL')
,`drivetrain` enum('AWD','RWD','FWD')
,`rating` int
,`price` int
,`fuel_type` enum('hybrid','gasoline','diesel','electric','gpl','methane')
,`car_type` enum('convertible','sedan','station_wagon','suv','van','coupe')
,`doors` smallint
,`brand` text
,`nation` text
);

-- --------------------------------------------------------

--
-- Struttura della tabella `manufacturers`
--

CREATE TABLE `manufacturers` (
  `id` int NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_nation` int NOT NULL,
  `logo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `manufacturers`
--

INSERT INTO `manufacturers` (`id`, `name`, `id_nation`, `logo`) VALUES
(105, 'Alfa Romeo', 43, 'https://i.imgur.com/uyw0smL.png'),
(107, 'Austin', 44, 'https://i.imgur.com/kWTkDTe.png'),
(108, 'Alpine', 47, 'https://i.imgur.com/XLaQquT.png'),
(109, 'Audi', 48, 'https://i.imgur.com/uw3WSXe.png'),
(111, 'Chevrolet', 49, 'https://i.imgur.com/uLNj72Y.png'),
(113, 'Dodge', 49, 'https://i.imgur.com/cSPbveF.png'),
(114, 'Ferrari', 43, 'https://i.imgur.com/wgV3SWp.png'),
(115, 'Fiat', 43, 'https://i.imgur.com/RK5gzrL.png'),
(116, 'Ford', 49, 'https://i.imgur.com/6Herzt1.png'),
(118, 'Volkswagen', 48, 'https://i.imgur.com/ZrXO9dw.png'),
(119, 'Honda', 50, 'https://i.imgur.com/SPU609g.png'),
(121, 'Jaguar', 44, 'https://i.imgur.com/8Ajv9Z3.png'),
(124, 'McLaren', 44, 'https://i.imgur.com/hYiBINO.png'),
(125, 'Mercedes', 48, 'https://i.imgur.com/Hnh80aC.png'),
(126, 'Mini', 44, 'https://i.imgur.com/CH9BTDp.png'),
(127, 'Nissan', 50, 'https://i.imgur.com/o1pHdok.png'),
(128, 'Peugeot', 47, 'https://i.imgur.com/mIldIGW.png'),
(129, 'Porsche', 48, 'https://i.imgur.com/uXDaVbD.png'),
(130, 'Renault', 47, 'https://i.imgur.com/MV7zRO8.png'),
(131, 'Toyota', 50, 'https://i.imgur.com/fGvZzfx.png'),
(133, 'Mazda', 50, 'https://i.imgur.com/XTxcdCu.png'),
(134, 'Mitsubishi', 50, 'https://i.imgur.com/j3pARc1.png'),
(135, 'Subaru', 50, 'https://i.imgur.com/jkml7Oj.png'),
(136, 'Suzuki', 50, 'https://i.imgur.com/MrRjUV8.png'),
(142, 'Lamborghini', 43, 'https://i.imgur.com/x5yWcyT.png'),
(143, 'Acura', 50, 'https://i.imgur.com/hUr7TWx.png'),
(145, 'Aston Martin', 44, 'https://i.imgur.com/FH9x3Ts.png'),
(146, 'Dallara', 43, 'https://i.imgur.com/E9fR0jA.png'),
(149, 'BMW', 48, 'https://i.imgur.com/7PmcKjg.png'),
(150, 'Volvo', 75, 'https://i.imgur.com/HEEBy4t.png'),
(153, 'Buick', 49, 'https://i.imgur.com/DzivM2l.png'),
(178, 'Lancia', 43, 'https://i.imgur.com/qzPtblU.png'),
(1102, 'Zhonghua', 1369, 'https://i.imgur.com/ltKv4I9.png'),
(1238, 'Daihatsu', 50, 'https://i.imgur.com/iCWEg2l.png'),
(1253, 'Vauxhall', 44, 'https://i.imgur.com/unI0a53.png'),
(1257, 'Rolls-Royce', 44, 'https://i.imgur.com/sNTHaHs.png'),
(1305, 'Bugatti', 47, 'https://i.imgur.com/8vYarrK.png'),
(1352, 'Tesla', 49, 'https://i.imgur.com/nBBKK56.png');

-- --------------------------------------------------------

--
-- Struttura della tabella `nations`
--

CREATE TABLE `nations` (
  `id` int NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `code` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `nations`
--

INSERT INTO `nations` (`id`, `name`, `code`) VALUES
(43, 'Italy', 'it'),
(44, 'UK', 'gb'),
(45, 'Portugal', 'pt'),
(46, 'Bahrain', 'bh'),
(47, 'France', 'fr'),
(48, 'Germany', 'gr'),
(49, 'USA', 'us'),
(50, 'Japan', 'jp'),
(51, 'Austria', 'at'),
(52, 'Spain', 'es'),
(53, 'Azerbaijan', 'az'),
(54, 'Australia', 'au'),
(55, 'Canada', 'ca'),
(56, 'Netherlands', 'nl'),
(57, 'Monaco', 'mc'),
(58, 'Hungary', 'hu'),
(59, 'Brazil', 'br'),
(60, 'Turkey', 'tr'),
(61, 'South Africa', 'za'),
(62, 'Macedonia', 'mk'),
(63, 'Hong Kong', 'hk'),
(64, 'Singapore', 'sg'),
(65, 'Russian Federation', 'ru'),
(66, 'United Arab Emirates', 'ae'),
(67, 'Latvia', 'lv'),
(68, 'Switzerland', 'ch'),
(69, 'China', 'ca'),
(70, 'Montenegro', 'me'),
(71, 'Bosnia and Herzegovina', 'ba'),
(72, 'Serbia', 'rs'),
(73, 'Croatia', 'hr'),
(74, 'Scotland', 'gb-sct'),
(75, 'Sweden', 'se'),
(76, 'Poland', 'pl'),
(77, 'Belgium', 'be'),
(78, 'Thailand', 'th'),
(79, 'Czech Republic', 'cz'),
(80, 'Mexico', 'mx'),
(81, 'South Korea', 'kr'),
(82, 'Slovakia', 'sk'),
(83, 'Ireland', 'ie'),
(120, 'Finland', 'fi'),
(1201, 'Kazakhstan', 'kz'),
(1369, 'Cina', 'cn'),
(1554, 'Saint Vincent and the Grenadines', 'sv'),
(1649, 'Russia', 'ru');

-- --------------------------------------------------------

--
-- Struttura della tabella `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `id_user` int NOT NULL,
  `id_car` int NOT NULL,
  `id_user_address` int NOT NULL,
  `state` enum('taken_in_charge','delivering','delivered','pending_payment_confirm') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `quantity` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Trigger `orders`
--
DELIMITER $$
CREATE TRIGGER `order_insert_log` AFTER INSERT ON `orders` FOR EACH ROW INSERT INTO orders_logs(state, id_order) VALUES("pending_payment_confirm", NEW.id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `order_update_log` AFTER UPDATE ON `orders` FOR EACH ROW BEGIN
    IF (OLD.state != NEW.state) THEN
        INSERT INTO orders_logs(id_order, state) VALUES(NEW.id, NEW.state);
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struttura della tabella `orders_logs`
--

CREATE TABLE `orders_logs` (
  `id` int NOT NULL,
  `id_order` int NOT NULL,
  `state` enum('delivered','delivering','taken_in_charge','pending_payment_confirm') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura stand-in per le viste `orders_view`
-- (Vedi sotto per la vista effettiva)
--
CREATE TABLE `orders_view` (
`id` int
,`id_user` int
,`id_car` int
,`state` enum('taken_in_charge','delivering','delivered','pending_payment_confirm')
,`quantity` int
,`id_user_address` int
,`costumer` varchar(50)
,`product` mediumtext
,`image` text
,`price` bigint
);

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `role` enum('base','premium','admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `salt` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `credit` int NOT NULL DEFAULT '1000000',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `avatar_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `salt`, `credit`, `name`, `last_name`, `avatar_image`) VALUES
(10, 'prova', '1fc415f73245e74fdc47d249b0393ccf1a7ba5fcf3e72bc8b20128b7', 'base', 'OfnWVgpzuLVkd5XibAIiYffaSXbytv', 1000000, 'prova', 'prova', 'https://i.imgur.com/FBB2A6C.jpg'),
(12, 'utente', '4f3368efd220fa7e3a9eecf9b89da00afc9e8b2c5113823b47f35b29', 'base', 'lGShRC5vVqpDrYcC1a3KcJKDKeUiDO', 860000, 'utente', 'utente', 'https://i.imgur.com/FBB2A6C.jpg'),
(14, 'user', 'c98c9e2170120d36b7d59dd4d515adf7e5772154d0368dbfcfe2ac87', 'base', 'psfLxLvZtk8PUcGds9antxHKNq36Sp', 330000, 'user', 'user', 'https://i.imgur.com/FBB2A6C.jpg'),
(15, 'davbaldelli', '3f10414e14de5b693b9d5587688fc7216ba9dfe8d156bd55df5328b3', 'admin', '6nBj7Y90rFTVO32OjZeH7XK3ypugTJ', 240000, 'Davide', 'Baldelli', 'https://i.imgur.com/FBB2A6C.jpg'),
(17, 'admin', 'b79bca434b21833094f4433320ffe1574a22459427881e677f78c851', 'admin', 'LlBHIs7Tvv1O83tC2gavgbv5Nl8pGZ', 600000, 'admin', 'admin', 'https://i.imgur.com/FBB2A6C.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `users_delivering_addresses`
--

CREATE TABLE `users_delivering_addresses` (
  `id` int NOT NULL,
  `id_user` int NOT NULL,
  `id_country` int NOT NULL,
  `first_name` text COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` text COLLATE utf8mb4_general_ci NOT NULL,
  `administrative_area` text COLLATE utf8mb4_general_ci NOT NULL COMMENT 'State / Province / Region',
  `locality` text COLLATE utf8mb4_general_ci NOT NULL COMMENT 'City / Town',
  `postal_code` text COLLATE utf8mb4_general_ci NOT NULL,
  `address_line_1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Street address',
  `address_line_2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Apartment, Suite, Box number, etc.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `users_delivering_addresses`
--

INSERT INTO `users_delivering_addresses` (`id`, `id_user`, `id_country`, `first_name`, `last_name`, `administrative_area`, `locality`, `postal_code`, `address_line_1`, `address_line_2`) VALUES
(2, 10, 43, 'Davide', 'Baldelli', 'FC', 'Cesena', '47521', 'Via Cesare Pavese', '50'),
(6, 14, 43, 'Utente', 'Utente', 'RN', 'Santarcangelo Di Romagna', '47822', 'Via Del Pioppo', '40'),
(8, 15, 43, 'Davide', 'Baldelli', 'Rimini', 'Santarcangelo Di Romagna', '47822', 'Via Garibaldi 40', ''),
(9, 14, 43, 'Davide', 'Baldelli', 'Rimini', 'Santaracangelo Di Romagna', '47822', 'Via Mazzini 2 ', ''),
(11, 12, 43, 'Davide', 'Baldelli', 'Rimini', 'Santarcangelo Di Romagna', '47822', 'Via Martini ', '35'),
(12, 17, 43, 'admin', 'admin', 'RN', 'Santarcangelo Di Romagna', '47822', 'Via Mazzini 2', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `users_notifications`
--

CREATE TABLE `users_notifications` (
  `id` int NOT NULL,
  `watched` tinyint(1) NOT NULL DEFAULT '0',
  `title` text COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_user` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `users_notifications`
--

INSERT INTO `users_notifications` (`id`, `watched`, `title`, `description`, `timestamp`, `id_user`) VALUES
(37, 1, 'Order Update', 'The order n. 13 now is in the current state: delivered', '2022-06-01 09:56:21', 12),
(38, 1, 'Order Update', 'The order n. 13 now is in the current state: delivering', '2022-06-01 10:07:03', 12),
(39, 0, 'Order Update', 'The order n. 26 now is in the current state: taken_in_charge', '2022-06-01 14:21:02', 10),
(40, 0, 'Order Update', 'The order n. 26 now is in the current state: delivering', '2022-06-01 14:21:03', 10),
(41, 0, 'Order Update', 'The order n. 25 now is in the current state: taken_in_charge', '2022-06-01 14:21:04', 10),
(42, 0, 'Order Update', 'The order n. 25 now is in the current state: delivering', '2022-06-01 14:21:04', 10),
(43, 0, 'Order Update', 'The order n. 25 now is in the current state: delivered', '2022-06-01 14:21:11', 10),
(44, 0, 'Order Update', 'The order n. 25 now is in the current state: delivering', '2022-06-01 14:33:07', 10),
(45, 0, 'Order Update', 'The order n. 25 now is in the current state: taken_in_charge', '2022-06-01 14:33:07', 10),
(46, 0, 'Order Update', 'The order n. 25 now is in the current state: pending_payment_confirm', '2022-06-01 14:33:07', 10),
(47, 0, 'Order Update', 'The order n. 25 now is in the current state: taken_in_charge', '2022-06-01 14:33:07', 10),
(48, 0, 'Order Update', 'The order n. 25 now is in the current state: delivering', '2022-06-01 14:33:08', 10),
(49, 0, 'Order Update', 'The order n. 25 now is in the current state: taken_in_charge', '2022-06-01 14:33:08', 10),
(50, 0, 'Order Update', 'The order n. 25 now is in the current state: delivering', '2022-06-01 14:33:08', 10),
(51, 0, 'Order Update', 'The order n. 26 now is in the current state: taken_in_charge', '2022-06-01 14:33:09', 10),
(52, 0, 'Order Update', 'The order n. 26 now is in the current state: pending_payment_confirm', '2022-06-01 14:33:10', 10),
(53, 0, 'Order Update', 'The order n. 26 now is in the current state: taken_in_charge', '2022-06-01 14:33:10', 10),
(54, 0, 'Order Update', 'The order n. 26 now is in the current state: delivering', '2022-06-01 14:33:10', 10),
(55, 0, 'Order Update', 'The order n. 26 now is in the current state: delivered', '2022-06-01 14:33:11', 10),
(56, 0, 'Order Update', 'The order n. 26 now is in the current state: delivering', '2022-06-01 14:33:12', 10),
(57, 0, 'Order Update', 'The order n. 25 now is in the current state: delivered', '2022-06-01 14:33:15', 10),
(58, 1, 'Order Update', 'The order n. 28 now is in the current state: taken_in_charge', '2022-06-03 13:13:30', 14),
(59, 1, 'Order Update', 'The order n. 27 now is in the current state: taken_in_charge', '2022-06-03 13:13:31', 14),
(60, 1, 'Order Update', 'The order n. 28 now is in the current state: delivering', '2022-06-03 13:13:35', 14),
(61, 1, 'Order Update', 'The order n. 27 now is in the current state: delivering', '2022-06-03 13:13:36', 14),
(62, 1, 'Order Update', 'The order n. 29 now is in the current state: taken_in_charge', '2022-06-03 13:24:56', 14),
(63, 1, 'Order Update', 'The order n. 29 now is in the current state: delivering', '2022-06-03 13:24:56', 14),
(64, 1, 'Order Update', 'The order n. 29 now is in the current state: delivered', '2022-06-03 13:24:56', 14),
(65, 1, 'Order Update', 'The order n. 40 now is in the current state: taken_in_charge', '2022-06-07 13:43:15', 14),
(66, 1, 'Order Update', 'The order n. 41 now is in the current state: taken_in_charge', '2022-06-07 13:43:17', 14),
(67, 1, 'Order Update', 'The order n. 41 now is in the current state: delivering', '2022-06-07 13:43:19', 14),
(68, 1, 'Order Update', 'The order n. 41 now is in the current state: delivered', '2022-06-07 13:43:20', 14),
(69, 1, 'Order Update', 'The order n. 41 now is in the current state: delivering', '2022-06-07 13:43:21', 14),
(70, 1, 'Order Update', 'The order n. 40 now is in the current state: delivering', '2022-06-07 13:43:25', 14),
(71, 1, 'Order Update', 'The order n. 40 now is in the current state: delivered', '2022-06-07 13:43:25', 14),
(72, 1, 'Order Update', 'The order n. 40 now is in the current state: delivering', '2022-06-07 13:43:26', 14),
(73, 1, 'Order Update', 'The order n. 40 now is in the current state: taken_in_charge', '2022-06-07 13:43:27', 14),
(74, 1, 'Order Update', 'The order n. 40 now is in the current state: delivering', '2022-06-07 13:43:27', 14),
(75, 1, 'Order Update', 'The order n. 40 now is in the current state: delivered', '2022-06-07 13:43:30', 14),
(76, 1, 'Order Update', 'The order n. 41 now is in the current state: taken_in_charge', '2022-06-10 08:05:23', 14),
(77, 1, 'Order Update', 'The order n. 44 now is in the current state: taken_in_charge', '2022-06-10 08:28:19', 14),
(80, 1, 'Order Update', 'The order n. 53 now is in the current state: taken_in_charge', '2022-06-28 15:15:56', 15),
(81, 1, 'Order Update', 'The order n. 53 now is in the current state: delivering', '2022-06-28 15:16:06', 15),
(82, 1, 'Order Update', 'The order n. 53 now is in the current state: delivered', '2022-06-28 15:19:58', 15),
(83, 1, 'Order Update', 'The order n. 54 now is in the current state: taken_in_charge', '2022-06-28 15:20:00', 15),
(84, 1, 'Order Update', 'The order n. 54 now is in the current state: delivering', '2022-06-28 15:20:00', 15),
(85, 1, 'Order Update', 'The order n. 53 now is in the current state: delivering', '2022-06-28 15:33:45', 15),
(86, 1, 'Order Update', 'The order n. 54 now is in the current state: taken_in_charge', '2022-06-28 15:33:46', 15),
(87, 1, 'Order Update', 'The order n. 53 now is in the current state: taken_in_charge', '2022-06-28 15:33:46', 15),
(88, 1, 'Order Update', 'The order n. 54 now is in the current state: pending_payment_confirm', '2022-06-28 15:33:46', 15),
(89, 1, 'Order Update', 'The order n. 53 now is in the current state: delivering', '2022-06-28 15:33:50', 15),
(90, 1, 'Order Update', 'The order n. 54 now is in the current state: taken_in_charge', '2022-06-28 15:33:50', 15),
(91, 1, 'Order Update', 'The order n. 53 now is in the current state: delivered', '2022-06-28 15:37:01', 15),
(92, 1, 'Order Update', 'The order n. 54 now is in the current state: delivering', '2022-06-28 15:37:02', 15),
(93, 1, 'Order Update', 'The order n. 54 now is in the current state: delivered', '2022-06-28 15:37:03', 15),
(94, 1, 'Order Update', 'The order n. 54 now is in the current state: delivering', '2022-06-28 15:39:41', 15),
(95, 1, 'Order Update', 'The order n. 54 now is in the current state: taken_in_charge', '2022-06-28 15:39:41', 15),
(96, 1, 'Order Update', 'The order n. 54 now is in the current state: pending_payment_confirm', '2022-06-28 15:39:41', 15),
(97, 1, 'Order Update', 'The order n. 53 now is in the current state: delivering', '2022-06-28 15:39:41', 15),
(98, 1, 'Order Update', 'The order n. 53 now is in the current state: taken_in_charge', '2022-06-28 15:39:41', 15),
(99, 1, 'Order Update', 'The order n. 57 now is in the current state: taken_in_charge', '2022-07-01 06:58:26', 15),
(100, 1, 'Order Update', 'The order n. 57 now is in the current state: delivering', '2022-07-01 06:58:26', 15),
(101, 1, 'Order Update', 'The order n. 56 now is in the current state: taken_in_charge', '2022-07-01 06:58:26', 15),
(102, 1, 'Order Update', 'The order n. 56 now is in the current state: delivering', '2022-07-01 06:58:27', 15),
(103, 1, 'Order Update', 'The order n. 58 now is in the current state: taken_in_charge', '2022-07-01 12:47:38', 15),
(104, 1, 'Order Update', 'The order n. 58 now is in the current state: delivering', '2022-07-01 12:47:39', 15),
(105, 1, 'Order Update', 'The order n. 58 now is in the current state: delivered', '2022-07-01 12:47:39', 15),
(106, 1, 'Order Update', 'The order n. 59 now is in the current state: taken_in_charge', '2022-07-01 12:47:40', 15),
(107, 1, 'Order Update', 'The order n. 59 now is in the current state: delivering', '2022-07-01 12:47:40', 15),
(108, 1, 'Order Update', 'The order n. 59 now is in the current state: delivered', '2022-07-01 12:47:41', 15),
(109, 1, 'Order Update', 'The order n. 59 now is in the current state: delivering', '2022-07-01 12:47:42', 15),
(110, 0, 'Order Update', 'The order n. 64 now is in the current state: taken_in_charge', '2022-07-02 08:14:58', 15),
(111, 0, 'Order Update', 'The order n. 64 now is in the current state: delivering', '2022-07-02 08:14:59', 15),
(112, 0, 'Order Update', 'The order n. 64 now is in the current state: delivered', '2022-07-02 09:51:32', 15),
(113, 0, 'Order Update', 'The order n. 63 now is in the current state: taken_in_charge', '2022-07-02 09:51:32', 15),
(114, 0, 'Order Update', 'The order n. 64 now is in the current state: delivering', '2022-07-02 09:51:33', 15),
(115, 0, 'Order Update', 'The order n. 64 now is in the current state: taken_in_charge', '2022-07-02 09:51:33', 15),
(116, 0, 'Order Update', 'The order n. 63 now is in the current state: pending_payment_confirm', '2022-07-02 09:51:33', 15),
(117, 1, 'Order Update', 'The order n. 65 now is in the current state: Taken in charge', '2022-07-02 09:53:56', 17),
(118, 0, 'Order Update', 'The order n. 64 now is in the current state: In transit', '2022-07-02 09:53:57', 15),
(119, 1, 'Order Update', 'The order n. 65 now is in the current state: In transit', '2022-07-02 09:53:58', 17),
(120, 0, 'Order Update', 'The order n. 64 now is in the current state: Taken in charge', '2022-07-02 09:53:59', 15);

-- --------------------------------------------------------

--
-- Struttura per vista `car_logs_view`
--
DROP TABLE IF EXISTS `car_logs_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `car_logs_view`  AS  select `cars`.`model` AS `model`,`m`.`name` AS `brand`,`cars`.`year` AS `year`,`cars`.`id` AS `id`,`cl`.`action` AS `action`,`cl`.`happened_at` AS `happened_at` from ((`cars` join `manufacturers` `m` on((`cars`.`id_brand` = `m`.`id`))) join `car_logs` `cl` on((`cars`.`id` = `cl`.`id_car`))) ;

-- --------------------------------------------------------

--
-- Struttura per vista `car_mods`
--
DROP TABLE IF EXISTS `car_mods`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `car_mods`  AS  select `cars`.`id` AS `id`,`cars`.`model` AS `model`,`cars`.`id_brand` AS `id_brand`,`cars`.`year` AS `year`,`cars`.`created_at` AS `created_at`,`cars`.`updated_at` AS `updated_at`,`cars`.`image` AS `image`,`cars`.`bhp` AS `bhp`,`cars`.`torque` AS `torque`,`cars`.`weight` AS `weight`,`cars`.`top_speed` AS `top_speed`,`cars`.`transmission` AS `transmission`,`cars`.`drivetrain` AS `drivetrain`,`cars`.`rating` AS `rating`,`cars`.`price` AS `price`,`cars`.`fuel_type` AS `fuel_type`,`cars`.`car_type` AS `car_type`,`cars`.`doors` AS `doors`,`manufacturers`.`name` AS `brand`,`nations`.`name` AS `nation` from ((`cars` join `manufacturers` on((`manufacturers`.`id` = `cars`.`id_brand`))) join `nations` on((`nations`.`id` = `manufacturers`.`id_nation`))) ;

-- --------------------------------------------------------

--
-- Struttura per vista `orders_view`
--
DROP TABLE IF EXISTS `orders_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `orders_view`  AS  select `orders`.`id` AS `id`,`orders`.`id_user` AS `id_user`,`orders`.`id_car` AS `id_car`,`orders`.`state` AS `state`,`orders`.`quantity` AS `quantity`,`orders`.`id_user_address` AS `id_user_address`,`users`.`username` AS `costumer`,concat(`manufacturers`.`name`,' ',`cars`.`model`) AS `product`,`cars`.`image` AS `image`,(`orders`.`quantity` * `cars`.`price`) AS `price` from (((`orders` join `users` on((`users`.`id` = `orders`.`id_user`))) join `cars` on((`cars`.`id` = `orders`.`id_car`))) join `manufacturers` on((`manufacturers`.`id` = `cars`.`id_brand`))) ;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `model` (`model`(192),`id_brand`,`year`),
  ADD KEY `id_brand` (`id_brand`);

--
-- Indici per le tabelle `car_categories`
--
ALTER TABLE `car_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_car` (`id_car`,`category`);

--
-- Indici per le tabelle `car_logs`
--
ALTER TABLE `car_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cars_logs_cars_id_fk` (`id_car`);

--
-- Indici per le tabelle `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`(192)),
  ADD KEY `id_nation` (`id_nation`);

--
-- Indici per le tabelle `nations`
--
ALTER TABLE `nations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`(192));

--
-- Indici per le tabelle `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_car` (`id_car`),
  ADD KEY `orders_ibfk_2` (`id_user`),
  ADD KEY `id_user_address` (`id_user_address`);

--
-- Indici per le tabelle `orders_logs`
--
ALTER TABLE `orders_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_order` (`id_order`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indici per le tabelle `users_delivering_addresses`
--
ALTER TABLE `users_delivering_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_country` (`id_country`);

--
-- Indici per le tabelle `users_notifications`
--
ALTER TABLE `users_notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=542;

--
-- AUTO_INCREMENT per la tabella `car_categories`
--
ALTER TABLE `car_categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4223;

--
-- AUTO_INCREMENT per la tabella `car_logs`
--
ALTER TABLE `car_logs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=290;

--
-- AUTO_INCREMENT per la tabella `manufacturers`
--
ALTER TABLE `manufacturers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1353;

--
-- AUTO_INCREMENT per la tabella `nations`
--
ALTER TABLE `nations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1739;

--
-- AUTO_INCREMENT per la tabella `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT per la tabella `orders_logs`
--
ALTER TABLE `orders_logs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;

--
-- AUTO_INCREMENT per la tabella `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT per la tabella `users_delivering_addresses`
--
ALTER TABLE `users_delivering_addresses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT per la tabella `users_notifications`
--
ALTER TABLE `users_notifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`id_brand`) REFERENCES `manufacturers` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limiti per la tabella `car_categories`
--
ALTER TABLE `car_categories`
  ADD CONSTRAINT `car_categories_ibfk_1` FOREIGN KEY (`id_car`) REFERENCES `cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `car_logs`
--
ALTER TABLE `car_logs`
  ADD CONSTRAINT `cars_logs_cars_id_fk` FOREIGN KEY (`id_car`) REFERENCES `cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD CONSTRAINT `manufacturers_ibfk_1` FOREIGN KEY (`id_nation`) REFERENCES `nations` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limiti per la tabella `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_car`) REFERENCES `cars` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`id_user_address`) REFERENCES `users_delivering_addresses` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limiti per la tabella `orders_logs`
--
ALTER TABLE `orders_logs`
  ADD CONSTRAINT `orders_logs_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `users_delivering_addresses`
--
ALTER TABLE `users_delivering_addresses`
  ADD CONSTRAINT `users_delivering_addresses_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_delivering_addresses_ibfk_2` FOREIGN KEY (`id_country`) REFERENCES `nations` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limiti per la tabella `users_notifications`
--
ALTER TABLE `users_notifications`
  ADD CONSTRAINT `users_notifications_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
