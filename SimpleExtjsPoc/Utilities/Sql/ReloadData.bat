@echo off

REM This section to deploy locally
set dbHost="localhost"
set dbName="SimpleExtJsPoc"

sqlcmd -S %dbHost% -v dbName=%dbName% -i ".\CreateDb.sql"
sqlcmd -S %dbHost% -d %dbName% -i ".\CreateTable.sql"
sqlcmd -S %dbHost% -d %dbName% -i ".\InsertRows.sql"
pause