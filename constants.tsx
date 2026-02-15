import { Question, CategoryType } from "./types";

export const QUESTIONS: Question[] = [
  // --- المجموعة الأولى (1-100) ---
  {
    id: "w1",
    category: CategoryType.WEB,
    question: "ما هو الفرق بين HTML و HTML5؟",
    answer:
      "HTML5 يدعم عناصر جديدة مثل <video>, <audio>, <canvas>, <section>, ويوفر دعماً أفضل للوسائط المتعددة دون الحاجة لإضافات خارجية مثل Flash.",
  },
  {
    id: "w2",
    category: CategoryType.WEB,
    question: "ما الفرق بين CSS Grid و Flexbox؟",
    answer:
      "Flexbox مخصص للتخطيط أحادي البعد (صف أو عمود)، بينما CSS Grid مخصص للتخطيط ثنائي البعد (صفوف وأعمدة معاً).",
  },
  {
    id: "w3",
    category: CategoryType.WEB,
    question: "ما هو DOM؟",
    answer:
      "Document Object Model - نموذج كائني يمثل بنية صفحة HTML/XML كشجرة من العقد، يسمح للغات البرمجة بالتفاعل مع محتوى الصفحة وتعديله.",
  },
  {
    id: "w4",
    category: CategoryType.WEB,
    question: "ما الفرق بين GET و POST في HTTP؟",
    answer:
      "GET: لطلب البيانات، المعلومات تظهر في URL، محدودة الحجم. POST: لإرسال البيانات، المعلومات في جسم الطلب، غير محدودة الحجم، أكثر أماناً.",
  },
  {
    id: "w5",
    category: CategoryType.WEB,
    question: "ما هو AJAX؟",
    answer:
      "Asynchronous JavaScript and XML - تقنية لتحديث أجزاء من الصفحة دون إعادة تحميلها بالكامل من خلال إرسال طلبات HTTP غير متزامنة.",
  },
  {
    id: "w6",
    category: CategoryType.WEB,
    question: "ما الفرق بين Session و Cookie؟",
    answer:
      "Cookie: تخزن على جهاز المستخدم (4KB). Session: تخزن على الخادم، أكثر أماناً، تنتهي بإغلاق المتصفح أو انتهاء المدة.",
  },
  {
    id: "w7",
    category: CategoryType.WEB,
    question: "ما هو Responsive Design؟",
    answer:
      "تصميم يتكيف تلقائياً مع أحجام الشاشات المختلفة باستخدام Media Queries و Flexible Layouts لتوفير تجربة مستخدم مثالية.",
  },
  {
    id: "w8",
    category: CategoryType.WEB,
    question: "ما هو JSON؟",
    answer:
      "JavaScript Object Notation - صيغة نصية خفيفة لتبادل البيانات، سهلة القراءة للبشر والآلات، تستخدم في APIs.",
  },
  {
    id: "w9",
    category: CategoryType.WEB,
    question: "ما الفرق بين LocalStorage و SessionStorage؟",
    answer:
      "LocalStorage: البيانات تبقى حتى بعد إغلاق المتصفح. SessionStorage: البيانات تحذف بإغلاق التبويب/النافذة.",
  },
  {
    id: "w10",
    category: CategoryType.WEB,
    question: "ما هو Same-Origin Policy؟",
    answer:
      "سياسة أمنية تمنع صفحة ويب من الوصول لموارد من نطاق مختلف (domain, protocol, port) لحماية البيانات الحساسة.",
  },
  {
    id: "w11",
    category: CategoryType.WEB,
    question: "ما هو CORS؟",
    answer:
      "Cross-Origin Resource Sharing - آلية تسمح للخوادم بتحديد من يمكنه الوصول لمواردها من نطاقات مختلفة.",
  },
  {
    id: "w12",
    category: CategoryType.WEB,
    question: "ما الفرق بين Synchronous و Asynchronous في JavaScript؟",
    answer:
      "Synchronous: ينفذ بالتسلسل. Asynchronous: العمليات تعمل بالتوازي دون انتظار، تستخدم Promises أو Async/Await.",
  },
  {
    id: "w13",
    category: CategoryType.WEB,
    question: "ما هو Virtual DOM؟",
    answer:
      "نسخة افتراضية من DOM تحفظ في الذاكرة، تستخدمها مكتبات مثل React لتحسين الأداء بمقارنة التغييرات وتحديث DOM الحقيقي بكفاءة.",
  },
  {
    id: "w14",
    category: CategoryType.WEB,
    question: "ما هو RESTful API؟",
    answer:
      "واجهة برمجية تتبع مبادئ REST، تستخدم HTTP methods (GET, POST, PUT, DELETE)، Stateless، وتعتمد على الموارد.",
  },
  {
    id: "w15",
    category: CategoryType.WEB,
    question: "ما الفرق بين == و === في JavaScript؟",
    answer:
      "== يقارن القيم مع تحويل الأنواع تلقائياً. === يقارن القيم والأنواع معاً دون تحويل (strict equality).",
  },
  {
    id: "w16",
    category: CategoryType.WEB,
    question: "ما هو Event Bubbling؟",
    answer:
      "آلية في DOM حيث ينتقل الحدث من العنصر المستهدف صعوداً عبر العناصر الأب حتى الوصول للجذر.",
  },
  {
    id: "w17",
    category: CategoryType.WEB,
    question: "ما هو SPA (Single Page Application)؟",
    answer:
      "تطبيق ويب يحمل صفحة واحدة ويحدث المحتوى ديناميكياً دون إعادة تحميل الصفحة، مما يوفر تجربة أسرع.",
  },
  {
    id: "w18",
    category: CategoryType.WEB,
    question: "ما هو Web Socket؟",
    answer:
      "بروتوكول يوفر اتصال ثنائي الاتجاه ومستمر بين المتصفح والخادم، مثالي للتطبيقات الفورية مثل الدردشة.",
  },
  {
    id: "w19",
    category: CategoryType.WEB,
    question: "ما الفرق بين Client-Side و Server-Side Rendering؟",
    answer:
      "Client-Side: المتصفح يبني الصفحة بـ JS. Server-Side: الخادم يرسل HTML جاهز، وهو أفضل لـ SEO والأداء الأولي.",
  },
  {
    id: "w20",
    category: CategoryType.WEB,
    question: "ما هو Progressive Web App (PWA)؟",
    answer:
      "تطبيق ويب يعمل مثل التطبيقات الأصلية، يدعم العمل بدون اتصال، الإشعارات، والتثبيت باستخدام Service Workers.",
  },
  {
    id: "w21",
    category: CategoryType.WEB,
    question: "ما هو CSS Preprocessor؟",
    answer:
      "أداة مثل SASS أو LESS تضيف ميزات للـ CSS مثل المتغيرات والدوال، ثم تترجمها لـ CSS عادي.",
  },
  {
    id: "w22",
    category: CategoryType.WEB,
    question: "ما هو Semantic HTML؟",
    answer:
      "استخدام عناصر ذات معنى مثل <header>, <article>, <nav> بدلاً من <div> لتحسين الوصول و SEO.",
  },
  {
    id: "w23",
    category: CategoryType.WEB,
    question: "ما الفرق بين var, let, و const في JavaScript؟",
    answer:
      "var: function scope. let: block scope قابلة للتعديل. const: block scope غير قابلة للتعديل.",
  },
  {
    id: "w24",
    category: CategoryType.WEB,
    question: "ما هو JWT (JSON Web Token)؟",
    answer:
      "رمز مشفر يحتوي على معلومات المستخدم، يستخدم للمصادقة والتفويض بشكل آمن بين الأطراف.",
  },
  {
    id: "w25",
    category: CategoryType.WEB,
    question: "ما هو CDN (Content Delivery Network)؟",
    answer:
      "شبكة خوادم موزعة جغرافياً تقدم المحتوى للمستخدمين من أقرب خادم، مما يحسن السرعة ويقلل الحمل.",
  },

  {
    id: "a26",
    category: CategoryType.ALGO,
    question: "ما هي Big O Notation؟",
    answer:
      "رمز رياضي لوصف التعقيد الزمني أو المكاني للخوارزمية في أسوأ الحالات، مثل O(1), O(n), O(log n).",
  },
  {
    id: "a27",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Array و Linked List؟",
    answer:
      "Array: عناصر متجاورة، الوصول O(1). Linked List: عناصر مرتبطة بمؤشرات، الوصول O(n)، الإدراج O(1).",
  },
  {
    id: "a28",
    category: CategoryType.ALGO,
    question: "ما هو Stack؟",
    answer:
      "هيكل بيانات LIFO (Last In First Out)، العمليات الأساسية: Push (إضافة)، Pop (إزالة).",
  },
  {
    id: "a29",
    category: CategoryType.ALGO,
    question: "ما هو Queue؟",
    answer:
      "هيكل بيانات FIFO (First In First Out)، العمليات: Enqueue (إضافة)، Dequeue (إزالة).",
  },
  {
    id: "a30",
    category: CategoryType.ALGO,
    question: "ما الفرق بين BFS و DFS؟",
    answer:
      "BFS: يستكشف مستوى بمستوى باستخدام Queue. DFS: يستكشف بعمق باستخدام Stack أو Recursion.",
  },
  {
    id: "a31",
    category: CategoryType.ALGO,
    question: "ما هي Binary Search؟",
    answer:
      "خوارزمية بحث في مصفوفة مرتبة، تقسم المجال للنصف في كل مرة، التعقيد O(log n).",
  },
  {
    id: "a32",
    category: CategoryType.ALGO,
    question: "ما هو Hash Table؟",
    answer:
      "هيكل بيانات يخزن أزواج key-value، يستخدم دالة hash لتحديد الموقع، الوصول في المتوسط O(1).",
  },
  {
    id: "a33",
    category: CategoryType.ALGO,
    question: "ما هي خوارزميات الترتيب (Sorting) الأكثر شيوعاً؟",
    answer:
      "Quick Sort (n log n), Merge Sort (n log n), Bubble Sort (n²), Insertion Sort (n²).",
  },
  {
    id: "a34",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Recursion و Iteration؟",
    answer:
      "Recursion: الدالة تستدعي نفسها، تستهلك ذاكرة Stack. Iteration: استخدام حلقات، عادة أسرع وأقل استهلاكاً للذاكرة.",
  },
  {
    id: "a35",
    category: CategoryType.ALGO,
    question: "ما هو Binary Tree؟",
    answer:
      "شجرة حيث كل عقدة لها على الأكثر طفلين (يسار ويمين)، النوع BST يكون مرتباً.",
  },
  {
    id: "a36",
    category: CategoryType.ALGO,
    question: "ما هو Dynamic Programming؟",
    answer:
      "تقنية لحل المسائل بتقسيمها لمسائل فرعية وحفظ النتائج لتجنب الحسابات المتكررة (Memoization).",
  },
  {
    id: "a37",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Greedy Algorithm و Dynamic Programming؟",
    answer:
      "Greedy: تتخذ القرار الأفضل محلياً في كل خطوة. DP: تنظر لجميع الخيارات لضمان الحل الأمثل العام.",
  },
  {
    id: "a38",
    category: CategoryType.ALGO,
    question: "ما هو Graph؟",
    answer:
      "هيكل يتكون من عقد (vertices) وحواف (edges) تربط بينها، يمكن أن يكون موجهاً أو غير موجه.",
  },
  {
    id: "a39",
    category: CategoryType.ALGO,
    question: "ما هي Dijkstra's Algorithm؟",
    answer:
      "خوارزمية لإيجاد أقصر مسار من عقدة لجميع العقد الأخرى في graph موزون بأوزان موجبة.",
  },
  {
    id: "a40",
    category: CategoryType.ALGO,
    question: "ما هو Heap؟",
    answer:
      "شجرة ثنائية كاملة حيث قيمة العقدة أكبر (Max Heap) أو أصغر (Min Heap) من أبنائها.",
  },
  {
    id: "a41",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Stable و Unstable Sorting؟",
    answer:
      "Stable: يحافظ على الترتيب النسبي للعناصر المتساوية (Merge Sort). Unstable: قد يغير الترتيب (Quick Sort).",
  },
  {
    id: "a42",
    category: CategoryType.ALGO,
    question: "ما هو Time Complexity لـ Insertion في AVL Tree؟",
    answer:
      "O(log n) لأن AVL Tree شجرة بحث ثنائية متوازنة تضمن دائماً ارتفاعاً لوغاريتمياً.",
  },
  {
    id: "a43",
    category: CategoryType.ALGO,
    question: "ما هي Backtracking؟",
    answer:
      "تقنية لحل المسائل بتجربة جميع الحلول والعودة للخلف عند الوصول لطريق مسدود (مثل N-Queens).",
  },
  {
    id: "a44",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Array و ArrayList في Java؟",
    answer:
      "Array: حجم ثابت. ArrayList: حجم ديناميكي، يحتوي فقط Objects، ويوفر ميزات إضافية.",
  },
  {
    id: "a45",
    category: CategoryType.ALGO,
    question: "ما هو Trie؟",
    answer:
      "شجرة خاصة لتخزين سلاسل نصية، فعالة جداً للبحث عن البادئات (Prefixes)، التعقيد O(m).",
  },
  {
    id: "a46",
    category: CategoryType.ALGO,
    question: "ما هي Two Pointer Technique؟",
    answer:
      "تقنية تستخدم مؤشرين للتحرك عبر هيكل البيانات لحل مسائل مثل إيجاد زوج بمجموع معين بكفاءة O(n).",
  },
  {
    id: "a47",
    category: CategoryType.ALGO,
    question: "ما هو Sliding Window؟",
    answer:
      "تقنية لحل مسائل المصفوفات بالحفاظ على نافذة من العناصر وتحريكها، التعقيد غالباً O(n).",
  },
  {
    id: "a48",
    category: CategoryType.ALGO,
    question: "ما الفرق بين In-order و Pre-order و Post-order Traversal؟",
    answer:
      "In-order: يسار-جذر-يمين. Pre-order: جذر-يسار-يمين. Post-order: يسار-يمين-جذر.",
  },
  {
    id: "a49",
    category: CategoryType.ALGO,
    question: "ما هو Space Complexity؟",
    answer:
      "مقياس للذاكرة الإضافية التي تحتاجها الخوارزمية نسبة لحجم المدخلات، ولا يشمل ذاكرة المدخلات نفسها.",
  },
  {
    id: "a50",
    category: CategoryType.ALGO,
    question: "ما هي Union-Find (Disjoint Set)؟",
    answer:
      "هيكل بيانات لتتبع مجموعات منفصلة، يدعم دمج المجموعات وإيجاد ممثل المجموعة بكفاءة عالية.",
  },

  {
    id: "n51",
    category: CategoryType.NETWORK,
    question: "ما هي طبقات OSI Model السبعة؟",
    answer:
      "Application, Presentation, Session, Transport, Network, Data Link, Physical.",
  },
  {
    id: "n52",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين TCP و UDP؟",
    answer:
      "TCP: موثوق، يضمن التسليم والترتيب. UDP: غير موثوق، أسرع، للتطبيقات الفورية مثل الفيديو.",
  },
  {
    id: "n53",
    category: CategoryType.NETWORK,
    question: "ما هو IP Address؟",
    answer:
      "عنوان رقمي فريد يحدد جهاز على الشبكة. IPv4 طوله 32 بت، IPv6 طوله 128 بت.",
  },
  {
    id: "n54",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين IPv4 و IPv6؟",
    answer:
      "IPv4: 32 بت، 4.3 مليار عنوان. IPv6: 128 بت، عدد هائل من العناوين، صيغة ست عشرية، أمان أفضل.",
  },
  {
    id: "n55",
    category: CategoryType.NETWORK,
    question: "ما هو DNS؟",
    answer:
      "Domain Name System - نظام يترجم أسماء النطاقات (google.com) لعناوين IP.",
  },
  {
    id: "n56",
    category: CategoryType.NETWORK,
    question: "ما هو DHCP؟",
    answer:
      "Dynamic Host Configuration Protocol - بروتوكول يعين عناوين IP تلقائياً للأجهزة على الشبكة.",
  },
  {
    id: "n57",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين Hub و Switch و Router؟",
    answer:
      "Hub: يبث للجميع. Switch: يرسل للمنفذ المحدد (Layer 2). Router: يربط شبكات مختلفة (Layer 3).",
  },
  {
    id: "n58",
    category: CategoryType.NETWORK,
    question: "ما هو Subnet Mask؟",
    answer:
      "قناع يقسم عنوان IP لجزء الشبكة وجزء الجهاز، يستخدم لتحديد الشبكات الفرعية.",
  },
  {
    id: "n59",
    category: CategoryType.NETWORK,
    question: "ما هو NAT (Network Address Translation)؟",
    answer:
      "تقنية تترجم عناوين IP الخاصة لعنوان عام واحد، توفر العناوين وتزيد الأمان.",
  },
  {
    id: "n60",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين LAN و WAN و MAN؟",
    answer:
      "LAN: محلية (مبنى). MAN: حضرية (مدينة). WAN: واسعة (دول)، الإنترنت أكبر WAN.",
  },
  {
    id: "n61",
    category: CategoryType.NETWORK,
    question: "ما هو Port Number؟",
    answer:
      "رقم يحدد خدمة معينة (0-65535). مثال: HTTP=80, HTTPS=443, FTP=21, SSH=22.",
  },
  {
    id: "n62",
    category: CategoryType.NETWORK,
    question: "ما هو Firewall؟",
    answer:
      "نظام أمني يراقب ويتحكم في حركة البيانات بناءً على قواعد لحماية الشبكة.",
  },
  {
    id: "n63",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين HTTP و HTTPS؟",
    answer:
      "HTTP: غير مشفر. HTTPS: مشفر باستخدام SSL/TLS، آمن ويحمي البيانات من التنصت.",
  },
  {
    id: "n64",
    category: CategoryType.NETWORK,
    question: "ما هو SSL/TLS؟",
    answer:
      "بروتوكولات أمان تشفر الاتصال بين المتصفح والخادم، SSL قديم و TLS هو الحديث.",
  },
  {
    id: "n65",
    category: CategoryType.NETWORK,
    question: "ما هو Three-Way Handshake في TCP؟",
    answer:
      "عملية إنشاء الاتصال: 1) Client يرسل SYN، 2) Server يرسل SYN-ACK، 3) Client يرسل ACK.",
  },
  {
    id: "n66",
    category: CategoryType.NETWORK,
    question: "ما هو MAC Address؟",
    answer:
      "Media Access Control - عنوان فيزيائي فريد لكارت الشبكة، 48 بت، يعمل في الطبقة الثانية.",
  },
  {
    id: "n67",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين Circuit Switching و Packet Switching؟",
    answer:
      "Circuit: مسار مخصص (مكالمات). Packet: البيانات تقسم لحزم تأخذ مسارات مختلفة (إنترنت).",
  },
  {
    id: "n68",
    category: CategoryType.NETWORK,
    question: "ما هو Latency و Bandwidth؟",
    answer:
      "Latency: التأخير الزمني (ms). Bandwidth: السعة القصوى لنقل البيانات (Mbps).",
  },
  {
    id: "n69",
    category: CategoryType.NETWORK,
    question: "ما هو Proxy Server؟",
    answer:
      "خادم وسيط يمرر الطلبات من العملاء للخوادم الأخرى، يوفر الخصوصية والتخزين المؤقت.",
  },
  {
    id: "n70",
    category: CategoryType.NETWORK,
    question: "ما هو VPN؟",
    answer:
      "Virtual Private Network - شبكة خاصة افتراضية تشفر الاتصال وتخفي IP الحقيقي.",
  },
  {
    id: "n71",
    category: CategoryType.NETWORK,
    question: "ما هو ARP (Address Resolution Protocol)؟",
    answer: "بروتوكول يترجم عنوان IP لعنوان MAC في الشبكة المحلية.",
  },
  {
    id: "n72",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين Static و Dynamic Routing؟",
    answer:
      "Static: يدوي ولا يتغير. Dynamic: الموجهات تحدث المسارات تلقائياً باستخدام بروتوكولات مثل OSPF.",
  },
  {
    id: "n73",
    category: CategoryType.NETWORK,
    question: "ما هو Load Balancer؟",
    answer:
      "جهاز/برنامج يوزع حركة المرور على عدة خوادم لتحسين الأداء والتوافرية.",
  },
  {
    id: "n74",
    category: CategoryType.NETWORK,
    question: "ما هو CDN من منظور الشبكات؟",
    answer:
      "شبكة موزعة تقلل المسافة الجغرافية بين المستخدم والمحتوى، مما يحسن السرعة.",
  },
  {
    id: "n75",
    category: CategoryType.NETWORK,
    question: "ما هو Ping؟",
    answer:
      "أداة تستخدم ICMP لاختبار الوصول لجهاز على الشبكة وقياس وقت الاستجابة (RTT).",
  },

  {
    id: "c76",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Compiler و Interpreter؟",
    answer:
      "Compiler: يترجم الكود كاملأ مرة واحدة. Interpreter: يترجم وينفذ سطراً بسطر.",
  },
  {
    id: "c77",
    category: CategoryType.COMPILER,
    question: "ما هي مراحل الترجمة (Compilation)؟",
    answer:
      "Lexical Analysis, Syntax Analysis, Semantic Analysis, Intermediate Code Generation, Optimization, Code Generation.",
  },
  {
    id: "c78",
    category: CategoryType.COMPILER,
    question: "ما هو Lexical Analysis؟",
    answer:
      "المرحلة الأولى، تحول الكود المصدري لتسلسل من Tokens (كلمات محجوزة، معرفات) باستخدام Scanner.",
  },
  {
    id: "c79",
    category: CategoryType.COMPILER,
    question: "ما هو Syntax Analysis (Parsing)؟",
    answer:
      "مرحلة تتحقق من صحة البنية النحوية وتبني Parse Tree أو Abstract Syntax Tree (AST).",
  },
  {
    id: "c80",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Parse Tree و AST؟",
    answer:
      "Parse Tree: يحتوي على كل التفاصيل النحوية. AST: نسخة مبسطة تحتفظ بالبنية الأساسية فقط.",
  },
  {
    id: "c81",
    category: CategoryType.COMPILER,
    question: "ما هو Context-Free Grammar (CFG)؟",
    answer:
      "نظام قواعد يصف بنية اللغة البرمجية، يستخدم في الـ Parsing لوصف القواعد النحوية.",
  },
  {
    id: "c82",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين LL و LR Parsing؟",
    answer:
      "LL: Top-down (من اليسار لليمين). LR: Bottom-up، وهو أقوى وأكثر شيوعاً في المترجمات الحديثة.",
  },
  {
    id: "c83",
    category: CategoryType.COMPILER,
    question: "ما هو Semantic Analysis؟",
    answer:
      "مرحلة تتحقق من المعنى المنطقي للكود: فحص الأنواع (Type checking) وتعريف المتغيرات.",
  },
  {
    id: "c84",
    category: CategoryType.COMPILER,
    question: "ما هو Symbol Table؟",
    answer:
      "جدول يحفظ معلومات عن المعرفات (متغيرات، دوال): النوع، النطاق، والموقع في الذاكرة.",
  },
  {
    id: "c85",
    category: CategoryType.COMPILER,
    question: "ما هو Intermediate Code؟",
    answer:
      "كود وسيط بين المصدر والآلة (مثل Bytecode)، يسهل عمليات التحسين والنقل لمنصات مختلفة.",
  },
  {
    id: "c86",
    category: CategoryType.COMPILER,
    question: "ما أنواع تحسين الكود (Code Optimization)؟",
    answer:
      "Local (داخل كتلة واحدة)، Global (عبر الدوال)، و Loop optimization (تحسين الحلقات).",
  },
  {
    id: "c87",
    category: CategoryType.COMPILER,
    question: "ما هو Register Allocation؟",
    answer:
      "عملية تعيين المتغيرات لسجلات المعالج المحدودة لتحسين سرعة التنفيذ.",
  },
  {
    id: "c88",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Static و Dynamic Typing؟",
    answer:
      "Static: الأنواع تفحص وقت الترجمة (Java). Dynamic: الأنواع تفحص وقت التنفيذ (Python).",
  },
  {
    id: "c89",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Strong و Weak Typing؟",
    answer:
      "Strong: لا يسمح بتحويل الأنواع التلقائي الضمني. Weak: يسمح بالتحويل التلقائي (مثل JavaScript).",
  },
  {
    id: "c90",
    category: CategoryType.COMPILER,
    question: "ما هو Garbage Collection؟",
    answer:
      "آلية تلقائية لتحرير الذاكرة غير المستخدمة، تمنع تسرب الذاكرة (Memory Leaks).",
  },
  {
    id: "c91",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Pass by Value و Pass by Reference؟",
    answer:
      "Value: تمرر نسخة من القيمة. Reference: تمرر عنوان المتغير الأصلي، فالتغييرات تؤثر عليه.",
  },
  {
    id: "c92",
    category: CategoryType.COMPILER,
    question: "ما هو Scope في لغات البرمجة؟",
    answer:
      "نطاق رؤية المتغير: Global (في كل البرنامج)، Local (داخل دالة)، أو Block (داخل {}).",
  },
  {
    id: "c93",
    category: CategoryType.COMPILER,
    question: "ما هو Polymorphism؟",
    answer:
      "تعدد الأشكال: قدرة الكائنات المختلفة على الاستجابة لنفس الرسالة بطرق مختلفة (Overloading, Overriding).",
  },
  {
    id: "c94",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Abstract Class و Interface؟",
    answer:
      "Abstract Class: يمكن أن يحتوي على دوال منفذة. Interface: يحتوي عادة على توقيعات الدوال فقط.",
  },
  {
    id: "c95",
    category: CategoryType.COMPILER,
    question: "ما هو JIT Compiler؟",
    answer:
      "Just-In-Time Compiler: يترجم الكود أثناء التنفيذ، يجمع مزايا الـ Compiler و الـ Interpreter.",
  },
  {
    id: "c96",
    category: CategoryType.COMPILER,
    question: "ما هو Regular Expression؟",
    answer:
      "نمط نصي يصف مجموعة من السلاسل، يستخدم في التحليل اللفظي والمطابقة.",
  },
  {
    id: "c97",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين NFA و DFA؟",
    answer:
      "DFA: انتقال واحد محدد لكل مدخل. NFA: يمكن أن يكون له عدة انتقالات، يتم تحويله لـ DFA للتنفيذ.",
  },
  {
    id: "c98",
    category: CategoryType.COMPILER,
    question: "ما هو Type Inference؟",
    answer:
      "قدرة المترجم على استنتاج نوع المتغير تلقائياً دون تصريح صريح (مثل Kotlin, TypeScript).",
  },
  {
    id: "c99",
    category: CategoryType.COMPILER,
    question: "ما هو Closure؟",
    answer:
      "دالة تحتفظ بالوصول للمتغيرات في نطاقها الخارجي حتى بعد انتهاء تنفيذ الدالة الخارجية.",
  },
  {
    id: "c100",
    category: CategoryType.COMPILER,
    question: "ما هو Virtual Machine في سياق لغات البرمجة؟",
    answer:
      "بيئة تنفيذ برمجية تحاكي جهازاً فعلياً، تنفذ Bytecode (مثل JVM لـ Java) لتوفير استقلالية المنصة.",
  },

  // --- المجموعة الثانية (101-200) ---
  {
    id: "w101",
    category: CategoryType.WEB,
    question: "ما هو الويب (World Wide Web)؟",
    answer:
      "شبكة من الصفحات والمواقع المرتبطة عبر الإنترنت باستخدام بروتوكول HTTP.",
  },
  {
    id: "w102",
    category: CategoryType.WEB,
    question: "ما الفرق بين Website و Web Application؟",
    answer:
      "الموقع ثابت غالبًا (لعرض المعلومات)، بينما تطبيق الويب تفاعلي ويعالج بيانات (مثل البريد الإلكتروني).",
  },
  {
    id: "w103",
    category: CategoryType.WEB,
    question: "ما هي وظيفة الـ HTML Tags؟",
    answer:
      "هي العناصر المحاطة بعلامات < > مثل <p> للفقرة، وتُستخدم لبناء هيكل الصفحة.",
  },
  {
    id: "w104",
    category: CategoryType.WEB,
    question: "ما الفرق بين Client-Side و Server-Side Scripting؟",
    answer:
      "Client-Side (مثل JS) ينفذ في المتصفح، بينما Server-Side (مثل PHP/Node) ينفذ على الخادم.",
  },
  {
    id: "w105",
    category: CategoryType.WEB,
    question: "ما هو Bootstrap؟",
    answer:
      "إطار عمل CSS وJS يوفر مكونات جاهزة لتصميم مواقع سريعة ومتجاوبة (Responsive).",
  },
  {
    id: "w106",
    category: CategoryType.WEB,
    question: "ما هي الـ Semantic HTML Tags؟",
    answer:
      "وسوم توفر معنى لهيكل الصفحة مثل <header>، <footer>، <main>، لتحسين SEO والوصولية.",
  },
  {
    id: "w107",
    category: CategoryType.WEB,
    question: "كيفية ربط ملف CSS بملف HTML؟",
    answer:
      "باستخدام وسم <link rel='stylesheet' href='style.css'> داخل قسم <head>.",
  },
  {
    id: "w108",
    category: CategoryType.WEB,
    question: "ما هو Flexbox في CSS؟",
    answer:
      "نموذج تخطيط (Layout) يسمح بتوزيع العناصر ومحاذاتها بسهولة في صفوف أو أعمدة.",
  },
  {
    id: "w109",
    category: CategoryType.WEB,
    question: "ما معنى Event Handling في JavaScript؟",
    answer: "هو آلية للاستجابة لأفعال المستخدم مثل النقر (click) أو الكتابة.",
  },
  {
    id: "w110",
    category: CategoryType.WEB,
    question: "ما هي الـ HTTP Methods الرئيسية؟",
    answer: "GET (طلب)، POST (إرسال)، PUT (تحديث)، DELETE (حذف).",
  },
  {
    id: "w111",
    category: CategoryType.WEB,
    question: "ما وظيفة CSS Selectors؟",
    answer:
      "تُستخدم لتحديد عناصر HTML التي نريد تنسيقها (مثل id، class، أو النوع).",
  },
  {
    id: "w112",
    category: CategoryType.WEB,
    question: "ما هي ملفات Cookies؟",
    answer:
      "ملفات صغيرة تُخزن في المتصفح لتذكر إعدادات المستخدم أو حالة تسجيل الدخول.",
  },
  {
    id: "w113",
    category: CategoryType.WEB,
    question: "كيفية إنشاء نموذج (Form) في HTML؟",
    answer:
      "باستخدام وسم <form> مع عناصر إدخال مثل <input> وزر إرسال <button type='submit'>.",
  },
  {
    id: "w114",
    category: CategoryType.WEB,
    question: "ما هو RESTful API؟",
    answer:
      "واجهة برمجية تعتمد على بروتوكول HTTP للتفاعل مع الموارد بطريقة قياسية وبسيطة.",
  },
  {
    id: "w115",
    category: CategoryType.WEB,
    question: "ما هي Media Queries؟",
    answer:
      "قواعد CSS تسمح بتطبيق تنسيقات مختلفة بناءً على حجم الشاشة (أساس التصميم المتجاوب).",
  },
  {
    id: "w116",
    category: CategoryType.WEB,
    question: "ما هي Local Storage في JavaScript؟",
    answer:
      "آلية لتخزين كميات كبيرة من البيانات في المتصفح محلياً دون انتهاء صلاحية تلقائية.",
  },
  {
    id: "w117",
    category: CategoryType.WEB,
    question: "ما الفرق بين var و let في JavaScript؟",
    answer:
      "var لها نطاق دالة (Function scope)، بينما let لها نطاق كتلة (Block scope) وهي الأحدث.",
  },
  {
    id: "w118",
    category: CategoryType.WEB,
    question: "ما هو Grid Layout في CSS؟",
    answer:
      "نظام تخطيط ثنائي الأبعاد (صفوف وأعمدة) يتيح تحكماً كاملاً في هيكل الصفحة.",
  },
  {
    id: "w119",
    category: CategoryType.WEB,
    question: "ما معنى Web Accessibility؟",
    answer:
      "تصميم المواقع لتكون قابلة للاستخدام من الجميع، بما في ذلك ذوي الإعاقة (باستخدام ARIA).",
  },
  {
    id: "w120",
    category: CategoryType.WEB,
    question: "كيفية التعامل مع الأخطاء في JavaScript؟",
    answer:
      "باستخدام بلوك try...catch لالتقاط ومعالجة الاستثناءات أثناء التشغيل.",
  },
  {
    id: "w121",
    category: CategoryType.WEB,
    question: "ما هو الـ URL؟",
    answer:
      "Uniform Resource Locator - هو العنوان الفريد لأي مورد على شبكة الإنترنت.",
  },
  {
    id: "w122",
    category: CategoryType.WEB,
    question: "ما هو الـ SEO؟",
    answer:
      "Search Engine Optimization - عملية تحسين الموقع لزيادة ظهوره في نتائج محركات البحث.",
  },
  {
    id: "w123",
    category: CategoryType.WEB,
    question: "ما هو الـ MVC؟",
    answer:
      "نمط تصميم (Model-View-Controller) يقسم التطبيق إلى البيانات، الواجهة، والتحكم.",
  },
  {
    id: "w124",
    category: CategoryType.WEB,
    question: "ما الفرق بين الموقع الثابت والديناميكي؟",
    answer:
      "الثابت محتواه لا يتغير إلا يدوياً، الديناميكي يتغير برمجياً بناءً على المستخدم أو قاعدة البيانات.",
  },
  {
    id: "w125",
    category: CategoryType.WEB,
    question: "ما وظيفة السيرفر (Web Server)؟",
    answer:
      "جهاز أو برنامج يستقبل طلبات المتصفح (HTTP Requests) ويرسل له ملفات الموقع.",
  },

  {
    id: "a126",
    category: CategoryType.ALGO,
    question: "ما هي الخوارزمية؟",
    answer: "سلسلة خطوات منطقية ومحدودة لحل مشكلة معينة أو أداء مهمة محددة.",
  },
  {
    id: "a127",
    category: CategoryType.ALGO,
    question: "ما هي المتغيرات (Variables)؟",
    answer:
      "أماكن محجوزة في الذاكرة لتخزين قيم يمكن تغييرها أثناء تنفيذ البرنامج.",
  },
  {
    id: "a128",
    category: CategoryType.ALGO,
    question: "ما هي الدوال (Functions)؟",
    answer: "كتل برمجية قابلة لإعادة الاستخدام، تؤدي مهمة محددة وقد تعيد قيمة.",
  },
  {
    id: "a129",
    category: CategoryType.ALGO,
    question: "ما هي الحلقات (Loops)؟",
    answer:
      "هياكل برمجية لتكرار تنفيذ كود معين لعدد من المرات أو حتى تحقق شرط (for, while).",
  },
  {
    id: "a130",
    category: CategoryType.ALGO,
    question: "ما هي الجمل الشرطية (Conditional Statements)؟",
    answer:
      "هياكل (if-else, switch) تسمح للبرنامج باتخاذ قرارات بناءً على شروط معينة.",
  },
  {
    id: "a131",
    category: CategoryType.ALGO,
    question: "ما هي المصفوفات (Arrays)؟",
    answer:
      "هياكل بيانات تخزن مجموعة عناصر من نفس النوع في مواقع ذاكرة متجاورة.",
  },
  {
    id: "a132",
    category: CategoryType.ALGO,
    question: "ما هو التعقيد الزمني (Time Complexity)؟",
    answer: "قياس لمدى سرعة نمو وقت تنفيذ الخوارزمية مع زيادة حجم المدخلات.",
  },
  {
    id: "a133",
    category: CategoryType.ALGO,
    question: "كيف تعمل خوارزمية Bubble Sort؟",
    answer:
      "بمقارنة كل عنصرين متجاورين وتبديلهما إذا كانا بترتيب خاطئ، وتكرار ذلك حتى تترتب المصفوفة.",
  },
  {
    id: "a134",
    category: CategoryType.ALGO,
    question: "ما هو مفهوم العودية (Recursion)؟",
    answer:
      "هو قيام الدالة باستدعاء نفسها لحل مشكلة أصغر من نفس النوع حتى الوصول لشرط التوقف.",
  },
  {
    id: "a135",
    category: CategoryType.ALGO,
    question: "ما هو البحث الثنائي (Binary Search)؟",
    answer:
      "بحث فعال في قائمة مرتبة بتقسيمها لنصفين في كل خطوة، تعقيده O(log n).",
  },
  {
    id: "a136",
    category: CategoryType.ALGO,
    question: "ما هي السلاسل النصية (Strings)؟",
    answer:
      "تسلسل من الرموز (Characters)، وتوفر اللغات دوالاً لمعالجتها (دمج، بحث، تقطيع).",
  },
  {
    id: "a137",
    category: CategoryType.ALGO,
    question: "ما هي خوارزمية Quick Sort؟",
    answer:
      "خوارزمية ترتيب تعتمد على اختيار 'محور' (Pivot) وتقسيم العناصر حوله ثم ترتيب الأجزاء عودياً.",
  },
  {
    id: "a138",
    category: CategoryType.ALGO,
    question: "ما هي المؤشرات (Pointers)؟",
    answer:
      "متغيرات تخزن عناوين الذاكرة لمتغيرات أخرى، وتستخدم بكثرة في لغات مثل C و C++.",
  },
  {
    id: "a139",
    category: CategoryType.ALGO,
    question: "كيف يعمل هيكل المكدس (Stack)؟",
    answer:
      "يعمل بمبدأ LIFO (آخر من دخل أول من يخرج)، ويستخدم في عمليات التراجع (Undo).",
  },
  {
    id: "a140",
    category: CategoryType.ALGO,
    question: "كيف يعمل هيكل الرتل (Queue)؟",
    answer:
      "يعمل بمبدأ FIFO (أول من دخل أول من يخرج)، مثل طوابير انتظار الطباعة.",
  },
  {
    id: "a141",
    category: CategoryType.ALGO,
    question: "ما هو ترميز Big O؟",
    answer: "طريقة رياضية لوصف الحد الأعلى لتعقيد الخوارزمية (أسوأ حالة).",
  },
  {
    id: "a142",
    category: CategoryType.ALGO,
    question: "ما هي القائمة المترابطة (Linked List)؟",
    answer:
      "هيكل بيانات مكون من عقد، كل عقدة تحتوي قيمة ومؤشراً للعقدة التالية.",
  },
  {
    id: "a143",
    category: CategoryType.ALGO,
    question: "ما هي خوارزمية Merge Sort؟",
    answer: "خوارزمية 'فرق تسد' تقسم المصفوفة لأصغر أجزاء ثم تدمجها بشكل مرتب.",
  },
  {
    id: "a144",
    category: CategoryType.ALGO,
    question: "ما هي معالجة الاستثناءات (Exception Handling)؟",
    answer:
      "آلية للتعامل مع أخطاء التشغيل (Run-time errors) لمنع انهيار البرنامج.",
  },
  {
    id: "a145",
    category: CategoryType.ALGO,
    question: "ما هي المخططات (Graphs)؟",
    answer:
      "هياكل بيانات لتمثيل العلاقات المعقدة بين العقد (Nodes) عبر الحواف (Edges).",
  },
  {
    id: "a146",
    category: CategoryType.ALGO,
    question: "ما هي الأشجار (Trees)؟",
    answer:
      "هياكل بيانات هرمية، أهم أنواعها الشجرة الثنائية التي تستخدم لتسريع عمليات البحث.",
  },
  {
    id: "a147",
    category: CategoryType.ALGO,
    question: "ما هي خوارزمية Dijkstra؟",
    answer:
      "خوارزمية لإيجاد أقصر مسار بين عقدتين في مخطط (Graph) له أوزان موجبة.",
  },
  {
    id: "a148",
    category: CategoryType.ALGO,
    question: "ما معنى Debugging؟",
    answer: "عملية تتبع الكود البرمجي لاكتشاف الأخطاء (Bugs) وإصلاحها.",
  },
  {
    id: "a149",
    category: CategoryType.ALGO,
    question: "ما هي جداول التجزئة (Hash Tables)؟",
    answer:
      "هياكل تخزن البيانات كمفاتيح وقيم وتسمح بالوصول السريع جداً بزمن ثابت O(1) غالباً.",
  },
  {
    id: "a150",
    category: CategoryType.ALGO,
    question: "ما هي البرمجة كائنية التوجه (OOP)؟",
    answer:
      "نموذج برمجي يعتمد على الكائنات (Objects) التي تجمع بين البيانات والوظائف.",
  },

  {
    id: "n151",
    category: CategoryType.NETWORK,
    question: "ما هو نموذج OSI؟",
    answer: "نموذج معياري يتكون من 7 طبقات يصف كيفية تواصل الأجهزة عبر الشبكة.",
  },
  {
    id: "n152",
    category: CategoryType.NETWORK,
    question: "ما هو نموذج TCP/IP؟",
    answer:
      "النموذج العملي للإنترنت، ويتكون غالباً من 4 طبقات (Application, Transport, Internet, Network Access).",
  },
  {
    id: "n153",
    category: CategoryType.NETWORK,
    question: "ما هو عنوان الـ IP؟",
    answer: "عنوان رقمي فريد يحدد هوية الجهاز على الشبكة (مثل 192.168.1.1).",
  },
  {
    id: "n154",
    category: CategoryType.NETWORK,
    question: "ما الفرق الجوهري بين TCP و UDP؟",
    answer:
      "TCP موثوق ويؤكد استلام البيانات، UDP سريع ولا يضمن الاستلام (يستخدم للبث المباشر).",
  },
  {
    id: "n155",
    category: CategoryType.NETWORK,
    question: "ما هو نظام DNS؟",
    answer:
      "Domain Name System - يعمل كدليل هاتف يحول أسماء المواقع (مثل google.com) إلى عناوين IP.",
  },
  {
    id: "n156",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول HTTP؟",
    answer:
      "Hypertext Transfer Protocol - بروتوكول لطلب وعرض صفحات الويب، يعمل عادة على المنفذ 80.",
  },
  {
    id: "n157",
    category: CategoryType.NETWORK,
    question: "ما هي وظيفة Subnet Mask؟",
    answer:
      "تُستخدم لتحديد أي جزء من عنوان IP ينتمي للشبكة وأي جزء ينتمي للجهاز (المضيف).",
  },
  {
    id: "n158",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول ARP؟",
    answer:
      "Address Resolution Protocol - يترجم عنوان IP (المنطقي) إلى عنوان MAC (الفيزيائي) في الشبكة المحلية.",
  },
  {
    id: "n159",
    category: CategoryType.NETWORK,
    question: "ما وظيفة جدار الحماية (Firewall)؟",
    answer:
      "مراقبة وتصفية حركة المرور الصادرة والواردة لحماية الشبكة من الاختراقات.",
  },
  {
    id: "n160",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول HTTPS؟",
    answer:
      "هو النسخة الآمنة من HTTP، حيث يتم تشفير البيانات باستخدام SSL/TLS.",
  },
  {
    id: "n161",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين LAN و WAN؟",
    answer:
      "LAN شبكة محلية لمنطقة صغيرة (مكتب/منزل)، WAN شبكة واسعة تربط مدن أو دول (مثل الإنترنت).",
  },
  {
    id: "n162",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول ICMP؟",
    answer:
      "بروتوكول لرسائل التحكم والخطأ في الشبكة، وتستخدمه أداة ping للاختبار.",
  },
  {
    id: "n163",
    category: CategoryType.NETWORK,
    question: "ما معنى رقم المنفذ (Port Number)؟",
    answer:
      "رقم يحدد تطبيقاً أو خدمة معينة داخل الجهاز (مثلاً 80 للويب، 443 للويب الآمن).",
  },
  {
    id: "n164",
    category: CategoryType.NETWORK,
    question: "ما هو NAT؟",
    answer:
      "Network Address Translation - تكنولوجيا تتيح استخدام عنوان IP عام واحد لعدة أجهزة داخل شبكة خاصة.",
  },
  {
    id: "n165",
    category: CategoryType.NETWORK,
    question: "ما هي الـ VLAN؟",
    answer:
      "Virtual LAN - تقسيم شبكة فيزيائية واحدة إلى عدة شبكات افتراضية منطقية لعزل المرور.",
  },
  {
    id: "n166",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول BGP؟",
    answer:
      "Border Gateway Protocol - بروتوكول توجيه أساسي يربط بين الشبكات الكبرى على الإنترنت.",
  },
  {
    id: "n167",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول DHCP؟",
    answer:
      "Dynamic Host Configuration Protocol - يقوم بتوزيع عناوين IP تلقائياً للأجهزة عند اتصالها بالشبكة.",
  },
  {
    id: "n168",
    category: CategoryType.NETWORK,
    question: "ما هو الـ Socket؟",
    answer:
      "هو تركيب من (عنوان IP + رقم المنفذ)، يمثل نقطة نهاية للاتصال بين جهازين.",
  },
  {
    id: "n169",
    category: CategoryType.NETWORK,
    question: "ما هو عنوان الـ MAC؟",
    answer:
      "Media Access Control - عنوان فيزيائي فريد ودائم لكرت الشبكة (48 بت).",
  },
  {
    id: "n170",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول OSPF؟",
    answer:
      "بروتوكول توجيه داخلي فعال يختار أقصر مسار بناءً على حالة الوصلة (Link State).",
  },
  {
    id: "n171",
    category: CategoryType.NETWORK,
    question: "ما وظيفة الـ VPN؟",
    answer:
      "إنشاء قناة اتصال مشفرة وآمنة عبر شبكة عامة (مثل الإنترنت) لحماية الخصوصية.",
  },
  {
    id: "n172",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول FTP؟",
    answer:
      "File Transfer Protocol - بروتوكول متخصص لنقل الملفات بين الأجهزة، يعمل على المنفذ 21.",
  },
  {
    id: "n173",
    category: CategoryType.NETWORK,
    question: "ما معنى الـ Bandwidth؟",
    answer:
      "عرض النطاق الترددي، وهو أقصى كمية بيانات يمكن نقلها عبر الشبكة في زمن معين (ثانية).",
  },
  {
    id: "n174",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول RIP؟",
    answer:
      "Routing Information Protocol - بروتوكول توجيه قديم يعتمد على 'عدد القفزات' (Hops) لاختيار المسار.",
  },
  {
    id: "n175",
    category: CategoryType.NETWORK,
    question: "ما معنى الـ Latency؟",
    answer: "التأخير الزمني المستغرق لوصول حزمة البيانات من المصدر إلى الوجهة.",
  },

  {
    id: "c176",
    category: CategoryType.COMPILER,
    question: "ما هي لغة البرمجة؟",
    answer: "لغة اصطناعية تُستخدم لكتابة تعليمات يمكن للحاسوب فهمها وتنفيذها.",
  },
  {
    id: "c177",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين المترجم (Compiler) والمفسر (Interpreter)؟",
    answer:
      "المترجم يحول الكود كاملاً لملف تنفيذي، المفسر يترجم وينفذ الكود سطراً بسطر.",
  },
  {
    id: "c178",
    category: CategoryType.COMPILER,
    question: "ما هو التحليل اللفظي (Lexical Analysis)؟",
    answer: "مرحلة تحويل كود المصدر إلى وحدات أساسية تسمى الرموز (Tokens).",
  },
  {
    id: "c179",
    category: CategoryType.COMPILER,
    question: "ما هو التحليل النحوي (Syntax Analysis)؟",
    answer:
      "عملية التحقق من أن ترتيب الرموز يتبع قواعد اللغة البرمجية (بناء شجرة الإعراب).",
  },
  {
    id: "c180",
    category: CategoryType.COMPILER,
    question: "ما هو التحليل الدلالي (Semantic Analysis)؟",
    answer:
      "التأكد من أن الكود له معنى منطقي (مثل التأكد من جمع متغيرات من أنواع متوافقة).",
  },
  {
    id: "c181",
    category: CategoryType.COMPILER,
    question: "ما هي مرحلة توليد الكود (Code Generation)؟",
    answer:
      "المرحلة النهائية التي تحول شجرة الإعراب إلى لغة الآلة أو لغة وسيطة.",
  },
  {
    id: "c182",
    category: CategoryType.COMPILER,
    question: "ما هي النماذج البرمجية (Paradigms)؟",
    answer: "أنماط تفكير برمجية مثل: الإجرائية، كائنية التوجه، والوظيفية.",
  },
  {
    id: "c183",
    category: CategoryType.COMPILER,
    question: "ما معنى لغات قوية النوع (Strongly Typed)؟",
    answer:
      "لغات تفرض قواعد صارمة على أنواع البيانات ولا تسمح بالتحويل التلقائي الخاطئ (مثل Java).",
  },
  {
    id: "c184",
    category: CategoryType.COMPILER,
    question: "ما هي عملية جمع المهملات (Garbage Collection)؟",
    answer:
      "نظام آلي لإدارة الذاكرة يقوم بحذف الكائنات التي لم يعد البرنامج بحاجتها.",
  },
  {
    id: "c185",
    category: CategoryType.COMPILER,
    question: "ما هي لغات السكربت (Scripting Languages)؟",
    answer:
      "لغات تفسيرية غالباً، تُستخدم لأتمتة المهام وتطوير الويب (مثل Python, JavaScript).",
  },
  {
    id: "c186",
    category: CategoryType.COMPILER,
    question: "ما هو الكود الوسيط (Intermediate Code)؟",
    answer:
      "تمثيل للكود يسهل عملية التحسين (Optimization) ويكون مستقلاً عن الجهاز النهائي.",
  },
  {
    id: "c187",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Static و Dynamic Typing؟",
    answer:
      "Static: يتم فحص الأنواع وقت الترجمة. Dynamic: يتم فحص الأنواع وقت التشغيل.",
  },
  {
    id: "c188",
    category: CategoryType.COMPILER,
    question: "ما هو جدول الرموز (Symbol Table)؟",
    answer:
      "هيكل بيانات ينمو أثناء الترجمة ليخزن أسماء المتغيرات والدوال وخصائصها.",
  },
  {
    id: "c189",
    category: CategoryType.COMPILER,
    question: "ما هي البرمجة الوظيفية (Functional Programming)؟",
    answer: "نموذج يعتمد على الدوال الرياضية ويتجنب تغيير حالة البيانات.",
  },
  {
    id: "c190",
    category: CategoryType.COMPILER,
    question: "ما هو تحسين الكود (Optimization)؟",
    answer:
      "عملية تعديل الكود لجعله أسرع أو أقل استهلاكاً للذاكرة دون تغيير وظيفته.",
  },
  {
    id: "c191",
    category: CategoryType.COMPILER,
    question: "ما هي لغات المستوى المنخفض (Low-Level)؟",
    answer:
      "لغات قريبة من لغة الآلة (مثل Assembly) وتتطلب فهماً عميقاً للعتاد.",
  },
  {
    id: "c192",
    category: CategoryType.COMPILER,
    question: "ما هو الإعراب (Parsing)؟",
    answer:
      "عملية تحليل تسلسل الرموز لبناء هيكل هرمي (شجرة) يمثل البنية النحوية.",
  },
  {
    id: "c193",
    category: CategoryType.COMPILER,
    question: "ما هي لغات المستوى العالي (High-Level)؟",
    answer:
      "لغات قريبة من لغة البشر (مثل Python, C#) وهي مستقلة عن نوع المعالج.",
  },
  {
    id: "c194",
    category: CategoryType.COMPILER,
    question: "ما وظيفة الرابط (Linker)؟",
    answer:
      "دمج ملفات الكود المترجمة مع المكتبات لإنتاج ملف واحد قابل للتنفيذ (Executable).",
  },
  {
    id: "c195",
    category: CategoryType.COMPILER,
    question: "ما هي التعبيرات النمطية (Regular Expressions)؟",
    answer:
      "أنماط نصية تُستخدم للبحث عن سلاسل معينة، وتستخدم في مرحلة التحليل اللفظي.",
  },
  {
    id: "c196",
    category: CategoryType.COMPILER,
    question: "ما وظيفة المحمل (Loader)؟",
    answer:
      "نظام يقوم بنقل البرنامج من القرص إلى الذاكرة الرئيسية (RAM) لبدء تنفيذه.",
  },
  {
    id: "c197",
    category: CategoryType.COMPILER,
    question: "ما هي البرمجة الإجرائية (Procedural Programming)؟",
    answer:
      "نموذج يعتمد على تقسيم البرنامج إلى سلسلة من الخطوات والإجراءات المتتالية.",
  },
  {
    id: "c198",
    category: CategoryType.COMPILER,
    question: "ما هو القواعد الخالية من السياق (Context-Free Grammar)؟",
    answer: "مجموعة قواعد تُستخدم لوصف البنية النحوية للغات البرمجة.",
  },
  {
    id: "c199",
    category: CategoryType.COMPILER,
    question: "ما هي ترجمة JIT؟",
    answer:
      "Just-In-Time Compilation - ترجمة الكود أثناء التشغيل لتحسين الأداء (مثل Java JVM).",
  },
  {
    id: "c200",
    category: CategoryType.COMPILER,
    question: "ما هي معالجة الأخطاء (Error Recovery)؟",
    answer:
      "قدرة المترجم على استكمال فحص الكود بعد اكتشاف خطأ واحد، بدلاً من التوقف فوراً.",
  },

  // --- المجموعة الثالثة (201-300) ---
  {
    id: "w201",
    category: CategoryType.WEB,
    question: "ما هو HTML؟",
    answer:
      "لغة توصيف النص التشعبي (HyperText Markup Language)، تُستخدم لإنشاء هيكل صفحات الويب.",
  },
  {
    id: "w202",
    category: CategoryType.WEB,
    question: "ما الفرق بين <div> و <span>؟",
    answer:
      "<div> عنصر كتلي (block-level) يُستخدم لتجميع أقسام الصفحة، بينما <span> عنصر داخلي (inline) يُستخدم لتنسيق أجزاء نصية صغيرة.",
  },
  {
    id: "w203",
    category: CategoryType.WEB,
    question: "ما دور CSS في تصميم المواقع؟",
    answer:
      "CSS (Cascading Style Sheets) تُستخدم لتحديد شكل وتنسيق عناصر HTML (الألوان، الخطوط، التخطيط...).",
  },
  {
    id: "w204",
    category: CategoryType.WEB,
    question: "ما هو JavaScript؟",
    answer:
      "لغة برمجة تُستخدم لإضافة تفاعلية ووظائف ديناميكية إلى صفحات الويب.",
  },
  {
    id: "w205",
    category: CategoryType.WEB,
    question: "ما الفرق بين == و === في JavaScript؟",
    answer:
      "== يقارن القيمة بعد التحويل الضمني للنوع، بينما === يقارن القيمة والنوع دون تحويل.",
  },
  {
    id: "w206",
    category: CategoryType.WEB,
    question: "ما هو DOM؟",
    answer:
      "Document Object Model، تمثيل هيكلي لصفحة الويب كشجرة من العقد، يسمح للـ JavaScript بالتفاعل مع محتوى الصفحة.",
  },
  {
    id: "w207",
    category: CategoryType.WEB,
    question: "ما هو AJAX؟",
    answer:
      "تقنية تُستخدم لتحديث جزء من صفحة ويب دون إعادة تحميلها بالكامل، باستخدام XMLHttpRequest أو Fetch API.",
  },
  {
    id: "w208",
    category: CategoryType.WEB,
    question: "ما هو Responsive Web Design؟",
    answer:
      "تصميم يتكيف مع أحجام شاشات مختلفة باستخدام وحدات مرنة (مثل %، rem) وMedia Queries.",
  },
  {
    id: "w209",
    category: CategoryType.WEB,
    question: "ما دور Media Queries في CSS؟",
    answer:
      "تُستخدم لتطبيق أنماط مختلفة بناءً على خصائص الجهاز (مثل العرض، الارتفاع، الاتجاه).",
  },
  {
    id: "w210",
    category: CategoryType.WEB,
    question: "ما هو Bootstrap؟",
    answer: "إطار عمل (Framework) مفتوح المصدر لتصميم مواقع ويب متجاوبة بسرعة.",
  },
  {
    id: "w211",
    category: CategoryType.WEB,
    question: "ما الفرق بين ID و Class في HTML؟",
    answer:
      "ID فريد ويُستخدم لعنصر واحد فقط، بينما يمكن استخدام Class لأكثر من عنصر.",
  },
  {
    id: "w212",
    category: CategoryType.WEB,
    question: "ما هو Semantic HTML؟",
    answer:
      "استخدام عناصر HTML ذات معنى واضح (مثل <header>, <nav>, <article>) لتحسين البنية والوصولية.",
  },
  {
    id: "w213",
    category: CategoryType.WEB,
    question: "ما هو JSON؟",
    answer:
      "JavaScript Object Notation، تنسيق خفيف لتبادل البيانات بين الخادم والعميل.",
  },
  {
    id: "w214",
    category: CategoryType.WEB,
    question: "ما الفرق بين GET و POST في طلبات HTTP؟",
    answer:
      "GET تُرسل البيانات عبر الرابط (URL) وتُستخدم للاستعلام، POST تُرسل البيانات في جسم الطلب وتُستخدم لإرسال بيانات حساسة أو كبيرة.",
  },
  {
    id: "w215",
    category: CategoryType.WEB,
    question: "ما هو REST API؟",
    answer:
      "واجهة برمجية تعتمد على مبادئ REST (Representational State Transfer) لتبادل البيانات عبر HTTP.",
  },
  {
    id: "w216",
    category: CategoryType.WEB,
    question: "ما هو Cookie؟",
    answer:
      "ملف صغير يُخزَّن على جهاز المستخدم لحفظ معلومات الجلسة أو التفضيلات.",
  },
  {
    id: "w217",
    category: CategoryType.WEB,
    question: "ما هو LocalStorage؟",
    answer: "وسيلة لتخزين البيانات في متصفح المستخدم بشكل دائم حتى بعد إغالقه.",
  },
  {
    id: "w218",
    category: CategoryType.WEB,
    question: "ما الفرق بين SessionStorage و LocalStorage؟",
    answer:
      "SessionStorage يُمسح عند إغلاق التبويب، بينما LocalStorage يبقى حتى يتم حذفه يدويًا.",
  },
  {
    id: "w219",
    category: CategoryType.WEB,
    question: "ما هو Cross-Origin Resource Sharing (CORS)؟",
    answer: "آلية أمان تسمح أو تمنع طلبات HTTP من نطاق مختلف عن النطاق الأصلي.",
  },
  {
    id: "w220",
    category: CategoryType.WEB,
    question: "ما هو Web Server؟",
    answer:
      "برنامج أو جهاز يستضيف صفحات الويب ويُجيب على طلبات العملاء عبر HTTP.",
  },
  {
    id: "w221",
    category: CategoryType.WEB,
    question: "ما هو Frontend؟",
    answer:
      "الجزء المرئي من الموقع الذي يتفاعل معه المستخدم مباشرة (HTML, CSS, JS).",
  },
  {
    id: "w222",
    category: CategoryType.WEB,
    question: "ما هو Backend؟",
    answer:
      "الجزء الخفي من التطبيق المسؤول عن المنطق، قواعد البيانات، ومعالجة الطلبات.",
  },
  {
    id: "w223",
    category: CategoryType.WEB,
    question: "ما هو Framework في تطوير الويب؟",
    answer:
      "مجموعة أدوات ومكتبات تسهّل تطوير التطبيقات (مثل React, Angular, Django).",
  },
  {
    id: "w224",
    category: CategoryType.WEB,
    question: "ما هو Single Page Application (SPA)؟",
    answer:
      "تطبيق ويب يُحمّل صفحة واحدة ثم يُحدّث المحتوى ديناميكياً دون إعادة تحميل.",
  },
  {
    id: "w225",
    category: CategoryType.WEB,
    question: "ما هو HTTPS؟ ولماذا يُستخدم؟",
    answer:
      "نسخة آمنة من HTTP تستخدم التشفير (SSL/TLS) لحماية البيانات أثناء النقل.",
  },

  {
    id: "a226",
    category: CategoryType.ALGO,
    question: "ما هي الخوارزمية؟",
    answer: "سلسلة من الخطوات الواضحة والمحددة لحل مشكلة أو تنفيذ مهمة.",
  },
  {
    id: "a227",
    category: CategoryType.ALGO,
    question: "ما هو التعقيد الزمني (Time Complexity)؟",
    answer:
      "مقياس لكفاءة الخوارزمية من حيث الوقت الذي تستغرقه بناءً على حجم المدخلات.",
  },
  {
    id: "a228",
    category: CategoryType.ALGO,
    question: "ما هو Big O Notation؟",
    answer:
      "تدوين رياضي يُستخدم لوصف الحد الأعلى لتعقيد الخوارزمية (مثل O(n), O(log n)).",
  },
  {
    id: "a229",
    category: CategoryType.ALGO,
    question: "ما الفرق بين المتغير والثابت؟",
    answer:
      "المتغير يمكن تغيير قيمته، بينما الثابت تبقى قيمته ثابتة طوال تنفيذ البرنامج.",
  },
  {
    id: "a230",
    category: CategoryType.ALGO,
    question: "ما هو Loop؟",
    answer: "بنية تحكم تُكرر تنفيذ كتلة من التعليمات حتى يتحقق شرط معين.",
  },
  {
    id: "a231",
    category: CategoryType.ALGO,
    question: "ما الفرق بين for loop و while loop؟",
    answer:
      "for loop تُستخدم عندما يكون عدد التكرارات معروفاً، بينما while loop تُستخدم عندما يعتمد التكرار على شرط منطقي.",
  },
  {
    id: "a232",
    category: CategoryType.ALGO,
    question: "ما هو Recursion؟",
    answer: "دالة تستدعي نفسها لحل مشكلة عن طريق تقسيمها إلى مشاكل أصغر.",
  },
  {
    id: "a233",
    category: CategoryType.ALGO,
    question: "ما هو Array؟",
    answer: "هيكل بيانات يخزن مجموعة من العناصر من نفس النوع في مواقع متتالية.",
  },
  {
    id: "a234",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Array و List؟",
    answer:
      "Array حجمه ثابت، بينما List (مثل ArrayList في Java) حجمه ديناميكي.",
  },
  {
    id: "a235",
    category: CategoryType.ALGO,
    question: "ما هو Stack؟",
    answer: "هيكل بيانات يعمل بمبدأ LIFO (Last In, First Out).",
  },
  {
    id: "a236",
    category: CategoryType.ALGO,
    question: "ما هو Queue؟",
    answer: "هيكل بيانات يعمل بمبدأ FIFO (First In, First Out).",
  },
  {
    id: "a237",
    category: CategoryType.ALGO,
    question: "ما هو Binary Search؟",
    answer:
      "خوارزمية بحث فعالة تعمل على المصفوفات المرتبة بتعقيد زمني O(log n).",
  },
  {
    id: "a238",
    category: CategoryType.ALGO,
    question: "ما هو Bubble Sort؟",
    answer:
      "خوارزمية ترتيب بسيطة تقارن العناصر المجاورة وتبادلهما إذا كانت غير مرتبة.",
  },
  {
    id: "a239",
    category: CategoryType.ALGO,
    question: "ما تعقيد Bubble Sort؟",
    answer: "O(n²) في أسوأ الحالات.",
  },
  {
    id: "a240",
    category: CategoryType.ALGO,
    question: "ما هو Linked List؟",
    answer:
      "هيكل بيانات يتكون من عقد، كل عقدة تحتوي على قيمة ومؤشر للعقدة التالية.",
  },
  {
    id: "a241",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Linear Search و Binary Search؟",
    answer:
      "Linear Search تفحص كل عنصر واحداً تلو الآخر (O(n))، بينما Binary Search تتطلب ترتيباً وتبحث بطريقة ثنائية (O(log n)).",
  },
  {
    id: "a242",
    category: CategoryType.ALGO,
    question: "ما هو Dynamic Programming؟",
    answer:
      "تقنية لحل المشاكل المعقدة بتقسيمها إلى مشاكل فرعية أبسط وتخزين نتائجها لتجنب التكرار.",
  },
  {
    id: "a243",
    category: CategoryType.ALGO,
    question: "ما هو الـ Function؟",
    answer:
      "كتلة من التعليمات تُنفذ عند استدعائها، ويمكن أن تأخذ مدخلات وتعيد مخرجات.",
  },
  {
    id: "a244",
    category: CategoryType.ALGO,
    question: "ما هو Scope في البرمجة؟",
    answer:
      "النطاق الذي تكون فيه المتغيرات مرئية وقابلة للاستخدام (محلي، عام...).",
  },
  {
    id: "a245",
    category: CategoryType.ALGO,
    question: "ما هو الـ Parameter؟ وما الفرق بينه وبين Argument؟",
    answer:
      "Parameter هو المتغير في تعريف الدالة، أما Argument فهو القيمة الفعلية الممررة عند الاستدعاء.",
  },
  {
    id: "a246",
    category: CategoryType.ALGO,
    question: "ما هو الـ Compiler؟",
    answer:
      "برنامج يحوّل الكود المصدري بلغة عالية المستوى إلى كود آلي (Machine Code).",
  },
  {
    id: "a247",
    category: CategoryType.ALGO,
    question: "ما هو الـ Interpreter؟",
    answer: "برنامج ينفذ الكود المصدري سطرأ بسطر دون تحويله بالكامل مسبقاً.",
  },
  {
    id: "a248",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Static Typing و Dynamic Typing؟",
    answer:
      "في Static Typing (مثل Java) يجب تحديد نوع المتغير عند التصريح، بينما في Dynamic Typing (مثل Python) يُحدد النوع عند التشغيل.",
  },
  {
    id: "a249",
    category: CategoryType.ALGO,
    question: "ما هو الـ Debugging؟",
    answer: "عملية اكتشاف وإصلاح الأخطاء (Bugs) في الكود.",
  },
  {
    id: "a250",
    category: CategoryType.ALGO,
    question: "ما هو الـ Pseudocode؟",
    answer: "وصف غير رسمي للخوارزمية بلغة بسيطة تشبه اللغة البشرية.",
  },

  {
    id: "n251",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول TCP؟",
    answer:
      "Transmission Control Protocol، بروتوكول موثوق يضمن تسليم البيانات بشكل صحيح ومرتب.",
  },
  {
    id: "n252",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول UDP؟",
    answer:
      "User Datagram Protocol، بروتوكول غير موثوق لكنه أسرع من TCP ولا يضمن التسليم أو الترتيب.",
  },
  {
    id: "n253",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين TCP و UDP؟",
    answer: "TCP موثوق ومرتب، UDP أسرع لكن غير موثوق.",
  },
  {
    id: "n254",
    category: CategoryType.NETWORK,
    question: "ما هو IP Address؟",
    answer:
      "عنوان رقمي يُعرّف جهازاً على الشبكة (مثل 192.168.1.1 أو 2001:db8::1).",
  },
  {
    id: "n255",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين IPv4 و IPv6؟",
    answer:
      "IPv4 يستخدم 32 بت (≈4 مليار عنوان)، IPv6 يستخدم 128 بت (عدد هائل من العناوين).",
  },
  {
    id: "n256",
    category: CategoryType.NETWORK,
    question: "ما هو DNS؟",
    answer:
      "Domain Name System، يحوّل أسماء النطاقات (مثل google.com) إلى عناوين IP.",
  },
  {
    id: "n257",
    category: CategoryType.NETWORK,
    question: "ما هو DHCP؟",
    answer:
      "Dynamic Host Configuration Protocol، يخصص عناوين IP تلقائياً للأجهزة على الشبكة.",
  },
  {
    id: "n258",
    category: CategoryType.NETWORK,
    question: "ما هو Router؟",
    answer: "جهاز يوجّه حزم البيانات بين شبكات مختلفة.",
  },
  {
    id: "n259",
    category: CategoryType.NETWORK,
    question: "ما هو Switch؟",
    answer:
      "جهاز يربط أجهزة داخل شبكة محلية (LAN) ويُوجّه البيانات بناءً على MAC Address.",
  },
  {
    id: "n260",
    category: CategoryType.NETWORK,
    question: "ما هو MAC Address؟",
    answer:
      "عنوان فريد يُخصَّص لكل واجهة شبكة على مستوى العتاد (مثل 00:1A:2B:3C:4D:5E).",
  },
  {
    id: "n261",
    category: CategoryType.NETWORK,
    question: "ما هو OSI Model؟",
    answer:
      "نموذج مرجعي مكوّن من 7 طبقات لفهم كيفية اتصال الشبكات (الطبقة الفيزيائية، الربط، الشبكة...).",
  },
  {
    id: "n262",
    category: CategoryType.NETWORK,
    question: "اذكر طبقات نموذج OSI من الأعلى إلى الأدنى.",
    answer: "التطبيق → العرض → الجلسة → النقل → الشبكة → الربط → الفيزيائية.",
  },
  {
    id: "n263",
    category: CategoryType.NETWORK,
    question: "ما هي طبقة النقل في OSI؟",
    answer: "الطبقة الرابعة، مسؤولة عن نقل البيانات بين الأجهزة (مثل TCP/UDP).",
  },
  {
    id: "n264",
    category: CategoryType.NETWORK,
    question: "ما هو Port Number؟",
    answer:
      "رقم يُستخدم لتمييز التطبيقات أو الخدمات على نفس الجهاز (مثل 80 لـ HTTP، 443 لـ HTTPS).",
  },
  {
    id: "n265",
    category: CategoryType.NETWORK,
    question: "ما هو Firewall؟",
    answer:
      "نظام أمان يراقب ويتحكم في حركة المرور الواردة والصادرة بناءً على قواعد أمان.",
  },
  {
    id: "n266",
    category: CategoryType.NETWORK,
    question: "ما هو NAT؟",
    answer:
      "Network Address Translation، تقنية تسمح لعدة أجهزة داخل شبكة خاصة باستخدام عنوان IP عام واحد للوصول إلى الإنترنت.",
  },
  {
    id: "n267",
    category: CategoryType.NETWORK,
    question: "ما هو Bandwidth؟",
    answer:
      "كمية البيانات التي يمكن نقلها عبر الشبكة في وحدة زمنية (تقاس بـ Mbps).",
  },
  {
    id: "n268",
    category: CategoryType.NETWORK,
    question: "ما هو Latency؟",
    answer: "التأخير الزمني بين إرسال طلب واستلام الرد.",
  },
  {
    id: "n269",
    category: CategoryType.NETWORK,
    question: "ما هو Ping؟",
    answer: "أداة تُستخدم لاختبار الاتصال بين جهازين على الشبكة.",
  },
  {
    id: "n270",
    category: CategoryType.NETWORK,
    question: "ما هو Traceroute؟",
    answer: "أداة تُظهر المسار الذي تسلكه الحزم من المصدر إلى الوجهة.",
  },
  {
    id: "n271",
    category: CategoryType.NETWORK,
    question: "ما هو Subnet Mask؟",
    answer: "يُستخدم لتحديد جزء الشبكة وجزء المضيف من عنوان IP.",
  },
  {
    id: "n272",
    category: CategoryType.NETWORK,
    question: "ما هو Gateway؟",
    answer: "نقية دخول/خروج بين شبكتين مختلفتين (غالبأ عنوان الراوتر).",
  },
  {
    id: "n273",
    category: CategoryType.NETWORK,
    question: "ما هو Broadcast؟",
    answer: "إرسال رسالة إلى جميع الأجهزة في الشبكة المحلية.",
  },
  {
    id: "n274",
    category: CategoryType.NETWORK,
    question: "ما هو Multicast؟",
    answer: "إرسال رسالة إلى مجموعة محددة من الأجهزة.",
  },
  {
    id: "n275",
    category: CategoryType.NETWORK,
    question: "ما هو ARP؟",
    answer:
      "Address Resolution Protocol، يُستخدم للحصول على MAC Address من IP Address.",
  },

  {
    id: "c276",
    category: CategoryType.COMPILER,
    question: "ما هو المترجم (Compiler)؟",
    answer: "برنامج يحوّل الكود المصدري كاملأ إلى كود آلي قبل التنفيذ.",
  },
  {
    id: "c277",
    category: CategoryType.COMPILER,
    question: "ما هو المفسر (Interpreter)؟",
    answer: "برنامج ينفذ الكود سطرأ بسطر دون إنتاج ملف تنفيذي مستقل.",
  },
  {
    id: "c278",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Compilation و Interpretation؟",
    answer:
      "Compilation ينتج ملفاً تنفيذياً سريعاً، بينما Interpretation أبطأ لكنه أكثر مرونة.",
  },
  {
    id: "c279",
    category: CategoryType.COMPILER,
    question: "ما هو Bytecode؟",
    answer:
      "كود وسيط يُنتَج بواسطة بعض المترجمات (مثل Java) ويُنفَّذ بواسطة Virtual Machine.",
  },
  {
    id: "c280",
    category: CategoryType.COMPILER,
    question: "ما هو JIT Compiler؟",
    answer:
      "Just-In-Time Compiler، يُترجم البايت كود إلى كود آلي أثناء التشغيل لتحسين الأداء.",
  },
  {
    id: "c281",
    category: CategoryType.COMPILER,
    question: "ما هي لغة البرمجة عالية المستوى؟",
    answer:
      "لغة قريبة من اللغة البشرية (مثل Python, Java) وسهلة القراءة والكتابة.",
  },
  {
    id: "c282",
    category: CategoryType.COMPILER,
    question: "ما هي لغة البرمجة منخفضة المستوى؟",
    answer: "لغة قريبة من الآلة (مثل Assembly) وتتحكم مباشرة في العتاد.",
  },
  {
    id: "c283",
    category: CategoryType.COMPILER,
    question: "ما هو Syntax؟",
    answer: "قواعد كتابة الكود في لغة برمجة (مثل وضع الفواصل، الأقواس...).",
  },
  {
    id: "c284",
    category: CategoryType.COMPILER,
    question: "ما هو Semantic؟",
    answer:
      "المعنى المنطقي للكود (حتى لو كان الصياغة صحيحة، قد يكون المعنى خاطئاً).",
  },
  {
    id: "c285",
    category: CategoryType.COMPILER,
    question: "ما هو Lexical Analysis؟",
    answer:
      "المرحلة الأولى في الترجمة، حيث يُقسّم الكود إلى وحدات (Tokens) مثل الكلمات المفتاحية، المتغيرات...",
  },
  {
    id: "c286",
    category: CategoryType.COMPILER,
    question: "ما هو Parsing؟",
    answer:
      "تحليل تركيب الجملة البرمجية للتأكد من توافقها مع قواعد اللغة (Syntax Tree).",
  },
  {
    id: "c287",
    category: CategoryType.COMPILER,
    question: "ما هو Abstract Syntax Tree (AST)؟",
    answer: "تمثيل هيكلي للكود المصدري بعد التحليل النحوي.",
  },
  {
    id: "c288",
    category: CategoryType.COMPILER,
    question: "ما هو Linker؟",
    answer:
      "أداة تجمع ملفات الكود الكائني (Object Files) والمكتبات لإنشاء ملف تنفيذي.",
  },
  {
    id: "c289",
    category: CategoryType.COMPILER,
    question: "ما هو Loader؟",
    answer: "برنامج يحمّل الملف التنفيذي في الذاكرة ليتم تشغيله.",
  },
  {
    id: "c290",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Source Code و Object Code؟",
    answer:
      "Source Code مكتوب بلغة بشرية، Object Code هو الكود الآلي الناتج بعد الترجمة.",
  },
  {
    id: "c291",
    category: CategoryType.COMPILER,
    question: "ما هو Garbage Collector؟",
    answer:
      "آلية في بعض اللغات (مثل Java, Python) تُحرّر الذاكرة تلقائياً من الكائنات غير المستخدمة.",
  },
  {
    id: "c292",
    category: CategoryType.COMPILER,
    question: "ما هو Type Checking؟",
    answer:
      "عملية التحقق من توافق أنواع البيانات أثناء الترجمة (Static) أو التشغيل (Dynamic).",
  },
  {
    id: "c293",
    category: CategoryType.COMPILER,
    question: "ما هو Error Handling؟",
    answer: "آلية التعامل مع الأخطاء أثناء تنفيذ البرنامج (مثل try/catch).",
  },
  {
    id: "c294",
    category: CategoryType.COMPILER,
    question: "ما هو Runtime؟",
    answer:
      "البيئة التي يُنفَّذ فيها البرنامج، وتشمل المكتبات، الذاكرة، وغيرها.",
  },
  {
    id: "c295",
    category: CategoryType.COMPILER,
    question: "ما هو Library؟",
    answer: "مجموعة من الدوال أو الكلاسات الجاهزة لإعادة الاستخدام.",
  },
  {
    id: "c296",
    category: CategoryType.COMPILER,
    question: "ما هو Framework؟",
    answer:
      "هيكل أساسي يوفر بنية جاهزة لبناء التطبيقات، غالباً يتحكم في سير التنفيذ.",
  },
  {
    id: "c297",
    category: CategoryType.COMPILER,
    question: "ما هو Cross-Compiler؟",
    answer:
      "مترجم يُنتج كوداً آلياً لنظام تشغيل أو معالج مختلف عن النظام الذي يعمل عليه.",
  },
  {
    id: "c298",
    category: CategoryType.COMPILER,
    question: "ما هو Preprocessor؟",
    answer: "أداة تعالج الكود قبل الترجمة (مثل #include في C).",
  },
  {
    id: "c299",
    category: CategoryType.COMPILER,
    question: "ما هو Symbol Table؟",
    answer:
      "هيكل بيانات يحتفظ بمعلومات عن المتغيرات والدوال (الاسم، النوع، النطاق...).",
  },
  {
    id: "c300",
    category: CategoryType.COMPILER,
    question: "ما هو Optimization في المترجمات؟",
    answer:
      "تحسين الكود الناتج لجعله أسرع أو يستهلك ذاكرة أقل دون تغيير سلوكه.",
  },

  // --- المجموعة الرابعة (المضافة حديثاً) ---
  {
    id: "w301",
    category: CategoryType.WEB,
    question: "ما هو HTML؟",
    answer:
      "لغة توصيف النص التشعبي (HyperText Markup Language)، تُستخدم لإنشاء هيكل صفحات الويب.",
  },
  {
    id: "w302",
    category: CategoryType.WEB,
    question: "ما الفرق بين <div> و <span>؟",
    answer:
      "<div> عنصر كتلي (block-level) يُستخدم لتجميع أقسام الصفحة، بينما <span> عنصر داخلي (inline) يُستخدم لتنسيق أجزاء نصية صغيرة.",
  },
  {
    id: "w303",
    category: CategoryType.WEB,
    question: "ما دور CSS في تصميم المواقع؟",
    answer:
      "CSS (Cascading Style Sheets) تُستخدم لتحديد شكل وتنسيق عناصر HTML (الألوان، الخطوط، التخطيط...).",
  },
  {
    id: "w304",
    category: CategoryType.WEB,
    question: "ما هو JavaScript؟",
    answer:
      "لغة برمجة تُستخدم لإضافة تفاعلية ووظائف ديناميكية إلى صفحات الويب.",
  },
  {
    id: "w305",
    category: CategoryType.WEB,
    question: "ما الفرق بين == و === في JavaScript؟",
    answer:
      "== يقارن القيمة بعد التحويل الضمني للنوع، بينما === يقارن القيمة والنوع دون تحويل.",
  },
  {
    id: "w306",
    category: CategoryType.WEB,
    question: "ما هو DOM؟",
    answer:
      "Document Object Model، تمثيل هيكلي لصفحة الويب كشجرة من العقد، يسمح للـ JavaScript بالتفاعل مع محتوى الصفحة.",
  },
  {
    id: "w307",
    category: CategoryType.WEB,
    question: "ما هو AJAX؟",
    answer:
      "تقنية تُستخدم لتحديث جزء من صفحة ويب دون إعادة تحميلها بالكامل، باستخدام XMLHttpRequest أو Fetch API.",
  },
  {
    id: "w308",
    category: CategoryType.WEB,
    question: "ما هو Responsive Web Design؟",
    answer:
      "تصميم يتكيف مع أحجام شاشات مختلفة باستخدام وحدات مرنة (مثل %، rem) وMedia Queries.",
  },
  {
    id: "w309",
    category: CategoryType.WEB,
    question: "ما دور Media Queries في CSS؟",
    answer:
      "تُستخدم لتطبيق أنماط مختلفة بناءً على خصائص الجهاز (مثل العرض، الارتفاع، الاتجاه).",
  },
  {
    id: "w310",
    category: CategoryType.WEB,
    question: "ما هو Bootstrap؟",
    answer: "إطار عمل (Framework) مفتوح المصدر لتصميم مواقع ويب متجاوبة بسرعة.",
  },
  {
    id: "w311",
    category: CategoryType.WEB,
    question: "ما الفرق بين ID و Class في HTML؟",
    answer:
      "ID فريد ويُستخدم لعنصر واحد فقط، بينما يمكن استخدام Class لأكثر من عنصر.",
  },
  {
    id: "w312",
    category: CategoryType.WEB,
    question: "ما هو Semantic HTML؟",
    answer:
      "استخدام عناصر HTML ذات معنى واضح (مثل <header>, <nav>, <article>) لتحسين البنية والوصولية.",
  },
  {
    id: "w313",
    category: CategoryType.WEB,
    question: "ما هو JSON؟",
    answer:
      "JavaScript Object Notation، تنسيق خفيف لتبادل البيانات بين الخادم والعميل.",
  },
  {
    id: "w314",
    category: CategoryType.WEB,
    question: "ما الفرق بين GET و POST في طلبات HTTP؟",
    answer:
      "GET تُرسل البيانات عبر الرابط (URL) وتُستخدم للاستعلام، POST تُرسل البيانات في جسم الطلب وتُستخدم لإرسال بيانات حساسة أو كبيرة.",
  },
  {
    id: "w315",
    category: CategoryType.WEB,
    question: "ما هو REST API؟",
    answer:
      "واجهة برمجية تعتمد على مبادئ REST (Representational State Transfer) لتبادل البيانات عبر HTTP.",
  },
  {
    id: "w316",
    category: CategoryType.WEB,
    question: "ما هو Cookie؟",
    answer:
      "ملف صغير يُخزَّن على جهاز المستخدم لحفظ معلومات الجلسة أو التفضيلات.",
  },
  {
    id: "w317",
    category: CategoryType.WEB,
    question: "ما هو LocalStorage؟",
    answer: "وسيلة لتخزين البيانات في متصفح المستخدم بشكل دائم حتى بعد إغلاقه.",
  },
  {
    id: "w318",
    category: CategoryType.WEB,
    question: "ما الفرق بين SessionStorage و LocalStorage؟",
    answer:
      "SessionStorage يُمسح عند إغلاق التبويب، بينما LocalStorage يبقى حتى يتم حذفه يدويًا.",
  },
  {
    id: "w319",
    category: CategoryType.WEB,
    question: "ما هو Cross-Origin Resource Sharing (CORS)؟",
    answer: "آلية أمان تسمح أو تمنع طلبات HTTP من نطاق مختلف عن النطاق الأصلي.",
  },
  {
    id: "w320",
    category: CategoryType.WEB,
    question: "ما هو Web Server؟",
    answer:
      "برنامج أو جهاز يستضيف صفحات الويب ويُجيب على طلبات العملاء عبر HTTP.",
  },
  {
    id: "w321",
    category: CategoryType.WEB,
    question: "ما هو Frontend؟",
    answer:
      "الجزء المرئي من الموقع الذي يتفاعل معه المستخدم مباشرة (HTML, CSS, JS).",
  },
  {
    id: "w322",
    category: CategoryType.WEB,
    question: "ما هو Backend؟",
    answer:
      "الجزء الخفي من التطبيق المسؤول عن المنطق، قواعد البيانات، ومعالجة الطلبات.",
  },
  {
    id: "w323",
    category: CategoryType.WEB,
    question: "ما هو Framework في تطوير الويب؟",
    answer:
      "مجموعة أدوات ومكتبات تسهّل تطوير التطبيقات (مثل React, Angular, Django).",
  },
  {
    id: "w324",
    category: CategoryType.WEB,
    question: "ما هو Single Page Application (SPA)؟",
    answer:
      "تطبيق ويب يُحمّل صفحة واحدة ثم يُحدّث المحتوى ديناميكياً دون إعادة تحميل.",
  },
  {
    id: "w325",
    category: CategoryType.WEB,
    question: "ما هو HTTPS؟ ولماذا يُستخدم؟",
    answer:
      "نسخة آمنة من HTTP تستخدم التشفير (SSL/TLS) لحماية البيانات أثناء النقل.",
  },

  {
    id: "a326",
    category: CategoryType.ALGO,
    question: "ما هي الخوارزمية؟",
    answer: "سلسلة من الخطوات الواضحة والمحددة لحل مشكلة أو تنفيذ مهمة.",
  },
  {
    id: "a327",
    category: CategoryType.ALGO,
    question: "ما هو التعقيد الزمني (Time Complexity)؟",
    answer:
      "مقياس لكفاءة الخوارزمية من حيث الوقت الذي تستغرقه بناءً على حجم المدخلات.",
  },
  {
    id: "a328",
    category: CategoryType.ALGO,
    question: "ما هو Big O Notation؟",
    answer:
      "تدوين رياضي يُستخدم لوصف الحد الأعلى لتعقيد الخوارزمية (مثل O(n), O(log n)).",
  },
  {
    id: "a329",
    category: CategoryType.ALGO,
    question: "ما الفرق بين المتغير والثابت؟",
    answer:
      "المتغير يمكن تغيير قيمته، بينما الثابت تبقى قيمته ثابتة طوال تنفيذ البرنامج.",
  },
  {
    id: "a330",
    category: CategoryType.ALGO,
    question: "ما هو Loop؟",
    answer: "بنية تحكم تُكرر تنفيذ كتلة من التعليمات حتى يتحقق شرط معين.",
  },
  {
    id: "a331",
    category: CategoryType.ALGO,
    question: "ما الفرق بين for loop و while loop؟",
    answer:
      "for loop تُستخدم عندما يكون عدد التكرارات معروفاً، بينما while loop تُستخدم عندما يعتمد التكرار على شرط منطقي.",
  },
  {
    id: "a332",
    category: CategoryType.ALGO,
    question: "ما هو Recursion؟",
    answer: "دالة تستدعي نفسها لحل مشكلة عن طريق تقسيمها إلى مشاكل أصغر.",
  },
  {
    id: "a333",
    category: CategoryType.ALGO,
    question: "ما هو Array؟",
    answer: "هيكل بيانات يخزن مجموعة من العناصر من نفس النوع في مواقع متتالية.",
  },
  {
    id: "a334",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Array و List؟",
    answer:
      "Array حجمه ثابت، بينما List (مثل ArrayList في Java) حجمه ديناميكي.",
  },
  {
    id: "a335",
    category: CategoryType.ALGO,
    question: "ما هو Stack؟",
    answer: "هيكل بيانات يعمل بمبدأ LIFO (Last In, First Out).",
  },
  {
    id: "a336",
    category: CategoryType.ALGO,
    question: "ما هو Queue؟",
    answer: "هيكل بيانات يعمل بمبدأ FIFO (First In, First Out).",
  },
  {
    id: "a337",
    category: CategoryType.ALGO,
    question: "ما هو Binary Search؟",
    answer:
      "خوارزمية بحث فعالة تعمل على المصفوفات المرتبة بتعقيد زمني O(log n).",
  },
  {
    id: "a338",
    category: CategoryType.ALGO,
    question: "ما هو Bubble Sort؟",
    answer:
      "خوارزمية ترتيب بسيطة تقارن العناصر المجاورة وتبادلهما إذا كانت غير مرتبة.",
  },
  {
    id: "a339",
    category: CategoryType.ALGO,
    question: "ما تعقيد Bubble Sort؟",
    answer: "O(n²) في أسوأ الحالات.",
  },
  {
    id: "a340",
    category: CategoryType.ALGO,
    question: "ما هو Linked List؟",
    answer:
      "هيكل بيانات يتكون من عقد، كل عقدة تحتوي على قيمة ومؤشر للعقدة التالية.",
  },
  {
    id: "a341",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Linear Search و Binary Search؟",
    answer:
      "Linear Search تفحص كل عنصر واحداً تلو الآخر (O(n))، بينما Binary Search تتطلب ترتيباً وتبحث بطريقة ثنائية (O(log n)).",
  },
  {
    id: "a342",
    category: CategoryType.ALGO,
    question: "ما هو Dynamic Programming؟",
    answer:
      "تقنية لحل المشاكل المعقدة بتقسيمها إلى مشاكل فرعية أبسط وتخزين نتائجها لتجنب التكرار.",
  },
  {
    id: "a343",
    category: CategoryType.ALGO,
    question: "ما هو الـ Function؟",
    answer:
      "كتلة من التعليمات تُنفذ عند استدعائها، ويمكن أن تأخذ مدخلات وتعيد مخرجات.",
  },
  {
    id: "a344",
    category: CategoryType.ALGO,
    question: "ما هو Scope في البرمجة؟",
    answer:
      "النطاق الذي تكون فيه المتغيرات مرئية وقابلة للاستخدام (محلي، عام...).",
  },
  {
    id: "a345",
    category: CategoryType.ALGO,
    question: "ما هو الـ Parameter؟ وما الفرق بينه وبين Argument؟",
    answer:
      "Parameter هو المتغير في تعريف الدالة، أما Argument فهو القيمة الفعلية الممررة عند الاستدعاء.",
  },
  {
    id: "a346",
    category: CategoryType.ALGO,
    question: "ما هو الـ Compiler؟",
    answer:
      "برنامج يحوّل الكود المصدري بلغة عالية المستوى إلى كود آلي (Machine Code).",
  },
  {
    id: "a347",
    category: CategoryType.ALGO,
    question: "ما هو الـ Interpreter؟",
    answer: "برنامج ينفذ الكود المصدري سطرأ بسطر دون تحويله بالكامل مسبقاً.",
  },
  {
    id: "a348",
    category: CategoryType.ALGO,
    question: "ما الفرق بين Static Typing و Dynamic Typing؟",
    answer:
      "في Static Typing (مثل Java) يجب تحديد نوع المتغير عند التصريح، بينما في Dynamic Typing (مثل Python) يُحدد النوع عند التشغيل.",
  },
  {
    id: "a349",
    category: CategoryType.ALGO,
    question: "ما هو الـ Debugging؟",
    answer: "عملية اكتشاف وإصلاح الأخطاء (Bugs) في الكود.",
  },
  {
    id: "a350",
    category: CategoryType.ALGO,
    question: "ما هو الـ Pseudocode؟",
    answer: "وصف غير رسمي للخوارزمية بلغة بسيطة تشبه اللغة البشرية.",
  },

  {
    id: "n351",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول TCP؟",
    answer:
      "Transmission Control Protocol، بروتوكول موثوق يضمن تسليم البيانات بشكل صحيح ومرتب.",
  },
  {
    id: "n352",
    category: CategoryType.NETWORK,
    question: "ما هو بروتوكول UDP؟",
    answer:
      "User Datagram Protocol، بروتوكول غير موثوق لكنه أسرع من TCP ولا يضمن التسليم أو الترتيب.",
  },
  {
    id: "n353",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين TCP و UDP؟",
    answer: "TCP موثوق ومرتب، UDP أسرع لكن غير موثوق.",
  },
  {
    id: "n354",
    category: CategoryType.NETWORK,
    question: "ما هو IP Address؟",
    answer:
      "عنوان رقمي يُعرّف جهازاً على الشبكة (مثل 192.168.1.1 أو 2001:db8::1).",
  },
  {
    id: "n355",
    category: CategoryType.NETWORK,
    question: "ما الفرق بين IPv4 و IPv6؟",
    answer:
      "IPv4 يستخدم 32 بت (≈4 مليار عنوان)، IPv6 يستخدم 128 بت (عدد هائل من العناوين).",
  },
  {
    id: "n356",
    category: CategoryType.NETWORK,
    question: "ما هو DNS؟",
    answer:
      "Domain Name System، يحوّل أسماء النطاقات (مثل google.com) إلى عناوين IP.",
  },
  {
    id: "n357",
    category: CategoryType.NETWORK,
    question: "ما هو DHCP؟",
    answer:
      "Dynamic Host Configuration Protocol، يخصص عناوين IP تلقائياً للأجهزة على الشبكة.",
  },
  {
    id: "n358",
    category: CategoryType.NETWORK,
    question: "ما هو Router؟",
    answer: "جهاز يوجّه حزم البيانات بين شبكات مختلفة.",
  },
  {
    id: "n359",
    category: CategoryType.NETWORK,
    question: "ما هو Switch؟",
    answer:
      "جهاز يربط أجهزة داخل شبكة محلية (LAN) ويُوجّه البيانات بناءً على MAC Address.",
  },
  {
    id: "n360",
    category: CategoryType.NETWORK,
    question: "ما هو MAC Address؟",
    answer:
      "عنوان فريد يُخصَّص لكل واجهة شبكة على مستوى العتاد (مثل 00:1A:2B:3C:4D:5E).",
  },
  {
    id: "n361",
    category: CategoryType.NETWORK,
    question: "ما هو OSI Model؟",
    answer:
      "نموذج مرجعي مكوّن من 7 طبقات لفهم كيفية اتصال الشبكات (الطبقة الفيزيائية، الربط، الشبكة...).",
  },
  {
    id: "n362",
    category: CategoryType.NETWORK,
    question: "اذكر طبقات نموذج OSI من الأعلى إلى الأدنى.",
    answer: "التطبيق → العرض → الجلسة → النقل → الشبكة → الربط → الفيزيائية.",
  },
  {
    id: "n363",
    category: CategoryType.NETWORK,
    question: "ما هي طبقة النقل في OSI؟",
    answer: "الطبقة الرابعة، مسؤولة عن نقل البيانات بين الأجهزة (مثل TCP/UDP).",
  },
  {
    id: "n364",
    category: CategoryType.NETWORK,
    question: "ما هو Port Number؟",
    answer:
      "رقم يُستخدم لتمييز التطبيقات أو الخدمات على نفس الجهاز (مثل 80 لـ HTTP، 443 لـ HTTPS).",
  },
  {
    id: "n365",
    category: CategoryType.NETWORK,
    question: "ما هو Firewall؟",
    answer:
      "نظام أمان يراقب ويتحكم في حركة المرور الواردة والصادرة بناءً على قواعد أمان.",
  },
  {
    id: "n366",
    category: CategoryType.NETWORK,
    question: "ما هو NAT؟",
    answer:
      "Network Address Translation، تقنية تسمح لعدة أجهزة داخل شبكة خاصة باستخدام عنوان IP عام واحد للوصول إلى الإنترنت.",
  },
  {
    id: "n367",
    category: CategoryType.NETWORK,
    question: "ما هو Bandwidth؟",
    answer:
      "كمية البيانات التي يمكن نقلها عبر الشبكة في وحدة زمنية (تقاس بـ Mbps).",
  },
  {
    id: "n368",
    category: CategoryType.NETWORK,
    question: "ما هو Latency؟",
    answer: "التأخير الزمني بين إرسال طلب واستلام الرد.",
  },
  {
    id: "n369",
    category: CategoryType.NETWORK,
    question: "ما هو Ping؟",
    answer: "أداة تُستخدم لاختبار الاتصال بين جهازين على الشبكة.",
  },
  {
    id: "n370",
    category: CategoryType.NETWORK,
    question: "ما هو Traceroute؟",
    answer: "أداة تُظهر المسار الذي تسلكه الحزم من المصدر إلى الوجهة.",
  },
  {
    id: "n371",
    category: CategoryType.NETWORK,
    question: "ما هو Subnet Mask؟",
    answer: "يُستخدم لتحديد جزء الشبكة وجزء المضيف من عنوان IP.",
  },
  {
    id: "n372",
    category: CategoryType.NETWORK,
    question: "ما هو Gateway؟",
    answer: "نقطة دخول/خروج بين شبكتين مختلفتين (غالبأ عنوان الراوتر).",
  },
  {
    id: "n373",
    category: CategoryType.NETWORK,
    question: "ما هو Broadcast؟",
    answer: "إرسال رسالة إلى جميع الأجهزة في الشبكة المحلية.",
  },
  {
    id: "n374",
    category: CategoryType.NETWORK,
    question: "ما هو Multicast؟",
    answer: "إرسال رسالة إلى مجموعة محددة من الأجهزة.",
  },
  {
    id: "n375",
    category: CategoryType.NETWORK,
    question: "ما هو ARP؟",
    answer:
      "Address Resolution Protocol، يُستخدم للحصول على MAC Address من IP Address.",
  },

  {
    id: "c376",
    category: CategoryType.COMPILER,
    question: "ما هو المترجم (Compiler)؟",
    answer: "برنامج يحوّل الكود المصدري كاملأ إلى كود آلي قبل التنفيذ.",
  },
  {
    id: "c377",
    category: CategoryType.COMPILER,
    question: "ما هو المفسر (Interpreter)؟",
    answer: "برنامج ينفذ الكود سطرأ بسطر دون إنتاج ملف تنفيذي مستقل.",
  },
  {
    id: "c378",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Compilation و Interpretation؟",
    answer:
      "Compilation ينتج ملفاً تنفيذياً سريعاً، بينما Interpretation أبطأ لكنه أكثر مرونة.",
  },
  {
    id: "c379",
    category: CategoryType.COMPILER,
    question: "ما هو Bytecode؟",
    answer:
      "كود وسيط يُنتَج بواسطة بعض المترجمات (مثل Java) ويُنفَّذ بواسطة Virtual Machine.",
  },
  {
    id: "c380",
    category: CategoryType.COMPILER,
    question: "ما هو JIT Compiler؟",
    answer:
      "Just-In-Time Compiler، يُترجم البايت كود إلى كود آلي أثناء التشغيل لتحسين الأداء.",
  },
  {
    id: "c381",
    category: CategoryType.COMPILER,
    question: "ما هي لغة البرمجة عالية المستوى؟",
    answer:
      "لغة قريبة من اللغة البشرية (مثل Python, Java) وسهلة القراءة والكتابة.",
  },
  {
    id: "c382",
    category: CategoryType.COMPILER,
    question: "ما هي لغة البرمجة منخفضة المستوى؟",
    answer: "لغة قريبة من الآلة (مثل Assembly) وتتحكم مباشرة في العتاد.",
  },
  {
    id: "c383",
    category: CategoryType.COMPILER,
    question: "ما هو Syntax؟",
    answer: "قواعد كتابة الكود في لغة برمجة (مثل وضع الفواصل، الأقواس...).",
  },
  {
    id: "c384",
    category: CategoryType.COMPILER,
    question: "ما هو Semantic؟",
    answer:
      "المعنى المنطقي للكود (حتى لو كان الصياغة صحيحة، قد يكون المعنى خاطئاً).",
  },
  {
    id: "c385",
    category: CategoryType.COMPILER,
    question: "ما هو Lexical Analysis؟",
    answer:
      "المرحلة الأولى في الترجمة، حيث يُقسّم الكود إلى وحدات (Tokens) مثل الكلمات المفتاحية، المتغيرات...",
  },
  {
    id: "c386",
    category: CategoryType.COMPILER,
    question: "ما هو Parsing؟",
    answer:
      "تحليل تركيب الجملة البرمجية للتأكد من توافقها مع قواعد اللغة (Syntax Tree).",
  },
  {
    id: "c387",
    category: CategoryType.COMPILER,
    question: "ما هو Abstract Syntax Tree (AST)؟",
    answer: "تمثيل هيكلي للكود المصدري بعد التحليل النحوي.",
  },
  {
    id: "c388",
    category: CategoryType.COMPILER,
    question: "ما هو Linker؟",
    answer:
      "أداة تجمع ملفات الكود الكائني (Object Files) والمكتبات لإنشاء ملف تنفيذي.",
  },
  {
    id: "c389",
    category: CategoryType.COMPILER,
    question: "ما هو Loader؟",
    answer: "برنامج يحمّل الملف التنفيذي في الذاكرة ليتم تشغيله.",
  },
  {
    id: "c390",
    category: CategoryType.COMPILER,
    question: "ما الفرق بين Source Code و Object Code؟",
    answer:
      "Source Code مكتوب بلغة بشرية، Object Code هو الكود الآلي الناتج بعد الترجمة.",
  },
  {
    id: "c391",
    category: CategoryType.COMPILER,
    question: "ما هو Garbage Collector؟",
    answer:
      "آلية في بعض اللغات (مثل Java, Python) تُحرّر الذاكرة تلقائياً من الكائنات غير المستخدمة.",
  },
  {
    id: "c392",
    category: CategoryType.COMPILER,
    question: "ما هو Type Checking؟",
    answer:
      "عملية التحقق من توافق أنواع البيانات أثناء الترجمة (Static) أو التشغيل (Dynamic).",
  },
  {
    id: "c393",
    category: CategoryType.COMPILER,
    question: "ما هو Error Handling؟",
    answer: "آلية التعامل مع الأخطاء أثناء تنفيذ البرنامج (مثل try/catch).",
  },
  {
    id: "c394",
    category: CategoryType.COMPILER,
    question: "ما هو Runtime؟",
    answer:
      "البيئة التي يُنفَّذ فيها البرنامج، وتشمل المكتبات، الذاكرة، وغيرها.",
  },
  {
    id: "c395",
    category: CategoryType.COMPILER,
    question: "ما هو Library؟",
    answer: "مجموعة من الدوال أو الكلاسات الجاهزة لإعادة الاستخدام.",
  },
  {
    id: "c396",
    category: CategoryType.COMPILER,
    question: "ما هو Framework؟",
    answer:
      "هيكل أساسي يوفر بنية جاهزة لبناء التطبيقات، غالبأ يتحكم في سير التنفيذ.",
  },
  {
    id: "c397",
    category: CategoryType.COMPILER,
    question: "ما هو Cross-Compiler؟",
    answer:
      "مترجم يُنتج كوداً آلياً لنظام تشغيل أو معالج مختلف عن النظام الذي يعمل عليه.",
  },
  {
    id: "c398",
    category: CategoryType.COMPILER,
    question: "ما هو Preprocessor؟",
    answer: "أداة تعالج الكود قبل الترجمة (مثل #include في C).",
  },
  {
    id: "c399",
    category: CategoryType.COMPILER,
    question: "ما هو Symbol Table؟",
    answer:
      "هيكل بيانات يحتفظ بمعلومات عن المتغيرات والدوال (الاسم، النوع، النطاق...).",
  },
  {
    id: "c400",
    category: CategoryType.COMPILER,
    question: "ما هو Optimization في المترجمات؟",
    answer:
      "تحسين الكود الناتج لجعله أسرع أو يستهلك ذاكرة أقل دون تغيير سلوكه.",
  },

  // --- الاختبار النهائي (Final Exam) ---
  {
    id: "f1",
    category: CategoryType.FINAL,
    question:
      "Machine that places the request to access the data is generally called as...",
    answer: "client machine",
    options: [
      "request machine",
      "client machine",
      "database server",
      "server machine",
    ],
    explanation: "الجهاز الذي يرسل الطلب للوصول إلى البيانات يسمى جهاز العميل",
  },
  {
    id: "f2",
    category: CategoryType.FINAL,
    question: "What is edge computing's role in cloud computing?",
    answer:
      "Edge computing is the clouds silver lining -- or the edge of the cloud",
    options: [
      "Edge computing could act as an alternative to cloud computing",
      "They are unrelated",
      "Edge computing is the clouds silver lining -- or the edge of the cloud",
      "They are the same",
    ],
    explanation: "الحوسبة الطرفية تعتبر امتداداً أو حافة للسحابة",
  },
  {
    id: "f3",
    category: CategoryType.FINAL,
    question:
      "A ________ is the client application request to retrieve data from a database or legacy API's.",
    answer: "GraphQL query",
    options: [
      "GraphQL query",
      "GraphQL resolvers",
      "both GraphQL resolvers and GraphQL schema",
      "GraphQL schema",
    ],
    explanation: "استعلام GraphQL هو طلب تطبيق العميل لاسترداد البيانات",
  },
  {
    id: "f4",
    category: CategoryType.FINAL,
    question: "RESTful services are a part of ________ architecture.",
    answer: "Resource based",
    options: ["Layered", "Object based", "Event based", "Resource based"],
    explanation: "خدمات REST تعتمد على هيكلية الموارد",
  },
  {
    id: "f6",
    category: CategoryType.FINAL,
    question:
      "The ability to invoke a RESTful method multiple times without changing the state of the server on subsequent invocations is known as...",
    answer: "Idempotence",
    options: ["Statefulness", "Immutability", "Uniformity", "Idempotence"],
    explanation:
      "Idempotence تعني القدرة على استدعاء الطريقة عدة مرات دون تغيير حالة الخادم",
  },
  {
    id: "f7",
    category: CategoryType.FINAL,
    question: "Edge computing expected to improve?",
    answer: "both a and b",
    options: [
      "None of the mentioned",
      "both a and b",
      "b. save bandwidth",
      "a. response times",
    ],
    explanation: "الحوسبة الطرفية تحسن زمن الاستجابة وتوفر في النطاق الترددي",
  },
  {
    id: "f8",
    category: CategoryType.FINAL,
    question: "Does IOT gateway provide security for the network?",
    answer: "True",
    options: [
      "Both of the mentioned",
      "False",
      "None of the mentioned",
      "True",
    ],
    explanation: "نعم، توفر بوابة IOT الأمان للشبكة",
  },
  {
    id: "f11",
    category: CategoryType.FINAL,
    question:
      "If timestamps of two events are same, then the events are ________.",
    answer: "concurrent",
    options: ["monotonic", "non-concurrent", "non-monotonic", "concurrent"],
    explanation: "إذا كان طابع الوقت لحدثين هو نفسه، فإنهما متزامنان",
  },
  {
    id: "f12",
    category: CategoryType.FINAL,
    question: "What is the full form of the MQTT?",
    answer: "Message Queue Telemetry Transport",
    options: [
      "Message Queue Telemetry Transport",
      "Message Queue Telemetry Things",
      "Multi-Queue Telemetry Things",
      "Multiple Queue Telemetry Things",
    ],
    explanation: "MQTT تعني Message Queue Telemetry Transport",
  },
  {
    id: "f13",
    category: CategoryType.FINAL,
    question: "Which architectures are reliant on middleware?",
    answer: "Distributed component",
    options: [
      "client - server",
      "Peer-to-peer",
      "Master-slave",
      "Distributed component",
    ],
    explanation:
      "البنية المعتمدة على المكونات الموزعة تعتمد بشكل أساسي على البرمجيات الوسيطة",
  },
  {
    id: "f14",
    category: CategoryType.FINAL,
    question: "Kafka maintains feeds of messages in categories called...",
    answer: "Topics",
    options: ["Chunks", "Topics", "messages", "domains"],
    explanation: "كافكا يحتفظ برسائل في فئات تسمى المواضيع (Topics)",
  },
  {
    id: "f15",
    category: CategoryType.FINAL,
    question: "What is IoT?",
    answer: "network of physical objects embedded with sensors",
    options: [
      "network of objects in the ring structure",
      "network of physical objects embedded with sensors",
      "network of virtual objects",
      "network of sensors",
    ],
    explanation:
      "إنترنت الأشياء هو شبكة من الأشياء الفيزيائية المدمجة مع أجهزة استشعار",
  },
  {
    id: "f16",
    category: CategoryType.FINAL,
    question:
      "________ is used to provide a partial ordering of events with minimal overhead.",
    answer: "Lamport algorithm",
    options: [
      "Passive time server algorithm",
      "Token Based algorithm",
      "Lamport algorithm",
      "Ring Based algorithm",
    ],
    explanation: "خوارزمية لامبورت تستخدم لتوفير ترتيب جزئي للأحداث بأقل جهد",
  },
  {
    id: "f17",
    category: CategoryType.FINAL,
    question: "What is the component of an IoT system that executes a program?",
    answer: "A microcontroller",
    options: [
      "A digital to analog converter",
      "A sensor",
      "An actuator",
      "A microcontroller",
    ],
    explanation: "المتحكم الدقيق هو المكون الذي ينفذ البرنامج في نظام IoT",
  },
  {
    id: "f18",
    category: CategoryType.FINAL,
    question:
      "A distributed system is a collection of ________ computing elements that appears to its users as a single coherent system.",
    answer: "Autonomous",
    options: [
      "Autonomous",
      "None of the mentioned",
      "All of the mentioned",
      "Dependent",
    ],
    explanation: "النظام الموزع هو مجموعة من العناصر الحاسوبية المستقلة",
  },
  {
    id: "f19",
    category: CategoryType.FINAL,
    question:
      "Peer X is being choked by Peer Y in a Bittorrent network. Which of the following is true?",
    answer: "Peer X cannot download from Peer Y",
    options: [
      "Peer X cannot upload to Peer Y",
      "Peer Y cannot download from Peer X",
      "Peer X cannot download from Peer Y",
      "Peer X can download from Peer Y",
    ],
    explanation: "عندما يقوم Y بـ 'خنق' X، فإنه يرفض إرسال البيانات إليه",
  },
];
