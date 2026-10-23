export const questions = [
  {
    id: 1,
    skillArea: "cloud-concepts",
    topic: "Shared Responsibility",
    difficulty: "Easy",
    question:
      "In a cloud environment, which responsibility always remains with the customer?",
    options: [
      "Securing the physical datacenter",
      "Protecting account credentials and data",
      "Replacing failed server hardware",
      "Maintaining datacenter cooling systems",
    ],
    correctAnswer: 1,
    explanation:
      "Customers remain responsible for their identities, credentials, access decisions, and data. The cloud provider manages the physical datacenter and hardware.",
    wrongAnswerHint:
      "Think about what the customer still controls even when Microsoft manages the physical infrastructure.",
  },
  {
    id: 2,
    skillArea: "cloud-concepts",
    topic: "Cloud Models",
    difficulty: "Easy",
    question:
      "Which cloud model combines an organization's private environment with public cloud services?",
    options: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Serverless cloud",
    ],
    correctAnswer: 2,
    explanation:
      "A hybrid cloud combines private infrastructure with public cloud resources and services.",
    wrongAnswerHint:
      "Look for the model that connects two different environments.",
  },
  {
    id: 3,
    skillArea: "cloud-concepts",
    topic: "Horizontal Scaling",
    difficulty: "Easy",
    question:
      "A web application needs more capacity, so two additional virtual machines are added. What type of scaling is this?",
    options: [
      "Scaling up",
      "Scaling down",
      "Scaling out",
      "Vertical scaling",
    ],
    correctAnswer: 2,
    explanation:
      "Scaling out means adding more instances, such as additional virtual machines.",
    wrongAnswerHint:
      "The number of machines increased rather than the power of one machine.",
  },
  {
    id: 4,
    skillArea: "cloud-concepts",
    topic: "PaaS",
    difficulty: "Medium",
    question:
      "A development team wants to deploy an application without managing the operating system. Which cloud service model best fits?",
    options: [
      "IaaS",
      "PaaS",
      "Private cloud",
      "On-premises",
    ],
    correctAnswer: 1,
    explanation:
      "Platform as a Service manages much of the underlying infrastructure and operating system while developers focus on their application and data.",
    wrongAnswerHint:
      "Choose the model where the provider manages the operating system.",
  },
  {
    id: 5,
    skillArea: "cloud-concepts",
    topic: "Capital and Operational Expense",
    difficulty: "Easy",
    question:
      "Which example is most closely associated with capital expenditure?",
    options: [
      "Paying monthly for cloud storage",
      "Purchasing physical servers for a datacenter",
      "Paying for compute by the hour",
      "Scaling resources during a busy week",
    ],
    correctAnswer: 1,
    explanation:
      "Capital expenditure usually involves large upfront purchases of assets such as physical servers and datacenter equipment.",
    wrongAnswerHint:
      "Look for the large upfront purchase rather than ongoing usage charges.",
  },
  {
    id: 6,
    skillArea: "cloud-concepts",
    topic: "Serverless",
    difficulty: "Easy",
    question:
      "What is a key benefit of serverless computing?",
    options: [
      "Customers must maintain physical servers",
      "Customers manage every operating system update",
      "Code can run without the customer managing servers",
      "Applications cannot scale automatically",
    ],
    correctAnswer: 2,
    explanation:
      "Serverless services allow developers to run code without managing the underlying servers.",
    wrongAnswerHint:
      "Think about what the word serverless means from the customer's management perspective.",
  },
  {
    id: 7,
    skillArea: "cloud-concepts",
    topic: "High Availability",
    difficulty: "Medium",
    question:
      "Which cloud benefit focuses on keeping an application accessible even when failures occur?",
    options: [
      "High availability",
      "Capital expenditure",
      "Manual provisioning",
      "Data classification",
    ],
    correctAnswer: 0,
    explanation:
      "High availability is the ability of a service or application to remain accessible when failures occur.",
    wrongAnswerHint:
      "Choose the option related to uptime and continued access.",
  },
  {
    id: 8,
    skillArea: "cloud-concepts",
    topic: "Elasticity",
    difficulty: "Medium",
    question:
      "An online store automatically adds resources when traffic increases and removes them when demand falls. Which cloud concept does this describe?",
    options: [
      "Elasticity",
      "Capital expenditure",
      "Private networking",
      "Authentication",
    ],
    correctAnswer: 0,
    explanation:
      "Elasticity means resources can adjust to changes in demand, often automatically.",
    wrongAnswerHint:
      "The key clue is automatic adjustment as demand rises and falls.",
  },
  {
    id: 9,
    skillArea: "cloud-concepts",
    topic: "SaaS",
    difficulty: "Easy",
    question:
      "Which service model provides a complete application that users access without managing the underlying infrastructure?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Hybrid cloud",
    ],
    correctAnswer: 2,
    explanation:
      "Software as a Service provides a complete application that is operated by the provider.",
    wrongAnswerHint:
      "Choose the model where users mainly consume the finished software.",
  },
  {
    id: 10,
    skillArea: "cloud-concepts",
    topic: "Consumption-Based Pricing",
    difficulty: "Easy",
    question:
      "What does a consumption-based cloud pricing model generally mean?",
    options: [
      "Pay a fixed price forever",
      "Pay based on the resources you use",
      "Buy all hardware before using the cloud",
      "Pay only for software licenses",
    ],
    correctAnswer: 1,
    explanation:
      "Consumption-based pricing means charges are generally based on the resources or services consumed.",
    wrongAnswerHint:
      "Think of utility-style billing.",
  },
  {
    id: 11,
    skillArea: "architecture-services",
    topic: "Azure Regions",
    difficulty: "Easy",
    question:
      "What is an Azure region?",
    options: [
      "A single virtual machine",
      "A geographic area containing one or more datacenters",
      "A billing account",
      "A user security group",
    ],
    correctAnswer: 1,
    explanation:
      "An Azure region is a geographic area containing one or more Azure datacenters.",
    wrongAnswerHint:
      "Think geography and datacenters.",
  },
  {
    id: 12,
    skillArea: "architecture-services",
    topic: "Availability Zones",
    difficulty: "Medium",
    question:
      "What is the main purpose of Azure availability zones?",
    options: [
      "To provide physically separate locations within a region",
      "To organize users into security groups",
      "To calculate monthly costs",
      "To replace subscriptions",
    ],
    correctAnswer: 0,
    explanation:
      "Availability zones are physically separate groups of datacenters within an Azure region and can improve resilience.",
    wrongAnswerHint:
      "Think about protection from a datacenter-level failure.",
  },
  {
    id: 13,
    skillArea: "architecture-services",
    topic: "Resource Groups",
    difficulty: "Easy",
    question:
      "What is the main purpose of an Azure resource group?",
    options: [
      "Store user passwords",
      "Act as a logical container for related Azure resources",
      "Replace an Azure subscription",
      "Provide internet connectivity",
    ],
    correctAnswer: 1,
    explanation:
      "A resource group is a logical container used to organize and manage related Azure resources.",
    wrongAnswerHint:
      "Think organization and management of resources.",
  },
  {
    id: 14,
    skillArea: "architecture-services",
    topic: "Azure Hierarchy",
    difficulty: "Medium",
    question:
      "Which Azure hierarchy is listed from highest level to lower level?",
    options: [
      "Resource > Subscription > Resource Group > Management Group",
      "Management Group > Subscription > Resource Group > Resource",
      "Subscription > Resource > Management Group > Resource Group",
      "Resource Group > Management Group > Resource > Subscription",
    ],
    correctAnswer: 1,
    explanation:
      "The hierarchy is Management Group, Subscription, Resource Group, and then Resource.",
    wrongAnswerHint:
      "Start with the level that can contain multiple subscriptions.",
  },
  {
    id: 15,
    skillArea: "architecture-services",
    topic: "Virtual Machines",
    difficulty: "Easy",
    question:
      "Which Azure compute option gives the customer the most control over the guest operating system?",
    options: [
      "Azure Virtual Machines",
      "Azure Functions",
      "Software as a Service",
      "Serverless database",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Virtual Machines provide Infrastructure as a Service and allow customers to manage the guest operating system.",
    wrongAnswerHint:
      "Choose the IaaS compute option.",
  },
  {
    id: 16,
    skillArea: "architecture-services",
    topic: "Containers",
    difficulty: "Medium",
    question:
      "Which statement best describes containers?",
    options: [
      "They always require a separate physical server",
      "They package applications and dependencies in portable isolated environments",
      "They are used only for file storage",
      "They replace user identities",
    ],
    correctAnswer: 1,
    explanation:
      "Containers package an application and its dependencies into portable isolated environments.",
    wrongAnswerHint:
      "Think application packaging and portability.",
  },
  {
    id: 17,
    skillArea: "architecture-services",
    topic: "Azure Functions",
    difficulty: "Easy",
    question:
      "Which Azure service is designed for event-driven serverless code execution?",
    options: [
      "Azure Virtual Network",
      "Azure Functions",
      "Azure Files",
      "Azure Policy",
    ],
    correctAnswer: 1,
    explanation:
      "Azure Functions is designed to run event-driven code without requiring customers to manage servers.",
    wrongAnswerHint:
      "Choose the serverless compute service.",
  },
  {
    id: 18,
    skillArea: "architecture-services",
    topic: "Virtual Networks",
    difficulty: "Easy",
    question:
      "What is an Azure Virtual Network primarily used for?",
    options: [
      "Creating a private logical network in Azure",
      "Managing billing invoices",
      "Creating user passwords",
      "Writing infrastructure templates",
    ],
    correctAnswer: 0,
    explanation:
      "An Azure Virtual Network provides private networking for Azure resources.",
    wrongAnswerHint:
      "Think networking rather than identity or billing.",
  },
  {
    id: 19,
    skillArea: "architecture-services",
    topic: "Subnets",
    difficulty: "Easy",
    question:
      "What is a subnet in Azure?",
    options: [
      "A smaller IP address range inside a virtual network",
      "A type of Azure subscription",
      "A cost-management report",
      "A storage redundancy option",
    ],
    correctAnswer: 0,
    explanation:
      "A subnet divides an Azure Virtual Network into smaller IP address ranges.",
    wrongAnswerHint:
      "Think of dividing a network into smaller sections.",
  },
  {
    id: 20,
    skillArea: "architecture-services",
    topic: "VNet Peering",
    difficulty: "Medium",
    question:
      "What does Azure Virtual Network peering allow?",
    options: [
      "Two virtual networks to communicate privately",
      "Two users to share one password",
      "Resources to avoid all charges",
      "A storage account to become a subscription",
    ],
    correctAnswer: 0,
    explanation:
      "VNet peering connects Azure virtual networks so resources can communicate privately.",
    wrongAnswerHint:
      "The key word is peering between networks.",
  },
  {
    id: 21,
    skillArea: "architecture-services",
    topic: "VPN Gateway",
    difficulty: "Medium",
    question:
      "Which service can securely connect an on-premises network to Azure over the public internet?",
    options: [
      "Azure VPN Gateway",
      "Azure Blob Storage",
      "Azure Policy",
      "Azure Advisor",
    ],
    correctAnswer: 0,
    explanation:
      "Azure VPN Gateway provides encrypted connectivity between Azure and other networks over the public internet.",
    wrongAnswerHint:
      "Look for the service that uses VPN technology.",
  },
  {
    id: 22,
    skillArea: "architecture-services",
    topic: "ExpressRoute",
    difficulty: "Medium",
    question:
      "A company wants a private dedicated connection from its network to Azure that does not travel over the public internet. Which service should it consider?",
    options: [
      "Azure ExpressRoute",
      "Azure Functions",
      "Azure Policy",
      "Azure Queue Storage",
    ],
    correctAnswer: 0,
    explanation:
      "Azure ExpressRoute provides private connectivity between an organization's network and Microsoft cloud services through a connectivity provider.",
    wrongAnswerHint:
      "Choose the private dedicated connectivity option rather than an internet-based VPN.",
  },
  {
    id: 23,
    skillArea: "architecture-services",
    topic: "Blob Storage",
    difficulty: "Easy",
    question:
      "Which Azure storage service is best suited for large amounts of unstructured data such as images and videos?",
    options: [
      "Azure Blob Storage",
      "Azure Files",
      "Azure Queue Storage",
      "Azure DNS",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Blob Storage is object storage designed for large amounts of unstructured data.",
    wrongAnswerHint:
      "Think object storage.",
  },
  {
    id: 24,
    skillArea: "architecture-services",
    topic: "Azure Files",
    difficulty: "Easy",
    question:
      "Which Azure service provides managed file shares that can be accessed using common file-sharing protocols?",
    options: [
      "Azure Files",
      "Azure Functions",
      "Azure Policy",
      "Azure Advisor",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Files provides managed cloud file shares.",
    wrongAnswerHint:
      "Choose the storage option designed specifically for shared files.",
  },
  {
    id: 25,
    skillArea: "architecture-services",
    topic: "Azure Disk Storage",
    difficulty: "Medium",
    question:
      "Which Azure storage type is commonly used as persistent disks for Azure virtual machines?",
    options: [
      "Azure Disk Storage",
      "Azure Queue Storage",
      "Azure Table Storage",
      "Azure Policy",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Disk Storage provides managed disks commonly used by Azure virtual machines.",
    wrongAnswerHint:
      "Think of a disk attached to a virtual machine.",
  },
  {
    id: 26,
    skillArea: "architecture-services",
    topic: "Storage Redundancy",
    difficulty: "Medium",
    question:
      "Which storage redundancy approach keeps additional copies of data in a secondary Azure region?",
    options: [
      "Local redundancy only",
      "Geo-redundancy",
      "Single-instance storage",
      "Manual tagging",
    ],
    correctAnswer: 1,
    explanation:
      "Geo-redundant storage copies data to a secondary region to provide additional protection.",
    wrongAnswerHint:
      "The clue is a copy in another region.",
  },
  {
    id: 27,
    skillArea: "architecture-services",
    topic: "Microsoft Entra ID",
    difficulty: "Easy",
    question:
      "What is Microsoft Entra ID primarily used for?",
    options: [
      "Identity and access management",
      "Virtual machine disk storage",
      "Network cabling",
      "Calculating Azure prices",
    ],
    correctAnswer: 0,
    explanation:
      "Microsoft Entra ID is Microsoft's cloud identity and access management service.",
    wrongAnswerHint:
      "Think users, identities, authentication, and access.",
  },
  {
    id: 28,
    skillArea: "architecture-services",
    topic: "MFA and Conditional Access",
    difficulty: "Medium",
    question:
      "Which statement correctly describes the difference between MFA and Conditional Access?",
    options: [
      "MFA verifies identity using multiple factors, while Conditional Access applies access rules based on conditions",
      "MFA manages costs, while Conditional Access manages storage",
      "MFA creates virtual networks, while Conditional Access creates subnets",
      "They are exactly the same feature",
    ],
    correctAnswer: 0,
    explanation:
      "MFA requires multiple authentication factors. Conditional Access evaluates conditions and can require controls such as MFA.",
    wrongAnswerHint:
      "One is an authentication method; the other is an access policy engine.",
  },
  {
    id: 29,
    skillArea: "management-governance",
    topic: "Azure Cost Management",
    difficulty: "Easy",
    question:
      "Which Azure tool helps organizations analyze and manage their Azure spending?",
    options: [
      "Azure Cost Management",
      "Azure Functions",
      "Azure Files",
      "Azure DNS",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Cost Management provides tools for analyzing costs, budgets, and spending trends.",
    wrongAnswerHint:
      "Choose the service specifically focused on costs.",
  },
  {
    id: 30,
    skillArea: "management-governance",
    topic: "Tags",
    difficulty: "Easy",
    question:
      "What is a common use of Azure tags?",
    options: [
      "Classifying and organizing resources with metadata",
      "Encrypting network traffic",
      "Providing a dedicated network connection",
      "Replacing resource groups",
    ],
    correctAnswer: 0,
    explanation:
      "Tags are name-value metadata that help organize, categorize, and report on Azure resources.",
    wrongAnswerHint:
      "Think labels such as Department=Finance or Environment=Production.",
  },
  {
    id: 31,
    skillArea: "management-governance",
    topic: "Azure Policy",
    difficulty: "Medium",
    question:
      "Which Azure service can enforce organizational rules such as allowing resources only in approved regions?",
    options: [
      "Azure Policy",
      "Azure RBAC",
      "Azure Files",
      "Azure Functions",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Policy evaluates resources against organizational standards and can enforce allowed configurations.",
    wrongAnswerHint:
      "Think configuration rules rather than user permissions.",
  },
  {
    id: 32,
    skillArea: "management-governance",
    topic: "Resource Locks",
    difficulty: "Easy",
    question:
      "What is the purpose of an Azure resource lock?",
    options: [
      "Protect a resource from accidental deletion or modification",
      "Authenticate users",
      "Calculate cloud prices",
      "Create virtual networks",
    ],
    correctAnswer: 0,
    explanation:
      "Resource locks can help prevent accidental deletion or modification of important Azure resources.",
    wrongAnswerHint:
      "Think protection against administrative mistakes.",
  },
  {
    id: 33,
    skillArea: "management-governance",
    topic: "Infrastructure as Code",
    difficulty: "Medium",
    question:
      "What is a key benefit of Infrastructure as Code?",
    options: [
      "Resources can be deployed consistently using reusable definitions",
      "It removes the need for all security controls",
      "It guarantees zero Azure costs",
      "It replaces user authentication",
    ],
    correctAnswer: 0,
    explanation:
      "Infrastructure as Code allows infrastructure to be defined and deployed consistently using files or templates.",
    wrongAnswerHint:
      "Think repeatable and automated deployments.",
  },
  {
    id: 34,
    skillArea: "management-governance",
    topic: "Azure Resource Manager",
    difficulty: "Medium",
    question:
      "What is Azure Resource Manager primarily responsible for?",
    options: [
      "Providing the management layer for Azure resources",
      "Serving only static website files",
      "Providing physical datacenter security",
      "Replacing Microsoft Entra ID",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Resource Manager is the management layer used to deploy, manage, and organize Azure resources.",
    wrongAnswerHint:
      "Think deployment and management of Azure resources.",
  },
  {
    id: 35,
    skillArea: "management-governance",
    topic: "Azure Arc",
    difficulty: "Medium",
    question:
      "What is Azure Arc designed to help organizations manage?",
    options: [
      "Resources across Azure, on-premises, and other environments",
      "Only Azure storage accounts",
      "Only Microsoft 365 email",
      "Only Azure billing invoices",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Arc extends Azure management and governance capabilities to resources outside Azure.",
    wrongAnswerHint:
      "Think hybrid and multicloud management.",
  },
  {
    id: 36,
    skillArea: "management-governance",
    topic: "Azure Monitor",
    difficulty: "Easy",
    question:
      "Which Azure service collects and analyzes telemetry such as metrics and logs?",
    options: [
      "Azure Monitor",
      "Azure Policy",
      "Azure ExpressRoute",
      "Azure Files",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Monitor collects, analyzes, and helps act on telemetry from Azure and other environments.",
    wrongAnswerHint:
      "Think operational monitoring data.",
  },
  {
    id: 37,
    skillArea: "management-governance",
    topic: "Azure Advisor",
    difficulty: "Easy",
    question:
      "Which Azure service provides personalized recommendations to improve cost, reliability, security, performance, and operational excellence?",
    options: [
      "Azure Advisor",
      "Azure DNS",
      "Azure Files",
      "Azure Functions",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Advisor analyzes deployed resources and provides recommendations across several optimization categories.",
    wrongAnswerHint:
      "Think recommendations rather than raw monitoring telemetry.",
  },
  {
    id: 38,
    skillArea: "management-governance",
    topic: "Azure Service Health",
    difficulty: "Easy",
    question:
      "Which service helps you understand Azure service issues, planned maintenance, and health advisories that may affect your resources?",
    options: [
      "Azure Service Health",
      "Azure Blob Storage",
      "Microsoft Entra ID",
      "Azure Policy",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Service Health provides personalized information about Azure service issues, planned maintenance, and health advisories.",
    wrongAnswerHint:
      "Think Microsoft-side service incidents and maintenance.",
  },
  {
    id: 39,
    skillArea: "management-governance",
    topic: "Application Insights",
    difficulty: "Medium",
    question:
      "Which Azure monitoring feature is especially useful for understanding application performance and usage?",
    options: [
      "Application Insights",
      "Azure Policy",
      "Resource locks",
      "ExpressRoute",
    ],
    correctAnswer: 0,
    explanation:
      "Application Insights is an application performance monitoring feature that helps analyze application behavior and performance.",
    wrongAnswerHint:
      "Think application telemetry.",
  },
  {
    id: 40,
    skillArea: "management-governance",
    topic: "Log Analytics",
    difficulty: "Medium",
    question:
      "What is Log Analytics commonly used for in Azure?",
    options: [
      "Querying and analyzing collected log data",
      "Creating physical servers",
      "Managing passwords",
      "Providing dedicated network circuits",
    ],
    correctAnswer: 0,
    explanation:
      "Log Analytics lets you query and analyze log data collected by Azure Monitor.",
    wrongAnswerHint:
      "Think searching and analyzing logs.",
  },

  // NEW QUESTIONS 41–50

  {
    id: 41,
    skillArea: "cloud-concepts",
    topic: "Reliability",
    difficulty: "Medium",
    question:
      "Which cloud benefit describes a system's ability to recover from failures and continue operating?",
    options: [
      "Reliability",
      "Capital expenditure",
      "Authentication",
      "Data classification",
    ],
    correctAnswer: 0,
    explanation:
      "Reliability is the ability of a system to recover from failures and continue functioning as designed.",
    wrongAnswerHint:
      "Think resilience and recovery from failure.",
  },
  {
    id: 42,
    skillArea: "cloud-concepts",
    topic: "Predictability",
    difficulty: "Medium",
    question:
      "Which cloud benefit helps organizations better understand expected performance and costs?",
    options: [
      "Predictability",
      "Private networking",
      "Authentication",
      "Physical security",
    ],
    correctAnswer: 0,
    explanation:
      "Predictability helps organizations estimate and understand expected performance and costs.",
    wrongAnswerHint:
      "Think planning and forecasting.",
  },
  {
    id: 43,
    skillArea: "cloud-concepts",
    topic: "Manageability",
    difficulty: "Medium",
    question:
      "Which cloud benefit includes capabilities such as automatically scaling resources and deploying resources through templates or portals?",
    options: [
      "Manageability",
      "Capital expenditure",
      "Physical ownership",
      "Manual networking",
    ],
    correctAnswer: 0,
    explanation:
      "Cloud manageability includes ways to deploy, monitor, configure, and automate resources efficiently.",
    wrongAnswerHint:
      "Think about how easy cloud resources are to administer.",
  },
  {
    id: 44,
    skillArea: "cloud-concepts",
    topic: "Public and Private Cloud",
    difficulty: "Medium",
    question:
      "Which statement about public cloud is correct?",
    options: [
      "The cloud provider owns and operates the underlying shared infrastructure",
      "Every customer owns the physical datacenter",
      "Public cloud means all customer data is publicly visible",
      "Public cloud cannot scale on demand",
    ],
    correctAnswer: 0,
    explanation:
      "In a public cloud, the provider owns and operates the shared cloud infrastructure. Public cloud does not mean customer data is public.",
    wrongAnswerHint:
      "Separate ownership of the infrastructure from visibility of customer data.",
  },
  {
    id: 45,
    skillArea: "architecture-services",
    topic: "Azure Defender for Cloud",
    difficulty: "Medium",
    question:
      "Which Azure service helps improve security posture and provides security recommendations for cloud resources?",
    options: [
      "Microsoft Defender for Cloud",
      "Azure Files",
      "Azure Cost Management",
      "Azure ExpressRoute",
    ],
    correctAnswer: 0,
    explanation:
      "Microsoft Defender for Cloud helps organizations assess security posture and provides recommendations for improving cloud security.",
    wrongAnswerHint:
      "Choose the service focused on cloud security posture.",
  },
  {
    id: 46,
    skillArea: "management-governance",
    topic: "Microsoft Purview",
    difficulty: "Medium",
    question:
      "Which Microsoft service is associated with data governance, discovery, and understanding data across an organization?",
    options: [
      "Microsoft Purview",
      "Azure Functions",
      "Azure VPN Gateway",
      "Azure Disk Storage",
    ],
    correctAnswer: 0,
    explanation:
      "Microsoft Purview provides capabilities for data governance, discovery, cataloging, and understanding data estates.",
    wrongAnswerHint:
      "Think governance of organizational data.",
  },
  {
    id: 47,
    skillArea: "management-governance",
    topic: "Azure Cloud Shell",
    difficulty: "Easy",
    question:
      "What is Azure Cloud Shell?",
    options: [
      "A browser-accessible command-line environment for managing Azure",
      "A physical server located in your office",
      "A storage redundancy option",
      "A Microsoft Entra authentication method",
    ],
    correctAnswer: 0,
    explanation:
      "Azure Cloud Shell provides a browser-based command-line environment with tools for managing Azure resources.",
    wrongAnswerHint:
      "Think command-line management directly from a browser.",
  },
  {
    id: 48,
    skillArea: "management-governance",
    topic: "Azure CLI and PowerShell",
    difficulty: "Medium",
    question:
      "Which statement correctly compares Azure CLI and Azure PowerShell?",
    options: [
      "Both can be used to manage Azure resources from the command line",
      "Azure CLI is only for storage and PowerShell is only for networking",
      "Neither can automate Azure tasks",
      "Both are graphical-only tools",
    ],
    correctAnswer: 0,
    explanation:
      "Azure CLI and Azure PowerShell are both command-line tools that can manage and automate Azure resources.",
    wrongAnswerHint:
      "Both are management and automation tools.",
  },
  {
    id: 49,
    skillArea: "management-governance",
    topic: "Azure Portal",
    difficulty: "Easy",
    question:
      "What is the Azure portal?",
    options: [
      "A web-based graphical interface for managing Azure resources",
      "A physical networking device",
      "A storage replication method",
      "An Azure region",
    ],
    correctAnswer: 0,
    explanation:
      "The Azure portal is a web-based graphical interface used to create, configure, monitor, and manage Azure resources.",
    wrongAnswerHint:
      "Think graphical browser-based Azure management.",
  },
  {
    id: 50,
    skillArea: "management-governance",
    topic: "Azure Budgets",
    difficulty: "Medium",
    question:
      "What happens when an Azure budget threshold is reached?",
    options: [
      "Azure can generate alerts, but a budget does not automatically stop all resources",
      "All Azure resources are automatically deleted",
      "The subscription is permanently cancelled",
      "All virtual machines are automatically resized",
    ],
    correctAnswer: 0,
    explanation:
      "Azure budgets can generate alerts when spending approaches or exceeds thresholds. A budget by itself does not automatically shut down every Azure resource.",
    wrongAnswerHint:
      "Think monitoring and alerts rather than automatic deletion.",
  },
];

export const quizModes = [
  {
    id: "quick",
    title: "Quick Sprint",
    description:
      "A fast 10-question mixed quiz for focused daily practice.",
    icon: "⚡",
    count: 10,
  },
  {
    id: "cloud",
    title: "Cloud Concepts",
    description:
      "Practice cloud models, benefits, service models, scaling, pricing and shared responsibility.",
    icon: "☁️",
    skillArea: "cloud-concepts",
  },
  {
    id: "architecture",
    title: "Architecture & Services",
    description:
      "Practice Azure regions, compute, networking, storage, identity and security services.",
    icon: "🏗️",
    skillArea: "architecture-services",
  },
  {
    id: "governance",
    title: "Management & Governance",
    description:
      "Practice costs, governance, deployment, management and monitoring tools.",
    icon: "🛡️",
    skillArea: "management-governance",
  },
  {
    id: "full",
    title: "Full Practice",
    description:
      "Take all 50 original CloudSprint questions for a complete practice session.",
    icon: "🏆",
    count: 50,
  },
];

export function getQuestionsBySkillArea(skillArea) {
  return questions.filter(
    (question) => question.skillArea === skillArea
  );
}