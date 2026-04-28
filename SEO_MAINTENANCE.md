# SEO Best Practices y Mantenimiento Continuo

## 🎯 Checklist de Contenido

Para mantener y mejorar el SEO continuamente:

### Por cada página
- [ ] Título único y descriptivo (50-60 caracteres)
- [ ] Meta description unica (120-160 caracteres)
- [ ] H1 único por página
- [ ] H2, H3 jerarquía correcta
- [ ] Keywords naturales en contenido
- [ ] Links internos relevantes
- [ ] Imágenes con alt text descriptivo
- [ ] URLs amigables (slug)

### Por cada proyecto
- [ ] Nombre descriptivo del proyecto
- [ ] Descripción detallada (100+ palabras)
- [ ] Stack tecnológico visible
- [ ] Links a GitHub y Demo
- [ ] Screenshot/preview de alta calidad
- [ ] Features o casos de uso

## 📊 Monitoreo Regular

### Mensual
1. Revisar Search Console
   - Errores de indexación
   - Queries principales
   - CTR y posiciones

2. Analizar Google Analytics
   - Tráfico orgánico
   - Páginas populares
   - Bounce rate por página

3. Core Web Vitals
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1

### Trimestral
1. Auditoría de links internos
2. Revisar posiciones de keywords
3. Análisis de competencia
4. Actualizar contenido antiguo

### Anual
1. Completa auditoría SEO
2. Revisión de estructura de sitio
3. Actualizar tecnologías
4. Revisión de backlinks

## 🔗 Links Útiles para SEO

- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com/
- PageSpeed Insights: https://pagespeed.web.dev/
- Schema Validator: https://validator.schema.org/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Lighthouse: Integrado en Chrome DevTools

## 💡 Tips para Mejorar SEO

### Contenido
- Escribir para usuarios, no para SEO
- Contenido único y de valor
- Actualizar regularmente
- Formato legible (párrafos cortos, listas)

### Técnico
- Velocidad de página (Core Web Vitals)
- Mobile-first design
- HTTPS siempre
- Estructura clara de URLs

### Enlaces
- Links internos relevantes
- Anchor text descriptivo
- Backlinks de calidad (no cantidad)
- Evitar spam de links

### Experiencia Usuario
- Navegación intuitiva
- Diseño responsive
- Accessible (WCAG 2.1)
- Fast loading times

## 🚨 Errores Comunes a Evitar

❌ **No hacer:**
- Keywords stuffing (rellenar keywords)
- Duplicar contenido
- Cloaking (contenido diferente para bots)
- Redirect chains
- Links rotos
- Poor mobile experience
- Meta keywords spam
- Doorway pages

✅ **Sí hacer:**
- Content is King
- Natural keywords
- Quality over quantity
- User experience first
- Regular maintenance
- Monitor metrics
- Stay updated with algorithm changes

## 📈 Indicadores de Éxito

Métrica | Target | Frecuencia
--------|--------|----------
Tráfico orgánico | +20% YoY | Mensual
Keyword rankings | Top 10 | Mensual
Core Web Vitals | Todos "Good" | Semanal
Bounce rate | < 50% | Mensual
Pages/session | > 2 | Mensual
Time on page | > 2 min | Mensual

## 🎯 Goals SEO

### Corto plazo (1-3 meses)
- [ ] Indexación completa en Google
- [ ] Aparición en 20+ keywords
- [ ] Mejorar Core Web Vitals

### Medio plazo (3-6 meses)
- [ ] Top 20 en 10 keywords principales
- [ ] +30% tráfico orgánico
- [ ] Mejorar engagement metrics

### Largo plazo (6-12 meses)
- [ ] Top 10 en keywords objetivo
- [ ] +100% tráfico orgánico
- [ ] Autoridad de dominio mejorada
- [ ] Leads/conversiones generadas

## 🔄 Proceso de Actualización

Cuando actualices contenido o agregues nuevas páginas:

1. Asegurar metadatos correctos
   ```astro
   import { PAGES_SEO } from "../config/seo";
   const { title, description, keywords } = PAGES_SEO.newPage;
   ```

2. Usar estructura semántica
   ```html
   <h1>Título principal</h1>
   <h2>Subtítulo</h2>
   <p>Contenido relevante</p>
   ```

3. Incluir links internos
   ```astro
   <a href="/proyectos/">Ver más proyectos</a>
   ```

4. Optimizar imágenes
   ```astro
   <img src={image} alt="Descripción clara" />
   ```

5. Build y deploy
   ```bash
   npm run build
   git add .
   git commit -m "Update SEO for [page]"
   git push
   ```

6. Verificar en Search Console
   - Request indexing
   - Monitor crawl stats
   - Check for errors

## 📚 Referencias

- Google Search Central: https://developers.google.com/search
- Astro SEO Guide: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- MDN Web Docs: https://developer.mozilla.org/
- Web.dev: https://web.dev/

---

**Última revisión:** 28 de abril de 2026
**Próxima revisión recomendada:** 28 de mayo de 2026
