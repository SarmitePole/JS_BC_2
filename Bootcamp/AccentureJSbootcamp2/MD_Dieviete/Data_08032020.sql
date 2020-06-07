-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: bootcamp
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `intro` text,
  `text` text,
  `author_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Article about shoes','There you can find something interesting...hmmmm about shoes may be...','While small, delicate pumps were worn for evening wear and dressy occasions, the primary footwear of the 19th century was the boot. As factories sprung up during the Industrial Revolution, a new longing for the natural landscape drew the elite to country homes. Walking became a popular recreational activity and boots became a necessity.',NULL),(2,'Article about dresses','There you can find something interesting...dress!!!! about dress...','Women\'s dresses in the 19th century began to be classified by the time of day or purpose of the dress. High-waisted dresses were popular until around 1830.',NULL),(3,'Article about hats','Hat can turn you into lady...or teapot...','n the late 19th century, Art Nouveau influenced the hats of the Edwardian era with wider brims that balanced both the fuller pompadour hairstyles and the flowing skirts. Hats were decorated with floral accents, rosettes and tulle. The effect was diaphanous and \"frothy.\" This style evolved into the Merry Widow look of the wide-brimmed black, plumed hat with a chiffon over-wrap. We can see fine examples of the Edwardian styles in the movie,Titanic.',NULL),(4,'Article about best friends','If you think about dimonds.....think again','Though all puppies are incredibly cute, not all are a good fit for your lifestyle. With the proper research and preparation, you can find a dog who will be a great addition to the family. The decision to adopt is far too important to be based on puppy-love-at-first-sight. The incredible range of breeds, exercise needs and temperaments makes it imperative that you do your homework. All puppies eventually grow to be adults, so choosing a dog who fits your lifestyle is the best way to ensure that your decision won’t end in regret. After taking the time to research and compare dog breeds, you’ll have a better sense about which puppies are likely to grow up to be couch potatoes and which might make good jogging partners.\n\nDo Your Research\nIf you are curious about different breeds, start by getting a book that provides an overview or by reviewing the more than 200 articles on our site about dogs both big and small.\n\nAsk experts to share their take on breeds you are interested in. Veterinarians work with various breeds every day and have vast insight into which ones may be suitable for your lifestyle. Dog trainers are another excellent source of information about the needs and behaviors associated with different breeds.\n\nConsider Size, Breeds and Needs\nThough Great Danes love to cuddle, they quickly grow too large to sit in your lap and can clear off a table with a flick of a tail. Due to his short legs, a Dachshund may have trouble keeping up with you on a jog. It’s important to consider how a puppy will fit into your lifestyle when he becomes an adult.\n\nGrooming and exercise needs should be another critical part of the decision. Dogs in the herding group typically require lots of exercise and attention. Other breeds, such as dogs with very long hair, have some fairly intense grooming needs.\n\nIn your research, you’ll find that some breeds are predisposed to certain health issues, like hip dysplasia. Mixed-breed dogs may be less likely to have these types of issues than purebreds, but this isn’t always the case. If you’re considering a particular breed, ask your veterinarian which medical conditions you should know about.\n\nDo a Background Check\nFinding a reputable breeder or rescue group is essential to locating a healthy, well-socialized puppy. If you’re searching for a purebred dog, ask your vet or local breed club to point you in the right direction. Breed-specific rescue organizations are also a great source for adopting a purebred dog.\n\nIf possible, you’ll want to meet the puppy’s parents and siblings, and see the breeding facility. It’s well worth the time and effort to learn about your puppy’s background and confirm that he comes from a healthy environment.\n\nWhere pet store puppies are concerned, it’s often impossible to check up on a particular puppy’s parents or background. Unfortunately, a percentage of the doggies in pet store windows come from puppy mills.\n\nAdopting a puppy from a shelter or rescue organization can be extremely rewarding, though it may be impossible to learn much about a rescue puppy’s background or medical history. But these types of organizations typically offer other important benefits, such as health screenings, microchipping and vaccinations.',NULL);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `author_id` int(11) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `author` (`author_id`),
  CONSTRAINT `author` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (3,'Atziņa 1','Atziņas teksts 1',3,'2020-02-22 12:38:31','2020-02-22 12:38:31'),(4,'Atziņa 2','Atziņas teksts 2',1,'2020-02-22 12:39:36','2020-02-22 12:39:36'),(5,'Atziņa 3','Atziņas teksts 3',1,'2020-02-22 12:39:36','2020-02-22 12:39:36'),(6,'Atziņa 4','Atziņas teksts 4',NULL,'2020-02-22 12:39:36','2020-02-22 13:00:43'),(7,'Atziņa 5','Atziņas teksts 5',3,'2020-02-22 12:39:36','2020-02-22 12:39:36'),(8,'Atziņa 6','Atziņas teksts 6',5,'2020-02-22 12:39:36','2020-02-22 12:39:36'),(9,'Atziņa 7','Atziņas teksts 7',5,'2020-02-22 12:39:36','2020-02-22 12:39:36'),(10,'Atziņa 8','Atziņas teksts 8',5,'2020-02-22 12:39:36','2020-02-22 12:39:36'),(11,'Atziņa 9','Atziņas teksts 9',6,'2020-02-22 12:39:36','2020-02-22 12:39:36');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` enum('female','male','IDK','alien') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `role` enum('user','admin','moderator','') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_uniqure` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'foo@bar.com','John','Doe','bar','male','2020-02-22 08:36:48','2020-02-22 11:47:00','user'),(3,'janis@ozols.com','Jānis','Ozols','bar','male','2020-02-22 08:56:58','2020-02-22 11:46:18','admin'),(4,'peteris@ozols.com','Pēteris','Ozols','bar','male','2020-02-22 08:56:58','2020-02-22 11:46:27','moderator'),(5,'liga@berzina.com','Līga','Berziņa','bar','female','2020-02-22 09:01:20','2020-02-22 09:45:13','user'),(6,'liene@zarina.com','Liene','Zariņa','bar','female','2020-02-22 09:01:20','2020-02-22 09:39:14','user'),(7,'karis@abele.com','Kārlis','Ābele','bar','alien','2020-02-22 09:32:18','2020-02-22 11:46:36','user'),(8,'valdis@zarins.com','Valdis','Zariņš','bar','IDK','2020-02-22 09:32:18','2020-02-22 11:46:50','user'),(9,'liva@karklina.com','Līva','Kārkliņa','bar','female','2020-02-22 09:32:18','2020-02-22 09:39:14','user'),(10,'anete@lapiņa.com','Anete','Lapiņa','bar','female','2020-02-22 09:32:18','2020-02-22 09:39:14','user'),(11,'eleonora@liepina.com','Eleonora','Liepiņa','bar','female','2020-02-22 09:32:18','2020-02-22 09:39:14','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bootcamp'
--

--
-- Dumping routines for database 'bootcamp'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-08 23:02:57
