USE [PreguntasApp]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 11/8/2021 3:47:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cuestionario]    Script Date: 11/8/2021 3:47:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cuestionario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](100) NOT NULL,
	[Descripcion] [varchar](150) NOT NULL,
	[FechaCreacion] [datetime2](7) NOT NULL,
	[Activo] [int] NOT NULL,
	[UsuarioId] [int] NOT NULL,
 CONSTRAINT [PK_Cuestionario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pregunta]    Script Date: 11/8/2021 3:47:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pregunta](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](100) NOT NULL,
	[CuestionarioId] [int] NOT NULL,
 CONSTRAINT [PK_Pregunta] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuesta]    Script Date: 11/8/2021 3:47:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuesta](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](50) NOT NULL,
	[EsCorrecta] [bit] NOT NULL,
	[PreguntaId] [int] NOT NULL,
 CONSTRAINT [PK_Respuesta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RespuestaCuestionarioDetalles]    Script Date: 11/8/2021 3:47:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RespuestaCuestionarioDetalles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RespuestaCuestionarioId] [int] NOT NULL,
	[Respuestaid] [int] NULL,
 CONSTRAINT [PK_RespuestaCuestionarioDetalles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RespuestaCuestionarios]    Script Date: 11/8/2021 3:47:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RespuestaCuestionarios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[NombreParticipante] [varchar](100) NOT NULL,
	[Fecha] [datetime2](7) NOT NULL,
	[Activo] [int] NOT NULL,
	[CuestionarioId] [int] NOT NULL,
 CONSTRAINT [PK_RespuestaCuestionarios] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 11/8/2021 3:47:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[NombreUsuario] [varchar](20) NOT NULL,
	[Password] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Cuestionario]  WITH CHECK ADD  CONSTRAINT [FK_Cuestionario_Usuarios_UsuarioId] FOREIGN KEY([UsuarioId])
REFERENCES [dbo].[Usuarios] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Cuestionario] CHECK CONSTRAINT [FK_Cuestionario_Usuarios_UsuarioId]
GO
ALTER TABLE [dbo].[Pregunta]  WITH CHECK ADD  CONSTRAINT [FK_Pregunta_Cuestionario_CuestionarioId] FOREIGN KEY([CuestionarioId])
REFERENCES [dbo].[Cuestionario] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Pregunta] CHECK CONSTRAINT [FK_Pregunta_Cuestionario_CuestionarioId]
GO
ALTER TABLE [dbo].[Respuesta]  WITH CHECK ADD  CONSTRAINT [FK_Respuesta_Pregunta_PreguntaId] FOREIGN KEY([PreguntaId])
REFERENCES [dbo].[Pregunta] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Respuesta] CHECK CONSTRAINT [FK_Respuesta_Pregunta_PreguntaId]
GO
ALTER TABLE [dbo].[RespuestaCuestionarioDetalles]  WITH CHECK ADD  CONSTRAINT [FK_RespuestaCuestionarioDetalles_Respuesta_Respuestaid] FOREIGN KEY([Respuestaid])
REFERENCES [dbo].[Respuesta] ([id])
GO
ALTER TABLE [dbo].[RespuestaCuestionarioDetalles] CHECK CONSTRAINT [FK_RespuestaCuestionarioDetalles_Respuesta_Respuestaid]
GO
ALTER TABLE [dbo].[RespuestaCuestionarioDetalles]  WITH CHECK ADD  CONSTRAINT [FK_RespuestaCuestionarioDetalles_RespuestaCuestionarios_RespuestaCuestionarioId] FOREIGN KEY([RespuestaCuestionarioId])
REFERENCES [dbo].[RespuestaCuestionarios] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RespuestaCuestionarioDetalles] CHECK CONSTRAINT [FK_RespuestaCuestionarioDetalles_RespuestaCuestionarios_RespuestaCuestionarioId]
GO
ALTER TABLE [dbo].[RespuestaCuestionarios]  WITH CHECK ADD  CONSTRAINT [FK_RespuestaCuestionarios_Cuestionario_CuestionarioId] FOREIGN KEY([CuestionarioId])
REFERENCES [dbo].[Cuestionario] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[RespuestaCuestionarios] CHECK CONSTRAINT [FK_RespuestaCuestionarios_Cuestionario_CuestionarioId]
GO
/****** Object:  StoredProcedure [dbo].[SP_VACIAR_TABLA]    Script Date: 11/8/2021 3:47:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[SP_VACIAR_TABLA]
AS
delete Usuarios where Id>=0
GO
