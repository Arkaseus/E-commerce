-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2023 at 12:50 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `u_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL,
  `cart` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`cart`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`u_id`, `name`, `email`, `pass`, `cart`) VALUES
(1, 'akash', 'akash@gmail.com', 'Kratos@123', '[{\"p_id\":38,\"name\":\"new\",\"imgurl\":\"b26e8a98313df557b63dba349f390124\",\"price\":499,\"quantity\":1},{\"p_id\":37,\"name\":\"Acer Nitro 7\",\"imgurl\":\"3cbb1e38e9cbb53ac06d4ee73d288076\",\"price\":57000,\"quantity\":1}]');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `p_id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `imgurl` text DEFAULT NULL,
  `des` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`p_id`, `name`, `imgurl`, `des`, `price`, `stock`) VALUES
(37, 'Acer Nitro 7', '3cbb1e38e9cbb53ac06d4ee73d288076', 'This laptop comes with Windows 10 installed and has an Intel core i7. The processor speed of the laptop is 2.6 GHz, and the RAM is 16GB.\n\nNvidia GeForce GTX 1650 is the graphics card installed on the laptop, and the storage capacity is 512GB. The screen size of the laptop is 15.6 inches, and the resolution is 1920×1080.', 57000, 12),
(38, 'new', '1a26aeaf77122109752ac56baa72644a', 'dsfalnmsfd dskdskjlkljdsfakljas ', 499, 56),
(39, 'Keyboard', 'e7f3afc6939e44d7b1f76754f61ab9c1', 'Why settle for mediocrity? Leap forward into SkyTech Legacy II series with the newest architectures from INTEL and NVIDIA. Powered by INTEL CORE i7 Chipset, this 8-core processor delivers great performance with a base speed of 3.6 Ghz.. SkyTech Legacy II delivers the best price performance value gaming rig in the market.', 999, 23);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`u_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`p_id`),
  ADD UNIQUE KEY `p_id` (`p_id`),
  ADD KEY `p_id_2` (`p_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
