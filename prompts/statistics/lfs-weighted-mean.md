---
id: lfs-weighted-mean
title: Weighted Mean Explainer (SQL/R/SAS/Python)
language: en
domain: statistics
tags: [labour-force, weighted-mean, sql, sas, r, python, statistics]
audience: analysts
model_tips:
  prefers_chain_of_thought: false
  temperature: 0.2
  max_tokens: 1000
last_updated: "2025-01-21"
attribution: "© Yamen Helel (MIT License)"
related: [dedup-strategy, sampling-design]
version: "1.0"
difficulty: intermediate
use_cases: [data-analysis, statistical-computing, labour-statistics]
---

## Use Case
Explain and generate weighted-mean code across SQL/R/SAS/Python with caveats (NULLs, WINSOR, grouping).

## System
You are a senior labour-statistics engineer with expertise in statistical computing across multiple platforms. Be concise, add comments to code, and always mention potential pitfalls.

## User
Compute weighted mean of `wage` by `gender` and `nationality` with weight `wgt`. The dataset contains potential NULLs and outliers.

## Assistant (Starter Response)
I'll help you compute weighted means across different platforms. First, let me confirm the data structure and then provide solutions for each platform.

**Data Validation:**
```sql
-- Check for NULLs and weight distribution
SELECT 
  COUNT(*) as total_rows,
  COUNT(wage) as non_null_wages,
  COUNT(wgt) as non_null_weights,
  MIN(wgt) as min_weight,
  MAX(wgt) as max_weight,
  AVG(wgt) as avg_weight
FROM your_table;
```

**SQL Solution:**
```sql
SELECT 
  gender,
  nationality,
  SUM(wage * wgt) / SUM(wgt) as weighted_mean_wage,
  COUNT(*) as sample_size
FROM your_table
WHERE wage IS NOT NULL AND wgt IS NOT NULL AND wgt > 0
GROUP BY gender, nationality;
```

**R Solution:**
```r
library(dplyr)

result <- your_data %>%
  filter(!is.na(wage), !is.na(wgt), wgt > 0) %>%
  group_by(gender, nationality) %>%
  summarise(
    weighted_mean = weighted.mean(wage, wgt),
    sample_size = n(),
    .groups = 'drop'
  )
```

**SAS Solution:**
```sas
PROC MEANS DATA=your_data NWAY;
  WHERE wage IS NOT NULL AND wgt IS NOT NULL AND wgt > 0;
  CLASS gender nationality;
  VAR wage;
  WEIGHT wgt;
  OUTPUT OUT=weighted_means MEAN=weighted_mean N=sample_size;
RUN;
```

**Python Solution:**
```python
import pandas as pd
import numpy as np

# Filter valid data
valid_data = df.dropna(subset=['wage', 'wgt']).query('wgt > 0')

# Compute weighted means
result = valid_data.groupby(['gender', 'nationality']).apply(
    lambda x: np.average(x['wage'], weights=x['wgt'])
).reset_index(name='weighted_mean')

# Add sample sizes
sample_sizes = valid_data.groupby(['gender', 'nationality']).size().reset_index(name='sample_size')
result = result.merge(sample_sizes, on=['gender', 'nationality'])
```

## Important Caveats

1. **Zero/Negative Weights**: Always filter out zero or negative weights
2. **Missing Data**: Handle NULLs explicitly - decide whether to exclude or impute
3. **Outliers**: Consider winsorizing extreme values before computing weighted means
4. **Small Samples**: Be cautious with groups having very few observations
5. **Weight Distribution**: Check if weights are reasonable and not heavily skewed

## Notes
- Always validate your weights before computation
- Consider the impact of missing data on your results
- For survey data, ensure weights are properly calibrated
- Document any data preprocessing steps taken
