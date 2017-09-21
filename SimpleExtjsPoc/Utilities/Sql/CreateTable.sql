USE [SimpleExtJsPoc]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Roster](
	[id] [int] IDENTITY(1,1),
	[number] [smallint] NULL,
	[pictureCls] [varchar](50) NULL,
	[playerName] [nvarchar](50) NULL,
	[pos] [varchar](20) NULL,
	[batArm] [char](1) NULL,
	[throwArm] [char](1) NULL,
	[height] [varchar](10) NULL,
	[weight] [int] NULL,
	[age] [smallint] NULL,
	[experience] [smallint] NULL,
	[birthplace] [varchar](50) NULL,
	[college] [varchar](50) NULL,
	[salary] [bigint] NULL,
	[category] [varchar](25) NULL
 CONSTRAINT [PK_Roster] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO