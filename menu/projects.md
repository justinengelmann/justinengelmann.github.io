---
layout: page
title: Projects
---

#### Research
Deep-learning disease detection on retinal images  
*CDT MScR Thesis, ongoing*  
The goal of the project is to develop a performant and explainable classifier for diagnosing disease from ultra-widefield Scanning Laster Ophthalmoscopy retina images.

[Conditional Wasserstein GAN-based Oversampling of Tabular Data for Imbalanced Learning](https://github.com/justinengelmann/GANbasedOversampling)  
*MSc Thesis, Grade: 1.0 (German scale, best possible grade)*  
[arxiv](https://arxiv.org/abs/2008.09202) / [Expert Systems with Applications](https://doi.org/10.1016/j.eswa.2021.114582)  
Developed a novel GAN-based oversampling method that can effectively model tabular data with both categorical and numerical columns. Previous methods did not incorporate recent advancements from the literature on generating realistic tabular data with GANs and did not allow for categorical variables, which are commonplace in real-world tabular data. Empirical results evidence the competitiveness of GAN-based oversampling.

[Super-resolution of brain MRI scans acquired in clinical practice](https://github.com/bryanlimy/mri-super-resolution)  
*CDT Group Project, 75 (UK scale)*  
When acquiring MRI scans, there is a trade-off between quality and acquisition speed. 
Thus, to sped up acquisition in clinical practice, MRI scans are typically acquired at the lowest acceptable resolution sufficient for diagnosis. 
However, this resolution is insufficient for common image processing methods used in research.
We used a dataset of paired low-quality scans acquired under clinical protocols and high-quality scans of the same patients to train a deep learning model to upsample the low-quality scans. 
Quantitative and qualitative evaluation are promising and we made concrete recommendations for validating the method and for devloping it further.

#### Selected Coursework
Temporally Biased Label Smoothing and Latent Time Regression for Multi-class Problems that represent an Underlying Progression
*MScR Course Machine Learning Practical Group Project, 72 (UK scale)*  
We considered two biomedical datasets where the classes represent stages of an underlying progression which have motivated our research: 
A dataset of retina images, where classes are different stages of disease progression, and a dataset of cell images, where classes are different stages 
of the cell cycle. We investigate whether we can improve classification performance by encoding the domain knowledge that classes are ordered in time into the training process.
First, we considered Temporally Biased Label Smoothing, an extension of standard Label Smoothing where non-target classes get probability mass proportional to temporal proximity to the target class. 
Second, we proposed a Latent Time Regression approach where we try to learn a continuous, one-dimensional variable representing the latent position of a sample in the process.  
In our experiments, each method outperformed the baselines of standard label smoothing and no label smoothing on one of the datasets but not the other.


Profit-Efficient A/B Testing through Inverse Propensity Score Weighting  
*MSc Seminar Causal Machine Learning, Grade: 1.3 (German scale)*  
Implemented a novel approach for maximising outcome metrics during an A/B test by leveraging pre-existing domain knowledge about individual treatment effects and tested it with a simulation study.
The core idea was to assign idividuals where we expect higher treatment effects to the treatment group with higher probability, and then use Inverse Propensity Score Weighting to reduce bias. 

[Reducing Ecommerce Returns Costs through Profit-Sensitive Prescriptive Modelling](https://github.com/justinengelmann/Business-Analytics-and-Data-Science-WS1819)  
*MSc Course Business Analytics and Data Science, Grade: 1.0 (German scale, best possible grade)*  
Ranked 2nd out of 118 students in In-Class Kaggle competition for predicting Ecommerce returns which was scored on plain ROC-AUC rather than profit. Implemented an algorithm to create a selective averaging ensemble of heterogeneous base models from scratch which maximises profit rather than accuracy. Final ensemble increased profits by 30% compared to the optimal naïve baseline strategy of never intervening. 

[Controllability of Risk in Financial Networks](https://github.com/justinengelmann/Network-Games-and-Mechanism-Design-SS19)  
*MSc Seminar Network Games and Mechanism Design, Grade: 1.0 (German scale, best possible grade)*  
Applied the concept of controllability to a graph of risk interdependence of major financial institutions and computed the minimum input set.

#### Other
[Few-shot Image Classification](https://github.com/justinengelmann/TX2020-Philips-Challenge-Inference)  
*Eindhoven Tech Experience 2020 - Challenge by Philips*  
Finetuned a pre-trained VGG16 CNN to recognise one of four products with a small dataset of 20 labelled images per class. One of [21 winners out of over 900 participants](https://brainporteindhoven.com/int/brainport-for-you/work/tech-xperience-winners-2020/).

Churn Prediction for a major German Media Business  
*Finalist at McKinsey Digital Shapers 2020*  
Worked as Data Scientist in a cross-functional team to develop a churn prediction tool for a major German Media Business. 
Explored, cleaned and prepared a large dataset of subscribers and trained a predictive model which achieved very high accuracy. 