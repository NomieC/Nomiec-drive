##DATA
# Load necessary libraries
library(readxl)
library(e1071)

data <- read_excel("PROBSTAT/UTS.xlsx")

data[, 2:5] <- apply(data[, 2:5], 2, function(x) as.numeric(gsub(" ‰|%","",x)))

print(data)