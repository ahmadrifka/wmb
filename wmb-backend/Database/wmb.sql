-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Nov 2019 pada 03.18
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wmb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cashier`
--

CREATE TABLE `cashier` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `cashier`
--

INSERT INTO `cashier` (`id`, `name`, `password`) VALUES
(1, 'Miftah', 'miftah123'),
(2, 'Bang Ayi', 'bangayi1996');

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `menu`
--

INSERT INTO `menu` (`id`, `name`, `price`, `image`) VALUES
(1, 'Ayam Goreng', 15000, 'http://www.dapurkobe.co.id/wp-content/uploads/ayam-goreng-terasi.jpg'),
(2, 'Nasi Goreng', 15000, 'http://www.dapurkobe.co.id/wp-content/uploads/nasi-goreng-teri.jpg'),
(3, 'Lemon Tea', 7000, 'https://nishamadhulika.in/wp-content/uploads/2019/04/2289.jpg'),
(4, 'Green Tea', 8000, 'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2017/01/green-tea.jpg'),
(5, 'Coffee', 6000, 'https://c.ndtvimg.com/2019-03/89f6dc5_coffee_625x300_15_March_19.jpg'),
(6, 'Nasi Ulam', 7000, 'http://www.nadipos.com/blog/wp-content/uploads/2017/09/nasi-ulam.jpg'),
(7, 'Bakso', 12000, 'https://baksojwr.com/wp-content/uploads/2018/02/3-1.jpg'),
(8, 'Bakmie', 20000, 'https://cdn2.tstatic.net/travel/foto/bank/images/bakmi-legendaris_20171023_075847.jpg'),
(9, 'Es Kelapa', 5000, 'https://mmc.tirto.id/image/otf/500x0/2017/06/08/es-kelapa-istock_ratio-16x9.JPG'),
(10, 'Nasi Uduk', 9000, 'https://www.resepmami.info/wp-content/uploads/2019/04/nasi-uduk-sederhana.jpg'),
(13, 'Mie Goreng', 12000, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `transaction_id` int(11) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `qty` int(20) DEFAULT NULL,
  `total` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `transaction_id`, `menu_id`, `qty`, `total`) VALUES
(157, 1, 1, 2, 30000),
(158, 2, 1, 1, 15000),
(159, 2, 2, 1, 15000),
(160, 3, 8, 2, 40000),
(161, 3, 1, 2, 30000),
(162, 3, 4, 2, 16000),
(163, 3, 10, 2, 18000),
(164, 4, 10, 3, 27000),
(165, 4, 8, 2, 40000),
(166, 4, 10, 1, 9000),
(167, 4, 9, 2, 10000),
(168, 4, 8, 1, 20000),
(169, 4, 5, 3, 18000),
(170, 4, 5, 3, 18000),
(171, 5, 8, 3, 60000),
(172, 5, 9, 2, 10000),
(173, 5, 7, 1, 12000),
(174, 5, 7, 1, 12000),
(175, 6, 8, 1, 20000),
(176, 6, 9, 2, 10000),
(177, 6, 7, 1, 12000),
(178, 6, 7, 1, 12000),
(179, 1, 9, 3, 15000),
(180, 1, 8, 2, 40000),
(181, 1, 10, 1, 9000),
(182, 1, 10, 1, 9000),
(183, 3, 7, 5, 60000),
(184, 3, 10, 1, 9000),
(185, 3, 3, 12, 84000),
(186, 3, 3, 12, 84000),
(187, 4, 2, 2, 30000),
(188, 4, 9, 3, 15000),
(189, 4, 8, 2, 40000),
(190, 4, 8, 2, 40000),
(191, 5, 10, 2, 18000),
(192, 6, 10, 2, 18000),
(193, 6, 9, 2, 10000),
(194, 6, 10, 3, 27000),
(195, 7, 10, 2, 18000),
(196, 7, 7, 1, 12000),
(197, 8, 10, 1, 9000),
(198, 9, 8, 3, 60000),
(199, 9, 9, 2, 10000),
(200, 10, 8, 2, 40000),
(201, 10, 9, 2, 10000),
(202, 11, 7, 2, 24000),
(203, 11, 8, 1, 20000),
(204, 12, 8, 2, 40000),
(205, 12, 9, 4, 20000),
(206, 12, 2, 1, 15000),
(207, 13, 8, 4, 80000),
(208, 13, 9, 3, 15000),
(209, 2, 10, 2, 18000),
(210, 3, 9, 50, 250000),
(211, 2, 8, 2, 40000),
(212, 4, 8, 2, 40000),
(213, 5, 8, 2, 40000),
(214, 5, 9, 3, 15000),
(215, 6, 8, 2, 40000),
(216, 6, 9, 3, 15000),
(217, 6, 10, 1, 9000),
(218, 6, 7, 1, 12000),
(219, 6, 8, 1, 20000),
(220, 7, 10, 3, 27000),
(221, 7, 9, 5, 25000),
(222, 8, 10, 2, 18000),
(223, 9, 10, 2, 18000),
(224, 10, 10, 3, 27000),
(225, 11, 10, 4, 36000),
(226, 12, 10, 5, 45000),
(227, 13, 10, 6, 54000),
(228, 14, 10, 5, 45000),
(229, 15, 10, 3, 27000),
(230, 16, 10, 3, 27000),
(231, 17, 10, 2, 18000),
(232, 17, 4, 2, 16000),
(233, 18, 10, 1, 9000),
(234, 18, 8, 2, 40000),
(235, 19, 8, 1, 20000),
(236, 19, 5, 2, 12000),
(237, 19, 5, 2, 12000),
(238, 20, 8, 2, 40000),
(239, 20, 9, 2, 10000),
(240, 21, 7, 1, 12000),
(241, 21, 9, 2, 10000),
(242, 21, 2, 2, 30000),
(243, 22, 10, 1, 9000),
(244, 22, 5, 1, 6000),
(245, 22, 6, 2, 14000),
(246, 22, 4, 1, 8000),
(250, 23, 10, 2, 18000),
(251, 23, 9, 2, 10000),
(252, 23, 5, 2, 12000),
(253, 24, 10, 4, 36000),
(254, 25, 10, 2, 18000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tables`
--

CREATE TABLE `tables` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tables`
--

INSERT INTO `tables` (`id`, `name`, `capacity`, `status`) VALUES
(1, 'A1', 2, 'Available'),
(2, 'A2', 2, 'Non Available'),
(3, 'A3', 2, 'Non Available'),
(4, 'A4', 2, 'Non Available'),
(5, 'A5', 2, 'Non Available'),
(6, 'A6', 4, 'Non Available'),
(7, 'A7', 4, 'Non Available'),
(8, 'B3', 2, 'Non Available'),
(9, 'A9', 4, 'Non Available'),
(10, 'A10', 4, 'Available'),
(11, 'B1', 6, 'Available'),
(12, 'Z1', 2, 'Available'),
(13, 'B3', 6, 'Available'),
(14, 'B4', 6, 'Available'),
(15, 'B5', 6, 'Available'),
(16, 'B6', 8, 'Available'),
(17, 'B7', 8, 'Available'),
(18, 'B8', 8, 'Available'),
(19, 'B9', 8, 'Available'),
(20, 'B10', 8, 'Available'),
(22, 'C2', 4, 'Available'),
(23, 'C3', 4, 'Available'),
(24, 'C4', 4, 'Available'),
(25, 'C5', 4, 'Available'),
(26, 'C6', 2, 'Available'),
(27, 'C7', 2, 'Available'),
(28, 'C8', 2, 'Available'),
(29, 'C9', 2, 'Available'),
(30, 'C10', 2, 'Available'),
(32, 'Z2', 2, 'Available');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `amount_of_customer` int(11) DEFAULT NULL,
  `payment` int(12) DEFAULT NULL,
  `total_price` int(12) DEFAULT NULL,
  `change` int(12) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `cashier_id` int(11) DEFAULT NULL,
  `tables_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transaction`
--

INSERT INTO `transaction` (`id`, `name`, `status`, `amount_of_customer`, `payment`, `total_price`, `change`, `date`, `cashier_id`, `tables_id`) VALUES
(1, 'rifqa', NULL, 2, NULL, NULL, NULL, '2019-09-09', 1, 1),
(2, 'miftah', 'Already paid', 1, 100000, 88000, 52000, '2019-11-15', NULL, 8),
(3, 'rizal', 'Already paid', 2, 591000, 591000, 0, '2019-11-15', NULL, 2),
(4, 'bang ayi', 'Already paid', 1, 400000, 307000, 93000, '2019-11-13', NULL, 8),
(5, 'jojo', 'Already paid', 2, 200000, 167000, 33000, '2019-11-15', NULL, 2),
(6, 'japri', 'Already paid', 2, 2000000, 205000, 1795000, '2019-11-15', NULL, 4),
(7, 'josua', 'Already paid', 2, 100000, 82000, 18000, '2019-11-16', NULL, 2),
(8, 'syehan', 'Unpaid', 2, NULL, 9000, NULL, '2019-11-16', NULL, 2),
(9, 'syehan', 'Already paid', 2, 100000, 88000, 12000, '2019-11-16', NULL, 4),
(10, 'fikri', 'Unpaid', 2, NULL, 50000, NULL, '2019-11-16', NULL, 5),
(11, 'febri', 'Unpaid', 3, NULL, 44000, NULL, '2019-11-16', NULL, 6),
(12, 'pebri', 'Already paid', 2, 1000000, 120000, 880000, '2019-11-16', NULL, 7),
(13, 'febri', 'Already paid', 2, 1000000, 149000, 851000, '2019-11-16', NULL, 14),
(14, 'febri', 'Already paid', 5, 50000, 45000, 5000, '2019-11-16', NULL, 18),
(15, 'rizal', 'Already paid', 2, 50000, 27000, 23000, '2019-11-16', NULL, 8),
(16, 'rizal', 'Already paid', 2, 50000, 27000, 23000, '2019-11-16', NULL, 16),
(17, 'jojo', 'Already paid', 2, 50000, 34000, 16000, '2019-11-16', NULL, 26),
(18, 'josuasitungir', 'Already paid', 2, 50000, 49000, 1000, '2019-11-18', NULL, 4),
(19, 'josuasitanggang', 'Unpaid', 2, NULL, 32000, NULL, '2019-11-18', NULL, 4),
(20, 'jojojiji', 'Already paid', 2, 50000, 50000, 0, '2019-11-18', NULL, 7),
(21, 'mungil', 'Already paid', 2, 55000, 52000, 3000, '2019-11-18', NULL, 7),
(22, 'mungil', 'Unpaid', 4, NULL, 37000, NULL, '2019-11-18', NULL, 7),
(23, 'josua butiran debu', 'Already paid', 4, 40000, 40000, 0, '2019-11-18', NULL, 15),
(24, 'jojo', 'Unpaid', 2, NULL, 36000, NULL, '2019-11-18', NULL, 9),
(25, 'febri', 'Unpaid', 2, NULL, 18000, NULL, '2019-11-18', NULL, 8);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cashier`
--
ALTER TABLE `cashier`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_transaction1_idx` (`transaction_id`),
  ADD KEY `fk_orders_menu1_idx` (`menu_id`);

--
-- Indeks untuk tabel `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_detail_transaksi_kasir1_idx` (`cashier_id`),
  ADD KEY `fk_transaction_tables1_idx` (`tables_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `cashier`
--
ALTER TABLE `cashier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

--
-- AUTO_INCREMENT untuk tabel `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT untuk tabel `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_menu1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orders_transaction1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `fk_detail_transaksi_kasir1` FOREIGN KEY (`cashier_id`) REFERENCES `cashier` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_transaction_tables1` FOREIGN KEY (`tables_id`) REFERENCES `tables` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
