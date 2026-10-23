export const studyAreas = [
  {
    id: "cloud-concepts",
    title: "Cloud Concepts",
    shortTitle: "Cloud Concepts",
    weight: "25–30%",
    color: "blue",
    icon: "☁️",
    description:
      "Understand cloud models, shared responsibility, pricing, scalability and service types.",
  },
  {
    id: "architecture-services",
    title: "Azure Architecture & Services",
    shortTitle: "Architecture & Services",
    weight: "35–40%",
    color: "purple",
    icon: "🏗️",
    badge: "Highest Weight",
    description:
      "Learn Azure infrastructure, compute, networking, storage, identity and security.",
  },
  {
    id: "management-governance",
    title: "Azure Management & Governance",
    shortTitle: "Management & Governance",
    weight: "30–35%",
    color: "teal",
    icon: "🛡️",
    description:
      "Understand cost management, governance, deployment and monitoring tools.",
  },
];

export const summaries = [
  {
    id: "cloud-computing",
    area: "cloud-concepts",
    title: "Cloud Computing",
    icon: "☁️",
    meaning:
      "Cloud computing delivers services such as servers, storage, databases and networking over a network instead of requiring you to own all the physical hardware.",
    why:
      "It allows organizations to provision resources quickly, scale when demand changes and pay based on usage.",
    example:
      "A small business can host its website in Azure instead of buying and maintaining its own physical server.",
    remember:
      "Cloud does not mean zero responsibility. Customers still manage important areas such as data, identities and access.",
    confusion:
      "Cloud computing is not the same as simply storing files online. It includes compute, networking, databases, security and many other services.",
    examTip:
      "Look for clues such as rapid provisioning, scalability and consumption-based billing.",
  },

  {
    id: "cloud-models",
    area: "cloud-concepts",
    title: "Public, Private & Hybrid Cloud",
    icon: "🌥️",
    meaning:
      "Public cloud uses provider-owned shared infrastructure, private cloud is dedicated to one organization, and hybrid cloud combines private or on-premises systems with public cloud.",
    why:
      "Different organizations need different levels of control, flexibility and compliance.",
    example:
      "A company keeps a sensitive local database but connects its web application to Azure. That is a hybrid cloud scenario.",
    remember:
      "Public cloud does not mean your data is publicly visible.",
    confusion:
      "Hybrid cloud combines environments. Multi-cloud means using more than one cloud provider.",
    examTip:
      "On-premises plus Azure usually points to hybrid cloud.",
  },

  {
    id: "shared-responsibility",
    area: "cloud-concepts",
    title: "Shared Responsibility",
    icon: "🤝",
    meaning:
      "Microsoft and the customer share responsibility for security and operations depending on the service model being used.",
    why:
      "Knowing who manages each layer is essential when choosing between IaaS, PaaS and SaaS.",
    example:
      "Microsoft replaces a failed physical disk in an Azure datacenter, but the customer patches the guest operating system of an Azure VM.",
    remember:
      "Microsoft manages physical datacenters and hardware. Customers always keep responsibility for their data and access decisions.",
    confusion:
      "Moving to the cloud does not transfer every security responsibility to Microsoft.",
    examTip:
      "If the question asks who patches the guest OS of a VM, the answer is the customer.",
  },

  {
    id: "cloud-economics",
    area: "cloud-concepts",
    title: "Consumption Pricing, CapEx & OpEx",
    icon: "💰",
    meaning:
      "Cloud services often use consumption-based pricing where you pay according to what you use or provision.",
    why:
      "This reduces the need for large upfront hardware purchases and makes spending more flexible.",
    example:
      "A development VM can be stopped when it is not needed to reduce some usage costs.",
    remember:
      "CapEx is large upfront spending. OpEx is ongoing operational spending.",
    confusion:
      "Stopping a VM does not always remove every possible charge because disks or reservations can still cost money.",
    examTip:
      "Pay-as-you-go usually points to consumption-based pricing and OpEx.",
  },

  {
    id: "serverless",
    area: "cloud-concepts",
    title: "Serverless Computing",
    icon: "⚡",
    meaning:
      "Serverless lets you run code without provisioning or maintaining the underlying servers yourself.",
    why:
      "It is useful for event-driven tasks and workloads that need automatic scaling without server administration.",
    example:
      "Azure Functions can run code automatically when a file is uploaded.",
    remember:
      "Servers still exist. The cloud provider manages them for you.",
    confusion:
      "Azure Functions runs code. Logic Apps focuses more on connecting services and automating workflows.",
    examTip:
      "The phrase 'run code when an event happens without managing servers' strongly points to Azure Functions.",
  },

  {
    id: "scaling",
    area: "cloud-concepts",
    title: "Scalability & Elasticity",
    icon: "📈",
    meaning:
      "Scalability changes system capacity. Elasticity means capacity can expand or shrink as demand changes.",
    why:
      "Cloud applications must be able to handle changing traffic without permanently overbuying infrastructure.",
    example:
      "Adding four more web servers during a busy sale is horizontal scaling.",
    remember:
      "Scale up means a bigger machine. Scale out means more machines.",
    confusion:
      "High availability keeps services running during failures. Scalability handles changes in workload demand.",
    examTip:
      "More CPU or RAM on one VM = vertical scaling. More VMs = horizontal scaling.",
  },

  {
    id: "iaas-paas-saas",
    area: "cloud-concepts",
    title: "IaaS vs PaaS vs SaaS",
    icon: "🧩",
    meaning:
      "IaaS gives you infrastructure, PaaS gives you a managed platform, and SaaS gives you a finished application.",
    why:
      "These models determine how much control you have and how much management work the cloud provider handles.",
    example:
      "Azure Virtual Machines are IaaS, Azure App Service and Azure SQL Database are common PaaS examples, and Microsoft 365 is SaaS.",
    remember:
      "IaaS gives the most infrastructure control. SaaS gives the least infrastructure management work.",
    confusion:
      "The biggest difference is responsibility. With IaaS you manage the guest OS, while PaaS removes that responsibility.",
    examTip:
      "Manage the OS = IaaS. Host your app without managing servers = PaaS. Use a finished application = SaaS.",
  },

  {
    id: "regions-zones",
    area: "architecture-services",
    title: "Regions, Zones & Region Pairs",
    icon: "🌍",
    meaning:
      "A region is a geographic Azure area. Availability zones are separate datacenter groups inside a region. Region pairs connect certain regions strategically.",
    why:
      "These concepts help design systems for availability, latency and disaster recovery.",
    example:
      "Running application instances across multiple availability zones can reduce the impact of one datacenter-level failure.",
    remember:
      "Zone = separate failure location inside a region.",
    confusion:
      "Region pairs do not automatically replicate all of your data or applications.",
    examTip:
      "Inside one region = availability zones. Across regions = think region pairs or geo-redundancy.",
  },

  {
    id: "resource-hierarchy",
    area: "architecture-services",
    title: "Azure Resource Hierarchy",
    icon: "🗂️",
    meaning:
      "Azure organizes resources using management groups, subscriptions, resource groups and individual resources.",
    why:
      "The hierarchy helps organize billing, access control and governance.",
    example:
      "A company can apply a policy at management-group level so it affects several subscriptions.",
    remember:
      "Management groups sit above subscriptions. Resource groups exist inside subscriptions.",
    confusion:
      "Resource groups organize resources but are not an availability feature.",
    examTip:
      "Across multiple subscriptions = management groups. Organize related resources = resource groups.",
  },

  {
    id: "virtual-machines",
    area: "architecture-services",
    title: "Azure Virtual Machines",
    icon: "🖥️",
    meaning:
      "An Azure VM is a virtual computer with CPU, memory, disks, networking and a guest operating system.",
    why:
      "VMs are useful when you need strong control over the operating system or must run existing server applications.",
    example:
      "A company can migrate an existing Windows Server application to an Azure VM.",
    remember:
      "Azure VMs are IaaS.",
    confusion:
      "Virtual Machine Scale Sets manage groups of similar VMs. Availability sets focus on reducing correlated VM failures.",
    examTip:
      "If the customer needs administrator control of the guest OS, think Virtual Machine and IaaS.",
  },

  {
    id: "containers-functions",
    area: "architecture-services",
    title: "VMs, Containers & Functions",
    icon: "📦",
    meaning:
      "VMs run full guest operating systems, containers package applications with dependencies, and Functions run event-driven serverless code.",
    why:
      "Each compute type fits different application needs and management requirements.",
    example:
      "ACI can run a simple container, AKS can orchestrate many containers, and Azure Functions can process an uploaded file.",
    remember:
      "Containers are lighter than VMs because they share the host operating-system kernel.",
    confusion:
      "ACI is for simpler container execution. AKS is for Kubernetes orchestration.",
    examTip:
      "Single container = ACI. Many orchestrated containers = AKS. Event-driven code = Functions.",
  },

  {
    id: "azure-networking",
    area: "architecture-services",
    title: "VNets, Subnets & Peering",
    icon: "🌐",
    meaning:
      "A VNet is a private logical Azure network. A subnet is a smaller address range inside a VNet. Peering privately connects VNets.",
    why:
      "Networking controls how Azure resources communicate with each other and with other networks.",
    example:
      "Web servers can run in one subnet while database servers run in another subnet inside the same VNet.",
    remember:
      "A subnet is part of a VNet.",
    confusion:
      "VNet peering connects VNets but does not automatically make every peering relationship transitive.",
    examTip:
      "If the question asks for a private Azure network, think VNet.",
  },

  {
    id: "vpn-expressroute",
    area: "architecture-services",
    title: "VPN Gateway vs ExpressRoute",
    icon: "🔗",
    meaning:
      "VPN Gateway connects networks using encrypted tunnels over the public internet. ExpressRoute provides private connectivity through a provider.",
    why:
      "Organizations need secure options for connecting their on-premises networks to Azure.",
    example:
      "A branch office can use a site-to-site VPN to connect to an Azure VNet.",
    remember:
      "VPN = encrypted internet tunnel. ExpressRoute = private provider connection.",
    confusion:
      "Azure Bastion is for secure browser-based RDP/SSH access to VMs, not for connecting an entire office network.",
    examTip:
      "Private dedicated connectivity = ExpressRoute.",
  },

  {
    id: "storage-types",
    area: "architecture-services",
    title: "Azure Storage Types",
    icon: "💾",
    meaning:
      "Azure provides different storage services for objects, shared files, VM disks, messages and NoSQL key-value data.",
    why:
      "Choosing the correct storage type depends on the kind of data and how applications need to access it.",
    example:
      "Thousands of uploaded photos belong in Blob Storage, while a shared SMB company folder belongs in Azure Files.",
    remember:
      "Blob = objects. Files = shared files. Disk = VM block storage. Queue = messages. Table = NoSQL entities.",
    confusion:
      "Blob containers are storage containers, not Docker application containers.",
    examTip:
      "Images, videos and documents usually point to Blob Storage.",
  },

  {
    id: "storage-tiers",
    area: "architecture-services",
    title: "Blob Access Tiers",
    icon: "🗄️",
    meaning:
      "Blob Storage provides Hot, Cool, Cold and Archive tiers for different access patterns.",
    why:
      "The correct tier can lower storage cost while matching how often data is accessed.",
    example:
      "Frequently used website images fit Hot storage, while long-term backups may fit Archive.",
    remember:
      "Archive has very low storage cost but is offline and must be rehydrated before reading.",
    confusion:
      "Hot, Cool and Cold are online tiers. Archive is offline.",
    examTip:
      "Lowest storage cost and slow retrieval = Archive.",
  },

  {
    id: "storage-redundancy",
    area: "architecture-services",
    title: "Storage Redundancy",
    icon: "🔁",
    meaning:
      "Azure storage redundancy controls how many copies of data exist and where those copies are stored.",
    why:
      "More redundancy improves resilience against hardware, zone or regional failures.",
    example:
      "ZRS keeps copies across availability zones in one region, while GRS also copies data to another region.",
    remember:
      "LRS = local. ZRS = zones. GRS = another region. GZRS = zones plus another region.",
    confusion:
      "Replication is not the same as a complete backup strategy.",
    examTip:
      "Across availability zones = ZRS. Across regions = GRS or GZRS.",
  },

  {
    id: "entra-id",
    area: "architecture-services",
    title: "Microsoft Entra ID",
    icon: "👤",
    meaning:
      "Microsoft Entra ID is Azure's cloud identity and access-management service for users, applications and devices.",
    why:
      "It provides authentication, SSO, MFA and identity-based access features.",
    example:
      "Employees can use one organizational account to sign in to multiple cloud applications.",
    remember:
      "Authentication asks who you are. Authorization asks what you are allowed to do.",
    confusion:
      "Entra ID is not the same as traditional Active Directory Domain Services.",
    examTip:
      "Cloud identity and sign-in = Entra ID.",
  },

  {
    id: "mfa-conditional-access",
    area: "architecture-services",
    title: "MFA vs Conditional Access",
    icon: "🔐",
    meaning:
      "MFA requires additional authentication factors. Conditional Access decides when access rules such as MFA should apply.",
    why:
      "Together they strengthen identity security based on sign-in conditions.",
    example:
      "A Conditional Access policy can require MFA when a user signs in from an unfamiliar location.",
    remember:
      "MFA is the extra proof. Conditional Access is the rule that decides when to require it.",
    confusion:
      "Conditional Access does not replace MFA. It can trigger MFA.",
    examTip:
      "Specific location or device condition requiring MFA = Conditional Access.",
  },

  {
    id: "rbac",
    area: "architecture-services",
    title: "Azure RBAC",
    icon: "🔑",
    meaning:
      "Azure role-based access control assigns permissions to users, groups or services at a specific scope.",
    why:
      "It lets organizations follow least privilege by giving people only the access they need.",
    example:
      "A developer can receive Contributor access to one resource group.",
    remember:
      "RBAC controls who can do what.",
    confusion:
      "Azure Policy controls allowed resource configuration, not user permissions.",
    examTip:
      "Grant someone permission to manage resources = RBAC.",
  },

  {
    id: "zero-trust",
    area: "architecture-services",
    title: "Zero Trust & Defense in Depth",
    icon: "🛡️",
    meaning:
      "Zero Trust means verify explicitly, use least privilege and assume breach. Defense in depth uses multiple security layers.",
    why:
      "Security should not depend on a single control or automatically trust requests just because they come from inside a network.",
    example:
      "Identity, network, application and data controls can all protect the same workload.",
    remember:
      "Zero Trust is a strategy. Defense in depth is layered protection.",
    confusion:
      "Neither concept means one security product will protect everything.",
    examTip:
      "Multiple layers of protection = defense in depth.",
  },

  {
    id: "azure-cost",
    area: "management-governance",
    title: "Azure Cost Management",
    icon: "💳",
    meaning:
      "Azure costs depend on factors such as service type, size, region, usage, redundancy, storage tier and data transfer.",
    why:
      "Understanding costs helps organizations plan budgets and avoid unnecessary spending.",
    example:
      "The Pricing Calculator estimates expected costs before deployment, while Cost Management analyzes actual spending.",
    remember:
      "Pricing Calculator = estimate before deployment. Cost Management = track and analyze spending.",
    confusion:
      "A budget can alert you about spending but does not automatically shut down every resource.",
    examTip:
      "Estimate future Azure cost = Pricing Calculator.",
  },

  {
    id: "tags",
    area: "management-governance",
    title: "Azure Tags",
    icon: "🏷️",
    meaning:
      "Tags are name-value metadata used to organize Azure resources and help with reporting or cost allocation.",
    why:
      "They help identify resources by department, environment, project or owner.",
    example:
      "A company can apply Department=Finance or Environment=Production tags.",
    remember:
      "Tags classify resources.",
    confusion:
      "Tags do not enforce rules by themselves.",
    examTip:
      "Track costs by department or project = tags.",
  },

  {
    id: "policy-locks",
    area: "management-governance",
    title: "Azure Policy vs Resource Locks",
    icon: "🚦",
    meaning:
      "Azure Policy audits or enforces configuration rules. Resource locks help prevent accidental deletion or modification.",
    why:
      "They solve different governance problems.",
    example:
      "Policy can block VMs outside approved regions, while a CanNotDelete lock prevents deletion of an important resource.",
    remember:
      "Policy = enforce standards. Lock = protect against change or deletion.",
    confusion:
      "Locks do not replace RBAC permissions or backups.",
    examTip:
      "Allowed VM sizes or regions = Azure Policy. Prevent accidental deletion = resource lock.",
  },

  {
    id: "arm-iac",
    area: "management-governance",
    title: "ARM & Infrastructure as Code",
    icon: "🧱",
    meaning:
      "Infrastructure as Code defines infrastructure using files instead of manually clicking through configuration screens.",
    why:
      "It improves repeatability, consistency and version control.",
    example:
      "An ARM template describes Azure resources using declarative JSON.",
    remember:
      "Declarative means describing what the desired final state should be.",
    confusion:
      "Azure CLI and PowerShell can deploy resources, but they are command tools rather than ARM template formats.",
    examTip:
      "Declarative JSON for Azure resources = ARM template.",
  },

  {
    id: "azure-arc",
    area: "management-governance",
    title: "Azure Arc",
    icon: "🌉",
    meaning:
      "Azure Arc extends Azure management and governance to supported resources outside Azure.",
    why:
      "Organizations can centrally manage on-premises and multi-cloud resources without moving them into Azure.",
    example:
      "A company can manage Linux servers that remain in its own datacenter using Azure management tools.",
    remember:
      "Azure Arc manages non-Azure resources from Azure.",
    confusion:
      "Using Azure Arc does not automatically migrate those servers into Azure.",
    examTip:
      "Govern servers that remain on-premises or in another cloud = Azure Arc.",
  },

  {
    id: "monitoring-tools",
    area: "management-governance",
    title: "Monitor vs Advisor vs Service Health",
    icon: "📊",
    meaning:
      "Azure Monitor handles telemetry and alerts, Azure Advisor gives optimization recommendations, and Service Health reports Azure service incidents and advisories.",
    why:
      "These tools answer different operational questions.",
    example:
      "High VM CPU alert = Monitor. Cost-saving recommendation = Advisor. Azure platform outage = Service Health.",
    remember:
      "Monitor = telemetry. Advisor = recommendations. Service Health = Azure service notices.",
    confusion:
      "Advisor does not replace Monitor, and Service Health is not an application performance monitoring tool.",
    examTip:
      "A CPU threshold alert points to Azure Monitor.",
  },

  {
    id: "log-analytics-app-insights",
    area: "management-governance",
    title: "Log Analytics & Application Insights",
    icon: "🔎",
    meaning:
      "Log Analytics queries collected Azure logs, while Application Insights helps monitor application performance, requests, dependencies and failures.",
    why:
      "They help diagnose problems using detailed telemetry.",
    example:
      "A developer can use Application Insights to investigate slow web requests and Log Analytics to query related logs.",
    remember:
      "Application Insights focuses on application behavior. Log Analytics focuses on querying collected logs.",
    confusion:
      "Neither tool is the same as Azure Service Health, which reports platform incidents.",
    examTip:
      "Application requests and performance = Application Insights. Query collected logs = Log Analytics.",
  },
];

export const commonConfusions = [
  {
    left: "IaaS",
    right: "PaaS",
    difference:
      "IaaS: you manage the guest OS. PaaS: the provider manages the platform and OS.",
  },
  {
    left: "Scale Up",
    right: "Scale Out",
    difference:
      "Scale up means a more powerful machine. Scale out means more machines.",
  },
  {
    left: "Region",
    right: "Availability Zone",
    difference:
      "A region is a geographic Azure area. A zone is a separate datacenter group inside a region.",
  },
  {
    left: "RBAC",
    right: "Azure Policy",
    difference:
      "RBAC controls permissions. Azure Policy controls allowed resource configuration.",
  },
  {
    left: "Azure Policy",
    right: "Resource Lock",
    difference:
      "Policy enforces standards. Locks protect resources from accidental change or deletion.",
  },
  {
    left: "MFA",
    right: "Conditional Access",
    difference:
      "MFA adds extra authentication. Conditional Access decides when access rules such as MFA apply.",
  },
  {
    left: "VPN Gateway",
    right: "ExpressRoute",
    difference:
      "VPN Gateway uses encrypted internet tunnels. ExpressRoute uses private provider connectivity.",
  },
  {
    left: "Azure Monitor",
    right: "Azure Advisor",
    difference:
      "Monitor collects telemetry and alerts. Advisor gives optimization recommendations.",
  },
  {
    left: "Advisor",
    right: "Service Health",
    difference:
      "Advisor recommends improvements. Service Health reports Azure incidents, maintenance and advisories.",
  },
  {
    left: "Blob Storage",
    right: "Azure Files",
    difference:
      "Blob stores objects such as images and videos. Azure Files provides managed SMB/NFS file shares.",
  },
  {
    left: "Pricing Calculator",
    right: "Cost Management",
    difference:
      "Pricing Calculator estimates future cost. Cost Management tracks and analyzes actual spending.",
  },
  {
    left: "Entra ID",
    right: "Entra Domain Services",
    difference:
      "Entra ID is cloud identity. Entra Domain Services provides managed traditional domain capabilities.",
  },
];

export const getAreaById = (id) =>
  studyAreas.find((area) => area.id === id);

export const getSummariesByArea = (areaId) =>
  summaries.filter((summary) => summary.area === areaId);