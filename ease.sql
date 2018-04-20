-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2018 at 09:01 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ease`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `student_id`, `course_name`) VALUES
(1, 1, 'bscs'),
(2, 2, 'bscs'),
(3, 3, 'bscs'),
(4, 4, 'bscs'),
(5, 5, 'bscs'),
(6, 6, 'bscs'),
(7, 7, 'bscs'),
(8, 8, 'bscs'),
(9, 9, 'bscs'),
(10, 10, 'bscs'),
(11, 11, 'bscs'),
(12, 12, 'bscs'),
(13, 13, 'bscs'),
(14, 14, 'bscs'),
(15, 15, 'bscs'),
(16, 16, 'bscs'),
(17, 17, 'bscs'),
(18, 18, 'bscs'),
(19, 19, 'bscs'),
(20, 20, 'bscs'),
(21, 21, 'bscs'),
(22, 22, 'bscs'),
(23, 23, 'bscs'),
(24, 24, 'bscs'),
(25, 25, 'bscs'),
(26, 26, 'bscs'),
(27, 27, 'bscs'),
(28, 28, 'bscs'),
(29, 29, 'bscs'),
(30, 30, 'bscs'),
(31, 31, 'bscs'),
(32, 32, 'bscs'),
(33, 33, 'bscs'),
(34, 34, 'bscs'),
(35, 35, 'bscs'),
(36, 36, 'bscs'),
(37, 37, 'bscs'),
(38, 38, 'bscs'),
(39, 39, 'bscs'),
(40, 40, 'bscs'),
(41, 41, 'bscs'),
(42, 42, 'bscs'),
(43, 43, 'bscs'),
(44, 44, 'bscs'),
(45, 45, 'bscs'),
(46, 46, 'bscs'),
(47, 47, 'bscs'),
(48, 48, 'bscs'),
(49, 49, 'bscs'),
(50, 50, 'bscs'),
(51, 51, 'bscs'),
(52, 52, 'bscs'),
(53, 53, 'bscs'),
(54, 54, 'bscs'),
(55, 55, 'bscs'),
(56, 56, 'bscs'),
(57, 57, 'bscs'),
(58, 58, 'bscs'),
(59, 59, 'bscs'),
(60, 60, 'bscs'),
(61, 62, 'bscs'),
(62, 63, 'bscs'),
(63, 64, 'bscs'),
(64, 65, 'bscs'),
(65, 66, 'bscs'),
(66, 67, 'bscs'),
(67, 68, 'bscs'),
(68, 69, 'bscs'),
(69, 70, 'bscs'),
(70, 71, 'bscs'),
(71, 72, 'bscs'),
(72, 73, 'bscs'),
(73, 74, 'bscs'),
(74, 75, 'bscs'),
(75, 76, 'bscs'),
(76, 77, 'bscs'),
(77, 78, 'bscs'),
(78, 79, 'bscs'),
(79, 80, 'bscs'),
(80, 81, 'bscs'),
(81, 82, 'bscs'),
(82, 83, 'bscs'),
(83, 84, 'bscs'),
(84, 85, 'bscs'),
(85, 86, 'bscs'),
(86, 87, 'bscs'),
(87, 88, 'bscs'),
(88, 89, 'bscs'),
(89, 90, 'bscs'),
(90, 61, 'bscs'),
(91, 91, 'bsit'),
(92, 92, 'bsit'),
(93, 93, 'bsit'),
(94, 94, 'bsit'),
(95, 95, 'bsit'),
(96, 96, 'bsit'),
(97, 97, 'bsit'),
(98, 98, 'bsit'),
(99, 99, 'bsit'),
(100, 100, 'bsit'),
(101, 101, 'bsit'),
(102, 102, 'bsit'),
(103, 103, 'bsit'),
(104, 104, 'bsit'),
(105, 105, 'bsit'),
(106, 106, 'bsit'),
(107, 107, 'bsit'),
(108, 108, 'bsit'),
(109, 109, 'bsit'),
(110, 110, 'bsit'),
(111, 111, 'bsit'),
(112, 112, 'bsit'),
(113, 113, 'bsit'),
(114, 114, 'bsit'),
(115, 115, 'bsit'),
(116, 116, 'bsit'),
(117, 117, 'bsit'),
(118, 118, 'bsit'),
(119, 119, 'bsit'),
(120, 120, 'bsit'),
(121, 121, 'bsit'),
(122, 122, 'bsit'),
(123, 123, 'bsit'),
(124, 124, 'bsit'),
(125, 125, 'bsit'),
(126, 126, 'bsit'),
(127, 127, 'bsit'),
(128, 128, 'bsit'),
(129, 129, 'bsit'),
(130, 130, 'bsit'),
(131, 131, 'bsit'),
(132, 132, 'bsit'),
(133, 133, 'bsit'),
(134, 134, 'bsit'),
(135, 135, 'bsit'),
(136, 136, 'bsit'),
(137, 137, 'bsit'),
(138, 138, 'bsit'),
(139, 139, 'bsit'),
(140, 140, 'bsit'),
(141, 141, 'bsit'),
(142, 142, 'bsit'),
(143, 143, 'bsit'),
(144, 144, 'bsit'),
(145, 145, 'bsit'),
(146, 146, 'bsit'),
(147, 147, 'bsit'),
(148, 148, 'bsit'),
(149, 149, 'bsit'),
(150, 150, 'bsit'),
(151, 151, 'bsit'),
(152, 152, 'bsit'),
(153, 153, 'bsit'),
(154, 154, 'bsit'),
(155, 155, 'bsit'),
(156, 156, 'bsit'),
(157, 157, 'bsit'),
(158, 158, 'bsit'),
(159, 159, 'bsit'),
(160, 160, 'bsit'),
(161, 161, 'bsit'),
(162, 162, 'bsit'),
(163, 163, 'bsit'),
(164, 164, 'bsit'),
(165, 165, 'bsit'),
(166, 166, 'bsit'),
(167, 167, 'bsit'),
(168, 168, 'bsit'),
(169, 169, 'bsit'),
(170, 170, 'bsit'),
(171, 171, 'bsit'),
(172, 172, 'bsit'),
(173, 173, 'bsit'),
(174, 174, 'bsit'),
(175, 175, 'bsit'),
(176, 176, 'bsit'),
(177, 177, 'bsit'),
(178, 178, 'bsit'),
(179, 179, 'bsit'),
(180, 180, 'bsit'),
(181, 181, 'bsit'),
(182, 182, 'bsit'),
(183, 183, 'bsit'),
(184, 184, 'bsit'),
(185, 185, 'bsit'),
(186, 186, 'bsit'),
(187, 187, 'bsit'),
(188, 188, 'bsit'),
(189, 189, 'bsit'),
(190, 190, 'bsit'),
(191, 191, 'bsit'),
(192, 192, 'bsit'),
(193, 193, 'bsit'),
(194, 194, 'bsit'),
(195, 195, 'bsit'),
(196, 196, 'bsit'),
(197, 197, 'bsit'),
(198, 198, 'bsit'),
(199, 199, 'bsit'),
(200, 200, 'bsit'),
(201, 201, 'bsit'),
(202, 202, 'bsit'),
(203, 203, 'bsit'),
(204, 204, 'bsit'),
(205, 205, 'bsit'),
(206, 206, 'bsit'),
(207, 207, 'bsit'),
(208, 208, 'bsit'),
(209, 209, 'bsit'),
(210, 210, 'bsit');

-- --------------------------------------------------------

--
-- Table structure for table `eq`
--

CREATE TABLE `eq` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `intrapersonal` int(3) NOT NULL,
  `interpersonal` int(3) NOT NULL,
  `stress` int(3) NOT NULL,
  `adapt` int(3) NOT NULL,
  `mood` int(3) NOT NULL,
  `total_eq` int(5) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `schoolyear` int(11) NOT NULL,
  `gwa` float NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gwa`
--

CREATE TABLE `gwa` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `a2013_first` float DEFAULT NULL,
  `a2013_second` float DEFAULT NULL,
  `a2013_summer` float DEFAULT NULL,
  `a2014_first` float DEFAULT NULL,
  `a2014_second` float DEFAULT NULL,
  `a2014_summer` float DEFAULT NULL,
  `a2015_first` float DEFAULT NULL,
  `a2015_second` float DEFAULT NULL,
  `a2015_summer` float DEFAULT NULL,
  `a2016_first` float DEFAULT NULL,
  `a2016_second` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gwa`
--

INSERT INTO `gwa` (`id`, `student_id`, `a2013_first`, `a2013_second`, `a2013_summer`, `a2014_first`, `a2014_second`, `a2014_summer`, `a2015_first`, `a2015_second`, `a2015_summer`, `a2016_first`, `a2016_second`) VALUES
(1, 1, 1, 3.015, NULL, 2.542, 1.822, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 2, 2, 3.131, 2.607, 2.583, 1.034, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 3, 2, 3.234, NULL, 3.055, 2.126, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 4, 2, 2.836, NULL, 2.688, 1.408, 1.96, NULL, NULL, NULL, NULL, NULL),
(5, 5, 2, 2.939, NULL, 2.334, 2.216, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 6, 3, 1.527, NULL, 2.664, 2.564, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 7, 2, 2.995, 3.148, 2.608, 1.9, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 8, 2, 1.706, NULL, 3.018, 1.528, 2.367, NULL, NULL, NULL, NULL, NULL),
(9, 9, 3, 1.54, 1.276, 3.082, 2.266, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 10, 2, 2.322, NULL, 2.691, 3.251, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 11, 2, 2.073, 1.285, 1.58, 3.374, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 12, 2, 1.885, NULL, 1.73, 1.209, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 13, 3, 1.119, NULL, 1.266, 2.236, 2.907, NULL, NULL, NULL, NULL, NULL),
(14, 14, 3, 1.665, NULL, 3.341, 2.847, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 15, 3, 2.886, NULL, 1.397, 1.996, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 16, 3, 2.848, NULL, 2.09, 1.169, 2.499, NULL, NULL, NULL, NULL, NULL),
(17, 17, 2, 1.664, 2.528, 2.699, 2.02, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 18, 3, 1.643, NULL, 1.657, 1.969, NULL, NULL, NULL, NULL, NULL, NULL),
(19, 19, 3, 2.006, 2.305, 2.913, 1.138, 3.162, NULL, NULL, NULL, NULL, NULL),
(20, 20, 2, 2.134, NULL, 3.061, 1.885, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 21, 2, 1.867, NULL, 3.36, 1.793, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 22, 3, 2.755, 2.704, 2.312, 1.799, 1.375, NULL, NULL, NULL, NULL, NULL),
(23, 23, 3, 1.034, NULL, 2.531, 2.06, NULL, NULL, NULL, NULL, NULL, NULL),
(24, 24, 2, 1.197, NULL, 2.866, 1.09, NULL, NULL, NULL, NULL, NULL, NULL),
(25, 25, 1, 2.413, 2.23, 2.129, 2.215, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 26, 3, 1.131, NULL, 2.887, 1.136, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 27, 1, 3.224, 3.049, 1.757, 1.258, NULL, NULL, NULL, NULL, NULL, NULL),
(28, 28, 3, 1.54, NULL, 2.485, 2.425, 2.883, NULL, NULL, NULL, NULL, NULL),
(29, 29, 3, 1.671, NULL, 2.606, 2.87, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 30, 2, 1.229, NULL, 2.088, 2.025, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 31, 1, 2.861, 1.378, 1.493, 1.649, NULL, 3.08, 2.464, 1.85, NULL, NULL),
(32, 32, 1, 2.303, NULL, 2.782, 2.896, NULL, 1.402, 3.25, 2.71, NULL, NULL),
(33, 33, 3, 1.607, NULL, 3.13, 1.193, 1.187, 2.804, 2.094, 3.429, NULL, NULL),
(34, 34, 3, 3.241, NULL, 2.084, 2.51, NULL, 2.968, 3.419, 1.469, NULL, NULL),
(35, 35, 2, 1.291, 3.024, 1.597, 1.004, NULL, 3.273, 1.19, 1.096, NULL, NULL),
(36, 36, 2, 1.8, NULL, 2.411, 3.493, NULL, 1.241, 1.22, 2.536, NULL, NULL),
(37, 37, 1, 1.991, 3.39, 1.693, 1.946, NULL, 2.89, 2.29, 3.087, NULL, NULL),
(38, 38, 1, 1.506, NULL, 2.3, 1.736, 3.249, 3.039, 1.647, 2.563, NULL, NULL),
(39, 39, 1, 1.102, 2.475, 2.715, 2.738, NULL, 1.332, 1.299, 2.353, NULL, NULL),
(40, 40, 3, 1.391, NULL, 2.96, 1.178, NULL, 2.922, 1.34, 1.703, NULL, NULL),
(41, 41, 1, 2.507, NULL, 1.143, 2.46, NULL, 3.369, 1.564, 2.722, NULL, NULL),
(42, 42, 1, 1.083, 1.547, 2.456, 2.322, NULL, 1.848, 2.273, 1.65, NULL, NULL),
(43, 43, 2, 3.105, NULL, 1.899, 2.797, 2.683, 2.326, 3.276, 1.885, NULL, NULL),
(44, 44, 3, 2.694, NULL, 2.829, 3.24, NULL, 1.317, 2.815, 1.93, NULL, NULL),
(45, 45, 1, 3.135, 2.319, 3.31, 2.979, NULL, 1.965, 3.037, 1.816, NULL, NULL),
(46, 46, 3, 3.492, NULL, 1.357, 1.05, 1.915, 3.166, 2.71, 1.097, NULL, NULL),
(47, 47, 1, 2.65, NULL, 3.166, 1.1, NULL, 2.565, 3.433, 2.585, NULL, NULL),
(48, 48, 2, 2.968, NULL, 1.718, 1.512, NULL, 1.037, 3.026, 1.519, NULL, NULL),
(49, 49, 3, 1.428, NULL, 1.64, 2.086, 3.114, 1.204, 3.392, 2.309, NULL, NULL),
(50, 50, 1, 2.224, NULL, 1.912, 2.014, NULL, 1.248, 2.859, 2.073, NULL, NULL),
(51, 51, 2, 2.687, 3.371, 2.802, 2.664, NULL, 3.225, 1.052, 3.264, NULL, NULL),
(52, 52, 3, 1.106, NULL, 2.443, 2.001, NULL, 1.711, 2.134, 1.434, NULL, NULL),
(53, 53, 3, 1.11, NULL, 2.654, 2.593, NULL, 2.727, 1.173, 3.287, NULL, NULL),
(54, 54, 3, 3.254, NULL, 1.127, 2.721, NULL, 2.938, 2.729, 1.771, NULL, NULL),
(55, 55, 2, 1.207, NULL, 1.875, 1.696, 1.725, 2.141, 2.929, 3.365, NULL, NULL),
(56, 56, 2, 2.507, NULL, 1.312, 1.338, NULL, 3.336, 2.719, 1.252, NULL, NULL),
(57, 57, 1, 2.003, 3.015, 2.788, 1.652, NULL, 1.639, 1.554, 1.56, NULL, NULL),
(58, 58, 2, 1.814, NULL, 2.97, 3.291, NULL, 2.197, 1.253, 3.118, NULL, NULL),
(59, 59, 2, 1.67, NULL, 3.308, 2.739, NULL, 1.733, 2.195, 2.11, NULL, NULL),
(60, 60, 2, 2.94, NULL, 3.262, 2.564, 1.068, 2.588, 1.668, 2.315, NULL, NULL),
(61, 62, 3, 2.284, NULL, 2.635, 1.73, NULL, 3.374, 1.908, 2.126, 1.1, 3.141),
(62, 63, 3, 3.093, NULL, 3.443, 3.05, NULL, 3.216, 2.483, 2.553, 1.42, 1.957),
(63, 64, 2, 1.711, NULL, 3.271, 2.187, 1.679, 2.268, 2.967, 2.932, 2.786, 3.15),
(64, 65, 3, 2.147, NULL, 1.598, 3.074, NULL, 2.642, 1.683, 1.154, 2.722, 3.377),
(65, 66, 3, 1.514, NULL, 1.616, 3.229, NULL, 2.151, 2.717, 1.769, 1.466, 2.47),
(66, 67, 3, 1.77, NULL, 2.839, 1.051, 1.09, 1.331, 2.887, 1.899, 2.973, 2.138),
(67, 68, 2, 1.98, NULL, 2.25, 2.756, NULL, 1.589, 2.544, 1.652, 2.907, 2.488),
(68, 69, 3, 1.949, NULL, 2.979, 2.058, NULL, 1.254, 2.99, 1.477, 2.029, 1.79),
(69, 70, 2, 2.359, NULL, 2.34, 1.629, 2.483, 3.331, 3.129, 1.416, 2.381, 2.868),
(70, 71, 3, 1.794, NULL, 3.387, 3.282, NULL, 2.882, 2.066, 2.225, 1.591, 1.504),
(71, 72, 2, 1.458, NULL, 2.975, 3.137, NULL, 1.641, 2.985, 2.697, 2.762, 2.747),
(72, 73, 3, 2.855, NULL, 2.329, 1.575, NULL, 2.66, 1.455, 2.723, 1.07, 2.337),
(73, 74, 3, 1.053, NULL, 2.478, 1.142, 1.159, 3.05, 2.499, 1.719, 3.095, 2.61),
(74, 75, 3, 3.352, NULL, 1.239, 2.126, NULL, 2.477, 3.216, 2.785, 3.494, 2.174),
(75, 76, 3, 3.458, NULL, 1.052, 2.982, 1.379, 1.293, 2.984, 3.192, 1.991, 1.316),
(76, 77, 2, 2.512, NULL, 3.488, 3.105, 3.205, 2.788, 2.95, 1.403, 1.184, 1.79),
(77, 78, 2, 2.988, NULL, 1.5, 3.025, NULL, 3.283, 2.335, 3.481, 2.256, 3.111),
(78, 79, 1, 3.245, NULL, 1.308, 1.356, NULL, 2.326, 3.229, 2.607, 2.208, 3.149),
(79, 80, 2, 1.366, NULL, 2.995, 1.789, NULL, 2.434, 2.203, 1.429, 1.47, 2.64),
(80, 81, 3, 1.116, NULL, 3.114, 2.713, NULL, 2.656, 3.4, 2.106, 2, 1.484),
(81, 82, 2, 1.844, NULL, 1.063, 2.24, NULL, 2.593, 3.323, 2.827, 2.772, 2.883),
(82, 83, 1, 3.014, NULL, 1.384, 3.49, 1.333, 1.873, 1.513, 3.443, 2.144, 1.952),
(83, 84, 3, 1.098, NULL, 1.188, 2.12, NULL, 3.091, 3.265, 1.358, 1.232, 1.915),
(84, 85, 3, 2.515, NULL, 1.521, 1.016, NULL, 1.697, 1.25, 1.943, 2.024, 1.326),
(85, 86, 1, 1.58, NULL, 1.129, 3.407, NULL, 2.139, 1.542, 3.188, 1.029, 1.178),
(86, 87, 2, 3.346, NULL, 2.809, 2.652, NULL, 2.089, 1.906, 2.309, 2.078, 2.296),
(87, 88, 1, 2.663, NULL, 1.636, 3.205, 2.506, 3.264, 2.269, 1.359, 2.497, 1.543),
(88, 89, 3, 2.315, NULL, 2.956, 2.752, NULL, 1.305, 2.656, 2.528, 2.771, 2.748),
(89, 90, 3, 1.483, NULL, 2.315, 1.795, NULL, 1.531, 2.385, 2.789, 2.78, 1.369),
(90, 61, 2, 1.389, NULL, 3.241, 1.61, NULL, 1.686, 2.903, 2.947, 3.205, 1.261),
(91, 91, 2, 1.427, NULL, 1.309, 1.624, NULL, NULL, NULL, NULL, NULL, NULL),
(92, 92, 3, 2.492, NULL, 1.681, 3.151, NULL, NULL, NULL, NULL, NULL, NULL),
(93, 93, 1, 2.682, NULL, 1.799, 2.616, NULL, NULL, NULL, NULL, NULL, NULL),
(94, 94, 3, 3.496, 1.39, 2.729, 2.494, 3.376, NULL, NULL, NULL, NULL, NULL),
(95, 95, 3, 3.048, NULL, 2.614, 2.335, NULL, NULL, NULL, NULL, NULL, NULL),
(96, 96, 3, 3.487, NULL, 2.706, 2.437, NULL, NULL, NULL, NULL, NULL, NULL),
(97, 97, 2, 3.33, NULL, 3.397, 2.482, 2.122, NULL, NULL, NULL, NULL, NULL),
(98, 98, 3, 3.16, NULL, 2.107, 3.325, NULL, NULL, NULL, NULL, NULL, NULL),
(99, 99, 2, 2.582, NULL, 1.342, 3.498, NULL, NULL, NULL, NULL, NULL, NULL),
(100, 100, 1, 1.078, 3.07, 1.113, 2.855, NULL, NULL, NULL, NULL, NULL, NULL),
(101, 101, 2, 2.804, NULL, 3.477, 2.888, NULL, NULL, NULL, NULL, NULL, NULL),
(102, 102, 2, 1.297, NULL, 3.114, 2.875, 2.47, NULL, NULL, NULL, NULL, NULL),
(103, 103, 2, 2.249, 3.214, 1.113, 1.468, NULL, NULL, NULL, NULL, NULL, NULL),
(104, 104, 2, 2.012, NULL, 1.796, 1.418, NULL, NULL, NULL, NULL, NULL, NULL),
(105, 105, 1, 1.346, NULL, 1.157, 1.224, NULL, NULL, NULL, NULL, NULL, NULL),
(106, 106, 1, 2.367, 2.9, 1.293, 2.955, NULL, NULL, NULL, NULL, NULL, NULL),
(107, 107, 1, 1.182, NULL, 1.356, 2.328, NULL, NULL, NULL, NULL, NULL, NULL),
(108, 108, 3, 3.236, NULL, 2.049, 3.435, 1.801, NULL, NULL, NULL, NULL, NULL),
(109, 109, 3, 1.981, 2.129, 2.613, 2.638, NULL, NULL, NULL, NULL, NULL, NULL),
(110, 110, 2, 1.204, NULL, 3.108, 1.863, NULL, NULL, NULL, NULL, NULL, NULL),
(111, 111, 2, 3.243, NULL, 2.428, 2.008, 1.117, NULL, NULL, NULL, NULL, NULL),
(112, 112, 2, 2.586, NULL, 2.57, 1.532, 1.028, NULL, NULL, NULL, NULL, NULL),
(113, 113, 3, 1.796, 3.382, 1.976, 1.64, NULL, NULL, NULL, NULL, NULL, NULL),
(114, 114, 2, 3.018, NULL, 2.575, 1.4, NULL, NULL, NULL, NULL, NULL, NULL),
(115, 115, 3, 2.644, NULL, 3.018, 2.85, NULL, NULL, NULL, NULL, NULL, NULL),
(116, 116, 2, 2.172, 2.376, 2.607, 1.361, 3.372, NULL, NULL, NULL, NULL, NULL),
(117, 117, 2, 1.511, NULL, 1.091, 1.532, NULL, NULL, NULL, NULL, NULL, NULL),
(118, 118, 3, 1.044, NULL, 1.24, 2.41, NULL, NULL, NULL, NULL, NULL, NULL),
(119, 119, 1, 1.536, NULL, 1.394, 1.904, NULL, NULL, NULL, NULL, NULL, NULL),
(120, 120, 1, 3.217, NULL, 3.157, 2.842, 3.408, NULL, NULL, NULL, NULL, NULL),
(121, 121, 2, 2.759, 2.052, 3.248, 2.629, NULL, NULL, NULL, NULL, NULL, NULL),
(122, 122, 3, 1.074, NULL, 2.251, 2.273, NULL, NULL, NULL, NULL, NULL, NULL),
(123, 123, 1, 1.346, NULL, 3.309, 1.522, NULL, NULL, NULL, NULL, NULL, NULL),
(124, 124, 2, 2.247, 1.974, 3.496, 1.566, NULL, NULL, NULL, NULL, NULL, NULL),
(125, 125, 1, 1.364, NULL, 1.697, 1.009, NULL, NULL, NULL, NULL, NULL, NULL),
(126, 126, 3, 2.004, NULL, 3.317, 2.182, NULL, NULL, NULL, NULL, NULL, NULL),
(127, 127, 2, 2.495, 2.878, 3.014, 1.092, NULL, NULL, NULL, NULL, NULL, NULL),
(128, 128, 1, 2.056, NULL, 2.269, 2.361, NULL, NULL, NULL, NULL, NULL, NULL),
(129, 129, 3, 2.103, NULL, 2.949, 2.982, 2.65, NULL, NULL, NULL, NULL, NULL),
(130, 130, 3, 1.387, NULL, 1.295, 2.671, NULL, NULL, NULL, NULL, NULL, NULL),
(131, 131, 3, 2.094, NULL, 2.521, 2.931, NULL, 2.716, 2.289, 3.468, NULL, NULL),
(132, 132, 2, 1.856, 1.739, 3.07, 3.458, NULL, 3.029, 2.854, 2.082, NULL, NULL),
(133, 133, 2, 3.151, NULL, 1.064, 1.352, NULL, 2.28, 2.234, 2.95, NULL, NULL),
(134, 134, 3, 1.802, NULL, 2.682, 1.617, 2.113, 1.361, 2.096, 2.965, NULL, NULL),
(135, 135, 3, 1.791, NULL, 2.697, 2.263, NULL, 1.146, 2.483, 2.317, NULL, NULL),
(136, 136, 1, 1.084, 3.159, 1.034, 1.906, NULL, 1.319, 3.328, 1.658, NULL, NULL),
(137, 137, 3, 2.711, NULL, 1.528, 2.005, NULL, 2.796, 1.128, 2.502, NULL, NULL),
(138, 138, 2, 1.406, NULL, 3.015, 1.781, NULL, 1.179, 1.048, 3.371, NULL, NULL),
(139, 139, 3, 1.256, NULL, 2.149, 1.691, NULL, 1.236, 3.017, 1.516, NULL, NULL),
(140, 140, 2, 1.602, NULL, 2.932, 2.571, 1.252, 2.86, 2.855, 3.242, NULL, NULL),
(141, 141, 3, 1.342, NULL, 1.286, 3.476, NULL, 1.993, 1.697, 3.117, NULL, NULL),
(142, 142, 3, 3.308, 2.254, 3.096, 3.28, 1.965, 2.06, 1.479, 2.321, NULL, NULL),
(143, 143, 2, 1.791, NULL, 2.944, 2.214, NULL, 1.248, 2.566, 3.171, NULL, NULL),
(144, 144, 3, 1.171, NULL, 2.943, 1.464, NULL, 1.401, 3.139, 2.506, NULL, NULL),
(145, 145, 3, 2.759, 3.26, 1.602, 3.373, NULL, 3.335, 1.322, 2.234, NULL, NULL),
(146, 146, 2, 3.081, NULL, 3.444, 1.841, NULL, 1.479, 2.455, 1.117, NULL, NULL),
(147, 147, 2, 2.693, NULL, 1.431, 1.215, 1.682, 1.109, 3.11, 1.498, NULL, NULL),
(148, 148, 3, 1.384, 1.646, 3.129, 2.563, NULL, 2.465, 1.963, 3.188, NULL, NULL),
(149, 149, 1, 2.376, NULL, 2.145, 1.158, NULL, 1.976, 1.343, 2.658, NULL, NULL),
(150, 150, 2, 3.263, NULL, 3.471, 1.633, NULL, 1.518, 3.411, 1.136, NULL, NULL),
(151, 151, 1, 1.914, NULL, 1.493, 1.388, NULL, 2.795, 2.866, 2.042, NULL, NULL),
(152, 152, 3, 1.062, 3.238, 2.996, 2.486, NULL, 3.088, 2.303, 2.115, NULL, NULL),
(153, 153, 3, 3.437, NULL, 2.872, 1.998, NULL, 3.325, 1.651, 1.825, NULL, NULL),
(154, 154, 3, 3.069, NULL, 3.324, 1.407, NULL, 1.268, 2.525, 2.57, NULL, NULL),
(155, 155, 3, 3.127, NULL, 1.804, 3.004, 1.952, 2.799, 1.743, 1.69, NULL, NULL),
(156, 156, 2, 3.465, 3.484, 1.229, 2.64, NULL, 3.363, 2.63, 1.879, NULL, NULL),
(157, 157, 3, 1.998, NULL, 3.394, 1.777, NULL, 2.61, 2.728, 1.847, NULL, NULL),
(158, 158, 1, 2.771, NULL, 3.277, 1.585, 2.333, 1.02, 3.125, 1.229, NULL, NULL),
(159, 159, 1, 1.558, NULL, 1.582, 2.951, NULL, 3.075, 3.233, 2.012, NULL, NULL),
(160, 160, 3, 2.573, 3.045, 3.185, 1.363, NULL, 2.612, 1.837, 3.338, NULL, NULL),
(161, 161, 3, 1.064, NULL, 1.218, 3.368, NULL, 1.193, 2.717, 1.792, NULL, NULL),
(162, 162, 1, 1.17, NULL, 2.04, 1.851, NULL, 1.159, 1.398, 1.535, NULL, NULL),
(163, 163, 2, 1.223, NULL, 1.21, 1.343, 1.11, 1.194, 3.127, 2.277, NULL, NULL),
(164, 164, 2, 1.685, 3.39, 2.946, 1.225, 2.308, 1.496, 2.167, 1.077, NULL, NULL),
(165, 165, 1, 1.43, NULL, 3.028, 2.215, NULL, 2.778, 2.872, 1.87, NULL, NULL),
(166, 166, 2, 2.123, NULL, 2.83, 3.091, NULL, 1.786, 3.491, 2.645, NULL, NULL),
(167, 167, 2, 2.343, NULL, 1.34, 3.411, NULL, 1.204, 3.024, 2.447, NULL, NULL),
(168, 168, 1, 2.692, NULL, 1.371, 2.429, NULL, 1.832, 2.484, 2.443, NULL, NULL),
(169, 169, 1, 2.346, 3.062, 3.432, 2.44, 1.167, 1.235, 3.482, 1.697, NULL, NULL),
(170, 170, 1, 3.414, NULL, 3.112, 2.891, NULL, 2.573, 3.416, 1.7, NULL, NULL),
(171, 171, 2, 1.409, NULL, 2.664, 2.672, 2.767, 3.078, 2.874, 2.091, 1.88, 1.359),
(172, 172, 2, 3.069, NULL, 1.464, 2.765, NULL, 3.173, 1.215, 2.984, 2.404, 2.154),
(173, 173, 2, 1.524, NULL, 2.959, 2.366, NULL, 3.497, 1.645, 3.324, 3.018, 1.139),
(174, 174, 3, 3.382, 2.661, 2.538, 1.955, NULL, 1.506, 1.491, 1.98, 1.075, 2.646),
(175, 175, 2, 2.591, NULL, 1.034, 2.597, NULL, 2.219, 1.179, 2.337, 2.67, 2.396),
(176, 176, 3, 2.891, 3.029, 2.715, 1.468, NULL, 1.456, 1.782, 2.93, 1.809, 2.615),
(177, 177, 3, 1.303, NULL, 1.364, 2.161, NULL, 2.885, 1.065, 1.752, 2.612, 1.158),
(178, 178, 2, 2.823, 2.868, 2.607, 3.471, 3.039, 1.371, 1.065, 2.376, 1.45, 3.418),
(179, 179, 1, 2.487, NULL, 1.016, 2.809, NULL, 1.357, 2.813, 3.192, 3.091, 3.346),
(180, 180, 2, 3.194, 1.092, 3.335, 2.605, NULL, 3.051, 1.658, 3.326, 1.736, 1.585),
(181, 181, 2, 2.315, NULL, 1.599, 1.175, NULL, 2.103, 2.901, 2.972, 2.083, 3.404),
(182, 182, 3, 2.698, NULL, 1.904, 1.912, NULL, 1.462, 2.48, 1.682, 2.444, 3.41),
(183, 183, 3, 1.605, NULL, 2.363, 3.01, 1.324, 2.512, 2.274, 2.487, 3.412, 1.743),
(184, 184, 3, 1.293, NULL, 1.211, 2.25, NULL, 3.303, 3.462, 1.711, 1.821, 2.285),
(185, 185, 1, 1.152, NULL, 1.863, 2.463, NULL, 1.907, 2.717, 1.537, 1.474, 3.337),
(186, 186, 3, 2.995, NULL, 1.07, 3.056, 1.73, 2.825, 3.101, 3.452, 2.3, 2.951),
(187, 187, 3, 3.412, 2.652, 3.28, 2.064, NULL, 3.06, 2.687, 1.308, 2.58, 2.603),
(188, 188, 3, 2.011, NULL, 2.464, 3.376, 2.947, 2.886, 1.429, 1.155, 2.824, 2.695),
(189, 189, 1, 3.426, 2.36, 1.45, 1.339, NULL, 2.915, 1.412, 2.338, 2.842, 1.233),
(190, 190, 2, 1.159, NULL, 3.068, 1.269, NULL, 3.139, 3.456, 1.116, 1.438, 2.309),
(191, 191, 2, 3.077, 1.291, 1.548, 1.331, NULL, 1.38, 2.606, 3.433, 2.722, 2.822),
(192, 192, 3, 1.181, NULL, 3.035, 2.204, NULL, 3.199, 1.029, 2.279, 2.764, 1.884),
(193, 193, 3, 1.496, NULL, 2.483, 3.478, 1.618, 2.38, 3.008, 2.538, 3.406, 1.046),
(194, 194, 2, 3.007, 2.159, 1.053, 2.629, NULL, 1.501, 1.578, 1.266, 2.421, 3.196),
(195, 195, 2, 3.285, NULL, 2.611, 2.01, NULL, 2.383, 1.164, 2.607, 2.996, 1.816),
(196, 196, 3, 2.385, NULL, 1.783, 1.347, NULL, 2.895, 2.681, 2.366, 1.66, 1.627),
(197, 197, 3, 2.62, NULL, 1.149, 1.678, NULL, 3.383, 3.404, 1.945, 3.27, 1.554),
(198, 198, 2, 2.382, NULL, 1.957, 3.291, 3.36, 2.276, 2.088, 2.653, 2.985, 1.137),
(199, 199, 2, 2.801, NULL, 3.354, 2.192, NULL, 2.231, 1.771, 1.968, 3.174, 1.365),
(200, 200, 3, 1.736, NULL, 1.164, 3.095, 2.199, 2.828, 1.009, 2.769, 1.453, 3.388),
(201, 201, 3, 2.358, NULL, 3.484, 2.304, NULL, 1.389, 2.93, 3.145, 3.188, 2.529),
(202, 202, 2, 3.351, 2.904, 2.2, 1.818, NULL, 3.1, 1.748, 2.423, 1.52, 1.621),
(203, 203, 2, 2.976, 2.383, 1.907, 2.483, NULL, 2.498, 2.495, 2.257, 2.737, 2.693),
(204, 204, 2, 2.31, NULL, 2.233, 1.835, NULL, 2.298, 1.664, 1.381, 3.299, 1.379),
(205, 205, 3, 1.241, NULL, 1.303, 3.057, 3.306, 1.227, 1.129, 3.363, 3.47, 1.789),
(206, 206, 3, 1.779, NULL, 2.57, 2.241, NULL, 2.767, 1.339, 1.708, 2.514, 1.041),
(207, 207, 1, 2.966, 3.482, 1.913, 2.121, NULL, 2.126, 1.9, 1.098, 1.907, 1.995),
(208, 208, 1, 2.887, NULL, 1.32, 2.754, NULL, 2.656, 3.376, 2.637, 2.555, 3.062),
(209, 209, 1, 3.281, 1.587, 2.067, 1.857, NULL, 3.149, 2.865, 3.137, 3.273, 2.147),
(210, 210, 3, 1.333, NULL, 2.445, 2.805, NULL, 2.821, 1.841, 3.294, 2.578, 1.597);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schoolyear`
--

CREATE TABLE `schoolyear` (
  `id` int(11) NOT NULL,
  `year` varchar(20) NOT NULL,
  `semester` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schoolyear`
--

INSERT INTO `schoolyear` (`id`, `year`, `semester`) VALUES
(1, '2013-2014', '1st Semester'),
(2, '2013-2014', '2nd Semester'),
(3, '2013-2014', 'Summer'),
(4, '2014-2015', '1st Semester'),
(5, '2014-2015', '2nd Semester'),
(6, '2014-2015', 'Summer'),
(7, '2015-2016', '1st Semester'),
(8, '2015-2016', '2nd Semester'),
(9, '2015-2016', 'Summer'),
(10, '2016-2017', '1st Semester'),
(11, '2016-2017', '2nd Semester'),
(12, '2016-2017', 'Summer');

-- --------------------------------------------------------

--
-- Table structure for table `school_year`
--

CREATE TABLE `school_year` (
  `id` int(11) NOT NULL,
  `semester` varchar(100) NOT NULL,
  `year` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `coursename` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int(3) NOT NULL,
  `yearlevel` int(3) NOT NULL,
  `section` varchar(3) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', '$2y$10$065P3Or51ksEWsu69xUWxebf.Tni/9U2KywZvUav1a5rjeZq2zjDC', NULL, '2018-02-17 03:22:18', '2018-02-17 03:22:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eq`
--
ALTER TABLE `eq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `schoolyear` (`schoolyear`);

--
-- Indexes for table `gwa`
--
ALTER TABLE `gwa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schoolyear`
--
ALTER TABLE `schoolyear`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `school_year`
--
ALTER TABLE `school_year`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=211;

--
-- AUTO_INCREMENT for table `eq`
--
ALTER TABLE `eq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gwa`
--
ALTER TABLE `gwa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=211;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schoolyear`
--
ALTER TABLE `schoolyear`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `school_year`
--
ALTER TABLE `school_year`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`schoolyear`) REFERENCES `schoolyear` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
