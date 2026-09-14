---
layout: single
title: Sanitation & Education Clustering
author_profile: false
classes: wide
---

<section class="case-hero">
  <p class="section-kicker">Published research · Applied data science</p>
  <h1>Sanitation & Education Patterns Across Brazilian Municipalities</h1>
  <p class="case-lead">An unsupervised-learning study of 5,556 Brazilian municipalities examining how sanitation infrastructure, educational indicators and regional inequality appear together in the data.</p>
  <div class="portfolio-actions">
    <a class="btn btn--primary" href="https://github.com/limapablo/kmeans-saneamento-educacao">Repository ↗</a>
    <a class="btn btn--quiet" href="https://doi.org/10.29327/23189258.1068040">Published article ↗</a>
    <a class="btn btn--quiet" href="https://orcid.org/0009-0007-6456-6993">ORCID ↗</a>
  </div>
</section>

<section class="case-meta" aria-label="Project summary">
  <div><span>Scope</span><strong>5,556 municipalities</strong></div>
  <div><span>Method</span><strong>K-Means · Pearson correlation</strong></div>
  <div><span>Data</span><strong>IBGE Census 2010</strong></div>
  <div><span>Output</span><strong>3 municipal clusters</strong></div>
</section>

<section class="case-section">
  <div class="case-section__label">Research question</div>
  <div class="case-section__body">
    <h2>Can sanitation and education indicators reveal meaningful territorial patterns in Brazil?</h2>
    <p>The study investigates associations between basic sanitation and educational conditions across Brazilian municipalities. Rather than ranking cities individually, the analysis groups municipalities with similar profiles to make regional patterns and overlapping vulnerabilities easier to interpret.</p>
    <p>The work originated as my MBA capstone at USP/ESALQ and later became a scientific publication presented at the XIII Simpósio de Engenharia de Produção (SIMEP) in 2025.</p>
  </div>
</section>

<section class="case-section">
  <div class="case-section__label">Methodology</div>
  <div class="case-section__body">
    <h2>From municipal indicators to interpretable clusters.</h2>
    <p>The analytical dataset combines three sanitation indicators and three education indicators. Sanitation variables cover piped-water access, households with bathrooms and piped water, and urban waste collection. Education variables cover school-attendance performance, educational attainment and age-grade delay in elementary school.</p>

    <div class="case-steps">
      <div><span>01</span><h3>Prepare</h3><p>Clean municipal data, remove missing observations and transform percentage fields into consistent numeric formats.</p></div>
      <div><span>02</span><h3>Standardize</h3><p>Normalize features with Z-score scaling using Scikit-learn's <code>StandardScaler</code>.</p></div>
      <div><span>03</span><h3>Choose k</h3><p>Evaluate cluster structure with silhouette analysis and the elbow method before defining three clusters.</p></div>
      <div><span>04</span><h3>Cluster</h3><p>Apply K-Means to identify groups of municipalities with similar sanitation and education profiles.</p></div>
      <div><span>05</span><h3>Interpret</h3><p>Use Pearson correlation, boxplots and regional/geospatial analysis to understand the resulting profiles.</p></div>
      <div><span>06</span><h3>Contextualize</h3><p>Add an income indicator to examine how economic conditions overlap with sanitation and educational outcomes.</p></div>
    </div>
  </div>
</section>

<section class="case-section">
  <div class="case-section__label">Cluster structure</div>
  <div class="case-section__body">
    <h2>Three distinct municipal profiles emerged.</h2>
    <div class="cluster-grid">
      <article>
        <span class="cluster-id">Cluster 0</span>
        <strong>2,018 municipalities</strong>
        <p>Intermediate sanitation and education conditions, with greater variability across the indicators.</p>
      </article>
      <article>
        <span class="cluster-id">Cluster 1</span>
        <strong>860 municipalities</strong>
        <p>The most vulnerable group, combining weaker basic infrastructure and poorer educational indicators.</p>
      </article>
      <article>
        <span class="cluster-id">Cluster 2</span>
        <strong>2,678 municipalities</strong>
        <p>The strongest profile, with higher sanitation access, better school indicators and lower age-grade delay.</p>
      </article>
    </div>
  </div>
</section>

<figure class="case-figure">
  <img src="https://raw.githubusercontent.com/limapablo/kmeans-saneamento-educacao/main/imagens/mapa_clusters.png" alt="Map of Brazil showing municipalities grouped into three sanitation and education clusters" loading="lazy">
  <figcaption>Geographic distribution of the three municipal clusters. The analysis found Cluster 2 concentrated more strongly in the South and Southeast, while Clusters 0 and 1 were more prevalent in the North and Northeast.</figcaption>
</figure>

<section class="case-section">
  <div class="case-section__label">Key findings</div>
  <div class="case-section__body">
    <h2>The clusters expose overlapping infrastructure, education and regional inequality.</h2>
    <div class="finding-list">
      <div><span>01</span><p><strong>Sanitation and education move together in the observed data.</strong> Municipalities with stronger sanitation infrastructure tended to also show better educational indicators.</p></div>
      <div><span>02</span><p><strong>Cluster 2 consistently showed the strongest outcomes.</strong> It combined greater access to piped water and waste collection with higher school attendance and lower age-grade delay.</p></div>
      <div><span>03</span><p><strong>Cluster 1 concentrated vulnerability.</strong> It combined weaker sanitation infrastructure, lower educational performance and a stronger presence in historically disadvantaged regions.</p></div>
      <div><span>04</span><p><strong>Regional patterns were clear.</strong> Cluster 0 was more prevalent in the Northeast, Cluster 1 in the North, and Cluster 2 in the South and Southeast.</p></div>
      <div><span>05</span><p><strong>Income reinforced the pattern.</strong> The complementary income analysis showed higher-income municipalities tending to have stronger sanitation and educational indicators.</p></div>
      <div><span>06</span><p><strong>School attendance and age-grade delay were strongly negatively associated.</strong> Lower attendance coincided with higher educational delay within the cluster-level analysis.</p></div>
    </div>
  </div>
</section>

<section class="case-section">
  <div class="case-section__label">Interpretation</div>
  <div class="case-section__body">
    <h2>Useful for prioritization — not a causal claim.</h2>
    <p>The value of the study is exploratory and decision-oriented: clustering makes structural differences between groups of municipalities visible and can help identify where integrated sanitation and education policies may deserve greater attention.</p>
    <p>Because the analysis is observational and based on clustering and correlation, it should not be interpreted as proving that sanitation alone causes better educational outcomes. Instead, it highlights meaningful associations that can guide deeper causal or longitudinal research.</p>
  </div>
</section>

<section class="case-section">
  <div class="case-section__label">Limitations & next steps</div>
  <div class="case-section__body">
    <h2>The paper makes the analytical boundaries explicit.</h2>
    <p>The main limitations are the use of Census 2010 data and the specific set of variables selected for the analysis. The paper proposes extending the work with newer census data, broader socioeconomic variables such as health, technology access and employment, more advanced machine-learning approaches, and predictive simulations of integrated public-policy scenarios.</p>
  </div>
</section>

<section class="case-publication">
  <p class="section-kicker">Publication</p>
  <h2>Saneamento e Educação: Explorando Padrões em Municípios Brasileiros através de Clusterização</h2>
  <p>Pablo Henrique da Silva Lima · Miguel Ângelo Lellis Moreira</p>
  <p>XIII Simpósio de Engenharia de Produção — João Pessoa, Brazil · 2025</p>
  <div class="portfolio-actions">
    <a class="btn btn--primary" href="https://doi.org/10.29327/23189258.1068040">DOI: 10.29327/23189258.1068040 ↗</a>
    <a class="btn btn--quiet" href="https://github.com/limapablo/kmeans-saneamento-educacao">View reproducible project ↗</a>
  </div>
</section>
