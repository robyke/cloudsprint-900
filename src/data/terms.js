export const terms = [
  {
    id: "cloud-computing",
    term: "Cloud Computing",
    area: "cloud-concepts",
    definition:
      "Delivering computing services such as servers, storage and networking over a network instead of owning all hardware yourself.",
    example:
      "Hosting a website in Azure instead of buying and maintaining a physical server.",
    confusion:
      "Cloud computing is much more than online file storage.",
  },
  {
    id: "public-cloud",
    term: "Public Cloud",
    area: "cloud-concepts",
    definition:
      "Cloud infrastructure owned and operated by a provider and shared across customers.",
    example:
      "Microsoft Azure is a public cloud platform.",
    confusion:
      "Public cloud does not mean your data is automatically public.",
  },
  {
    id: "private-cloud",
    term: "Private Cloud",
    area: "cloud-concepts",
    definition:
      "Cloud-style infrastructure dedicated to one organization.",
    example:
      "A company runs its own private cloud in its datacenter.",
    confusion:
      "Private cloud usually gives more control but can require more management.",
  },
  {
    id: "hybrid-cloud",
    term: "Hybrid Cloud",
    area: "cloud-concepts",
    definition:
      "A combination of on-premises or private infrastructure with public cloud services.",
    example:
      "A company keeps a local database but uses Azure for its web app.",
    confusion:
      "Hybrid cloud combines environments. Multi-cloud uses multiple cloud providers.",
  },
  {
    id: "shared-responsibility",
    term: "Shared Responsibility",
    area: "cloud-concepts",
    definition:
      "Microsoft and the customer share security and management responsibilities depending on the service model.",
    example:
      "Microsoft manages physical hardware, while the customer manages data and access.",
    confusion:
      "Cloud adoption does not remove all customer security responsibilities.",
  },
  {
    id: "capex",
    term: "CapEx",
    area: "cloud-concepts",
    definition:
      "Capital expenditure: large upfront spending on assets such as physical servers.",
    example:
      "Buying servers for your own datacenter.",
    confusion:
      "CapEx is upfront spending, while OpEx is ongoing operational spending.",
  },
  {
    id: "opex",
    term: "OpEx",
    area: "cloud-concepts",
    definition:
      "Operational expenditure: ongoing spending for services and operations.",
    example:
      "Paying monthly for cloud resources.",
    confusion:
      "OpEx usually avoids the large upfront hardware purchase associated with CapEx.",
  },
  {
    id: "iaas",
    term: "IaaS",
    area: "cloud-concepts",
    definition:
      "Infrastructure as a Service gives you virtual infrastructure while you manage the guest OS and applications.",
    example:
      "Azure Virtual Machines.",
    confusion:
      "IaaS gives more control than PaaS but also more management responsibility.",
  },
  {
    id: "paas",
    term: "PaaS",
    area: "cloud-concepts",
    definition:
      "Platform as a Service lets you deploy applications without managing the underlying guest operating system.",
    example:
      "Azure App Service or Azure SQL Database.",
    confusion:
      "PaaS manages more infrastructure for you than IaaS.",
  },
  {
    id: "saas",
    term: "SaaS",
    area: "cloud-concepts",
    definition:
      "Software as a Service provides a finished application over the network.",
    example:
      "Microsoft 365.",
    confusion:
      "SaaS gives the least infrastructure control of IaaS, PaaS and SaaS.",
  },
  {
    id: "serverless",
    term: "Serverless",
    area: "cloud-concepts",
    definition:
      "A model where you run code without provisioning or maintaining servers yourself.",
    example:
      "Azure Functions.",
    confusion:
      "Servers still exist, but the provider manages them.",
  },
  {
    id: "high-availability",
    term: "High Availability",
    area: "cloud-concepts",
    definition:
      "Designing systems to remain available despite component failures.",
    example:
      "Running instances across multiple availability zones.",
    confusion:
      "High availability reduces downtime; it is not the same as scaling.",
  },
  {
    id: "scalability",
    term: "Scalability",
    area: "cloud-concepts",
    definition:
      "The ability to increase or decrease computing capacity as demand changes.",
    example:
      "Adding more servers during a busy sale.",
    confusion:
      "Vertical scaling makes one machine bigger. Horizontal scaling adds more machines.",
  },
  {
    id: "elasticity",
    term: "Elasticity",
    area: "cloud-concepts",
    definition:
      "The ability for capacity to expand and shrink in response to workload demand.",
    example:
      "Automatically adding servers when traffic rises and removing them later.",
    confusion:
      "Elasticity focuses on adjusting resources dynamically.",
  },
  {
    id: "region",
    term: "Azure Region",
    area: "architecture-services",
    definition:
      "A geographic Azure area containing one or more datacenters.",
    example:
      "Choosing a region close to users can reduce latency.",
    confusion:
      "A region is larger than an availability zone.",
  },
  {
    id: "availability-zone",
    term: "Availability Zone",
    area: "architecture-services",
    definition:
      "A physically separate datacenter group inside an Azure region.",
    example:
      "Deploying across zones helps protect against one datacenter-level failure.",
    confusion:
      "Zones are inside a region; region pairs connect separate regions.",
  },
  {
    id: "region-pair",
    term: "Region Pair",
    area: "architecture-services",
    definition:
      "A strategic pairing of two Azure regions within the same geography.",
    example:
      "Can support some cross-region recovery planning.",
    confusion:
      "Region pairs do not automatically replicate all customer data.",
  },
  {
    id: "resource",
    term: "Azure Resource",
    area: "architecture-services",
    definition:
      "An Azure item you create and manage.",
    example:
      "A virtual machine, storage account or database.",
    confusion:
      "A resource group contains resources but is not itself a workload.",
  },
  {
    id: "resource-group",
    term: "Resource Group",
    area: "architecture-services",
    definition:
      "A logical container used to organize Azure resources.",
    example:
      "Keeping all resources for one application in one resource group.",
    confusion:
      "A resource group does not provide high availability by itself.",
  },
  {
    id: "subscription",
    term: "Subscription",
    area: "architecture-services",
    definition:
      "A billing and access-management boundary containing resource groups and resources.",
    example:
      "A company may use separate subscriptions for development and production.",
    confusion:
      "Management groups sit above subscriptions.",
  },
  {
    id: "management-group",
    term: "Management Group",
    area: "architecture-services",
    definition:
      "A management layer above subscriptions used for governance and access across multiple subscriptions.",
    example:
      "Applying one policy to several subscriptions.",
    confusion:
      "Resource groups are inside subscriptions, while management groups are above them.",
  },
  {
    id: "vm",
    term: "Virtual Machine",
    area: "architecture-services",
    definition:
      "A virtual computer with CPU, memory, storage, networking and a guest operating system.",
    example:
      "Running a Windows Server application in Azure.",
    confusion:
      "VMs are heavier than containers because they include a guest OS.",
  },
  {
    id: "vmss",
    term: "Virtual Machine Scale Sets",
    area: "architecture-services",
    definition:
      "A service for deploying and managing groups of similar, scalable virtual machines.",
    example:
      "Automatically scaling a web-server fleet.",
    confusion:
      "VM Scale Sets scale VM groups; availability sets focus on fault separation.",
  },
  {
    id: "container",
    term: "Container",
    area: "architecture-services",
    definition:
      "A lightweight package containing an application and its dependencies while sharing the host OS kernel.",
    example:
      "Running a web API in Azure Container Instances.",
    confusion:
      "Containers are not the same as virtual machines.",
  },
  {
    id: "functions",
    term: "Azure Functions",
    area: "architecture-services",
    definition:
      "A serverless Azure service for running event-driven code.",
    example:
      "Resize a photo automatically after upload.",
    confusion:
      "Functions runs code; Logic Apps focuses more on workflow automation.",
  },
  {
    id: "vnet",
    term: "Virtual Network (VNet)",
    area: "architecture-services",
    definition:
      "A private logical network in Azure.",
    example:
      "Connecting Azure VMs privately inside one network.",
    confusion:
      "A subnet is a smaller section inside a VNet.",
  },
  {
    id: "subnet",
    term: "Subnet",
    area: "architecture-services",
    definition:
      "A smaller IP address range inside a virtual network.",
    example:
      "Place web servers and database servers in different subnets.",
    confusion:
      "A subnet is part of a VNet, not a separate Azure region.",
  },
  {
    id: "vnet-peering",
    term: "VNet Peering",
    area: "architecture-services",
    definition:
      "A private connection between Azure virtual networks using Microsoft's backbone.",
    example:
      "Connecting two application VNets privately.",
    confusion:
      "Peering is not automatically transitive.",
  },
  {
    id: "vpn-gateway",
    term: "VPN Gateway",
    area: "architecture-services",
    definition:
      "Connects networks using encrypted tunnels over the public internet.",
    example:
      "Connecting an office network to an Azure VNet.",
    confusion:
      "ExpressRoute uses private connectivity instead of an internet VPN tunnel.",
  },
  {
    id: "expressroute",
    term: "ExpressRoute",
    area: "architecture-services",
    definition:
      "Provides private connectivity to Azure through a connectivity provider.",
    example:
      "A company needs predictable private connectivity from its datacenter to Azure.",
    confusion:
      "ExpressRoute is not the same as a VPN tunnel over the public internet.",
  },
  {
    id: "blob-storage",
    term: "Blob Storage",
    area: "architecture-services",
    definition:
      "Azure object storage for unstructured data such as images, documents and videos.",
    example:
      "Store uploaded photos in Blob Storage.",
    confusion:
      "Blob Storage is different from Azure Files and VM disks.",
  },
  {
    id: "azure-files",
    term: "Azure Files",
    area: "architecture-services",
    definition:
      "Managed cloud file shares supporting SMB and supported NFS configurations.",
    example:
      "A shared company drive that servers can mount.",
    confusion:
      "Azure Files is for file shares; Blob Storage is object storage.",
  },
  {
    id: "archive-tier",
    term: "Archive Tier",
    area: "architecture-services",
    definition:
      "An offline Blob Storage tier with very low storage cost but slower retrieval.",
    example:
      "Long-term backup data that is rarely accessed.",
    confusion:
      "Archive is offline, while Hot, Cool and Cold are online.",
  },
  {
    id: "zrs",
    term: "ZRS",
    area: "architecture-services",
    definition:
      "Zone-redundant storage replicates data across availability zones in one region.",
    example:
      "Protecting storage against a zone failure.",
    confusion:
      "GRS replicates to another region.",
  },
  {
    id: "entra-id",
    term: "Microsoft Entra ID",
    area: "architecture-services",
    definition:
      "Microsoft's cloud identity and access-management service.",
    example:
      "Employees sign in using organizational accounts.",
    confusion:
      "Entra ID is not identical to traditional Active Directory Domain Services.",
  },
  {
    id: "mfa",
    term: "MFA",
    area: "architecture-services",
    definition:
      "Multifactor authentication requires more than one authentication factor.",
    example:
      "Password plus an authenticator approval.",
    confusion:
      "Conditional Access decides when requirements such as MFA should apply.",
  },
  {
    id: "conditional-access",
    term: "Conditional Access",
    area: "architecture-services",
    definition:
      "A policy system that evaluates sign-in conditions and applies access controls.",
    example:
      "Require MFA when a user signs in from an unfamiliar location.",
    confusion:
      "Conditional Access is the policy; MFA is an authentication control.",
  },
  {
    id: "rbac",
    term: "Azure RBAC",
    area: "architecture-services",
    definition:
      "Azure role-based access control grants permissions to resources at a chosen scope.",
    example:
      "Give a developer Contributor access to one resource group.",
    confusion:
      "RBAC controls permissions. Azure Policy controls allowed configurations.",
  },
  {
    id: "zero-trust",
    term: "Zero Trust",
    area: "architecture-services",
    definition:
      "A security strategy based on verify explicitly, least privilege and assume breach.",
    example:
      "Do not trust a request only because it comes from inside the company network.",
    confusion:
      "Zero Trust is a strategy, not one Azure product.",
  },
  {
    id: "defense-depth",
    term: "Defense in Depth",
    area: "architecture-services",
    definition:
      "Using several security layers so one control failure does not expose everything.",
    example:
      "Identity, network, compute, application and data protections working together.",
    confusion:
      "Defense in depth means multiple layers, not one powerful security tool.",
  },
  {
    id: "pricing-calculator",
    term: "Azure Pricing Calculator",
    area: "management-governance",
    definition:
      "A tool used to estimate Azure costs before deployment.",
    example:
      "Estimate the monthly cost of planned VMs.",
    confusion:
      "Cost Management analyzes actual spending after resources are running.",
  },
  {
    id: "cost-management",
    term: "Cost Management",
    area: "management-governance",
    definition:
      "Tools for analyzing Azure spending, budgets, forecasts and cost trends.",
    example:
      "Track monthly Azure spending by department.",
    confusion:
      "Cost Management is not the same as Pricing Calculator.",
  },
  {
    id: "tags",
    term: "Tags",
    area: "management-governance",
    definition:
      "Name-value metadata used to organize and classify Azure resources.",
    example:
      "Department=Finance or Environment=Production.",
    confusion:
      "Tags do not enforce configuration rules by themselves.",
  },
  {
    id: "azure-policy",
    term: "Azure Policy",
    area: "management-governance",
    definition:
      "A governance service that audits or enforces resource configuration standards.",
    example:
      "Block VMs from being deployed outside approved regions.",
    confusion:
      "Policy controls configuration, while RBAC controls permissions.",
  },
  {
    id: "resource-lock",
    term: "Resource Lock",
    area: "management-governance",
    definition:
      "A protection that helps prevent accidental resource deletion or modification.",
    example:
      "Use CanNotDelete on an important production resource.",
    confusion:
      "Locks do not replace RBAC or backups.",
  },
  {
    id: "purview",
    term: "Microsoft Purview",
    area: "management-governance",
    definition:
      "A family of data governance, security and compliance solutions.",
    example:
      "Discover and classify data across supported sources.",
    confusion:
      "Purview is not the main Azure VM deployment-policy service.",
  },
  {
    id: "cloud-shell",
    term: "Azure Cloud Shell",
    area: "management-governance",
    definition:
      "A browser-accessible shell environment with Azure CLI and Azure PowerShell.",
    example:
      "Run Azure commands from your browser.",
    confusion:
      "Cloud Shell is an environment, not an ARM template.",
  },
  {
    id: "azure-cli",
    term: "Azure CLI",
    area: "management-governance",
    definition:
      "A command-line tool using az commands to manage Azure resources.",
    example:
      "Use az commands in scripts to create resources.",
    confusion:
      "Azure CLI is a command tool, not the same as an ARM template.",
  },
  {
    id: "arm",
    term: "Azure Resource Manager",
    area: "management-governance",
    definition:
      "Azure's deployment and management layer for resources.",
    example:
      "ARM processes deployments defined through templates.",
    confusion:
      "ARM is the management layer; ARM templates are declarative JSON files.",
  },
  {
    id: "arm-template",
    term: "ARM Template",
    area: "management-governance",
    definition:
      "A declarative JSON file describing Azure resources and configuration.",
    example:
      "Deploy the same infrastructure consistently across environments.",
    confusion:
      "ARM templates describe desired state; CLI commands are imperative commands.",
  },
  {
    id: "azure-arc",
    term: "Azure Arc",
    area: "management-governance",
    definition:
      "Extends Azure management and governance to supported resources outside Azure.",
    example:
      "Manage an on-premises Linux server using Azure tools.",
    confusion:
      "Azure Arc does not automatically migrate resources into Azure.",
  },
  {
    id: "azure-monitor",
    term: "Azure Monitor",
    area: "management-governance",
    definition:
      "Collects and analyzes Azure metrics, logs, traces and alerts.",
    example:
      "Alert when VM CPU stays above 80%.",
    confusion:
      "Azure Advisor gives recommendations; Monitor observes telemetry.",
  },
  {
    id: "advisor",
    term: "Azure Advisor",
    area: "management-governance",
    definition:
      "Provides recommendations to improve cost, reliability, security, performance and operations.",
    example:
      "Suggest resizing an underused VM.",
    confusion:
      "Advisor recommends changes; Azure Monitor collects telemetry.",
  },
  {
    id: "service-health",
    term: "Azure Service Health",
    area: "management-governance",
    definition:
      "Reports Azure service incidents, planned maintenance and relevant advisories.",
    example:
      "See whether an Azure platform outage affects your services.",
    confusion:
      "Service Health reports Azure platform health, not your application's internal performance.",
  },
  {
    id: "log-analytics",
    term: "Log Analytics",
    area: "management-governance",
    definition:
      "A tool for querying supported Azure logs using Log Analytics workspaces.",
    example:
      "Search collected logs to investigate an incident.",
    confusion:
      "Log Analytics queries logs; Application Insights focuses on application telemetry.",
  },
  {
    id: "application-insights",
    term: "Application Insights",
    area: "management-governance",
    definition:
      "Application performance monitoring for requests, failures, dependencies and performance.",
    example:
      "Investigate why a web application's requests are slow.",
    confusion:
      "Application Insights is part of Azure Monitor.",
  },
];

export const getTermsByArea = (areaId) =>
  terms.filter((term) => term.area === areaId);