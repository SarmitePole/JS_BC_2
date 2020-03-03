-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 24, 2020 at 06:04 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bootcamp`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `author_id` int(11) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `text`, `author_id`, `created_at`, `updated_at`) VALUES
(3, 'Atziņa 1', 'Atziņas teksts 1', 3, '2020-02-22 12:38:31', '2020-02-22 12:38:31'),
(4, 'Atziņa 2', 'Atziņas teksts 2', 1, '2020-02-22 12:39:36', '2020-02-22 12:39:36'),
(5, 'Atziņa 3', 'Atziņas teksts 3', 1, '2020-02-22 12:39:36', '2020-02-22 12:39:36'),
(6, 'Atziņa 4', 'Atziņas teksts 4', NULL, '2020-02-22 12:39:36', '2020-02-22 13:00:43'),
(7, 'Atziņa 5', 'Atziņas teksts 5', 3, '2020-02-22 12:39:36', '2020-02-22 12:39:36'),
(8, 'Atziņa 6', 'Atziņas teksts 6', 5, '2020-02-22 12:39:36', '2020-02-22 12:39:36'),
(9, 'Atziņa 7', 'Atziņas teksts 7', 5, '2020-02-22 12:39:36', '2020-02-22 12:39:36'),
(10, 'Atziņa 8', 'Atziņas teksts 8', 5, '2020-02-22 12:39:36', '2020-02-22 12:39:36'),
(11, 'Atziņa 9', 'Atziņas teksts 9', 6, '2020-02-22 12:39:36', '2020-02-22 12:39:36');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` enum('female','male','IDK','alien') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `role` enum('user','admin','moderator','') NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `gender`, `created_at`, `updated_at`, `role`) VALUES
(1, 'foo@bar.com', 'John', 'Doe', 'bar', 'male', '2020-02-22 08:36:48', '2020-02-22 11:47:00', 'user'),
(3, 'janis@ozols.com', 'Jānis', 'Ozols', 'bar', 'male', '2020-02-22 08:56:58', '2020-02-22 11:46:18', 'admin'),
(4, 'peteris@ozols.com', 'Pēteris', 'Ozols', 'bar', 'male', '2020-02-22 08:56:58', '2020-02-22 11:46:27', 'moderator'),
(5, 'liga@berzina.com', 'Līga', 'Berziņa', 'bar', 'female', '2020-02-22 09:01:20', '2020-02-22 09:45:13', 'user'),
(6, 'liene@zarina.com', 'Liene', 'Zariņa', 'bar', 'female', '2020-02-22 09:01:20', '2020-02-22 09:39:14', 'user'),
(7, 'karis@abele.com', 'Kārlis', 'Ābele', 'bar', 'alien', '2020-02-22 09:32:18', '2020-02-22 11:46:36', 'user'),
(8, 'valdis@zarins.com', 'Valdis', 'Zariņš', 'bar', 'IDK', '2020-02-22 09:32:18', '2020-02-22 11:46:50', 'user'),
(9, 'liva@karklina.com', 'Līva', 'Kārkliņa', 'bar', 'female', '2020-02-22 09:32:18', '2020-02-22 09:39:14', 'user'),
(10, 'anete@lapiņa.com', 'Anete', 'Lapiņa', 'bar', 'female', '2020-02-22 09:32:18', '2020-02-22 09:39:14', 'user'),
(11, 'eleonora@liepina.com', 'Eleonora', 'Liepiņa', 'bar', 'female', '2020-02-22 09:32:18', '2020-02-22 09:39:14', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_uniqure` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `author` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
