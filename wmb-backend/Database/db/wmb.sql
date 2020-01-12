-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Nov 2019 pada 19.51
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
(10, 'Nasi Uduk', 9000, 'https://www.resepmami.info/wp-content/uploads/2019/04/nasi-uduk-sederhana.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `transaction_id` int(11) DEFAULT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `qty` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `transaction_id`, `menu_id`, `qty`) VALUES
(36, NULL, 10, '1'),
(37, 79, 9, '1'),
(38, 80, 10, '1'),
(39, 80, 9, '1'),
(40, 80, 9, '1'),
(41, 80, 10, '1'),
(42, 80, 4, '1'),
(43, 80, 4, '1'),
(44, NULL, 10, '3'),
(45, NULL, 7, '2'),
(46, 83, 10, '3'),
(48, 87, 10, '3'),
(50, 87, 8, '4'),
(51, 87, 8, '4'),
(52, 94, 8, '12'),
(53, 95, 8, '10'),
(54, 99, 10, '12'),
(55, 99, 9, '10'),
(56, 100, 4, '13'),
(57, 101, 10, '5'),
(58, 101, 9, '8'),
(59, 101, 6, '3'),
(60, 103, 10, '5'),
(61, 103, 9, '3'),
(62, 103, 2, '7'),
(63, 103, 8, '3'),
(64, 103, 9, '2'),
(65, 105, 10, '6'),
(66, 105, 5, '7'),
(67, 105, 9, '3'),
(68, 105, 9, '3');

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
(1, 'A1', 2, 'Non Available'),
(2, 'A2', 2, 'Non Available'),
(3, 'A3', 2, 'Non Available'),
(4, 'A4', 2, 'Non Available'),
(5, 'A5', 2, 'Non Available'),
(6, 'B1', 4, 'Non Available'),
(7, 'B2', 4, 'Non Available'),
(8, 'B3', 4, 'Non Available'),
(9, 'B4', 4, 'Non Available'),
(10, 'B5', 4, 'Non Available'),
(11, 'C1', 6, 'Non Available'),
(12, 'C2', 6, 'Non Available'),
(13, 'C3', 6, 'Non Available'),
(14, 'C4', 6, 'Non Available'),
(15, 'C5', 6, 'Non Available'),
(16, 'D1', 8, 'Non Available'),
(17, 'D2', 8, 'Non Available'),
(18, 'D3', 8, 'Non Available'),
(19, 'D4', 8, 'Non Available'),
(20, 'D5', 8, 'Non Available'),
(21, 'E1', 2, 'Non Available'),
(22, 'E2', 2, 'Available'),
(23, 'E3', 2, 'Available'),
(24, 'E4', 2, 'Available'),
(25, 'E5', 2, 'Available'),
(26, 'F1', 4, 'Non Available'),
(27, 'F2', 4, 'Non Available'),
(28, 'F3', 4, 'Non Available'),
(29, 'F4', 4, 'Non Available'),
(30, 'F5', 4, 'Non Available');

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
(78, 'syehan', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-13', NULL, 1),
(79, 'febri', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-13', NULL, 2),
(80, 'pindo', 'Already paid', 2, 200000, 44000, 156000, '2019-11-13', NULL, 3),
(81, 'yuda', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-13', NULL, 4),
(82, 'ayi', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-13', NULL, 5),
(83, 'rizal', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-13', NULL, 3),
(84, 'mansur', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-13', NULL, 6),
(85, 'dika', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-13', NULL, 7),
(86, 'rizal', 'Unpaid', 1, NULL, NULL, NULL, '2019-11-13', NULL, 2),
(87, 'jojo', 'Unpaid', 3, NULL, NULL, NULL, '2019-11-13', NULL, 8),
(88, 'mely', 'Unpaid', 4, NULL, NULL, NULL, '2019-11-13', NULL, 9),
(89, 'yudah', 'Unpaid', 3, NULL, NULL, NULL, '2019-11-13', NULL, 10),
(90, 'pebri', 'Unpaid', 4, NULL, NULL, NULL, '2019-11-13', NULL, 11),
(91, 'syehan', 'Unpaid', 4, NULL, NULL, NULL, '2019-11-13', NULL, 12),
(92, 'Pi', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-13', NULL, 21),
(93, 'dika', 'Unpaid', 3, NULL, NULL, NULL, '2019-11-13', NULL, 13),
(94, 'buguru', 'Unpaid', 5, NULL, NULL, NULL, '2019-11-13', NULL, 14),
(95, 'mute', 'Unpaid', 7, NULL, NULL, NULL, '2019-11-13', NULL, 17),
(96, 'rizal', 'Unpaid', 3, NULL, NULL, NULL, '2019-11-13', NULL, 15),
(97, 'mamake', 'Unpaid', 3, NULL, NULL, NULL, '2019-11-13', NULL, 16),
(98, 'syehan', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-13', NULL, 30),
(99, 'mr.bean', 'Unpaid', 4, NULL, NULL, NULL, '2019-11-13', NULL, 26),
(100, 'Bill Gates', 'Unpaid', 4, NULL, 104000, NULL, '2019-11-13', NULL, 19),
(101, 'Steve Jobs', 'Unpaid', 5, NULL, 21000, NULL, '2019-11-13', NULL, 20),
(102, 'kucing', 'Unpaid', 3, NULL, NULL, NULL, '2019-11-14', NULL, 27),
(103, 'catdog', 'Unpaid', 4, NULL, 60000, NULL, '2019-11-14', NULL, 28),
(104, 'Joko Widodo', 'Unpaid', 3, NULL, NULL, NULL, '2019-11-14', NULL, 18),
(105, 'yuda', 'Unpaid', 2, NULL, NULL, NULL, '2019-11-14', NULL, 29);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT untuk tabel `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT untuk tabel `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

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
