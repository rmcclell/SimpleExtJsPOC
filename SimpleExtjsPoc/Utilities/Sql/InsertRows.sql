USE [SimpleExtJsPoc]
GO

INSERT INTO [dbo].[Roster]
           ([number]
		   ,[pictureCls]
           ,[playerName]
           ,[pos]
           ,[batArm]
           ,[throwArm]
           ,[height]
           ,[weight]
		   ,[age]
		   ,[experience]
		   ,[birthplace]
           ,[college]
           ,[salary]
           ,[category])
     VALUES
(44, 'player-pic-1', 'Tyler Anderson', 'SP/P', 'L', 'L', '6'' 3"',220,27,2,'Las Vegas, Nevada', 'Oregon',540000,'Pitchers'),
(35, 'player-pic-2', 'Chad Bettis', 'SP/P', 'R', 'R', '6'' 0"',213,28,4,'Lubbock, Texas', 'Texas Tech',545000,'Pitchers'),
(32, 'player-pic-3', 'Tyler Chatwood', 'SP/RP/P', 'R', 'R', '5'' 11"',200,27,6,'Redlands, California', 'None',4400000,'Pitchers'),
(38, 'player-pic-4', 'Mike Dunn', 'RP/P', 'L', 'L', '6'' 0"',211,32,8,'Farmington, New Mexico', 'Southern Nevada CC',4000000,'Pitchers'),
(47, 'player-pic-5', 'Jairo Díaz', 'RP/P', 'R', 'R', '6'' 0"',240,26,3,'Puerto La Cruz, Venezuela', 'None',540000,'Pitchers'),
(31, 'player-pic-none', 'Kyle Freeland', 'SP/P', 'L', 'L', '6'' 4"',200,24,0,'Denver, Colorado', 'Evansville',535000,'Pitchers'),
(55, 'player-pic-7', 'Jon Gray', 'SP/P', 'R', 'R', '6'' 4"',232,25,2,'Shawnee, Oklahoma', 'Oklahoma',540000,'Pitchers'),
(34, 'player-pic-8', 'Jeff Hoffman', 'SP/P', 'R', 'R', '6'' 5"',217,24,1,'Latham, New York', 'East Carolina',535000,'Pitchers'),
(56, 'player-pic-9', 'Greg Holland', 'RP/P/CL', 'R', 'R', '5'' 10"',214,31,7,'Marion, North Carolina', 'Western Carolina',6000000,'Pitchers'),
(24, 'player-pic-10', 'Jordan Lyles', 'RP/SP/P', 'R', 'R', '6'' 4"',222,26,6,'Hartsville, South Carolina', 'None',3175000,'Pitchers'),
(51, 'player-pic-11', 'Jake McGee', 'RP/P', 'L', 'L', '6'' 4"',234,30,7,'San Jose, California', 'None',5900000,'Pitchers'),
(48, 'player-pic-12', 'German Márquez', 'SP/P', 'R', 'R', '6'' 1"',215,22,1,'San Felix, Venezuela', 'None',537000,'Pitchers'),
(45, 'player-pic-13', 'Scott Oberg', 'RP/P', 'R', 'R', '6'' 2"',197,27,2,'Tewksbury, Massachusetts', 'Connecticut',540000,'Pitchers'),
(0,  'player-pic-14', 'Adam Ottavino', 'RP/P', 'S', 'R', '6'' 5"',242,31,7,'New York, New York', 'Northeastern',2100000,'Pitchers'),
(52, 'player-pic-15', 'Chris Rusin', 'RP/SP/P', 'L', 'L', '6'' 2"',194,30,5,'Detroit, Michigan', 'Kentucky',545000,'Pitchers'),
(49, 'player-pic-16', 'Antonio Senzatela', 'SP/P', 'R', 'R', '6'' 1"',229,22,0,'Valencia, Carabobo', 'None',535000,'Pitchers'),
(30, 'player-pic-17', 'Ryan Hanigan', 'C', 'R', 'R', '6'' 0"',225,36,10,'Washington, DC', 'Rollins',1250000,'Catchers'),
(14, 'player-pic-18', 'Tony Wolters', 'C/2B/3B', 'L', 'R', '5'' 10"',193,25,1,'Vista, California', 'None',540000,'Catchers'),
(2, 'player-pic-19', 'Alexi Amarista', 'SS/RF/2B/CF/LF/3B', 'L', 'R', '5'' 6"',158,28,6,'Barcelona, Venezuela', 'None',1250000,'Infielders'),
(28, 'player-pic-20', 'Nolan Arenado', '3B', 'R', 'R', '6'' 2"',214,26,4,'Newport Beach, California', 'None',11750000,'Infielders'),
(9, 'player-pic-21', 'DJ LeMahieu', '2B/3B', 'R', 'R', '6'' 4"',219,29,6,'Visalia, California', 'LSU',4800000,'Infielders'),
(12, 'player-pic-22', 'Mark Reynolds', '1B/3B', 'R', 'R', '6'' 2"',231,33,10,'Pikeville, Kentucky', 'Virginia',1500000,'Infielders'),
(27, 'player-pic-23', 'Trevor Story', 'SS', 'R', 'R', '6'' 2"',217,24,1,'Irving, Texas', 'None',540000,'Infielders'),
(4, 'player-pic-24', 'Pat Valaika', 'SS/3B/2B/LF/1B', 'R', 'R', '5'' 11"',211,24,1,'Valencia, California', 'UCLA',535000,'Infielders'),
(19, 'player-pic-25', 'Charlie Blackmon', 'CF/LF', 'L', 'L', '6'' 3"',218,31,6,'Dallas, Texas', 'Georgia Tech',7300000,'Outfielders'),
(20, 'player-pic-26', 'Ian Desmond', 'LF/CF/1B', 'R', 'R', '6'' 3"',214,31,8,'Sarasota, Florida', 'None',8000000,'Outfielders'),
(5, 'player-pic-27', 'Carlos González', 'RF/LF', 'L', 'L', '6'' 1"',217,31,9,'Maracaibo, Venezuela', 'None',20428571,'Outfielders'),
(8, 'player-pic-28', 'Gerardo Parra', 'LF/CF/RF/1B', 'L', 'L', '5'' 11"',219,30,8,'Santa Barbara, Venezuela', 'None',8000000,'Outfielders')
GO

