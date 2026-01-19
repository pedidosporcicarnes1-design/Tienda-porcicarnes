// =====================
// LISTAS DE PRODUCTOS COMPLETAS
// =====================

const productosMinoristasFrescos = []; // Carnes frescas minoristas (1020xxx)
const productosDerivadosCarnicos = []; // Productos procesados (11007xxx)  
const productosMayoristasFrescos = []; // Carnes frescas mayoristas (1010xxx)

// =====================
// DESCRIPCIONES ESPECÍFICAS PARA CADA PRODUCTO
// =====================

const descripcionesProductos = {
    // ===== PRODUCTOS FRESCOS MINORISTAS (1020xxx) =====
    "10202003 - Despojo comestible de cerdo E C": "Despojo comestible de cerdo categoría C, para variedad de preparaciones económicas.",
    "10202005 - Recorte industrial de cerdo C": "Recorte industrial de cerdo categoría C, ideal para procesamiento comercial.",
    "10202107 - Lomito de cerdo C": "Lomito de cerdo categoría C, carne tierna y jugosa para uso comercial.",
    "10202210 - Lomo de cerdo PV C": "Lomo de cerdo PV categoría C, presentación comercial para punto de venta.",
    "10202211 - Lomo de cerdo C": "Lomo de cerdo categoría C, básico para restaurantes y negocios de comida.",
    "10202305 - Papada de cerdo SCT C": "Papada de cerdo SCT categoría C, selección especial para preparaciones tradicionales.",
    "10202306 - Papada de cerdo porcionada T PV C": "Papada de cerdo porcionada T PV categoría C, práctica para punto de venta.",
    "10202402 - Porcion de paticas de cerdo C": "Porción de paticas de cerdo categoría C, para gelatinas y guisos comerciales.",
    "10202403 - Paticas de cerdo rayadas C": "Paticas de cerdo rayadas categoría C, preparadas para facilitar el cocinado.",
    "10202404 - Paticas de cerdo PV C": "Paticas de cerdo PV categoría C, presentación comercial para punto de venta.",
    "10202406 - Paticas de cerdo C": "Paticas de cerdo categoría C, básico comercial para diversas preparaciones.",
    "10202407 - Paticas de cerdo x 2 und PV": "Paticas de cerdo x 2 unidades PV, presentación comercial en paquete doble.",
    "10202526 - Ossobuco de cerdo porcionado V C": "Ossobuco de cerdo porcionado V categoría C, corte gourmet para establecimientos.",
    "10202532 - Muslo de cerdo PV granel C": "Muslo de cerdo PV a granel categoría C, para negocios de comida y restaurantes.",
    "10202533 - Ossobuco de cerdo sin piel T C": "Ossobuco de cerdo sin piel T categoría C, para establecimientos gourmet.",
    "10202534 - Pernil de cerdo CPCCT C": "Pernil de cerdo CPCCT categoría C, calidad comercial para negocios.",
    "10202535 - Pernil de cerdo SPSCV C": "Pernil de cerdo SPSCV categoría C, presentación comercial especial.",
    "10202536 - Pierna de cerdo premium C": "Pierna de cerdo premium categoría C, para restaurantes de alta cocina.",
    "10202537 - Tocino anca de cerdo C": "Tocino anca de cerdo categoría C, para desayunos comerciales y preparaciones varias.",
    "10202545 - Punta de anca de cerdo C": "Punta de anca de cerdo categoría C, corte selecto para establecimientos.",
    "10202607 - Barriguero de cerdo C": "Barriguero de cerdo categoría C, para frituras comerciales y picadas.",
    "10202611 - Tocino de cerdo economico C": "Tocino de cerdo económico categoría C, para establecimientos con presupuesto ajustado.",
    "10202618 - Tocineta de cerdo CA C": "Tocineta de cerdo CA categoría C, calidad estándar para uso comercial.",
    "10202619 - Tocineta de cerdo premium C": "Tocineta de cerdo premium categoría C, calidad superior para restaurantes.",
    "10202620 - Tocino barriguero de cerdo C": "Tocino barriguero de cerdo categoría C, combinación perfecta para desayunos.",
    "10202622 - Tocino de cerdo premium C": "Tocino de cerdo premium categoría C, de alta calidad para establecimientos gourmet.",
    "10202623 - Barriguero de cerdo porcionado T PV C": "Barriguero de cerdo porcionado T PV categoría C, práctico para punto de venta.",
    "10202626 - Tocino de cerdo economico T C": "Tocino de cerdo económico T categoría C, tajado para uso comercial.",
    "10202702 - Recorte de cerdo 70/30 C": "Recorte de cerdo 70/30 categoría C, para moler y preparaciones comerciales.",

    // ===== PRODUCTOS PROCESADOS (11007xxx) =====
    "11007001 - Jamon de cerdo estandar x 250g": "Jamón de cerdo estándar en presentación de 250g, ideal para sándwiches y lonche.",
    "11007002 - Jamon de cerdo estandar x 500g": "Jamón de cerdo estándar en presentación de 500g, tamaño familiar.",
    "11007005 - Chorizo cocido de cerdo x 500g": "Chorizo cocido de cerdo en presentación de 500g, listo para consumir.",
    "11007006 - Cabano de cerdo x 100g": "Cabaño de cerdo en presentación de 100g, embutido curado tradicional.",
    "11007007 - Hamburguesa de cerdo x 500g": "Hamburguesas de cerdo en presentación de 500g, listas para asar.",
    "11007008 - Salchichon cervecero de cerdo x 500g": "Salchichón cervecero de cerdo en presentación de 500g, perfecto para picadas.",
    "11007009 - Pernil de cerdo ahumado x 1.1kg": "Pernil de cerdo ahumado en presentación de 1.1kg, sabor intenso y tradicional.",
    "11007010 - Pernil de cerdo x 500g": "Pernil de cerdo en presentación de 500g, versátil para múltiples preparaciones.",
    "11007011 - Lomo de cerdo x 1kg": "Lomo de cerdo en presentación de 1kg, carne tierna y jugosa.",
    "11007012 - Lomo de cerdo ahumado x 500g": "Lomo de cerdo ahumado en presentación de 500g, sabor ahumado intenso.",
    "11007013 - Chuleta de cerdo ahumada x 500g": "Chuleta de cerdo ahumada en presentación de 500g, perfecta para parrilla.",
    "11007016 - Tocineta ahumada x 150g": "Tocineta ahumada en presentación de 150g, ideal para desayunos rápidos.",
    "11007017 - Tocineta ahumada x 500g": "Tocineta ahumada en presentación de 500g, tamaño familiar.",
    "11007018 - Chuzo x und 190g": "Chuzo individual de 190g, listo para asar y servir.",
    "11007019 - Jamon de cerdo estandar x kg": "Jamón de cerdo estándar por kilogramo, para establecimientos comerciales.",
    "11007021 - Tocineta ahumada x kg": "Tocineta ahumada por kilogramo, para negocios de comida.",
    "11007022 - Tocineta ahumada x 250g": "Tocineta ahumada en presentación de 250g, tamaño intermedio.",
    "11007023 - Morcilla seleccionada x 500g": "Morcilla seleccionada en presentación de 500g, embutido tradicional.",
    "11007025 - Pernil de cerdo ahumado navideño": "Pernil de cerdo ahumado especial navideño, para celebraciones familiares.",
    "11007026 - Chorizo cocido de cerdo x 50und 62.5 g": "Chorizo cocido de cerdo x 50 unidades de 62.5g, para eventos y restaurantes.",
    "11007028 - Chorizo coctel x 250g": "Chorizo cóctel en presentación de 250g, ideal para fiestas y reuniones.",
    "11007031 - Lomo relleno con verduras": "Lomo relleno con verduras, preparación gourmet lista para hornear.",
    "11007032 - Butifarra de cerdo x 500g": "Butifarra de cerdo en presentación de 500g, embutido tradicional español.",
    "11007036 - Chorizo cocido de cerdo PV x 30und 62.5": "Chorizo cocido de cerdo PV x 30 unidades de 62.5g, presentación comercial.",
    "11007037 - Chorizo cocido de cerdo x 15 62.5g": "Chorizo cocido de cerdo x 15 unidades de 62.5g, tamaño intermedio.",
    "11007039 - Hamburguesa de cerdo x und pre- asada": "Hamburguesa de cerdo individual pre-asada, lista para calentar y servir.",
    "11007054 - Lomo relleno ciruelas-queso e": "Lomo relleno con ciruelas y queso, combinación dulce y salada gourmet.",
    "11007055 - Lomo relleno con queso - champiñones e": "Lomo relleno con queso y champiñones, preparación elegante y sabrosa.",
    "11007057 - Chorizo cocido de cerdo x 20und 50g": "Chorizo cocido de cerdo x 20 unidades de 50g, perfecto para tapas.",
    "11007062 - Salchichon de cerdo seleccionado x 500g": "Salchichón de cerdo seleccionado en presentación de 500g, calidad premium.",
    "11007100 - Lomo relleno con Semillas J y T": "Lomo relleno con semillas de mostaza y tomillo, sabor aromático y único.",
    "11007101 - Lomo relleno con jamon y tocineta": "Lomo relleno con jamón y tocineta, combinación clásica y deliciosa.",
    "11007102 - Tocineta a granel": "Tocineta a granel, para establecimientos que requieren grandes cantidades.",
    "11007110 - Recorte de tocineta x 300g": "Recorte de tocineta en presentación de 300g, ideal para guisos y sopas.",
    "11007111 - Pernil sanduche x und 120g": "Pernil para sándwich individual de 120g, práctico y delicioso.",
    "11007118 - Hamburguesa de cerdo pre-asada x 500g": "Hamburguesa de cerdo pre-asada en presentación de 500g, lista para calentar.",
    "11007129 - Tocineta x 5kg": "Tocineta en presentación de 5kg, para negocios de comida de alto volumen.",
    "11007137 - Salchicha de cerdo x 500g 12und": "Salchichas de cerdo x 12 unidades en 500g, perfectas para parrillas.",
    "11007138 - Salchicha de cerdo grande x 450g": "Salchichas de cerdo grandes en presentación de 450g, ideales para hot dogs.",
    "11007139 - Punta anca de cerdo glaseada x kg": "Punta de anca de cerdo glaseada por kilogramo, preparación gourmet.",
    "11007143 - Chorizo Español Porci x 500g": "Chorizo Español Porci en presentación de 500g, auténtico sabor español.",
    "11007144 - Chorizo Argentino Porci x 500g": "Chorizo Argentino Porci en presentación de 500g, sabor a la parrilla argentina.",
    "11007145 - Salchicha Polaca Porci x 500g": "Salchicha Polaca Porci en presentación de 500g, embutido tradicional polaco.",
    "11007147 - Albondigas preasadas x 300g 6und": "Albóndigas pre-asadas x 6 unidades en 300g, listas para servir.",
    "11007148 - Carne molida de cerdo adobada x 500g": "Carne molida de cerdo adobada en presentación de 500g, lista para cocinar.",
    "11007170 - Carne marinada finas hierbas x 500g": "Carne marinada con finas hierbas en presentación de 500g, sabor delicado.",
    "11007171 - Carne marinada sabor BBQ x 500g": "Carne marinada sabor BBQ en presentación de 500g, perfecta para parrilla.",
    "11007172 - Carne marinada sabor español x 500g": "Carne marinada sabor español en presentación de 500g, toque mediterráneo.",
    "11007174 - Chuzo x 10und": "Chuzos x 10 unidades, ideal para fiestas y reuniones familiares.",
    "11007182 - Chorizos cocido x 90g Excluido": "Chorizos cocido x 90g presentación exclusiva, para consumidores exigentes.",
    "11007185 - Costilla de cerdo ahumada x 750g": "Costilla de cerdo ahumada en presentación de 750g, sabor intenso ahumado.",
    "11007186 - Tocino jamonado tajado x 500g": "Tocino jamonado tajado en presentación de 500g, perfecto para desayunos.",
    "11007189 - Chorizos a granel x 1800g 20und": "Chorizos a granel x 20 unidades en 1800g, para eventos grandes.",
    "11007190 - Chorizos a granel x 450g 5und": "Chorizos a granel x 5 unidades en 450g, tamaño familiar.",
    "11007191 - Chorizos a granel x 90 g 1und": "Chorizos a granel x 1 unidad de 90g, porción individual.",

    // ===== PRODUCTOS MAYORISTAS FRESCOS (1010xxx) =====
    "10101002 - Barriga cantonesa de cerdo": "Barriga cantonesa de cerdo, corte especial para la cocina asiática.",
    "10101003 - Barriga con costilla de cerdo": "Barriga con costilla de cerdo, combinación perfecta de sabores.",
    "10101101 - Brazuelo de cerdo premium": "Brazuelo de cerdo premium, carne tierna para asados.",
    "10101104 - Ossobuco pulido de cerdo": "Ossobuco pulido de cerdo, corte gourmet para guisos.",
    "10101106 - Pernil brazo de cerdo CPSOT": "Pernil brazo CPSOT, calidad superior para negocios.",
    "10101107 - Pernil paleta de cerdo SPCOT": "Pernil paleta SPCOT, carne jugosa para múltiples usos.",
    "10101108 - Tocino brazo de cerdo": "Tocino de brazo de cerdo, para chicharrones y frituras.",
    "10101203 - Carnaza de cerdo": "Carnaza de cerdo, ideal para moler o preparaciones especiales.",
    "10101207 - Careta de cerdo": "Careta de cerdo fresca, para gelatinas y preparaciones tradicionales.",
    "10101208 - Oreja de cerdo tradicional": "Oreja de cerdo tradicional, para ensaladas y platos fríos.",
    "10101301 - Cabeza de lomo de cerdo premium": "Cabeza de lomo premium, corte selecto para restaurantes.",
    "10101313 - Bondiola de cerdo 2 und PV": "Bondiola de cerdo 2 unidades PV, presentación comercial.",
    "10101502 - Rack de cerdo PV": "Rack de cerdo PV, corte especial para eventos y restaurantes.",
    "10101511 - Chuleta de cerdo mariposa": "Chuleta de cerdo mariposa, corte fino para parrilla.",
    "10101601 - Costilla de cerdo": "Costilla de cerdo fresca, ideal para asados.",
    "10101605 - Costilla de cerdo carnuda T PV": "Costilla de cerdo carnuda T PV, mayor contenido de carne.",
    "10101606 - Costilla de cerdo carnuda V": "Costilla de cerdo carnuda V, versión más carnosa.",
    "10101607 - Falsas costillas de cerdo": "Falsas costillas de cerdo, alternativa económica.",
    "10101610 - Costilla de cerdo fina": "Costilla de cerdo fina, corte delicado.",
    "10101611 - Costilla de cerdo MU": "Costilla de cerdo MU, para múltiples usos.",
    "10101613 - Costilla de cerdo San Luis T": "Costilla San Luis T, corte tradicional.",
    "10101615 - Recorte de costilla de cerdo": "Recorte de costilla de cerdo, para caldos y sopas.",
    "10101620 - Costilla de cerdo tiras": "Costilla de cerdo en tiras, ideal para preparaciones rápidas.",
    "10101701 - Cuero de cerdo": "Cuero de cerdo fresco, para chicharrones.",
    "10101702 - Cuero con grasa de cerdo": "Cuero con grasa de cerdo, para chicharrones extra sabrosos.",
    "10101708 - Cueritos de cerdo PV": "Cueritos de cerdo PV, listos para preparar.",
    "10101801 - Espinazo de cerdo": "Espinazo de cerdo, perfecto para caldos nutritivos.",
    "10101809 - Colitas de cerdo PV": "Colitas de cerdo PV, para guisos tradicionales.",
    "10101902 - Grasa de tocino de cerdo": "Grasa de tocino de cerdo, para freír y dar sabor.",
    "10102001 - Despojo comestible de cerdo E": "Despojo comestible de cerdo E, para variedad de preparaciones.",
    "10102007 - Recorte industrial de cerdo": "Recorte industrial de cerdo, para procesamiento.",
    "10102101 - Lomito de cerdo": "Lomito de cerdo, carne tierna y jugosa.",
    "10102201 - Chata de lomo de cerdo": "Chata de lomo de cerdo, corte selecto.",
    "10102202 - Lomo de cerdo": "Lomo de cerdo premium, versátil para múltiples preparaciones.",
    "10102225 - Lomo de cerdo 5 und PV": "Lomo de cerdo 5 unidades PV, presentación comercial.",
    "10102226 - Chata de cerdo 3 und PV": "Chata de cerdo 3 unidades PV, para negocios.",
    "10102301 - Papada de cerdo premium": "Papada de cerdo premium, carne jugosa con grasa infiltrada.",
    "10102302 - Papada de cerdo SCT": "Papada de cerdo SCT, selección especial.",
    "10102307 - Papada de cerdo P/PV": "Papada de cerdo P/PV, presentación para punto de venta.",
    "10102401 - Paticas de cerdo": "Paticas de cerdo, para gelatinas y guisos.",
    "10102503 - Milanesa de cerdo x 10 und": "Milanesas de cerdo x 10 unidades, listas para empanizar.",
    "10102504 - Milanesa de cerdo x 5 und": "Milanesas de cerdo x 5 unidades, tamaño familiar.",
    "10102506 - Muslo de cerdo PV granel": "Muslo de cerdo PV a granel, para restaurantes.",
    "10102507 - Ossobuco de cerdo sin piel T": "Ossobuco de cerdo sin piel T, corte gourmet.",
    "10102508 - Pernil de cerdo CPCCT": "Pernil de cerdo CPCCT, calidad comercial.",
    "10102511 - Pernil de cerdo SPSCV": "Pernil de cerdo SPSCV, presentación especial.",
    "10102514 - Pierna de cerdo PV": "Pierna de cerdo PV, para asados comerciales.",
    "10102515 - Pierna de cerdo premium": "Pierna de cerdo premium, calidad superior.",
    "10102517 - Punta de anca de cerdo": "Punta de anca de cerdo, corte selecto.",
    "10102518 - Punta de anca de cerdo con piel": "Punta de anca con piel, para asados tradicionales.",
    "10102519 - Tocino anca de cerdo": "Tocino de anca de cerdo, para desayunos comerciales.",
    "10102544 - Matambre de cerdo": "Matambre de cerdo, corte plano para rellenar.",
    "10102562 - Tocino anca de cerdo 6 und PV": "Tocino anca 6 unidades PV, presentación comercial.",
    "10102601 - Barriguero de cerdo": "Barriguero de cerdo, para frituras comerciales.",
    "10102603 - Barriguero de cerdo tiras": "Barriguero en tiras, ideal para picadas.",
    "10102604 - Barriguero de cerdo tiras x 10 und": "Barriguero tiras x 10 unidades, para eventos.",
    "10102605 - Barriguero de cerdo tiras x 5 und": "Barriguero tiras x 5 unidades, tamaño familiar.",
    "10102606 - Barriguero de cerdo porcionado T PV": "Barriguero porcionado T PV, práctico comercial.",
    "10102609 - Tocineta de cerdo premium": "Tocineta de cerdo premium, calidad superior.",
    "10102621 - Tocino de cerdo economico": "Tocino de cerdo económico, para establecimientos.",
    "10102704 - Recorte de cerdo 70/30": "Recorte de cerdo 70/30, para moler comercial.",
    "10105000 - Combo barril de cerdo PV": "Combo barril de cerdo PV, oferta especial.",
    "10105001 - Combo sancocho de cerdo PV": "Combo sancocho de cerdo PV, para preparaciones tradicionales.",
    "10105002 - Combo frijoles de cerdo PV": "Combo frijoles de cerdo PV, complemento perfecto.",

    // ===== PRODUCTOS GENERALES CON DESCRIPCION POR DEFECTO =====
    "default": "Producto de cerdo de alta calidad, seleccionado cuidadosamente para garantizar frescura, sabor y textura óptima. Ideal para múltiples preparaciones culinarias."
};

// =====================
// SISTEMA DE IMÁGENES DIFERENTES PARA CADA PRODUCTO
// =====================

const imagenesProductos = {
    // ===== IMÁGENES PARA PRODUCTOS FRESCOS MINORISTAS (1020xxx) =====
    "10202003": "imagenes/despojo_cerdo.png",
    "10202005": "imagenes/recorte_industrial.png",
    "10202107": "imagenes/lomito_cerdo.png",
    "10202210": "imagenes/lomo_pv.png",
    "10202211": "imagenes/lomo_pv.png",
    "10202305": "imagenes/papada_sct.png",
    "10202306": "imagenes/papada_porcionada.png",
    "10202402": "imagenes/porcion_paticas.png",
    "10202403": "imagenes/porcion_paticas.png",
    "10202404": "imagenes/porcion_paticas.png",
    "10202406": "imagenes/porcion_paticas.png",
    "10202407": "imagenes/porcion_paticas.png",
    "10202526": "imagenes/osobuco_sp.png",
    "10202532": "imagenes/muslo_granel.png",
    "10202533": "imagenes/osobuco_sp.png",
    "10202534": "imagenes/pernil.png",
    "10202535": "imagenes/pernil.png",
    "10202536": "imagenes/pierna_premium.png",
    "10202537": "imagenes/tocino_anca.png",
    "10202545": "imagenes/punta_anca.png",
    "10202607": "imagenes/barriguero.png",
    "10202611": "imagenes/tocino_economico.png",
    "10202618": "imagenes/tocineta_premium.png",
    "10202619": "imagenes/tocineta_premium.png",
    "10202620": "imagenes/barriguero.png",
    "10202622": "imagenes/tocino_premium.png",
    "10202623": "imagenes/barriguero.png",
    "10202626": "imagenes/tocino_economico.png",
    "10202702": "imagenes/recorte_7030.png",

    // ===== IMÁGENES PARA PRODUCTOS PROCESADOS (11007xxx) =====
    "11007001": "porcicarnes/jamon_250g.png",
    "11007002": "porcicarnes/jamon_500g.png",
    "11007005": "porcicarnes/chorizo_500g.png",
    "11007006": "porcicarnes/cabano_100g.png",
    "11007007": "porcicarnes/hamburguesa_500g.png",
    "11007008": "porcicarnes/salchichon_cervecero.png",
    "11007009": "porcicarnes/pernil_ahumado_1kg.png",
    "11007010": "porcicarnes/pernil_500g.png",
    "11007011": "porcicarnes/lomo_1kg.png",
    "11007012": "porcicarnes/lomo_ahumado_500g.png",
    "11007013": "porcicarnes/chuleta_ahumada.png",
    "11007016": "porcicarnes/tocineta_150g.png",
    "11007017": "porcicarnes/tocineta_500g.png",
    "11007018": "porcicarnes/chuzo.png",
    "11007019": "porcicarnes/jamon_kg.png",
    "11007021": "porcicarnes/tocineta_kg.png",
    "11007022": "porcicarnes/tocineta_250g.png",
    "11007023": "porcicarnes/morcilla.png",
    "11007025": "porcicarnes/pernil_navidad.png",
    "11007026": "porcicarnes/chorizo_50und.png",
    "11007028": "porcicarnes/chorizo_coctel.png",
    "11007031": "porcicarnes/lomo_relleno_verduras.png",
    "11007032": "porcicarnes/butifarra.png",
    "11007036": "porcicarnes/chorizo_pv_30und.png",
    "11007037": "porcicarnes/chorizo_15und.png",
    "11007039": "porcicarnes/hamburguesa_preasada.png",
    "11007054": "porcicarnes/lomo_ciruelas_queso.png",
    "11007055": "porcicarnes/lomo_queso_champinones.png",
    "11007057": "porcicarnes/chorizo_20und.png",
    "11007062": "porcicarnes/salchichon_seleccionado.png",
    "11007100": "porcicarnes/lomo_semillas.png",
    "11007101": "porcicarnes/lomo_jamon_tocineta.png",
    "11007102": "porcicarnes/tocineta_granel.png",
    "11007110": "porcicarnes/recorte_tocineta.png",
    "11007111": "porcicarnes/pernil_sanduche.png",
    "11007118": "porcicarnes/hamburguesa_preasada_500g.png",
    "11007129": "porcicarnes/tocineta_5kg.png",
    "11007137": "porcicarnes/salchicha_12und.png",
    "11007138": "porcicarnes/salchicha_grande.png",
    "11007139": "porcicarnes/punta_anca_glaseada.png",
    "11007143": "porcicarnes/chorizo_espanol.png",
    "11007144": "porcicarnes/chorizo_argentino.png",
    "11007145": "porcicarnes/salchicha_polaca.png",
    "11007147": "porcicarnes/albondigas.png",
    "11007148": "porcicarnes/carne_molida_adobada.png",
    "11007170": "porcicarnes/carne_finas_hierbas.png",
    "11007171": "porcicarnes/carne_bbq.png",
    "11007172": "porcicarnes/carne_espanol.png",
    "11007174": "porcicarnes/chuzo_10und.png",
    "11007182": "porcicarnes/chorizo_90g.png",
    "11007185": "porcicarnes/costilla_ahumada.png",
    "11007186": "porcicarnes/tocino_jamonado.png",
    "11007189": "porcicarnes/chorizo_granel_20und.png",
    "11007190": "porcicarnes/chorizo_granel_5und.png",
    "11007191": "porcicarnes/chorizo_granel_1und.png",

    // ===== IMÁGENES PARA PRODUCTOS MAYORISTAS FRESCOS (1010xxx) =====
    "10101002": "imagenes/barriga_cantonesa.png",
    "10101003": "imagenes/barriga_costilla.png",
    "10101101": "imagenes/brazuelo_premium.png",
    "10101104": "imagenes/osobuco_sp.png",
    "10101106": "imagenes/pernil_brazo_cpsot.png",
    "10101107": "imagenes/pernil_paleta.png",
    "10101108": "imagenes/pernil_paleta.png",
    "10101203": "imagenes/carnaza.png",
    "10101207": "imagenes/careta.jpg",
    "10101208": "imagenes/orejas.jpg",
    "10101301": "imagenes/cabeza_lomo.png",
    "10101313": "imagenes/cabeza_lomo.png",
    "10101502": "imagenes/rack_pv.png",
    "10101511": "imagenes/chuleta_mariposa.png",
    "10101601": "imagenes/costilla.png",
    "10101605": "imagenes/costilla_carnuda.png",
    "10101606": "imagenes/costilla_carnuda.png",
    "10101607": "imagenes/falsas_costillas.png",
    "10101610": "imagenes/costilla_fina.png",
    "10101611": "imagenes/costilla_mu.png",
    "10101613": "imagenes/costilla_san_luis.png",
    "10101615": "imagenes/recorte_costilla.png",
    "10101620": "imagenes/costilla_tiras.png",
    "10101701": "imagenes/cuero.png",
    "10101702": "imagenes/cuero_grasa.png",
    "10101708": "imagenes/cuero.png",
    "10101801": "imagenes/espinazo.png",
    "10101809": "imagenes/colitas.png",
    "10101902": "imagenes/grasa_tocino.png",
    "10102001": "imagenes/despojo_cerdo.png",
    "10102007": "imagenes/recorte_industrial.png",
    "10102101": "imagenes/lomito_cerdo.png",
    "10102201": "imagenes/chata_lomo_pv.png",
    "10102202": "imagenes/lomo_pv.png",
    "10102225": "imagenes/lomo_5und_pv.png",
    "10102226": "imagenes/chata_lomo.png",
    "10102301": "imagenes/papada_sct.png",
    "10102302": "imagenes/papada_sct.png",
    "10102307": "imagenes/papada_sct.png",
    "10102401": "imagenes/porcion_paticas.png",
    "10102503": "imagenes/milanesa_10und.png",
    "10102504": "imagenes/milanesa_5und.png",
    "10102506": "imagenes/muslo_granel.png",
    "10102507": "imagenes/ossobuco_sp.png",
    "10102508": "imagenes/pernil_cpscv.png",
    "10102511": "imagenes/pernil_cpscv.png",
    "10102514": "imagenes/pierna_premium.png",
    "10102515": "imagenes/pierna_premium.png",
    "10102517": "imagenes/punta_anca.png",
    "10102518": "imagenes/punta_anca.png",
    "10102519": "imagenes/tocino_anca.png",
    "10102544": "imagenes/matambre.png",
    "10102562": "imagenes/tocino_anca.png",
    "10102601": "imagenes/barriguero.png",
    "10102603": "imagenes/barriguero.png",
    "10102604": "imagenes/barriguero.png",
    "10102605": "imagenes/barriguero.png",
    "10102606": "imagenes/barriguero.png",
    "10102609": "imagenes/tocineta_premium.png",
    "10102621": "imagenes/tocino_economico.png",
    "10102704": "imagenes/recorte_7030.png",
    "10105000": "imagenes/combo_barril.png",
    "10105001": "imagenes/combo_sancocho.png",
    "10105002": "imagenes/combo_frijoles.png"
};

// Función para obtener imagen específica
function obtenerImagenProducto(codigo) {
    return imagenesProductos[codigo] || "porcicarnes/despojo_cerdo.png";
}

// =====================
// LISTAS DE PRODUCTOS CON CÓDIGOS
// =====================

// ===== PRODUCTOS FRESCOS MINORISTAS (1020xxx) =====
const productosMinoristasFrescosConCodigos = [
    { codigo: "10202003", nombre: "Despojo comestible de cerdo E C" },
    { codigo: "10202005", nombre: "Recorte industrial de cerdo C" },
    { codigo: "10202107", nombre: "Lomito de cerdo C" },
    { codigo: "10202210", nombre: "Lomo de cerdo PV C" },
    { codigo: "10202211", nombre: "Lomo de cerdo C" },
    { codigo: "10202305", nombre: "Papada de cerdo SCT C" },
    { codigo: "10202306", nombre: "Papada de cerdo porcionada T PV C" },
    { codigo: "10202402", nombre: "Porcion de paticas de cerdo C" },
    { codigo: "10202403", nombre: "Paticas de cerdo rayadas C" },
    { codigo: "10202404", nombre: "Paticas de cerdo PV C" },
    { codigo: "10202406", nombre: "Paticas de cerdo C" },
    { codigo: "10202407", nombre: "Paticas de cerdo x 2 und PV" },
    { codigo: "10202526", nombre: "Ossobuco de cerdo porcionado V C" },
    { codigo: "10202532", nombre: "Muslo de cerdo PV granel C" },
    { codigo: "10202533", nombre: "Ossobuco de cerdo sin piel T C" },
    { codigo: "10202534", nombre: "Pernil de cerdo CPCCT C" },
    { codigo: "10202535", nombre: "Pernil de cerdo SPSCV C" },
    { codigo: "10202536", nombre: "Pierna de cerdo premium C" },
    { codigo: "10202537", nombre: "Tocino anca de cerdo C" },
    { codigo: "10202545", nombre: "Punta de anca de cerdo C" },
    { codigo: "10202607", nombre: "Barriguero de cerdo C" },
    { codigo: "10202611", nombre: "Tocino de cerdo economico C" },
    { codigo: "10202618", nombre: "Tocineta de cerdo CA C" },
    { codigo: "10202619", nombre: "Tocineta de cerdo premium C" },
    { codigo: "10202620", nombre: "Tocino barriguero de cerdo C" },
    { codigo: "10202622", nombre: "Tocino de cerdo premium C" },
    { codigo: "10202623", nombre: "Barriguero de cerdo porcionado T PV C" },
    { codigo: "10202626", nombre: "Tocino de cerdo economico T C" },
    { codigo: "10202702", nombre: "Recorte de cerdo 70/30 C" }
];

// ===== PRODUCTOS PROCESADOS (11007xxx) =====
const productosDerivadosCarnicosConCodigos = [
    { codigo: "11007001", nombre: "Jamon de cerdo estandar x 250g" },
    { codigo: "11007002", nombre: "Jamon de cerdo estandar x 500g" },
    { codigo: "11007005", nombre: "Chorizo cocido de cerdo x 500g" },
    { codigo: "11007006", nombre: "Cabano de cerdo x 100g" },
    { codigo: "11007007", nombre: "Hamburguesa de cerdo x 500g" },
    { codigo: "11007008", nombre: "Salchichon cervecero de cerdo x 500g" },
    { codigo: "11007009", nombre: "Pernil de cerdo ahumado x 1.1kg" },
    { codigo: "11007010", nombre: "Pernil de cerdo x 500g" },
    { codigo: "11007011", nombre: "Lomo de cerdo x 1kg" },
    { codigo: "11007012", nombre: "Lomo de cerdo ahumado x 500g" },
    { codigo: "11007013", nombre: "Chuleta de cerdo ahumada x 500g" },
    { codigo: "11007016", nombre: "Tocineta ahumada x 150g" },
    { codigo: "11007017", nombre: "Tocineta ahumada x 500g" },
    { codigo: "11007018", nombre: "Chuzo x und 190g" },
    { codigo: "11007019", nombre: "Jamon de cerdo estandar x kg" },
    { codigo: "11007021", nombre: "Tocineta ahumada x kg" },
    { codigo: "11007022", nombre: "Tocineta ahumada x 250g" },
    { codigo: "11007023", nombre: "Morcilla seleccionada x 500g" },
    { codigo: "11007025", nombre: "Pernil de cerdo ahumado navideño" },
    { codigo: "11007026", nombre: "Chorizo cocido de cerdo x 50und 62.5 g" },
    { codigo: "11007028", nombre: "Chorizo coctel x 250g" },
    { codigo: "11007031", nombre: "Lomo relleno con verduras" },
    { codigo: "11007032", nombre: "Butifarra de cerdo x 500g" },
    { codigo: "11007036", nombre: "Chorizo cocido de cerdo PV x 30und 62.5" },
    { codigo: "11007037", nombre: "Chorizo cocido de cerdo x 15 62.5g" },
    { codigo: "11007039", nombre: "Hamburguesa de cerdo x und pre- asada" },
    { codigo: "11007054", nombre: "Lomo relleno ciruelas-queso e" },
    { codigo: "11007055", nombre: "Lomo relleno con queso - champiñones e" },
    { codigo: "11007057", nombre: "Chorizo cocido de cerdo x 20und 50g" },
    { codigo: "11007062", nombre: "Salchichon de cerdo seleccionado x 500g" },
    { codigo: "11007100", nombre: "Lomo relleno con Semillas J y T" },
    { codigo: "11007101", nombre: "Lomo relleno con jamon y tocineta" },
    { codigo: "11007102", nombre: "Tocineta a granel" },
    { codigo: "11007110", nombre: "Recorte de tocineta x 300g" },
    { codigo: "11007111", nombre: "Pernil sanduche x und 120g" },
    { codigo: "11007118", nombre: "Hamburguesa de cerdo pre-asada x 500g" },
    { codigo: "11007129", nombre: "Tocineta x 5kg" },
    { codigo: "11007137", nombre: "Salchicha de cerdo x 500g 12und" },
    { codigo: "11007138", nombre: "Salchicha de cerdo grande x 450g" },
    { codigo: "11007139", nombre: "Punta anca de cerdo glaseada x kg" },
    { codigo: "11007143", nombre: "Chorizo Español Porci x 500g" },
    { codigo: "11007144", nombre: "Chorizo Argentino Porci x 500g" },
    { codigo: "11007145", nombre: "Salchicha Polaca Porci x 500g" },
    { codigo: "11007147", nombre: "Albondigas preasadas x 300g 6und" },
    { codigo: "11007148", nombre: "Carne molida de cerdo adobada x 500g" },
    { codigo: "11007170", nombre: "Carne marinada finas hierbas x 500g" },
    { codigo: "11007171", nombre: "Carne marinada sabor BBQ x 500g" },
    { codigo: "11007172", nombre: "Carne marinada sabor español x 500g" },
    { codigo: "11007174", nombre: "Chuzo x 10und" },
    { codigo: "11007182", nombre: "Chorizos cocido x 90g Excluido" },
    { codigo: "11007185", nombre: "Costilla de cerdo ahumada x 750g" },
    { codigo: "11007186", nombre: "Tocino jamonado tajado x 500g" },
    { codigo: "11007189", nombre: "Chorizos a granel x 1800g 20und" },
    { codigo: "11007190", nombre: "Chorizos a granel x 450g 5und" },
    { codigo: "11007191", nombre: "Chorizos a granel x 90 g 1und" }
];

// ===== PRODUCTOS MAYORISTAS FRESCOS (1010xxx) =====
const productosMayoristasFrescosConCodigos = [
    { codigo: "10101002", nombre: "Barriga cantonesa de cerdo" },
    { codigo: "10101003", nombre: "Barriga con costilla de cerdo" },
    { codigo: "10101101", nombre: "Brazuelo de cerdo premium" },
    { codigo: "10101104", nombre: "Ossobuco pulido de cerdo" },
    { codigo: "10101106", nombre: "Pernil brazo de cerdo CPSOT" },
    { codigo: "10101107", nombre: "Pernil paleta de cerdo SPCOT" },
    { codigo: "10101108", nombre: "Tocino brazo de cerdo" },
    { codigo: "10101203", nombre: "Carnaza de cerdo" },
    { codigo: "10101207", nombre: "Careta de cerdo" },
    { codigo: "10101208", nombre: "Oreja de cerdo tradicional" },
    { codigo: "10101301", nombre: "Cabeza de lomo de cerdo premium" },
    { codigo: "10101313", nombre: "Bondiola de cerdo 2 und PV" },
    { codigo: "10101502", nombre: "Rack de cerdo PV" },
    { codigo: "10101511", nombre: "Chuleta de cerdo mariposa" },
    { codigo: "10101601", nombre: "Costilla de cerdo" },
    { codigo: "10101605", nombre: "Costilla de cerdo carnuda T PV" },
    { codigo: "10101606", nombre: "Costilla de cerdo carnuda V" },
    { codigo: "10101607", nombre: "Falsas costillas de cerdo" },
    { codigo: "10101610", nombre: "Costilla de cerdo fina" },
    { codigo: "10101611", nombre: "Costilla de cerdo MU" },
    { codigo: "10101613", nombre: "Costilla de cerdo San Luis T" },
    { codigo: "10101615", nombre: "Recorte de costilla de cerdo" },
    { codigo: "10101620", nombre: "Costilla de cerdo tiras" },
    { codigo: "10101701", nombre: "Cuero de cerdo" },
    { codigo: "10101702", nombre: "Cuero con grasa de cerdo" },
    { codigo: "10101708", nombre: "Cueritos de cerdo PV" },
    { codigo: "10101801", nombre: "Espinazo de cerdo" },
    { codigo: "10101809", nombre: "Colitas de cerdo PV" },
    { codigo: "10101902", nombre: "Grasa de tocino de cerdo" },
    { codigo: "10102001", nombre: "Despojo comestible de cerdo E" },
    { codigo: "10102007", nombre: "Recorte industrial de cerdo" },
    { codigo: "10102101", nombre: "Lomito de cerdo" },
    { codigo: "10102201", nombre: "Chata de lomo de cerdo" },
    { codigo: "10102202", nombre: "Lomo de cerdo" },
    { codigo: "10102225", nombre: "Lomo de cerdo 5 und PV" },
    { codigo: "10102226", nombre: "Chata de cerdo 3 und PV" },
    { codigo: "10102301", nombre: "Papada de cerdo premium" },
    { codigo: "10102302", nombre: "Papada de cerdo SCT" },
    { codigo: "10102307", nombre: "Papada de cerdo P/PV" },
    { codigo: "10102401", nombre: "Paticas de cerdo" },
    { codigo: "10102503", nombre: "Milanesa de cerdo x 10 und" },
    { codigo: "10102504", nombre: "Milanesa de cerdo x 5 und" },
    { codigo: "10102506", nombre: "Muslo de cerdo PV granel" },
    { codigo: "10102507", nombre: "Ossobuco de cerdo sin piel T" },
    { codigo: "10102508", nombre: "Pernil de cerdo CPCCT" },
    { codigo: "10102511", nombre: "Pernil de cerdo SPSCV" },
    { codigo: "10102514", nombre: "Pierna de cerdo PV" },
    { codigo: "10102515", nombre: "Pierna de cerdo premium" },
    { codigo: "10102517", nombre: "Punta de anca de cerdo" },
    { codigo: "10102518", nombre: "Punta de anca de cerdo con piel" },
    { codigo: "10102519", nombre: "Tocino anca de cerdo" },
    { codigo: "10102544", nombre: "Matambre de cerdo" },
    { codigo: "10102562", nombre: "Tocino anca de cerdo 6 und PV" },
    { codigo: "10102601", nombre: "Barriguero de cerdo" },
    { codigo: "10102603", nombre: "Barriguero de cerdo tiras" },
    { codigo: "10102604", nombre: "Barriguero de cerdo tiras x 10 und" },
    { codigo: "10102605", nombre: "Barriguero de cerdo tiras x 5 und" },
    { codigo: "10102606", nombre: "Barriguero de cerdo porcionado T PV" },
    { codigo: "10102609", nombre: "Tocineta de cerdo premium" },
    { codigo: "10102621", nombre: "Tocino de cerdo economico" },
    { codigo: "10102704", nombre: "Recorte de cerdo 70/30" },
    { codigo: "10105000", nombre: "Combo barril de cerdo PV" },
    { codigo: "10105001", nombre: "Combo sancocho de cerdo PV" },
    { codigo: "10105002", nombre: "Combo frijoles de cerdo PV" }
];

// =====================
// CONFIGURACIÓN DE WHATSAPP
// =====================

const configWhatsApp = {
    numeroTienda: "573001234567", // REEMPLAZAR con el número real de la tienda
    nombreTienda: "Porcicarnes",
    prefijoMensaje: "🐷 *PEDIDO - PORCICARNES* 🐷"
};

// =====================
// GENERAR PRODUCTOS MINORISTAS FRESCOS
// =====================

for (let i = 0; i < productosMinoristasFrescosConCodigos.length; i++) {
    const producto = productosMinoristasFrescosConCodigos[i];
    const nombreCompleto = `${producto.codigo} - ${producto.nombre}`;
    const descripcion = descripcionesProductos[nombreCompleto] || descripcionesProductos["default"];
    const imagen = obtenerImagenProducto(producto.codigo);

    productosMinoristasFrescos.push({
        id: producto.codigo,
        codigo: producto.codigo,
        nombre: producto.nombre,
        nombreCompleto: nombreCompleto,
        descripcion: descripcion,
        imagen: imagen,
        categoria: "minorista_fresco"
    });
}

// =====================
// GENERAR PRODUCTOS DERIVADOS CÁRNICOS
// =====================

for (let i = 0; i < productosDerivadosCarnicosConCodigos.length; i++) {
    const producto = productosDerivadosCarnicosConCodigos[i];
    const nombreCompleto = `${producto.codigo} - ${producto.nombre}`;
    const descripcion = descripcionesProductos[nombreCompleto] || descripcionesProductos["default"];
    const imagen = obtenerImagenProducto(producto.codigo);

    productosDerivadosCarnicos.push({
        id: producto.codigo,
        codigo: producto.codigo,
        nombre: producto.nombre,
        nombreCompleto: nombreCompleto,
        descripcion: descripcion,
        imagen: imagen,
        categoria: "derivado"
    });
}

// =====================
// GENERAR PRODUCTOS MAYORISTAS FRESCOS
// =====================

for (let i = 0; i < productosMayoristasFrescosConCodigos.length; i++) {
    const producto = productosMayoristasFrescosConCodigos[i];
    const nombreCompleto = `${producto.codigo} - ${producto.nombre}`;
    const descripcion = descripcionesProductos[nombreCompleto] || descripcionesProductos["default"];
    const imagen = obtenerImagenProducto(producto.codigo);

    productosMayoristasFrescos.push({
        id: producto.codigo,
        codigo: producto.codigo,
        nombre: producto.nombre,
        nombreCompleto: nombreCompleto,
        descripcion: descripcion,
        imagen: imagen,
        categoria: "mayorista_fresco"
    });
}

// =====================
// CARRITO Y BÚSQUEDA
// =====================

let carrito = [];
let busquedaActual = "";

// =====================
// FUNCIONES DE BÚSQUEDA
// =====================

function buscarProductos() {
    const barraBusqueda = document.getElementById("barraBusqueda");
    const textoBusqueda = barraBusqueda.value.toLowerCase().trim();

    busquedaActual = textoBusqueda;

    if (textoBusqueda === "") {
        // Si no hay búsqueda, ver qué categoría está activa
        const tituloSeccion = document.getElementById("tituloProductos");
        if (tituloSeccion) {
            const tituloActual = tituloSeccion.textContent;
            if (tituloActual.includes("Derivados Cárnicos")) {
                mostrarDerivadosCarnicos();
            } else if (tituloActual.includes("Mayoristas")) {
                mostrarMayoristas();
            } else if (tituloActual.includes("Todos")) {
                mostrarTodosLosProductos();
            } else {
                mostrarMinoristas();
            }
        } else {
            mostrarMinoristas();
        }
        return;
    }

    // Determinar qué lista usar según el título actual
    const tituloSeccion = document.getElementById("tituloProductos");
    let listaParaBuscar = [...productosMinoristasFrescos, ...productosDerivadosCarnicos, ...productosMayoristasFrescos];

    if (tituloSeccion) {
        const tituloActual = tituloSeccion.textContent;
        if (tituloActual.includes("Derivados Cárnicos")) {
            listaParaBuscar = productosDerivadosCarnicos;
        } else if (tituloActual.includes("Mayoristas")) {
            listaParaBuscar = productosMayoristasFrescos;
        } else if (tituloActual.includes("Minoristas")) {
            listaParaBuscar = productosMinoristasFrescos;
        }
        // Para "Todos" ya está configurado por defecto
    }

    const productosFiltrados = listaParaBuscar.filter(producto => {
        const textoBusquedaNombre = producto.nombre.toLowerCase();

        return textoBusquedaNombre.includes(textoBusqueda) ||
            producto.codigo.toLowerCase().includes(textoBusqueda) ||
            producto.descripcion.toLowerCase().includes(textoBusqueda);
    });

    mostrarProductos(productosFiltrados);

    if (tituloSeccion) {
        tituloSeccion.textContent = `Resultados de búsqueda: "${textoBusqueda}" (${productosFiltrados.length} productos)`;
    }
}

function resaltarBusqueda(texto) {
    if (!busquedaActual || busquedaActual === "") {
        return texto;
    }

    const regex = new RegExp(`(${busquedaActual})`, 'gi');
    return texto.replace(regex, '<span class="resaltado">$1</span>');
}

function limpiarBusqueda() {
    const barraBusqueda = document.getElementById("barraBusqueda");
    barraBusqueda.value = "";
    busquedaActual = "";
    mostrarMinoristas();
}

// =====================
// FUNCIÓN PARA MOSTRAR DERIVADOS CÁRNICOS
// =====================

function mostrarDerivadosCarnicos() {
    const tituloSeccion = document.getElementById("tituloProductos");
    if (tituloSeccion) {
        tituloSeccion.textContent = `🥓 Derivados Cárnicos (${productosDerivadosCarnicos.length} productos)`;
    }

    if (busquedaActual === "") {
        mostrarProductos(productosDerivadosCarnicos);
    } else {
        buscarProductos();
    }
}

// =====================
// MOSTRAR PRODUCTOS
// =====================

function mostrarProductos(lista) {
    const contenedor = document.getElementById("listaProductos");

    if (!contenedor) {
        console.error("No se encontró el contenedor de productos");
        return;
    }

    contenedor.innerHTML = "";

    if (lista.length === 0 && busquedaActual !== "") {
        contenedor.innerHTML = `
            <div class="sin-resultados">
                <h3>😔 No se encontraron productos</h3>
                <p>No hay productos que coincidan con: <strong>"${busquedaActual}"</strong></p>
                <button onclick="limpiarBusqueda()" class="btn-limpiar-busqueda">
                    🔄 Mostrar todos los productos
                </button>
            </div>
        `;
        return;
    }

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="sin-productos">
                <h3>📦 No hay productos disponibles</h3>
                <p>Por favor, seleccione una categoría o realice una búsqueda.</p>
            </div>
        `;
        return;
    }

    lista.forEach(producto => {
        const esResultadoBusqueda = busquedaActual !== "";

        const productoDiv = document.createElement("div");
        productoDiv.className = `producto ${esResultadoBusqueda ? 'resultado-busqueda' : ''}`;
        productoDiv.setAttribute("data-id", producto.id);

        // Determinar el texto de categoría para mostrar
        let categoriaTexto = "";
        let categoriaClase = "";
        if (producto.categoria === "minorista_fresco") {
            categoriaTexto = "🏪 Minorista (Fresco)";
            categoriaClase = "minorista";
        } else if (producto.categoria === "derivado") {
            categoriaTexto = "🥓 Derivado";
            categoriaClase = "derivado";
        } else if (producto.categoria === "mayorista_fresco") {
            categoriaTexto = "🏢 Mayorista (Fresco)";
            categoriaClase = "mayorista";
        }

        productoDiv.innerHTML = `
            <div class="img-container">
                <img src="${producto.imagen}" 
                     alt="${producto.nombre}" 
                     style="width:100%; height:200px; object-fit:cover; border-radius:10px;"
                     onerror="this.src='porcicarnes/despojo_cerdo.png'">
            </div>
            <h3>${resaltarBusqueda(producto.nombre)}</h3>
            <p class="descripcion-producto">${resaltarBusqueda(producto.descripcion.substring(0, 100))}...</p>
            <div class="producto-info">
                <span class="codigo-producto">Código: ${producto.codigo}</span>
                <span class="categoria-producto ${categoriaClase}">
                    ${categoriaTexto}
                </span>
            </div>
            
            <div class="cantidad-selector">
                <button class="btn-cantidad menos" onclick="cambiarCantidad('${producto.id}', -1)">
                    −
                </button>
                <input type="number" 
                    class="input-cantidad" 
                    id="cantidad-${producto.id}" 
                    value="1" 
                    min="1" 
                    max="1000000"
                    onchange="validarCantidad('${producto.id}')"
                    oninput="validarCantidad('${producto.id}')">
                <button class="btn-cantidad mas" onclick="cambiarCantidad('${producto.id}', 1)">
                    +
                </button>
            </div>
            
            <button onclick="agregarAlCarritoConCantidad('${producto.id}', '${producto.nombre}', '${producto.descripcion}', '${producto.codigo}', '${producto.categoria}')" 
                    class="btn-agregar-carrito">
                🛒 Agregar al Carrito
            </button>
        `;

        contenedor.appendChild(productoDiv);
    });
}

// =====================
// FUNCIONES PARA MANEJAR CANTIDADES (1,000,000 UNIDADES)
// =====================

function cambiarCantidad(idProducto, cambio) {
    const input = document.getElementById(`cantidad-${idProducto}`);
    if (!input) return;

    let nuevaCantidad = parseInt(input.value) + cambio;

    if (nuevaCantidad < 1) nuevaCantidad = 1;
    if (nuevaCantidad > 1000000) nuevaCantidad = 1000000;

    input.value = nuevaCantidad;

    input.classList.add('cambiando');
    setTimeout(() => {
        input.classList.remove('cambiando');
    }, 200);
}

function validarCantidad(idProducto) {
    const input = document.getElementById(`cantidad-${idProducto}`);
    if (!input) return;

    let valor = parseInt(input.value);

    if (isNaN(valor) || valor < 1) {
        input.value = 1;
    } else if (valor > 1000000) {
        input.value = 1000000;
    }
}

function agregarAlCarritoConCantidad(id, nombre, descripcion, codigo, categoria) {
    const input = document.getElementById(`cantidad-${id}`);
    const cantidad = input ? parseInt(input.value) : 1;

    if (isNaN(cantidad) || cantidad < 1) {
        mostrarNotificacion("⚠️ Cantidad inválida", "warning");
        return;
    }

    if (cantidad > 1000000) {
        mostrarNotificacion("⚠️ La cantidad máxima por producto es 1,000,000", "warning");
        return;
    }

    const productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
        const nuevaCantidadTotal = productoExistente.cantidad + cantidad;
        if (nuevaCantidadTotal > 1000000) {
            mostrarNotificacion("⚠️ La cantidad total no puede exceder 1,000,000 unidades por producto", "warning");
            return;
        }
        productoExistente.cantidad = nuevaCantidadTotal;
        mostrarNotificacion(`✅ ${cantidad}x ${nombre} agregado(s) al carrito`);
    } else {
        const imagen = obtenerImagenProducto(codigo);

        // Determinar texto de categoría para el carrito
        let categoriaTexto = "";
        if (categoria === "minorista_fresco") {
            categoriaTexto = "Minorista (Fresco)";
        } else if (categoria === "derivado") {
            categoriaTexto = "Derivado";
        } else if (categoria === "mayorista_fresco") {
            categoriaTexto = "Mayorista (Fresco)";
        }

        carrito.push({
            id: id,
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion,
            categoria: categoriaTexto,
            categoriaTipo: categoria,
            imagen: imagen,
            cantidad: cantidad
        });

        mostrarNotificacion(`✅ ${cantidad}x ${nombre} agregado(s) al carrito`);
    }

    if (input) {
        input.value = 1;
    }

    const boton = document.querySelector(`[onclick="agregarAlCarritoConCantidad('${id}', '${nombre}', '${descripcion}', '${codigo}', '${categoria}')"]`);
    if (boton) {
        boton.classList.add('agregado');
        setTimeout(() => {
            boton.classList.remove('agregado');
        }, 500);
    }

    actualizarContadorCarrito();
}

// =====================
// BOTONES SUPERIORES
// =====================

function mostrarMinoristas() {
    const tituloSeccion = document.getElementById("tituloProductos");
    if (tituloSeccion) {
        tituloSeccion.textContent = `🏪 Productos Minoristas (Frescos) - ${productosMinoristasFrescos.length} productos`;
    }

    if (busquedaActual === "") {
        mostrarProductos(productosMinoristasFrescos);
    } else {
        buscarProductos();
    }
}

function mostrarMayoristas() {
    const tituloSeccion = document.getElementById("tituloProductos");
    if (tituloSeccion) {
        tituloSeccion.textContent = `🏢 Productos Mayoristas (Frescos) - ${productosMayoristasFrescos.length} productos`;
    }

    if (busquedaActual === "") {
        mostrarProductos(productosMayoristasFrescos);
    } else {
        buscarProductos();
    }
}

function mostrarTodosLosProductos() {
    const todosProductos = [...productosMinoristasFrescos, ...productosDerivadosCarnicos, ...productosMayoristasFrescos];

    const tituloSeccion = document.getElementById("tituloProductos");
    if (tituloSeccion) {
        tituloSeccion.textContent = `📦 Todos los Productos - ${todosProductos.length} productos`;
    }

    if (busquedaActual === "") {
        mostrarProductos(todosProductos);
    } else {
        buscarProductos();
    }
}

// =====================
// CARRITO - FUNCIONES
// =====================

function mostrarCarritoModal() {
    const modal = document.getElementById("carritoModal");
    const overlay = document.getElementById("overlay");

    if (!modal) {
        crearModalCarrito();
        return;
    }

    actualizarListaCarrito();

    modal.style.display = "block";
    if (overlay) overlay.style.display = "block";

    setTimeout(() => {
        modal.style.transform = "translateX(0)";
        modal.style.opacity = "1";
        if (overlay) overlay.style.opacity = "1";
    }, 10);
}

function crearModalCarrito() {
    // Crear overlay
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.className = "overlay";
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
        display: none;
        opacity: 0;
        transition: opacity 0.3s;
    `;

    // Crear modal
    const modal = document.createElement("div");
    modal.id = "carritoModal";
    modal.className = "modal";
    modal.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 450px;
        height: 100%;
        background: white;
        z-index: 1001;
        display: none;
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s;
        box-shadow: -4px 0 20px rgba(0,0,0,0.15);
    `;

    // Contenido del modal
    modal.innerHTML = `
        <div class="modal-contenido" style="display: flex; flex-direction: column; height: 100%;">
            <div class="modal-header" style="background: linear-gradient(135deg, #c62828, #d32f2f); color: white; padding: 25px; display: flex; justify-content: space-between; align-items: center;">
                <h2 style="margin: 0; font-size: 24px;">🛒 Tu Carrito de Compras</h2>
                <button onclick="cerrarCarritoModal()" style="background: none; border: none; color: white; font-size: 28px; cursor: pointer; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">✕</button>
            </div>
            <div class="modal-body" style="flex: 1; padding: 25px; overflow-y: auto; background: #fafafa;">
                <ul id="listaCarrito" style="list-style: none; padding: 0; margin: 0;"></ul>
                <div class="resumen-carrito" style="background: white; padding: 20px; border-radius: 10px; margin-top: 25px; box-shadow: 0 3px 10px rgba(0,0,0,0.08);">
                    <p id="contadorCarritoText" style="margin: 0; font-size: 18px;">Total productos: <strong>0</strong></p>
                </div>
            </div>
            <div class="modal-footer" style="padding: 25px; background: white; border-top: 1px solid #eee; display: flex; gap: 15px;">
                <button onclick="vaciarCarrito()" style="background: #e0e0e0; color: #333; border: none; padding: 16px; border-radius: 8px; cursor: pointer; flex: 1; font-weight: bold; font-size: 16px;">Vaciar Carrito</button>
                <button onclick="finalizarPedido()" style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; border: none; padding: 16px; border-radius: 8px; cursor: pointer; flex: 1; font-weight: bold; font-size: 16px;">Finalizar Pedido</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    actualizarListaCarrito();

    modal.style.display = "block";
    overlay.style.display = "block";

    setTimeout(() => {
        modal.style.transform = "translateX(0)";
        modal.style.opacity = "1";
        overlay.style.opacity = "1";
    }, 10);
}

function actualizarListaCarrito() {
    const lista = document.getElementById("listaCarrito");
    const contadorTexto = document.getElementById("contadorCarritoText");

    if (!lista) return;

    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = `
            <li style="text-align: center; padding: 60px 20px; color: #7f8c8d; font-size: 20px; font-style: italic; background: white; border-radius: 10px; border: 2px dashed #ddd;">
                <div style="font-size: 60px; margin-bottom: 15px;">🛒</div>
                <h3 style="color: #7f8c8d; margin-bottom: 15px;">Tu carrito está vacío</h3>
                <p style="color: #95a5a6;">Agrega productos desde el catálogo</p>
            </li>
        `;
    } else {
        carrito.forEach((item, index) => {
            const li = document.createElement("li");
            li.style.cssText = `
                background: white;
                border-radius: 10px;
                padding: 20px;
                margin-bottom: 15px;
                box-shadow: 0 3px 10px rgba(0,0,0,0.08);
                border: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
            `;

            // Determinar color según categoría
            let colorCategoria = "#3498db"; // Azul por defecto (minorista fresco)
            let iconoCategoria = "🏪";

            if (item.categoriaTipo === "derivado") {
                colorCategoria = "#9b59b6"; // Morado para derivados
                iconoCategoria = "🥓";
            } else if (item.categoriaTipo === "mayorista_fresco") {
                colorCategoria = "#2ecc71"; // Verde para mayoristas
                iconoCategoria = "🏢";
            }

            li.innerHTML = `
                <div style="display: flex; gap: 15px; width: 100%;">
                    <div style="flex: 0 0 60px;">
                        <img src="${item.imagen}" 
                             alt="${item.nombre}" 
                             style="width:60px; height:60px; object-fit:cover; border-radius:8px;"
                             onerror="this.src='porcicarnes/despojo_cerdo.png'">
                    </div>
                    <div style="flex: 1;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <strong style="color: #333; font-size: 16px; flex: 1; margin-right: 15px;">${item.nombre}</strong>
                            <span style="font-size: 12px; padding: 4px 10px; border-radius: 12px; font-weight: bold; text-transform: uppercase; background: ${colorCategoria}; color: white;">
                                ${iconoCategoria} ${item.categoria}
                            </span>
                        </div>
                        <p style="color: #666; font-size: 14px; line-height: 1.4; margin: 8px 0;">${item.descripcion.substring(0, 70)}...</p>
                        <div style="display: flex; gap: 15px; margin-top: 12px; font-size: 13px;">
                            <span style="color: #7f8c8d; background: #f5f5f5; padding: 4px 8px; border-radius: 4px; font-family: monospace;">Código: ${item.codigo}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="color: #c62828; font-weight: bold;">Cantidad:</span>
                                <div class="controles-cantidad-carrito">
                                    <button onclick="actualizarCantidadCarrito(${index}, -1)" class="btn-cantidad-carrito menos">−</button>
                                    <input type="number" 
                                        class="input-cantidad-carrito" 
                                        value="${item.cantidad}" 
                                        min="1" 
                                        max="1000000"
                                        onchange="actualizarCantidadInput(${index}, this.value)"
                                        onblur="actualizarCantidadInput(${index}, this.value)">
                                    <button onclick="actualizarCantidadCarrito(${index}, 1)" class="btn-cantidad-carrito mas">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 5px; margin-left: 10px;">
                    <button onclick="eliminarDelCarrito(${index})" 
                            style="background: #ff6b6b; color: white; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px;" 
                            title="Eliminar del carrito">
                        ✕
                    </button>
                </div>
            `;

            lista.appendChild(li);
        });
    }

    if (contadorTexto) {
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        contadorTexto.innerHTML = `Total productos: <strong>${totalItems.toLocaleString()}</strong>`;
    }
}

function actualizarCantidadCarrito(index, cambio) {
    if (index < 0 || index >= carrito.length) return;

    const item = carrito[index];
    let nuevaCantidad = item.cantidad + cambio;

    if (nuevaCantidad < 1) {
        eliminarDelCarrito(index);
        return;
    }

    if (nuevaCantidad > 1000000) nuevaCantidad = 1000000;

    item.cantidad = nuevaCantidad;
    actualizarContadorCarrito();
    actualizarListaCarrito();
    mostrarNotificacion(`✏️ Cantidad actualizada: ${item.nombre} (${nuevaCantidad.toLocaleString()} unidades)`);
}

function actualizarCantidadInput(index, valor) {
    if (index < 0 || index >= carrito.length) return;

    const item = carrito[index];
    let nuevaCantidad = parseInt(valor);

    if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
        nuevaCantidad = 1;
    } else if (nuevaCantidad > 1000000) {
        nuevaCantidad = 1000000;
    }

    if (nuevaCantidad === 0) {
        eliminarDelCarrito(index);
        return;
    }

    item.cantidad = nuevaCantidad;
    actualizarContadorCarrito();
    actualizarListaCarrito();
    mostrarNotificacion(`✏️ Cantidad actualizada: ${item.nombre} (${nuevaCantidad.toLocaleString()} unidades)`);
}

function actualizarContadorCarrito() {
    const contador = document.getElementById("contadorCarrito");
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

    if (contador) {
        contador.textContent = totalItems > 999 ? "999+" : totalItems;
    }
}

function eliminarDelCarrito(index) {
    if (index < 0 || index >= carrito.length) return;

    const productoEliminado = carrito[index];

    if (confirm(`¿Está seguro que desea eliminar "${productoEliminado.nombre}" del carrito?`)) {
        carrito.splice(index, 1);
        actualizarContadorCarrito();
        actualizarListaCarrito();
        mostrarNotificacion(`🗑️ ${productoEliminado.nombre} eliminado del carrito`);
    }
}

function vaciarCarrito() {
    if (carrito.length === 0) {
        mostrarNotificacion("⚠️ El carrito ya está vacío", "warning");
        return;
    }

    if (confirm("¿Está seguro que desea vaciar completamente el carrito?")) {
        carrito = [];
        actualizarContadorCarrito();
        actualizarListaCarrito();
        mostrarNotificacion("🧹 Carrito vaciado completamente");
    }
}

// =====================
// FUNCIÓN FINALIZAR PEDIDO CON WHATSAPP
// =====================

function finalizarPedido() {
    if (carrito.length === 0) {
        mostrarNotificacion("⚠️ El carrito está vacío. Agregue productos primero.", "warning");
        return;
    }

    const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);

    let mensajeWhatsApp = `${configWhatsApp.prefijoMensaje}\n`;
    mensajeWhatsApp += "=".repeat(40) + "\n\n";

    mensajeWhatsApp += "📅 *Fecha:* " + new Date().toLocaleDateString() + "\n";
    mensajeWhatsApp += "⏰ *Hora:* " + new Date().toLocaleTimeString() + "\n";
    mensajeWhatsApp += "=".repeat(40) + "\n\n";

    mensajeWhatsApp += "📋 *LISTA DE PRODUCTOS:*\n";
    mensajeWhatsApp += "-".repeat(40) + "\n\n";

    carrito.forEach((item, index) => {
        mensajeWhatsApp += `${index + 1}. *${item.nombre}*\n`;
        mensajeWhatsApp += `   🔢 Código: ${item.codigo}\n`;
        mensajeWhatsApp += `   📦 Cantidad: ${item.cantidad.toLocaleString()}\n`;
        mensajeWhatsApp += `   🏷️ Tipo: ${item.categoria}\n`;
        mensajeWhatsApp += "\n";
    });

    mensajeWhatsApp += "=".repeat(40) + "\n";
    mensajeWhatsApp += "📊 *RESUMEN DEL PEDIDO:*\n\n";
    mensajeWhatsApp += `✅ *Total productos diferentes:* ${carrito.length}\n`;
    mensajeWhatsApp += `✅ *Total unidades solicitadas:* ${totalProductos.toLocaleString()}\n`;
    mensajeWhatsApp += "=".repeat(40) + "\n\n";

    mensajeWhatsApp += "⚠️ *INFORMACIÓN ADICIONAL:*\n\n";
    mensajeWhatsApp += "📍 *Dirección de entrega:* \n";
    mensajeWhatsApp += "📞 *Teléfono de contacto:* \n";
    mensajeWhatsApp += "🕒 *Horario preferido de entrega:* \n\n";
    mensajeWhatsApp += "=".repeat(40) + "\n";
    mensajeWhatsApp += "¡Gracias por su pedido! 🐷\n";
    mensajeWhatsApp += configWhatsApp.nombreTienda;

    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
    const urlWhatsApp = `https://wa.me/${configWhatsApp.numeroTienda}?text=${mensajeCodificado}`;

    const resumenPantalla = `
        📋 RESUMEN DEL PEDIDO
        ========================
        
        📦 Productos en el carrito: ${carrito.length}
        🔢 Unidades totales: ${totalProductos.toLocaleString()}
        
        ¿Desea enviar este pedido por WhatsApp?
        
        Se abrirá WhatsApp con el mensaje estructurado.
        
        *NOTA:* Asegúrese de completar la información de:
        - Dirección de entrega
        - Teléfono de contacto
        - Horario preferido
        
        ¿Continuar?
    `.replace(/^[ \t]+/gm, '');

    if (confirm(resumenPantalla)) {
        const pedido = {
            fecha: new Date().toLocaleString(),
            productos: JSON.parse(JSON.stringify(carrito)),
            totalItems: totalProductos,
            estado: "Enviado por WhatsApp",
            mensaje: mensajeWhatsApp
        };

        let historial = [];
        try {
            historial = JSON.parse(localStorage.getItem('historialPedidos') || '[]');
        } catch (e) {
            historial = [];
        }
        historial.push(pedido);
        localStorage.setItem('historialPedidos', JSON.stringify(historial));

        const ventanaWhatsApp = window.open(urlWhatsApp, '_blank');

        setTimeout(() => {
            if (ventanaWhatsApp && !ventanaWhatsApp.closed) {
                mostrarNotificacion("✅ WhatsApp abierto. Complete el envío del mensaje.");
            } else {
                mostrarNotificacion("⚠️ No se pudo abrir WhatsApp. Copie el mensaje manualmente.", "warning");

                if (confirm("¿Desea copiar el mensaje al portapapeles para enviarlo manualmente?")) {
                    navigator.clipboard.writeText(mensajeWhatsApp)
                        .then(() => {
                            mostrarNotificacion("📋 Mensaje copiado al portapapeles. Puede pegarlo en WhatsApp.");
                        })
                        .catch(() => {
                            alert("⚠️ No se pudo copiar automáticamente. Copie el siguiente mensaje:\n\n" + mensajeWhatsApp);
                        });
                }
            }
        }, 1000);

        setTimeout(() => {
            if (confirm("¿Desea vaciar el carrito después de enviar el pedido?")) {
                carrito = [];
                actualizarContadorCarrito();
                actualizarListaCarrito();
                mostrarNotificacion("✅ Pedido enviado y carrito vaciado");
            } else {
                mostrarNotificacion("✅ Pedido enviado por WhatsApp. El carrito se mantiene.");
            }
        }, 1500);

        cerrarCarritoModal();
    }
}

function cerrarCarritoModal() {
    const modal = document.getElementById("carritoModal");
    const overlay = document.getElementById("overlay");

    if (modal) {
        modal.style.transform = "translateX(100%)";
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    if (overlay) {
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 300);
    }
}

function mostrarNotificacion(mensaje, tipo = "success") {
    const notificacionesAnteriores = document.querySelectorAll('.notificacion-flotante');
    notificacionesAnteriores.forEach(notif => {
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 300);
    });

    const notificacion = document.createElement("div");
    notificacion.className = `notificacion-flotante ${tipo}`;
    notificacion.textContent = mensaje;

    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        font-weight: bold;
        max-width: 300px;
        word-wrap: break-word;
    `;

    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.style.opacity = '1';
        notificacion.style.transform = 'translateY(0)';
    }, 10);

    setTimeout(() => {
        notificacion.style.opacity = '0';
        notificacion.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.parentNode.removeChild(notificacion);
            }
        }, 300);
    }, 4000);
}

// =====================
// INICIALIZACIÓN
// =====================

window.onload = function() {
    console.log(`✅ Sistema Tienda Porcicarnes cargado:
    • Productos Minoristas Frescos: ${productosMinoristasFrescos.length}
    • Productos Derivados Cárnicos: ${productosDerivadosCarnicos.length}
    • Productos Mayoristas Frescos: ${productosMayoristasFrescos.length}
    • Total Productos: ${productosMinoristasFrescos.length + productosDerivadosCarnicos.length + productosMayoristasFrescos.length}
    • Imágenes configuradas: ${Object.keys(imagenesProductos).length}`);

    // Mostrar productos minoristas frescos por defecto
    if (document.getElementById("listaProductos")) {
        mostrarMinoristas();
    }

    actualizarContadorCarrito();

    // Agregar estilos CSS dinámicamente
    const estilos = document.createElement('style');
    estilos.textContent = `
        /* Estilos para manejar imágenes */
        .img-container {
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-radius: 10px;
            margin-bottom: 15px;
            background: #f5f5f5;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }
        
        .img-container img:hover {
            transform: scale(1.05);
        }
        
        /* Estilos para cantidades */
        .cantidad-selector {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
            gap: 5px;
        }
        
        .btn-cantidad {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 1px solid #3498db;
            background: white;
            color: #3498db;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .input-cantidad {
            width: 100px;
            height: 35px;
            border: 1px solid #ddd;
            border-radius: 4px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
        }
        
        .input-cantidad-carrito {
            width: 80px;
            height: 30px;
            border: 1px solid #ddd;
            border-radius: 4px;
            text-align: center;
            font-size: 14px;
        }
        
        .btn-cantidad-carrito {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid #ddd;
            background: #f5f5f5;
            color: #333;
            font-size: 18px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .btn-cantidad-carrito:hover {
            background: #e0e0e0;
        }
        
        .resaltado {
            background-color: #ffeb3b;
            padding: 0 2px;
            border-radius: 2px;
        }
        
        .btn-agregar-carrito.agregado {
            animation: pulseSuccess 0.5s ease;
        }
        
        @keyframes pulseSuccess {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        /* Estilos para categorías */
        .categoria-producto.minorista {
            background: #3498db;
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }
        
        .categoria-producto.derivado {
            background: #9b59b6;
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }
        
        .categoria-producto.mayorista {
            background: #2ecc71;
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }
        
        /* Estilos para el modal del carrito */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
            display: none;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .modal {
            position: fixed;
            top: 0;
            right: 0;
            width: 450px;
            height: 100%;
            background: white;
            z-index: 1001;
            display: none;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s;
            box-shadow: -4px 0 20px rgba(0,0,0,0.15);
        }
        
        /* Notificaciones */
        .notificacion-flotante {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 9999;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
            font-weight: bold;
            max-width: 300px;
            word-wrap: break-word;
        }
        
        .notificacion-flotante.success {
            background: #27ae60;
            color: white;
        }
        
        .notificacion-flotante.warning {
            background: #e74c3c;
            color: white;
        }
        
        /* Animación para cambios de cantidad */
        .input-cantidad.cambiando {
            animation: highlightChange 0.2s ease;
        }
        
        @keyframes highlightChange {
            0% { background-color: #ffffff; }
            50% { background-color: #e8f4fc; }
            100% { background-color: #ffffff; }
        }
        
        /* Estilos especiales para cada tipo de producto */
        .producto {
            transition: all 0.3s;
            padding: 15px;
            border-radius: 10px;
            background: white;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
            border: 1px solid #eee;
        }
        
        .producto:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .producto-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0;
        }
        
        .codigo-producto {
            font-family: monospace;
            font-size: 12px;
            color: #7f8c8d;
            background: #f5f5f5;
            padding: 2px 6px;
            border-radius: 4px;
        }
        
        .btn-agregar-carrito {
            background: linear-gradient(135deg, #c62828, #d32f2f);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            width: 100%;
            transition: all 0.3s;
            margin-top: 10px;
        }
        
        .btn-agregar-carrito:hover {
            background: linear-gradient(135deg, #d32f2f, #b71c1c);
        }
        
        /* Estilos para resultados de búsqueda */
        .sin-resultados, .sin-productos {
            text-align: center;
            padding: 40px 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
            margin: 20px 0;
        }
        
        .btn-limpiar-busqueda {
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 15px;
            font-weight: bold;
        }
    `;
    document.head.appendChild(estilos);

    setTimeout(() => {
        mostrarNotificacion("🏪 ¡Tienda Porcicarnes cargada correctamente! Límite: 1,000,000 unidades por producto");
    }, 800);
};