// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    ID: string,
    DateTime: any,
    Int: number,
    BigInt: any,
    Boolean: boolean,
    String: string,
    Date: any,
    JSONString: any,
    UUID: any,
    JSONOrString: any,
    Decimal: any,
}

export interface RootQuery {
    /**
     * 
     *     Returns the specified OrgTotalUsageMetrics object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view_utilization].
     */
    orgTotalUsageMetric: (OrgTotalUsageMetrics | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of OrgTotalUsageMetrics objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view_utilization].
     */
    orgTotalUsageMetrics: OrgTotalUsageMetricsConnection
    /**
     * 
     *     Returns the specified OrgDailyUsageMetrics object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view_utilization].
     */
    orgDailyUsageMetric: (OrgDailyUsageMetrics | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of OrgDailyUsageMetrics objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view_utilization].
     */
    orgDailyUsageMetrics: OrgDailyUsageMetricsConnection
    /**
     * 
     *     Returns the specified InstanceDailyUsageMetrics object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    instanceDailyUsageMetric: (InstanceDailyUsageMetrics | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of InstanceDailyUsageMetrics objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    instanceDailyUsageMetrics: InstanceDailyUsageMetricsConnection
    /**
     * 
     *     Returns the specified CustomerTotalUsageMetrics object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances].
     */
    customerTotalUsageMetric: (CustomerTotalUsageMetrics | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of CustomerTotalUsageMetrics objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances].
     */
    customerTotalUsageMetrics: CustomerTotalUsageMetricsConnection
    /**
     * 
     *     Returns the specified User object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users, org_view_users].
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users, customer_view_users].
     */
    user: (User | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of User objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users, org_view_users].
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users, customer_view_users].
     */
    users: UserConnection
    /** Returns whether a User exists with the specified email address. */
    userExists: Scalars['Boolean']
    /**
     * 
     *     Returns the Organization Theme of the signed-in User.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    theme: (Theme | null)
    /**
     * 
     *     Returns the specified StarredRecord object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'user' attribute is the signed-in User.
     */
    starredRecord: (StarredRecord | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of StarredRecord objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'user' attribute is the signed-in User.
     */
    starredRecords: StarredRecordConnection
    /**
     * 
     *     Returns the specified Permission object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    permission: (Permission | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Permission objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    permissions: PermissionConnection
    /**
     * 
     *     Returns a list of Organization Role objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The Role level is less than that of the signed-in User's Role.
     */
    organizationRoles: (Role | null)[]
    /**
     * 
     *     Returns the specified ObjectPermissionGrant object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    objectPermissionGrant: (ObjectPermissionGrant | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of ObjectPermissionGrant objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    objectPermissionGrants: ObjectPermissionGrantConnection
    /**
     * 
     *     Returns a list of Customer Role objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The Role level is less than that of the signed-in User's Role.
     */
    customerRoles: (Role | null)[]
    /**
     * 
     *     Returns the specified AuthObjectType object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    authObjectType: (AuthObjectType | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of AuthObjectType objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    authObjectTypes: AuthObjectTypeConnection
    /**
     * 
     *     Returns the Organization of the signed-in User if the User is an Organization User.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_view].
     */
    organization: (Organization | null)
    /**
     * 
     *     Returns the specified Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    marketplaceIntegration: (Integration | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Integration objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    marketplaceIntegrations: IntegrationConnection
    /** Returns a list of LogSeverity objects. */
    logSeverityLevels: (LogSeverity | null)[]
    /**
     * 
     *     Returns the specified Log object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     5. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     */
    log: (Log | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Log objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     5. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     */
    logs: LogConnection
    /**
     * 
     *     Returns the specified ExternalLogStream object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    externalLogStream: (ExternalLogStream | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of ExternalLogStream objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    externalLogStreams: ExternalLogStreamConnection
    /**
     * 
     *     Returns the specified Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    integration: (Integration | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Integration objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    integrations: IntegrationConnection
    /** Returns a list of unique Integration labels. */
    integrationLabels: (Label | null)[]
    /** DEPRECATED. Prefer using integrationCategories instead. */
    categories: (IntegrationCategory | null)[]
    /** Returns a list of Integration categories. */
    integrationCategories: (IntegrationCategory | null)[]
    /**
     * 
     *     Returns the specified Instance object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     6. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    instance: (Instance | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Instance objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     6. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    instances: InstanceConnection
    /** Returns a list of unique Instance labels. */
    instanceLabels: (Label | null)[]
    /**
     * 
     *     Returns the specified InstanceFlowConfig object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     6. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    instanceFlowConfig: (InstanceFlowConfig | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of InstanceFlowConfig objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     6. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    instanceFlowConfigs: InstanceFlowConfigConnection
    /**
     * 
     *     Returns the specified InstanceExecutionResult object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     4. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    executionResult: (InstanceExecutionResult | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of InstanceExecutionResult objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     4. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    executionResults: InstanceExecutionResultConnection
    /**
     * 
     *     Returns the specified Customer object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_crud_customers, org_view_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations, customer_access_marketplace_integrations].
     */
    customer: (Customer | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Customer objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_crud_customers, org_view_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations, customer_access_marketplace_integrations].
     */
    customers: CustomerConnection
    /** Returns a list of unique Customer labels. */
    customerLabels: (Label | null)[]
    /**
     * 
     *     Returns the specified Credential object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_view_customers, org_manage_integrations, org_view_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances].
     */
    credential: (Credential | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Credential objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_view_customers, org_manage_integrations, org_view_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances].
     */
    credentials: CredentialConnection
    /**
     * 
     *     Returns the specified AuthorizationMethod object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    authorizationMethod: (AuthorizationMethod | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of AuthorizationMethod objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    authorizationMethods: AuthorizationMethodConnection
    /**
     * 
     *     Returns the specified ConnectionTemplate object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view].
     *     2. The signed-in User has any of the following permissions for the associated Customer: [customer_manage_integrations].
     */
    connectionTemplate: (ConnectionTemplate | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of ConnectionTemplate objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view].
     *     2. The signed-in User has any of the following permissions for the associated Customer: [customer_manage_integrations].
     */
    connectionTemplates: ConnectionTemplateConnection
    /**
     * 
     *     Returns the specified Component object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'public' attribute equals: True.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_component_permissions, org_manage_components, org_view_components].
     *     3. The signed-in User has any of the following permissions for any version of the object: [component_view, component_edit, component_remove, component_admin_permissions, component_publish_new_version].
     *     4. The signed-in User has any of the following permissions for the associated Customer: [customer_view_org_components].
     */
    component: (Component | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Component objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'public' attribute equals: True.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_component_permissions, org_manage_components, org_view_components].
     *     3. The signed-in User has any of the following permissions for any version of the object: [component_view, component_edit, component_remove, component_admin_permissions, component_publish_new_version].
     *     4. The signed-in User has any of the following permissions for the associated Customer: [customer_view_org_components].
     */
    components: ComponentConnection
    /** Returns a list of unique Component labels. */
    componentLabels: (Label | null)[]
    /** Returns a list of Component categories. */
    componentCategories: (ComponentCategory | null)[]
    /** Returns a pre-signed URL for uploading the specified media file. */
    uploadMedia: UploadMedia
    /**
     * 
     *     Returns the signed-in User.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users, org_view_users].
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users, customer_view_users].
     */
    authenticatedUser: User
    /**
     * 
     *     Returns the specified AlertWebhook object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     */
    alertWebhook: (AlertWebhook | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertWebhook objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     */
    alertWebhooks: AlertWebhookConnection
    /**
     * 
     *     Returns the specified AlertTrigger object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    alertTrigger: (AlertTrigger | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertTrigger objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    alertTriggers: AlertTriggerConnection
    /**
     * 
     *     Returns the specified AlertMonitor object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    alertMonitor: (AlertMonitor | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertMonitor objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    alertMonitors: AlertMonitorConnection
    /**
     * 
     *     Returns the specified AlertGroup object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     */
    alertGroup: (AlertGroup | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertGroup objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     */
    alertGroups: AlertGroupConnection
    /**
     * 
     *     Returns the specified AlertEvent object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'monitor_Instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_admin_manage_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'monitor_Instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    alertEvent: (AlertEvent | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertEvent objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'monitor_Instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_admin_manage_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'monitor_Instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    alertEvents: AlertEventConnection
    /** Returns a list of the top 10 'hottest' requestIds this minute. Counts include requests that are prematurely terminated due to rate limiting. */
    hotRequestIdsThisMinute: ((HotRequestIdsResult | null)[] | null)
    /** Returns a list of the top 10 'hottest' requestIds this hour. Counts include requests that are prematurely terminated due to rate limiting. */
    hotRequestIdsThisHour: ((HotRequestIdsResult | null)[] | null)
    /** Returns a list of requestIds that are blocked. */
    blockedRequestIds: (Scalars['String'] | null)[]
    /**
     * 
     *     Returns the specified Activity object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'user' attribute is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_view_activities].
     *     3. The signed-in User has any of the following permissions for the object's 'user_Customer' attribute: [customer_view_activities].
     */
    activity: (Activity | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Activity objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'user' attribute is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_view_activities].
     *     3. The signed-in User has any of the following permissions for the object's 'user_Customer' attribute: [customer_view_activities].
     */
    activities: ActivityConnection
    /**
     * 
     *     Returns the specified Action object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    action: (Action | null)
    /**
     * 
     *     Returns a Relay Connection to a collection of Action objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    actions: ActionConnection
    __typename: 'RootQuery'
}


/** Represents snapshots of total utilization metrics for the Organization. */
export interface OrgTotalUsageMetrics {
    /** The time the utilization metrics snapshot was created. */
    snapshotTime: Scalars['DateTime']
    /** The total number of Integrations that currently exist. */
    integrationCount: Scalars['Int']
    /** The total number of Customers that currently exist. */
    customerCount: Scalars['Int']
    /** The total number of Instances that are deployed. */
    deployedInstanceCount: Scalars['Int']
    /** The total number of unique Integrations that are deployed. */
    deployedUniqueIntegrationCount: Scalars['Int']
    /** The total number of Users that currently exist. */
    userCount: Scalars['Int']
    /** The total number of bytes of blob storage currently used. */
    blobBytesStored: Scalars['BigInt']
    /** The ID of the object */
    id: Scalars['ID']
    /** Specifies whether the signed-in User can update the OrgTotalUsageMetrics. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the OrgTotalUsageMetrics. */
    allowRemove: Scalars['Boolean']
    __typename: 'OrgTotalUsageMetrics'
}


/** An object with an ID */
export type Node = (OrgTotalUsageMetrics | OrgDailyUsageMetrics | InstanceDailyUsageMetrics | Instance | Customer | Organization | Theme | ThemeColor | ThemeProperty | OrganizationSigningKey | Credential | AuthorizationMethod | CredentialField | User | Role | AuthObjectType | Permission | Integration | RequiredConfigVariable | Connection | Component | Action | InputField | Version | ConnectionTemplate | InputFieldTemplate | RequiredConfigVariableCredentialType | Expression | IntegrationFlow | IntegrationAction | InstanceExecutionResult | InstanceFlowConfig | AlertMonitor | AlertTrigger | AlertGroup | AlertWebhook | AlertEvent | Log | InstanceConfigVariable | UserLevelConfigVariable | UserLevelConfig | UserLevelFlowConfig | InstanceStepResult | CustomerTotalUsageMetrics | StarredRecord | ObjectPermissionGrant | ExternalLogStream | Label | IntegrationCategory | ComponentCategory | Activity) & { __isUnion?: true }


/** Represents a Relay Connection to a collection of OrgTotalUsageMetrics objects. */
export interface OrgTotalUsageMetricsConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (OrgTotalUsageMetrics | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (OrgTotalUsageMetricsEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'OrgTotalUsageMetricsConnection'
}


/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export interface PageInfo {
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    __typename: 'PageInfo'
}


/** A Relay edge to a related OrgTotalUsageMetrics object and a cursor for pagination. */
export interface OrgTotalUsageMetricsEdge {
    /** The related object at the end of the edge. */
    node: (OrgTotalUsageMetrics | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'OrgTotalUsageMetricsEdge'
}


/** Represents the supported sort order directions. */
export type OrderDirection = 'ASC' | 'DESC'


/** Represents the fields by which collections of the related type may be ordered. */
export type OrgTotalUsageMetricsOrderField = 'SNAPSHOT_TIME'


/** Represents snapshots of daily utilization metrics for an Organization. */
export interface OrgDailyUsageMetrics {
    /** The date the utilization metrics snapshot was created. */
    snapshotDate: Scalars['Date']
    /** The total number of successful Instance executions on the snapshot date. */
    successfulExecutionCount: Scalars['BigInt']
    /** The total number of failed Instance executions on the snapshot date. */
    failedExecutionCount: Scalars['BigInt']
    /** The total number of steps executed on the snapshot date. */
    stepCount: Scalars['BigInt']
    /** The total execution spend on the snapshot date in MB-secs. */
    spendMbSecs: Scalars['BigInt']
    /** The ID of the object */
    id: Scalars['ID']
    /** Specifies whether the signed-in User can update the OrgDailyUsageMetrics. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the OrgDailyUsageMetrics. */
    allowRemove: Scalars['Boolean']
    __typename: 'OrgDailyUsageMetrics'
}


/** Represents a Relay Connection to a collection of OrgDailyUsageMetrics objects. */
export interface OrgDailyUsageMetricsConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (OrgDailyUsageMetrics | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (OrgDailyUsageMetricsEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'OrgDailyUsageMetricsConnection'
}


/** A Relay edge to a related OrgDailyUsageMetrics object and a cursor for pagination. */
export interface OrgDailyUsageMetricsEdge {
    /** The related object at the end of the edge. */
    node: (OrgDailyUsageMetrics | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'OrgDailyUsageMetricsEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type OrgDailyUsageMetricsOrderField = 'SNAPSHOT_DATE'


/** Represents snapshots of daily utilization metrics for an Instance. */
export interface InstanceDailyUsageMetrics {
    /** The date the utilization metrics snapshot was created. */
    snapshotDate: Scalars['Date']
    /** The Instance for which utilization metrics are being collected. */
    instance: Instance
    /** The number of successful executions of this Instance on the snapshot date. */
    successfulExecutionCount: Scalars['BigInt']
    /** The number of failed executions of this Instance on the snapshot date. */
    failedExecutionCount: Scalars['BigInt']
    /** The number of steps executed for this Instance on the snapshot date. */
    stepCount: Scalars['BigInt']
    /** The execution spend for this Instance on the snapshot date in MB-secs. */
    spendMbSecs: Scalars['BigInt']
    /** The ID of the object */
    id: Scalars['ID']
    /** Specifies whether the signed-in User can update the InstanceDailyUsageMetrics. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the InstanceDailyUsageMetrics. */
    allowRemove: Scalars['Boolean']
    __typename: 'InstanceDailyUsageMetrics'
}


/**
 * Represents an instance of an Integration which has been deployed in the
 * context of a Customer, to include Config Variable values, Credentials, and
 * a specific version of an Integration.
 */
export interface Instance {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** The labels that are associated with the object. */
    labels: (Scalars['String'][] | null)
    /** The name of the Instance. */
    name: Scalars['String']
    /** The Customer for which the Instance is deployed. */
    customer: Customer
    /** Additional notes about the Instance. */
    description: Scalars['String']
    /** The timestamp at which the Instance was most recently deployed. */
    lastDeployedAt: (Scalars['DateTime'] | null)
    /** The specific version of the Instance that is deployed. */
    deployedVersion: Scalars['Int']
    /** Specifies whether the Instance has been suspended by Prismatic. */
    systemSuspended: Scalars['Boolean']
    /** Specifies whether the latest execution of this Instance resulted in a failure. */
    inFailedState: Scalars['Boolean']
    /** Specifies whether a deploy is needed to reflect the newest configuration for this Instance. */
    needsDeploy: Scalars['Boolean']
    /** The timestamp at which the Instance was most recently executed. */
    lastExecutedAt: (Scalars['DateTime'] | null)
    /** Specifies whether to disable the creation of logs during Instance execution. */
    logsDisabled: Scalars['Boolean']
    /** Specifies whether to disable the creation of step results during Instance execution. */
    stepResultsDisabled: Scalars['Boolean']
    /** The Instance that is being monitored by the AlertMonitor. */
    monitors: AlertMonitorConnection
    /** The Instance with which the Config Variable is associated. */
    configVariables: InstanceConfigVariableConnection
    /** The Instance with which the User Level Config is associated. */
    userLevelConfigs: UserLevelConfigConnection
    /** The configuration for the IntegrationFlow associated with the Instance. */
    flowConfigs: InstanceFlowConfigConnection
    /** The Instance for which a specific InstanceFlowConfig is being executed. */
    executionResults: InstanceExecutionResultConnection
    /** The Instance which created the Log entry. */
    logs: LogConnection
    /** Describes the state of configuration of this Instance. */
    configState: (InstanceConfigState | null)
    /** Specifies whether the signed-in User can deploy the Instance. */
    allowDeploy: (Scalars['Boolean'] | null)
    /** Specifies whether the signed-in User can update config variables for the Instance. */
    allowUpdateConfigVariables: (Scalars['Boolean'] | null)
    /** Specifies whether the Instance can be deployed through the Marketplace. */
    isCustomerDeployable: (Scalars['Boolean'] | null)
    /** Specifies whether the Instance can be upgraded through the Marketplace. */
    isCustomerUpgradeable: (Scalars['Boolean'] | null)
    /** The Integration that has been deployed for the Instance. */
    integration: Integration
    /** The User Level Config variables for the requesting User on this Instance. */
    userLevelConfigVariables: (CustomUserLevelConfigVariableConnection | null)
    /** Specifies whether the Instance is currently enabled and in an executable state. */
    enabled: Scalars['Boolean']
    /** Specifies whether the signed-in User can update the Instance. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Instance. */
    allowRemove: Scalars['Boolean']
    /** Indicates whether the record is starred by the signed-in User. */
    starred: (Scalars['Boolean'] | null)
    __typename: 'Instance'
}


/**
 * Represents a customer, which is an object that allows for logical
 * separation of Users, Instances, and other data that are specific to a
 * particular deployment of the Organization's product(s).
 */
export interface Customer {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** The labels that are associated with the object. */
    labels: (Scalars['String'][] | null)
    /** The URL for the avatar image. */
    avatarUrl: (Scalars['String'] | null)
    /** Allows for mapping an external entity to a Prismatic record. */
    externalId: (Scalars['String'] | null)
    /** The name of the Customer, which must be unique within the scope of its Organization. */
    name: Scalars['String']
    /** The Organization to which the Customer belongs. */
    org: Organization
    /** Additional notes about the Customer. */
    description: Scalars['String']
    /** Specifies whether this Customer can use the Embedded Designer. */
    allowEmbeddedDesigner: Scalars['Boolean']
    /** The Customer the Credential belongs to, if any. If NULL then Organization will be specified. */
    credentials: CredentialConnection
    /** The Customer for which the Instance is deployed. */
    instances: InstanceConnection
    /** The Customer the Integration belongs to, if any. If this is NULL then the Integration belongs to the Organization. */
    integrations: IntegrationConnection
    /** The Customer the user belongs to, if any. If this is NULL then Organization will be specified. */
    users: UserConnection
    /** The Customer the Component belongs to, if any. If this is NULL then the Component belongs to the Organization. */
    components: ComponentConnection
    /** Specifies whether the signed-in User can manage Attachments related to this record. */
    allowManageAttachments: (Scalars['Boolean'] | null)
    /** A JSON list of objects where each object has a key for name and URL that together describe the Attachment. */
    attachments: ((Attachment | null)[] | null)
    /** Specifies whether the signed-in User can add a User to the Customer. */
    allowAddUser: Scalars['Boolean']
    /** Specifies whether the signed-in User can add an Instance to the Customer. */
    allowAddInstance: Scalars['Boolean']
    /** Specifies whether the signed-in User can add an Alert Monitor to the Customer. */
    allowAddAlertMonitor: Scalars['Boolean']
    /** Specifies whether the signed-in User can add a Credential to the Customer. */
    allowAddCredential: Scalars['Boolean']
    /** Specifies whether Instances may be enabled based on the utilization allowed by the current Plan. */
    allowEnableInstance: Scalars['Boolean']
    /** Specifies whether Instances may be executed based on the utilization allowed by the current Plan. */
    allowExecuteInstance: Scalars['Boolean']
    /** Specifies whether the signed-in User's Customer has access to legacy Credentials. */
    allowConfigureCredentials: Scalars['Boolean']
    /** Specifies whether the signed-in User can add a Component to the Customer. */
    allowAddComponent: Scalars['Boolean']
    /** Specifies whether the signed-in User can add an Integration to the Customer. */
    allowAddIntegration: Scalars['Boolean']
    /** Specifies whether the signed-in User can update the Customer. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Customer. */
    allowRemove: Scalars['Boolean']
    /** Indicates whether the record is starred by the signed-in User. */
    starred: (Scalars['Boolean'] | null)
    __typename: 'Customer'
}


/**
 * Represents an organization, which is the top-level object under which all
 * other objects, such as Users, Customers, Integrations, etc., exist.
 */
export interface Organization {
    /** The ID of the object */
    id: Scalars['ID']
    /** The labels that are associated with the object. */
    labels: (Scalars['String'][] | null)
    /** The URL for the avatar image. */
    avatarUrl: (Scalars['String'] | null)
    /** The unique name of the Organization. */
    name: Scalars['String']
    /** Specifies whether the Organization's account has been suspended by Prismatic. */
    systemSuspended: Scalars['Boolean']
    /** Specifies whether the Organization execution utilization has exceeded the Plan's limits. */
    overExecutionLimit: Scalars['Boolean']
    /** Date and time the Organization's current Plan expires */
    planExpiresAt: (Scalars['DateTime'] | null)
    featureFlags: (Scalars['JSONString'] | null)
    /** The Theme associated with an Organization */
    theme: (Theme | null)
    /** Display name of the Organization's Marketplace. */
    marketplaceName: Scalars['String']
    /** The maximum number of concurrent executions allowed for this Organization. */
    concurrentExecutionLimit: Scalars['Int']
    signingKeys: OrganizationSigningKeyConnection
    /** The Organization the Credential belongs to, if any. If NULL then Customer will be specified. */
    credentials: CredentialConnection
    /** The Organization to which the Customer belongs. */
    customers: CustomerConnection
    /** The Organization that the User belongs to, if any. If this is NULL then Customer will be specified. */
    users: UserConnection
    /** Plan the Organization is subscribed to; set once payment is confirmed. */
    currentPlan: Scalars['String']
    /** This field has been deprecated. */
    usesBillingPortal: Scalars['Boolean']
    /** Specifies whether the signed-in User can add a User to the Organization. */
    allowAddUser: Scalars['Boolean']
    /** Specifies whether the signed-in User can add a Customer to the Organization. */
    allowAddCustomer: Scalars['Boolean']
    /** Specifies whether the signed-in User can add a Component to the Organization. */
    allowPublishComponent: Scalars['Boolean']
    /** Specifies whether the signed-in User can add a Credential to the Organization. */
    allowAddCredential: Scalars['Boolean']
    /** Specifies whether the signed-in User can add an Integration to the Organization. */
    allowAddIntegration: Scalars['Boolean']
    /** Specifies whether the signed-in User can add an AlertWebhook to the Organization. */
    allowAddAlertWebhook: Scalars['Boolean']
    /** Specifies whether the signed-in User can add an AlertGroup to the Organization. */
    allowAddAlertGroup: Scalars['Boolean']
    /** Specifies whether the signed-in User can add an External Log stream to the Organization. */
    allowAddExternalLogStream: Scalars['Boolean']
    /** Specifies whether the signed-in User can add a Signing Key to the Organization. */
    allowAddSigningKey: Scalars['Boolean']
    /** Specifies whether the signed-in User can configure Themes for the Organization. */
    allowConfigureThemes: Scalars['Boolean']
    /** The Integrations that belong to the Organization. */
    integrations: IntegrationConnection
    /** The Components that belong to the Organization. */
    components: ComponentConnection
    /** Specifies whether Instances may be enabled based on the utilization allowed by the current Plan. */
    allowEnableInstance: Scalars['Boolean']
    /** Specifies whether Instances may be executed based on the utilization allowed by the current Plan. */
    allowExecuteInstance: Scalars['Boolean']
    /** Specifies whether the current Plan allows configuration for automatic retry of Instance executions. */
    allowExecutionRetryConfig: Scalars['Boolean']
    /** Specifies whether this Plan allows configuration of a Custom Theme for the Organization. */
    allowCustomTheme: Scalars['Boolean']
    /** Specifies whether this Plan allows for creating User Level Configured Instances. */
    allowUserLevelConfig: Scalars['Boolean']
    /** Specifies whether the signed-in User can view Billing information for the Organization. */
    allowViewBilling: Scalars['Boolean']
    /** Specifies whether this Plan allows configuration of External Log Streams for the Organization. */
    allowConfigureExternalLogStreams: Scalars['Boolean']
    /** Specifies whether this Plan allows configuration of Embedded for the Organization. */
    allowConfigureEmbedded: Scalars['Boolean']
    /** Specifies whether the signed-in User's Organization has access to legacy Credentials. */
    allowConfigureCredentials: Scalars['Boolean']
    /** Specifies whether this Plan allows using the Embedded Designer the Organization. */
    allowEmbeddedDesigner: Scalars['Boolean']
    /** Specifies whether this Plan allows for disabling Instance logs and step results. */
    allowDisablingInstanceOutputs: Scalars['Boolean']
    /** This field has been deprecated. */
    overdue: Scalars['Boolean']
    /** Specifies whether the signed-in User can update the Organization. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Organization. */
    allowRemove: Scalars['Boolean']
    __typename: 'Organization'
}


/** Represents the Theme associated with an Organization. */
export interface Theme {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Theme the Color is associated with. */
    colors: ThemeColorConnection
    /** The Theme the Property is associated with. */
    properties: ThemePropertyConnection
    /** Specifies whether the signed-in User can update the Theme. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Theme. */
    allowRemove: Scalars['Boolean']
    __typename: 'Theme'
}


/** Represents a Relay Connection to a collection of ThemeColor objects. */
export interface ThemeColorConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (ThemeColor | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (ThemeColorEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ThemeColorConnection'
}


/** Represents a Color and its various properties used to style the Organization Theme. */
export interface ThemeColor {
    /** The Type of Theme Color. */
    type: ThemeColorType
    /** The Theme Variant this Color will be used with. */
    variant: ThemeColorVariant
    /** The Value of the Theme Color. */
    value: Scalars['String']
    /** The ID of the object */
    id: Scalars['ID']
    /** Specifies whether the signed-in User can update the ThemeColor. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the ThemeColor. */
    allowRemove: Scalars['Boolean']
    __typename: 'ThemeColor'
}


/** An enumeration. */
export type ThemeColorType = 'PRIMARY' | 'SECONDARY' | 'ACCENT' | 'WARNING' | 'ERROR' | 'INFO' | 'SUCCESS' | 'OTHER01' | 'ICON_COLOR' | 'LINK_COLOR' | 'SIDEBAR' | 'BACKGROUND' | 'DEBUG' | 'TRACE' | 'METRIC'


/** An enumeration. */
export type ThemeColorVariant = 'DARK' | 'LIGHT' | 'EMBEDDED_DARK' | 'EMBEDDED_LIGHT'


/** A Relay edge to a related ThemeColor object and a cursor for pagination. */
export interface ThemeColorEdge {
    /** The related object at the end of the edge. */
    node: (ThemeColor | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ThemeColorEdge'
}


/** Represents a Relay Connection to a collection of ThemeProperty objects. */
export interface ThemePropertyConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (ThemeProperty | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (ThemePropertyEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ThemePropertyConnection'
}


/** Represents a Property of a given type used to style the Organization Theme. */
export interface ThemeProperty {
    /** The Type of Theme Property. */
    type: ThemePropertyType
    /** The Value of the Theme Property. */
    value: Scalars['String']
    /** The Theme Variant this Color will be used with. */
    variant: (ThemePropertyVariant | null)
    /** The ID of the object */
    id: Scalars['ID']
    /** Specifies whether the signed-in User can update the ThemeProperty. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the ThemeProperty. */
    allowRemove: Scalars['Boolean']
    __typename: 'ThemeProperty'
}


/** An enumeration. */
export type ThemePropertyType = 'BORDER_RADIUS' | 'DISABLE_ELEVATION'


/** An enumeration. */
export type ThemePropertyVariant = 'DARK' | 'LIGHT' | 'EMBEDDED_DARK' | 'EMBEDDED_LIGHT'


/** A Relay edge to a related ThemeProperty object and a cursor for pagination. */
export interface ThemePropertyEdge {
    /** The related object at the end of the edge. */
    node: (ThemeProperty | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ThemePropertyEdge'
}


/** Represents a Relay Connection to a collection of OrganizationSigningKey objects. */
export interface OrganizationSigningKeyConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (OrganizationSigningKey | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (OrganizationSigningKeyEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'OrganizationSigningKeyConnection'
}


/**
 * Represents an Organization's Signing Keys which are used to allow verification
 * of sessions from external systems.
 */
export interface OrganizationSigningKey {
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** Public key of the Signing Keypair. */
    publicKey: Scalars['String']
    /** Preview of Private Key of the Signing Keypair. */
    privateKeyPreview: Scalars['String']
    /** The timestamp at which the Signing Key was issued. */
    issuedAt: Scalars['DateTime']
    /** Indicates if the public key was imported (as opposed to generated in Prismatic) */
    imported: Scalars['Boolean']
    /** The ID of the object */
    id: Scalars['ID']
    /** Specifies whether the signed-in User can update the OrganizationSigningKey. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the OrganizationSigningKey. */
    allowRemove: Scalars['Boolean']
    __typename: 'OrganizationSigningKey'
}


/** A Relay edge to a related OrganizationSigningKey object and a cursor for pagination. */
export interface OrganizationSigningKeyEdge {
    /** The related object at the end of the edge. */
    node: (OrganizationSigningKey | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'OrganizationSigningKeyEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type OrganizationSigningKeyOrderField = 'CREATED_AT' | 'UPDATED_AT'


/** Represents a Relay Connection to a collection of Credential objects. */
export interface CredentialConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Credential | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (CredentialEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'CredentialConnection'
}


/**
 * Represents a collection of fields and an AuthorizationMethod that together
 * specify a complete set of data necessary for interaction with an external
 * resource by a Component Action as part of an Integration.
 */
export interface Credential {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Organization the Credential belongs to, if any. If NULL then Customer will be specified. */
    org: (Organization | null)
    /** The Customer the Credential belongs to, if any. If NULL then Organization will be specified. */
    customer: (Customer | null)
    /** The name of the Credential. */
    label: Scalars['String']
    /** The specific AuthorizationMethod used by the Credential. */
    authorizationMethod: AuthorizationMethod
    /** Specifies whether the Credential is ready for use by an Instance. */
    readyForUse: Scalars['Boolean']
    /** The timestamp at which the OAuth2 token will automatically be refreshed, if necessary. Only applies to OAuth2 methods where refresh is necessary. */
    refreshAt: (Scalars['DateTime'] | null)
    /** Contains any error message generated by the external authorizing system that occurred during authorization. */
    authorizationError: Scalars['String']
    /** Contains OAuth2 token data if applicable. */
    token: (Scalars['JSONString'] | null)
    /** Contains OAuth2 context data if applicable. */
    context: (Scalars['JSONString'] | null)
    /** A list of CredentialFieldValues that contain the values for the CredentialFields. */
    values: ((CredentialFieldValue | null)[] | null)
    /** Contains the OAuth2 Redirect URI if applicable. */
    redirectUri: (Scalars['String'] | null)
    /** Specifies whether the signed-in User can update the Credential. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Credential. */
    allowRemove: Scalars['Boolean']
    __typename: 'Credential'
}


/**
 * Represents a type of authorization that may be used to authorize an
 * interaction with an external resource by a Component Action.
 */
export interface AuthorizationMethod {
    /** The ID of the object */
    id: Scalars['ID']
    /** A string which uniquely identifies the AuthorizationMethod. */
    key: Scalars['String']
    /** The name of the AuthorizationMethod. */
    label: Scalars['String']
    /** Additional notes about the AuthorizationMethod. */
    description: Scalars['String']
    /** The AuthorizationMethod that the CredentialField is associated to. */
    fields: CredentialFieldConnection
    /** Specifies whether the signed-in User can update the AuthorizationMethod. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the AuthorizationMethod. */
    allowRemove: Scalars['Boolean']
    __typename: 'AuthorizationMethod'
}


/** Represents a Relay Connection to a collection of CredentialField objects. */
export interface CredentialFieldConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (CredentialField | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (CredentialFieldEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'CredentialFieldConnection'
}


/** Represents a specific field on a Credential. */
export interface CredentialField {
    /** The ID of the object */
    id: Scalars['ID']
    /** The AuthorizationMethod that the CredentialField is associated to. */
    authorizationMethod: AuthorizationMethod
    /** A string which uniquely identifies the CredentialField in the context of the AuthorizationMethod. */
    key: Scalars['String']
    /** The name of the CredentialField. */
    label: Scalars['String']
    /** Specifies the data type of the value for the CredentialField. */
    type: CredentialFieldType
    /** Placeholder text that will appear in the CredentialField UI. */
    placeholder: Scalars['String']
    /** Additional notes about the CredentialField. */
    comments: Scalars['String']
    /** Specifies whether the CredentialField requires a value to be valid. */
    required: Scalars['Boolean']
    /** Specifies whether the signed-in User can update the CredentialField. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the CredentialField. */
    allowRemove: Scalars['Boolean']
    __typename: 'CredentialField'
}


/** An enumeration. */
export type CredentialFieldType = 'TEXT' | 'STRING' | 'PASSWORD' | 'KEYVALUE'


/** A Relay edge to a related CredentialField object and a cursor for pagination. */
export interface CredentialFieldEdge {
    /** The related object at the end of the edge. */
    node: (CredentialField | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'CredentialFieldEdge'
}


/** Represents a specific value of a CredentialField. */
export interface CredentialFieldValue {
    /** The name associated with the CredentialField. */
    key: Scalars['String']
    /** The value of the CredentialField. */
    value: (Scalars['String'] | null)
    __typename: 'CredentialFieldValue'
}


/** A Relay edge to a related Credential object and a cursor for pagination. */
export interface CredentialEdge {
    /** The related object at the end of the edge. */
    node: (Credential | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'CredentialEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type CredentialOrderField = 'LABEL' | 'AUTHORIZATION_METHOD' | 'CUSTOMER'


/** Represents a Relay Connection to a collection of Customer objects. */
export interface CustomerConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Customer | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (CustomerEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'CustomerConnection'
}


/** A Relay edge to a related Customer object and a cursor for pagination. */
export interface CustomerEdge {
    /** The related object at the end of the edge. */
    node: (Customer | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'CustomerEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type CustomerOrderField = 'NAME' | 'DESCRIPTION' | 'CREATED_AT' | 'UPDATED_AT'


/** Represents a Relay Connection to a collection of User objects. */
export interface UserConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (User | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (UserEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'UserConnection'
}


/**
 * Represents a user account. A User may belong to an Organization directly or
 * belong to a Customer, which itself belongs to an Organization.
 */
export interface User {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** The URL for the avatar image. */
    avatarUrl: (Scalars['String'] | null)
    /** Allows for mapping an external entity to a Prismatic record. */
    externalId: (Scalars['String'] | null)
    /** The email address associated with the User. */
    email: Scalars['String']
    /** The Organization that the User belongs to, if any. If this is NULL then Customer will be specified. */
    org: (Organization | null)
    /** The Customer the user belongs to, if any. If this is NULL then Organization will be specified. */
    customer: (Customer | null)
    /** The user's preferred name. */
    name: Scalars['String']
    /** The preferred contact phone number for the User. */
    phone: Scalars['String']
    /** The date the User was created. */
    dateJoined: Scalars['DateTime']
    /** Designates whether the User has dark mode activated or not. */
    darkMode: Scalars['Boolean']
    /** Designates whether dark mode should be derived from the operating system. */
    darkModeSyncWithOs: Scalars['Boolean']
    /** Specifies whether the signed-in User can change the Role of the User. */
    allowChangeRoles: Scalars['Boolean']
    /** The Role associated with the User which determines its permissions. */
    role: Role
    /** The URL for the main avatar image that is displayed in Prismatic. */
    appAvatarUrl: (Scalars['String'] | null)
    /** The app name displayed in Prismatic. */
    appName: Scalars['String']
    /** The name displayed for the Marketplace. */
    marketplaceName: Scalars['String']
    featureFlags: Scalars['JSONString']
    /** Specifies whether the signed-in User can update the User. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the User. */
    allowRemove: Scalars['Boolean']
    __typename: 'User'
}


/**
 * Represents an object role, which is just a collection of object permissions
 * that pertain to a specific object for a specific user.
 */
export interface Role {
    /** The ID of the object */
    id: Scalars['ID']
    /** The name of the Role. Must be unique within the context of the AuthObjectType. */
    name: Scalars['String']
    /** Description of the Role. */
    description: Scalars['String']
    /** The type of object that the Role is associated with. */
    objType: AuthObjectType
    /** List of Permissions that the Role provides. */
    permissions: PermissionConnection
    /** An integer that specifies the level of privilege with respect to other Roles. */
    level: Scalars['Int']
    /** Specifies whether the signed-in User can update the Role. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Role. */
    allowRemove: Scalars['Boolean']
    __typename: 'Role'
}


/** Represents a type of object to which permissions may be assigned. */
export interface AuthObjectType {
    /** The ID of the object */
    id: Scalars['ID']
    /** Name of the AuthObjectType. */
    name: Scalars['String']
    /** Specifies whether the signed-in User can update the AuthObjectType. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the AuthObjectType. */
    allowRemove: Scalars['Boolean']
    __typename: 'AuthObjectType'
}


/** Represents a Relay Connection to a collection of Permission objects. */
export interface PermissionConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Permission | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (PermissionEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'PermissionConnection'
}


/**
 * Represents an object permission, which grants some access to a specific
 * user relative to a specific object.
 */
export interface Permission {
    /** The ID of the object */
    id: Scalars['ID']
    /** A unique string identity value. */
    tag: Scalars['String']
    /** Name of the Permission. */
    name: Scalars['String']
    /** Description of the Permission. */
    description: Scalars['String']
    /** The type of object that the Permission is associated with. */
    objType: AuthObjectType
    /** Specifies whether the signed-in User can update the Permission. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Permission. */
    allowRemove: Scalars['Boolean']
    __typename: 'Permission'
}


/** A Relay edge to a related Permission object and a cursor for pagination. */
export interface PermissionEdge {
    /** The related object at the end of the edge. */
    node: (Permission | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'PermissionEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type PermissionOrderField = 'NAME'


/** A Relay edge to a related User object and a cursor for pagination. */
export interface UserEdge {
    /** The related object at the end of the edge. */
    node: (User | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'UserEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type UserOrderField = 'NAME' | 'EMAIL' | 'CREATED_AT' | 'UPDATED_AT' | 'CUSTOMER' | 'ROLE'


/** Represents a Relay Connection to a collection of Integration objects. */
export interface IntegrationConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Integration | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (IntegrationEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'IntegrationConnection'
}


/**
 * Represents the collection of information that defines an integration, to
 * include the sequence of Component Actions, or steps, inputs,
 * the trigger, and other associated data.
 */
export interface Integration {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** The labels that are associated with the object. */
    labels: (Scalars['String'][] | null)
    /** The URL for the avatar image. */
    avatarUrl: (Scalars['String'] | null)
    /** Identifier for this version sequence. */
    versionSequenceId: (Scalars['UUID'] | null)
    /** Marked if this record is the latest version of this sequence. */
    versionIsLatest: Scalars['Boolean']
    /** Sequential number identifying this version. */
    versionNumber: Scalars['Int']
    /** User that created this version. */
    versionCreatedBy: (User | null)
    /** Timestamp of the creation of this version. */
    versionCreatedAt: (Scalars['DateTime'] | null)
    /** Additional comments about this version. */
    versionComment: (Scalars['String'] | null)
    /** Indicates if the version is available for use. */
    versionIsAvailable: Scalars['Boolean']
    /** The name of the Integration. */
    name: Scalars['String']
    /** Additional notes about the Integration. */
    description: (Scalars['String'] | null)
    /** Rich text documentation to accompany the Integration. */
    documentation: (Scalars['String'] | null)
    /** Parent Integration this Integration was forked from, if any */
    parent: (Integration | null)
    /** The Customer the Integration belongs to, if any. If this is NULL then the Integration belongs to the Organization. */
    customer: (Customer | null)
    /** Specifies whether the Integration definition has changes that have not yet been published. */
    hasUnpublishedChanges: Scalars['Boolean']
    /** The Marketplace Tabs available to Customer Users for configuring this Integration. */
    marketplaceTabConfiguration: (Scalars['String'][] | null)
    /** Specifies whether the latest published version of this Integration may be used as a template to create new Integrations. */
    templateConfiguration: IntegrationTemplateConfiguration
    /** Specifies the category of the Integration. */
    category: (Scalars['String'] | null)
    /** Specifies an Overview of the Integration to describe its functionality for use in the Integration Marketplace. */
    overview: (Scalars['String'] | null)
    /** Specifies whether endpoint URLs for Instances of this Integration are unique to the flow, unique to the Instance, or if all Instances share a URL. */
    endpointType: (IntegrationEndpointType | null)
    /** The name of a Flow in the Integration that will be executed as a preprocessing step prior to any other Flow executions. */
    preprocessFlowName: (Scalars['String'] | null)
    /** Data payload for testing the endpoint configuration for this Integration. */
    endpointConfigTestPayload: (Scalars['String'] | null)
    /** Content type of the payload for testing the endpoint configuration for this Integration. */
    endpointConfigTestContentType: (Scalars['String'] | null)
    /** A JSON string of key/value pairs that will be sent as headers when testing the endpoint configuration for this Integration. */
    endpointConfigTestHeaders: (Scalars['JSONString'] | null)
    /** The timestamp at which this Integration was most recently executed as part of an Instance. */
    lastExecutedAt: (Scalars['DateTime'] | null)
    /** Specifies whether this Integration uses User Level Configs. */
    userLevelConfigured: Scalars['Boolean']
    /** Specifies whether the latest published version of this Integration may be used as a template to create new Integrations. */
    useAsTemplate: Scalars['Boolean']
    /** Specifies whether multiple Instances of this Integration may be created from the Marketplace. */
    allowMultipleMarketplaceInstances: Scalars['Boolean']
    /** Specifies whether this Integration is a Code Native Integration. */
    isCodeNative: Scalars['Boolean']
    /** Specifies the external version of this Integration, which can be used to provide semantic versioning. */
    externalVersion: (Scalars['String'] | null)
    requiredConfigVariables: RequiredConfigVariableConnection
    /** The Integration that has been deployed for the Instance. */
    instances: InstanceConnection
    /** The Integration of which the IntegrationFlow is a part. */
    flows: IntegrationFlowConnection
    /** The Integration to which the IntegrationAction is associated via the IntegrationFlow. */
    actions: IntegrationActionConnection
    /** Specifies whether the signed-in User can manage Attachments related to this record. */
    allowManageAttachments: (Scalars['Boolean'] | null)
    /** A JSON list of objects where each object has a key for name and URL that together describe the Attachment. */
    attachments: ((Attachment | null)[] | null)
    /** The Versions of the Integration that are available. */
    versions: VersionConnection
    /** Sequence of versions of this Integration */
    versionSequence: IntegrationConnection
    /** Components associated with this Integration */
    components: ComponentConnection
    /** System Instance backing this Integration. */
    systemInstance: Instance
    /** Config Variables that are used for testing during Integration design. */
    testConfigVariables: InstanceConfigVariableConnection
    /** Specifies whether the signed-in User can publish the Integration. */
    allowPublish: Scalars['Boolean']
    /** Specifies whether the signed-in User can fork the Integration. */
    allowFork: Scalars['Boolean']
    /** The YAML that is the declarative definition for the Integration. Suitable for using to re-import the Integration. */
    definition: (Scalars['String'] | null)
    /** Specifies whether an Integration will be available in the Integration Store and if the Integration is deployable by a Customer User. */
    storeConfiguration: (IntegrationStoreConfiguration | null)
    /** Specifies whether an Integration will be available in the Integration Marketplace and if the Integration is deployable by a Customer User. */
    marketplaceConfiguration: MarketplaceConfiguration
    /** Specifies whether the Integration can be deployed by the signed-in User. */
    isCustomerDeployable: (Scalars['Boolean'] | null)
    /** The URL of the endpoint that allows testing the endpoint configuration of the Integration. */
    endpointConfigTestUrl: Scalars['String']
    /** A JSON string that represents deployment configuration pages. */
    configPages: Scalars['JSONString']
    /** Specifies whether the Integration uses outdated Components */
    hasOutdatedComponents: Scalars['Boolean']
    /** Specifies whether the signed-in User can update the Integration. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Integration. */
    allowRemove: Scalars['Boolean']
    /** Object data at specified version */
    versionAt: (Integration | null)
    /** Indicates whether the record is starred by the signed-in User. */
    starred: (Scalars['Boolean'] | null)
    __typename: 'Integration'
}


/** An enumeration. */
export type IntegrationTemplateConfiguration = 'NOT_AVAILABLE' | 'AVAILABLE' | 'ORG_AVAILABLE' | 'CUSTOMER_AVAILABLE'


/** An enumeration. */
export type IntegrationEndpointType = 'FLOW_SPECIFIC' | 'INSTANCE_SPECIFIC' | 'SHARED_INSTANCE'


/** Represents a Relay Connection to a collection of RequiredConfigVariable objects. */
export interface RequiredConfigVariableConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (RequiredConfigVariable | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (RequiredConfigVariableEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'RequiredConfigVariableConnection'
}


/** Represents a Required Config Variable (with optional default value) associated with an Integration. */
export interface RequiredConfigVariable {
    /** The ID of the object */
    id: Scalars['ID']
    integration: Integration
    /** Represents identity across different Required Config Variable versions. Not intended to be used directly by end users, as the implementation may change at any time. */
    stableId: (Scalars['UUID'] | null)
    /** The Key for the Required Config Variable. Referred to as 'Name' in the UI. */
    key: Scalars['String']
    /** A user-provided value that represents identity across config var key renames. */
    stableKey: (Scalars['String'] | null)
    /** The header text that will appear in the UI above the Required Config Variable fields. */
    header: (Scalars['String'] | null)
    /** This field has been deprecated. */
    hasDivider: Scalars['Boolean']
    /** The intended datatype of the Required Config Var, used to choose an appropriate UI. */
    dataType: RequiredConfigVariableDataType
    /** The Connection type used by this Required Config Variable. */
    connection: (Connection | null)
    /** The Connection Template from which this config var was derived. */
    connectionTemplate: (ConnectionTemplate | null)
    /** The valid choices when the Required Config Var uses the 'picklist' dataType. */
    pickList: (Scalars['String'][] | null)
    /** The schedule type to show in the UI when the Required Config Var uses the 'schedule' dataType. */
    scheduleType: (RequiredConfigVariableScheduleType | null)
    /** An optional timezone property for when the Required Config Var uses the 'schedule' dataType. */
    timeZone: (Scalars['String'] | null)
    /** The language to use in the code editor UI when the Required Config Var uses the 'code' dataType. */
    codeLanguage: (RequiredConfigVariableCodeLanguage | null)
    /** Additional notes about the Required Config Var. */
    description: (Scalars['String'] | null)
    /** The UI location in which this Required Config Var will appear relative to the other Required Config Vars for the Integration. */
    sortOrder: (Scalars['Int'] | null)
    /** Specifies whether the Required Config Variable is only viewable by Organization Users. */
    orgOnly: (Scalars['Boolean'] | null)
    /** The type of collection, if the value is meant to represent a collection of values for this RequiredConfigVariable. */
    collectionType: (RequiredConfigVariableCollectionType | null)
    /** The Component Data Source used by this Required Config Variable. */
    dataSource: (Action | null)
    /** Contains arbitrary metadata about this Required Config Var. */
    meta: (Scalars['JSONString'] | null)
    /** Specifies whether this Required Config Variable uses values from User Level Configs. */
    userLevelConfigured: Scalars['Boolean']
    /** The Required Config Var for which the Authorization Method is a valid type of Credential. */
    credentialTypes: RequiredConfigVariableCredentialTypeConnection
    /** The default value for the Required Config Variable if none is specified on the Instance. */
    defaultValue: (Scalars['String'] | null)
    /** The collection of Expressions that serve as inputs to the RequiredConfigVariable. */
    inputs: (ExpressionConnection | null)
    /** Specifies whether the signed-in User can update the RequiredConfigVariable. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the RequiredConfigVariable. */
    allowRemove: Scalars['Boolean']
    __typename: 'RequiredConfigVariable'
}


/** An enumeration. */
export type RequiredConfigVariableDataType = 'STRING' | 'DATE' | 'TIMESTAMP' | 'PICKLIST' | 'SCHEDULE' | 'CODE' | 'CREDENTIAL' | 'BOOLEAN' | 'NUMBER' | 'CONNECTION' | 'OBJECTSELECTION' | 'OBJECTFIELDMAP' | 'JSONFORM'


/** Represents a Connection that is available on a Component. */
export interface Connection {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Component to which this Connection is associated. */
    component: Component
    /** A string which uniquely identifies the Connection in the context of the Action. */
    key: Scalars['String']
    /** Specifies this Connection is the default for the Component. */
    default: Scalars['Boolean']
    /** Ordering of the Connection. */
    order: (Scalars['Int'] | null)
    /** The name of the Connection. */
    label: Scalars['String']
    /** Additional notes about the Connection. */
    comments: (Scalars['String'] | null)
    /** The OAuth2 flow type, if any, for this Connection. */
    oauth2Type: (ConnectionOauth2Type | null)
    /** The Connection to which this InputField is associated, if any. */
    inputs: InputFieldConnection
    /** The Connection from which this template is structured. */
    templates: ConnectionTemplateConnection
    /** The URL that specifies where the Connection icon exists. */
    iconUrl: (Scalars['String'] | null)
    /** Specifies whether the signed-in User can update the Connection. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Connection. */
    allowRemove: Scalars['Boolean']
    __typename: 'Connection'
}


/**
 * Represents a package of related functions, or Actions, that can be added to
 * an Integration.
 */
export interface Component {
    /** The ID of the object */
    id: Scalars['ID']
    /** The labels that are associated with the object. */
    labels: (Scalars['String'][] | null)
    /** Identifier for this version sequence. */
    versionSequenceId: (Scalars['UUID'] | null)
    /** Marked if this record is the latest version of this sequence. */
    versionIsLatest: Scalars['Boolean']
    /** Sequential number identifying this version. */
    versionNumber: Scalars['Int']
    /** User that created this version. */
    versionCreatedBy: (User | null)
    /** Timestamp of the creation of this version. */
    versionCreatedAt: (Scalars['DateTime'] | null)
    /** Additional comments about this version. */
    versionComment: (Scalars['String'] | null)
    /** Indicates if the version is available for use. */
    versionIsAvailable: Scalars['Boolean']
    /** The name of the Component. */
    label: Scalars['String']
    /** Additional notes about the Component. */
    description: Scalars['String']
    /** A string that uniquely identifies the Component. */
    key: Scalars['String']
    /** Specifies whether the Component is publicly available or whether it's private to the Organization. */
    public: Scalars['Boolean']
    /** The Customer the Component belongs to, if any. If this is NULL then the Component belongs to the Organization. */
    customer: (Customer | null)
    /** The hex-encoded SHA1 hash of the uploaded Component package. */
    signature: Scalars['String']
    /** The URL associated with the documentation of a Component. */
    documentationUrl: (Scalars['String'] | null)
    /** A string that specifies the category of the Component. */
    category: (Scalars['String'] | null)
    /** A combination of the Component label, Component description, and every Action label and Action description for the Component to be used for searching. */
    searchTerms: (Scalars['String'] | null)
    /** Specifies whether the Component was created inline as part of a Code Native Integration. */
    forCodeNativeIntegration: Scalars['Boolean']
    /** The Component to which this Action is associated. */
    actions: ActionConnection
    /** The Component to which this Connection is associated. */
    connections: ConnectionConnection
    /** Specifies whether the signed-in User can manage Attachments related to this record. */
    allowManageAttachments: (Scalars['Boolean'] | null)
    /** A JSON list of objects where each object has a key for name and URL that together describe the Attachment. */
    attachments: ((Attachment | null)[] | null)
    /** The Versions of the Component that are available. */
    versions: (VersionConnection | null)
    /** Sequence of versions of this Component */
    versionSequence: ComponentConnection
    /** The URL that specifies where the Component icon exists. */
    iconUrl: (Scalars['String'] | null)
    /** Specifies whether the signed-in User can update the Component. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Component. */
    allowRemove: Scalars['Boolean']
    /** Object data at specified version */
    versionAt: (Component | null)
    /** Indicates whether the record is starred by the signed-in User. */
    starred: (Scalars['Boolean'] | null)
    __typename: 'Component'
}


/** Represents a Relay Connection to a collection of Action objects. */
export interface ActionConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Action | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (ActionEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ActionConnection'
}


/** Represents an action that is available on a Component. */
export interface Action {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Component to which this Action is associated. */
    component: (Component | null)
    /** A string that uniquely identifies this Action within the context of the Component. */
    key: Scalars['String']
    /** Specifies whether the Action requires authorization to function. */
    authorizationRequired: (Scalars['Boolean'] | null)
    /** The AuthorizationMethods that are supported by the Action. */
    authorizationMethods: AuthorizationMethodConnection
    /** The name of the Action. */
    label: Scalars['String']
    /** Additional notes about the Action. */
    description: Scalars['String']
    /** Notes which may provide insight on the intended use of the Action. */
    directions: (Scalars['String'] | null)
    /** Specifies whether the Action is important and/or commonly used. */
    important: Scalars['Boolean']
    /** Specifies whether the Action will terminate Instance execution. */
    terminateExecution: Scalars['Boolean']
    /** Specifies whether an Action will break out of a loop. */
    breakLoop: (Scalars['Boolean'] | null)
    /** Specifies whether the Action will allow Conditional Branching. */
    allowsBranching: Scalars['Boolean']
    /** Specifies whether the Action is a Trigger. */
    isTrigger: Scalars['Boolean']
    /** A combination of an action's text metadata to be used in search functionality. */
    searchTerms: (Scalars['String'] | null)
    /** The static branch names associated with an Action. */
    staticBranchNames: (Scalars['String'][] | null)
    /** A string that associates an Input with Dynamic Branching. */
    dynamicBranchInput: Scalars['String']
    /** An example of the returned payload of an Action. */
    examplePayload: (Scalars['JSONString'] | null)
    /** Specifies support for synchronous responses to an Integration webhook request. */
    synchronousResponseSupport: (ActionSynchronousResponseSupport | null)
    /** Specifies support for triggering an Integration on a recurring schedule. */
    scheduleSupport: (ActionScheduleSupport | null)
    /** Specifies whether the Action is a commonly used Trigger. */
    isCommonTrigger: (Scalars['Boolean'] | null)
    /** Specifies whether the Action is a Data Source. */
    isDataSource: Scalars['Boolean']
    /** Specifies the type of the resulting data from the data source. */
    dataSourceType: (ActionDataSourceType | null)
    /** The Data Source in this Component which can provide additional details about the content for this Data Source, such as example values when selecting particular API object fields. */
    detailDataSource: (Action | null)
    /** Specifies whether the Action, if it is a Trigger, has an Instance Deploy handler function defined. */
    hasOnInstanceDeploy: Scalars['Boolean']
    /** Specifies whether the Action, if it is a Trigger, has an Instance Delete handler function defined. */
    hasOnInstanceDelete: Scalars['Boolean']
    /** The Action to which this InputField is associated, if any. */
    inputs: InputFieldConnection
    /** Specifies whether the signed-in User can update the Action. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Action. */
    allowRemove: Scalars['Boolean']
    __typename: 'Action'
}


/** Represents a Relay Connection to a collection of AuthorizationMethod objects. */
export interface AuthorizationMethodConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (AuthorizationMethod | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (AuthorizationMethodEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'AuthorizationMethodConnection'
}


/** A Relay edge to a related AuthorizationMethod object and a cursor for pagination. */
export interface AuthorizationMethodEdge {
    /** The related object at the end of the edge. */
    node: (AuthorizationMethod | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'AuthorizationMethodEdge'
}


/** An enumeration. */
export type ActionSynchronousResponseSupport = 'INVALID' | 'VALID' | 'REQUIRED'


/** An enumeration. */
export type ActionScheduleSupport = 'INVALID' | 'VALID' | 'REQUIRED'


/** An enumeration. */
export type ActionDataSourceType = 'STRING' | 'DATE' | 'TIMESTAMP' | 'PICKLIST' | 'SCHEDULE' | 'CODE' | 'CREDENTIAL' | 'BOOLEAN' | 'NUMBER' | 'CONNECTION' | 'OBJECTSELECTION' | 'OBJECTFIELDMAP' | 'JSONFORM'


/** Represents a Relay Connection to a collection of InputField objects. */
export interface InputFieldConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (InputField | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (InputFieldEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'InputFieldConnection'
}


/**
 * Represents an input field for a Component Action. Defines the basic
 * properties that must be satisfied by the input data.
 */
export interface InputField {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Action to which this InputField is associated, if any. */
    action: (Action | null)
    /** The Connection to which this InputField is associated, if any. */
    connection: (Connection | null)
    /** A string which uniquely identifies the InputField in the context of the Action. */
    key: Scalars['String']
    /** The name of the InputField. */
    label: Scalars['String']
    /** Label used for the Keys of a 'keyvaluelist' collection. */
    keyLabel: (Scalars['String'] | null)
    /** Specifies the type of data the InputField handles. */
    type: InputFieldType
    /** Specifies the type of collection to use for storing input values, if applicable. */
    collection: (InputFieldCollection | null)
    /** Placeholder text that will appear in the InputField UI. */
    placeholder: (Scalars['String'] | null)
    /** The default value for the InputField. */
    default: (Scalars['JSONOrString'] | null)
    /** Additional notes about the InputField. */
    comments: (Scalars['String'] | null)
    /** Example valid input for the InputField. */
    example: (Scalars['String'] | null)
    /** Specifies whether the InputField is required by the Action. */
    required: Scalars['Boolean']
    /** Specifies whether the InputField is shown in the Designer. */
    shown: Scalars['Boolean']
    /** Dictates how possible choices are provided for this InputField. */
    model: (Scalars['JSONString'] | null)
    /** Language to use for the Code Field. */
    language: (Scalars['String'] | null)
    /** Specifies whether the signed-in User can update the InputField. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the InputField. */
    allowRemove: Scalars['Boolean']
    __typename: 'InputField'
}


/** An enumeration. */
export type InputFieldType = 'STRING' | 'TEXT' | 'PASSWORD' | 'BOOLEAN' | 'CODE' | 'DATA' | 'CONDITIONAL' | 'CONNECTION' | 'OBJECTSELECTION' | 'OBJECTFIELDMAP' | 'JSONFORM' | 'DYNAMICOBJECTSELECTION' | 'DYNAMICFIELDSELECTION'


/** An enumeration. */
export type InputFieldCollection = 'VALUELIST' | 'KEYVALUELIST'


/** A Relay edge to a related InputField object and a cursor for pagination. */
export interface InputFieldEdge {
    /** The related object at the end of the edge. */
    node: (InputField | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'InputFieldEdge'
}


/** A Relay edge to a related Action object and a cursor for pagination. */
export interface ActionEdge {
    /** The related object at the end of the edge. */
    node: (Action | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ActionEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type ActionOrderField = 'LABEL' | 'IS_TRIGGER' | 'IS_COMMON_TRIGGER' | 'IS_DATA_SOURCE'


/** Represents a Relay Connection to a collection of Connection objects. */
export interface ConnectionConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Connection | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (ConnectionEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ConnectionConnection'
}


/** A Relay edge to a related Connection object and a cursor for pagination. */
export interface ConnectionEdge {
    /** The related object at the end of the edge. */
    node: (Connection | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ConnectionEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type ConnectionOrderField = 'ORDER' | 'LABEL' | 'KEY'


/** Represents the collection of data that defines an Attachment. */
export interface Attachment {
    /** The name of the Attachment. */
    name: Scalars['String']
    /** The URL where the Attachment is located. */
    url: Scalars['String']
    __typename: 'Attachment'
}


/** Represents a Relay Connection to a collection of Version objects. */
export interface VersionConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** Contains the nodes in this connection. */
    edges: (VersionEdge | null)[]
    /** List of nodes in this connection */
    nodes: (Version | null)[]
    /** Total count of versions */
    totalCount: Scalars['Int']
    __typename: 'VersionConnection'
}


/** A Relay edge containing a `Version` and its cursor. */
export interface VersionEdge {
    /** The item at the end of the edge */
    node: (Version | null)
    /** A cursor for use in pagination */
    cursor: Scalars['String']
    __typename: 'VersionEdge'
}


/** Represents a specific version of an object that implements the Prismatic versioning protocol. */
export interface Version {
    /** The ID of the object */
    id: Scalars['ID']
    /** The sequential number that corresponds to the Version. */
    versionNumber: (Scalars['Int'] | null)
    /** User that published this Version. */
    publishedBy: (User | null)
    /** The timestamp when the Version was published. */
    publishedAt: Scalars['DateTime']
    /** Additional commentary/description of this Version. */
    comment: (Scalars['String'] | null)
    /** Specifies whether the Version is available for use. */
    isAvailable: (Scalars['Boolean'] | null)
    __typename: 'Version'
}


/** An enumeration. */
export type VersionOrderDirection = 'ASC' | 'DESC'


/** Represents the fields by which collections of the related type may be ordered. */
export type VersionOrderField = 'PUBLISHED_AT' | 'PUBLISHED_BY' | 'VERSION_NUMBER'


/** Represents a Relay Connection to a collection of Component objects. */
export interface ComponentConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Component | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (ComponentEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ComponentConnection'
}


/** A Relay edge to a related Component object and a cursor for pagination. */
export interface ComponentEdge {
    /** The related object at the end of the edge. */
    node: (Component | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ComponentEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type ComponentOrderField = 'LABEL' | 'DESCRIPTION' | 'CATEGORY' | 'CUSTOMER' | 'VERSION_CREATED_AT' | 'VERSION_NUMBER'


/** An enumeration. */
export type ConnectionOauth2Type = 'AUTHORIZATION_CODE' | 'CLIENT_CREDENTIALS'


/** Represents a Relay Connection to a collection of ConnectionTemplate objects. */
export interface ConnectionTemplateConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (ConnectionTemplate | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (ConnectionTemplateEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ConnectionTemplateConnection'
}

export interface ConnectionTemplate {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Connection from which this template is structured. */
    connection: Connection
    /** The name of this template. */
    name: Scalars['String']
    /** The template that this input is associated with. */
    inputFieldTemplates: InputFieldTemplateConnection
    /** Returns a list of the keys that are preset by this template. */
    templatedInputKeys: ((Scalars['String'] | null)[] | null)
    /** Returns a list of deployed customer instances that are leveraging this template. */
    instances: InstanceConnection
    /** Indicates template is in use on an Instance. */
    hasDeployedInstances: Scalars['Boolean']
    /** Specifies whether the signed-in User can update the ConnectionTemplate. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the ConnectionTemplate. */
    allowRemove: Scalars['Boolean']
    __typename: 'ConnectionTemplate'
}


/** Represents a Relay Connection to a collection of InputFieldTemplate objects. */
export interface InputFieldTemplateConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (InputFieldTemplate | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (InputFieldTemplateEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'InputFieldTemplateConnection'
}

export interface InputFieldTemplate {
    /** The ID of the object */
    id: Scalars['ID']
    /** The template that this input is associated with. */
    connectionTemplate: ConnectionTemplate
    /** The InputField that this template is associated with. */
    inputField: InputField
    /** The preset value for this input. */
    value: (Scalars['String'] | null)
    /** Specifies whether the signed-in User can update the InputFieldTemplate. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the InputFieldTemplate. */
    allowRemove: Scalars['Boolean']
    __typename: 'InputFieldTemplate'
}


/** A Relay edge to a related InputFieldTemplate object and a cursor for pagination. */
export interface InputFieldTemplateEdge {
    /** The related object at the end of the edge. */
    node: (InputFieldTemplate | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'InputFieldTemplateEdge'
}


/** Represents a Relay Connection to a collection of Instance objects. */
export interface InstanceConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Instance | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (InstanceEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'InstanceConnection'
}


/** A Relay edge to a related Instance object and a cursor for pagination. */
export interface InstanceEdge {
    /** The related object at the end of the edge. */
    node: (Instance | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'InstanceEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type InstanceOrderField = 'NAME' | 'DESCRIPTION' | 'CUSTOMER' | 'INTEGRATION' | 'VERSION' | 'CATEGORY' | 'ENABLED' | 'CREATED_AT' | 'UPDATED_AT' | 'LAST_EXECUTED_AT'


/** A Relay edge to a related ConnectionTemplate object and a cursor for pagination. */
export interface ConnectionTemplateEdge {
    /** The related object at the end of the edge. */
    node: (ConnectionTemplate | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ConnectionTemplateEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type ConnectionTemplateOrderField = 'NAME'


/** An enumeration. */
export type RequiredConfigVariableScheduleType = 'NONE' | 'CUSTOM' | 'MINUTE' | 'HOUR' | 'DAY' | 'WEEK'


/** An enumeration. */
export type RequiredConfigVariableCodeLanguage = 'XML' | 'HTML' | 'JSON'


/** An enumeration. */
export type RequiredConfigVariableCollectionType = 'VALUELIST' | 'KEYVALUELIST'


/** Represents a Relay Connection to a collection of RequiredConfigVariableCredentialType objects. */
export interface RequiredConfigVariableCredentialTypeConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (RequiredConfigVariableCredentialType | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (RequiredConfigVariableCredentialTypeEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'RequiredConfigVariableCredentialTypeConnection'
}


/** Represents a valid Credential Type for a Required Config Variable. */
export interface RequiredConfigVariableCredentialType {
    /** The Required Config Var for which the Authorization Method is a valid type of Credential. */
    requiredConfigVariable: RequiredConfigVariable
    /** The Authorization Method that represents a valid Credential type for the Required Config Var. */
    authorizationMethod: AuthorizationMethod
    /** The ID of the object */
    id: Scalars['ID']
    /** Specifies whether the signed-in User can update the RequiredConfigVariableCredentialType. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the RequiredConfigVariableCredentialType. */
    allowRemove: Scalars['Boolean']
    __typename: 'RequiredConfigVariableCredentialType'
}


/** A Relay edge to a related RequiredConfigVariableCredentialType object and a cursor for pagination. */
export interface RequiredConfigVariableCredentialTypeEdge {
    /** The related object at the end of the edge. */
    node: (RequiredConfigVariableCredentialType | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'RequiredConfigVariableCredentialTypeEdge'
}


/** Represents a Relay Connection to a collection of Expression objects. */
export interface ExpressionConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** Contains the nodes in this connection. */
    edges: (ExpressionEdge | null)[]
    /** List of nodes in this connection. */
    nodes: (Expression | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ExpressionConnection'
}


/** A Relay edge containing a `Expression` and its cursor. */
export interface ExpressionEdge {
    /** The item at the end of the edge */
    node: (Expression | null)
    /** A cursor for use in pagination */
    cursor: Scalars['String']
    __typename: 'ExpressionEdge'
}


/** Represents an expression that is used to reference Configuration Variables and results from previous steps. */
export interface Expression {
    /** The ID of the object */
    id: Scalars['ID']
    /** The name of the Expression. */
    name: Scalars['String']
    /** The type of the Expression. */
    type: ExpressionType
    /** The value of the Expression. */
    value: Scalars['String']
    /** An object that contains arbitrary meta data about an Expression. */
    meta: (Scalars['JSONString'] | null)
    /** Specifies whether the signed-in User can remove the Expression. */
    allowRemove: Scalars['Boolean']
    /** Specifies whether the signed-in User can update the Expression. */
    allowUpdate: Scalars['Boolean']
    __typename: 'Expression'
}


/** An enumeration. */
export type ExpressionType = 'VALUE' | 'COMPLEX' | 'REFERENCE' | 'TEMPLATE' | 'CONFIGVAR'


/** A Relay edge to a related RequiredConfigVariable object and a cursor for pagination. */
export interface RequiredConfigVariableEdge {
    /** The related object at the end of the edge. */
    node: (RequiredConfigVariable | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'RequiredConfigVariableEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type RequiredConfigVariableOrderField = 'SORT_ORDER'


/** Represents a Relay Connection to a collection of IntegrationFlow objects. */
export interface IntegrationFlowConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (IntegrationFlow | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (IntegrationFlowEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'IntegrationFlowConnection'
}


/**
 * Relates an Integration to a hierarchical structure of Component Actions
 * that define the behavior of one of potentially several workflows that
 * comprise the Integration.
 */
export interface IntegrationFlow {
    /** The ID of the object */
    id: Scalars['ID']
    /** Represents identity across different integration versions. Not intended to be used directly by end users, as the implementation may change at any time. */
    stableId: (Scalars['UUID'] | null)
    /** The displayed name of the IntegrationFlow. */
    name: Scalars['String']
    /** A user-provided value that represents identity across multiple integration versions and across flow renames. */
    stableKey: (Scalars['String'] | null)
    /** Additional notes about the IntegrationFlow. */
    description: (Scalars['String'] | null)
    /** The order in which the IntegrationFlow will appear in the UI. */
    sortOrder: Scalars['Int']
    /** Specifies whether responses to Executions of this IntegrationFlow are synchronous. Responses are asynchronous by default. */
    isSynchronous: Scalars['Boolean']
    /** Specifies the maximum number of retry attempts that will be performed for Executions of this IntegrationFlow. */
    retryMaxAttempts: Scalars['Int']
    /** Specifies the delay in minutes between retry attempts of Executions of this IntegrationFlow. */
    retryDelayMinutes: Scalars['Int']
    /** Specifies whether to use exponential backoff in scheduling retries of Executions of this IntegrationFlow. */
    retryUsesExponentialBackoff: Scalars['Boolean']
    /** The timestamp at which this IntegrationFlow was most recently executed as part of an Instance. */
    lastExecutedAt: (Scalars['DateTime'] | null)
    /** Specifies the security configuration to use for the endpoint of this IntegrationFlow. */
    endpointSecurityType: IntegrationFlowEndpointSecurityType
    /** The IntegrationAction that is the trigger for the Integration Flow. */
    trigger: IntegrationAction
    /** The URL of the endpoint that triggers execution of the Integration Flow in the Test Runner. */
    testUrl: Scalars['String']
    /** Data payload for testing this Integration Flow. */
    testPayload: (Scalars['String'] | null)
    /** The Execution Results that were generated during testing. */
    testExecutionResults: InstanceExecutionResultConnection
    /** Content type of the payload for testing this Integration Flow. */
    testContentType: (Scalars['String'] | null)
    /** Headers of the request for testing this Integration Flow. */
    testHeaders: (Scalars['JSONString'] | null)
    /** Specifies a reference to the data to use as a Unique Request ID for retry request cancellation. */
    retryUniqueRequestIdField: (Expression | null)
    /** The API key(s) to use for the endpoint of this IntegrationFlow when the endpoint security type is 'organization'. */
    organizationApiKeys: ((Scalars['String'] | null)[] | null)
    /** Specifies whether the signed-in User can update the IntegrationFlow. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the IntegrationFlow. */
    allowRemove: Scalars['Boolean']
    __typename: 'IntegrationFlow'
}


/** An enumeration. */
export type IntegrationFlowEndpointSecurityType = 'UNSECURED' | 'CUSTOMER_OPTIONAL' | 'CUSTOMER_REQUIRED' | 'ORGANIZATION'


/** Represents an association of a Component Action to an Integration. */
export interface IntegrationAction {
    /** The ID of the object */
    id: Scalars['ID']
    /** The displayed name of the IntegrationAction. */
    name: Scalars['String']
    /** A user-provided value that represents identity across multiple integration versions and across step renames. */
    stableKey: (Scalars['String'] | null)
    /** A brief description of the IntegrationAction. */
    description: Scalars['String']
    /** The Integration to which the IntegrationAction is associated via the IntegrationFlow. */
    integration: Integration
    /** The specific Component Action that is being associated to the IntegrationFlow. */
    action: Action
    /** The type of error handling to use when failures occur for this IntegrationAction. */
    errorHandlerType: (IntegrationActionErrorHandlerType | null)
    /** Specifies the maximum number of retry attempts that will be performed for failures of this IntegrationAction. */
    retryMaxAttempts: (Scalars['Int'] | null)
    /** Specifies the delay in seconds between retry attempts for failures of this IntegrationAction. */
    retryDelaySeconds: (Scalars['Int'] | null)
    /** Specifies whether to use exponential backoff in scheduling retries for failures of this IntegrationAction. */
    retryUsesExponentialBackoff: (Scalars['Boolean'] | null)
    /** Specifies whether to fail the Execution when the final retry attempt fails for this IntegrationAction, or whether to ignore and continue. */
    retryIgnoreFinalError: (Scalars['Boolean'] | null)
    /** The collection of Expressions that serve as inputs to the IntegrationAction. */
    inputs: ExpressionConnection
    /** Specifies whether the signed-in User can update the IntegrationAction. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the IntegrationAction. */
    allowRemove: Scalars['Boolean']
    __typename: 'IntegrationAction'
}


/** An enumeration. */
export type IntegrationActionErrorHandlerType = 'FAIL' | 'IGNORE' | 'RETRY'


/** Represents a Relay Connection to a collection of InstanceExecutionResult objects. */
export interface InstanceExecutionResultConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (InstanceExecutionResult | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (InstanceExecutionResultEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'InstanceExecutionResultConnection'
}


/** Represents the set of results of each step of execution for an Instance. */
export interface InstanceExecutionResult {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Instance for which a specific InstanceFlowConfig is being executed. */
    instance: (Instance | null)
    /** The specific InstanceFlowConfig for the Instance being executed. */
    flowConfig: (InstanceFlowConfig | null)
    /** The timestamp at which execution started. */
    startedAt: Scalars['DateTime']
    /** The timestamp at which execution ended. */
    endedAt: (Scalars['DateTime'] | null)
    /** Any error message that occurred as part of Instance execution. */
    error: (Scalars['String'] | null)
    /** The Execution for which this Execution is a retry attempt. */
    retryForExecution: (InstanceExecutionResult | null)
    /** The number of times that this Execution has been retried. */
    retryCount: (Scalars['Int'] | null)
    /** The maximum number of times that this Execution may be retried before failing. */
    maxRetryCount: (Scalars['Int'] | null)
    /** The timestamp at which the next scheduled retry will occur. */
    retryNextAt: (Scalars['DateTime'] | null)
    /** A Unique Request ID to use for retry request cancellation. */
    retryUniqueRequestId: (Scalars['String'] | null)
    /** The Execution with a matching Unique Request ID that caused this Execution to be canceled. */
    canceledByExecution: (InstanceExecutionResult | null)
    /** The number of MB of memory allocated by the runtime to execute this Execution. */
    allocatedMemoryMb: (Scalars['Int'] | null)
    /** The spend for this Execution in MB-secs. */
    spendMbSecs: (Scalars['Int'] | null)
    /** The number of steps in this Execution. */
    stepCount: (Scalars['Int'] | null)
    /** The specific Integration that is associated with this Execution. */
    integration: (Integration | null)
    /** The specific IntegrationFlow that is associated with this Execution. */
    flow: (IntegrationFlow | null)
    /** Specifies whether Execution was created as part of testing. */
    isTestExecution: Scalars['Boolean']
    /** The Execution for which this Execution is a replay. */
    replayForExecution: (InstanceExecutionResult | null)
    /** The type of origin that this execution was triggered from. */
    invokeType: (InstanceExecutionResultInvokeType | null)
    /** The Execution for which this Execution is a retry attempt. */
    retryAttempts: InstanceExecutionResultConnection
    /** The Execution for which this Execution is a replay. */
    replays: InstanceExecutionResultConnection
    /** The InstanceExecutionResult to which the InstanceStepResult is associated. */
    stepResults: InstanceStepResultConnection
    /** The specific InstanceExecutionResult that is associated with the Log entry. */
    logs: LogConnection
    /** The status of the Instance execution. */
    status: ExecutionStatus
    /** The presigned URL to download the request payload that was sent to invoke Instance execution. */
    requestPayloadUrl: Scalars['String']
    /** The presigned URL to fetch metadata of the request payload that was sent to invoke Instance execution. */
    requestPayloadMetadataUrl: Scalars['String']
    /** The presigned URL to download the response payload that was received from the Instance execution. */
    responsePayloadUrl: Scalars['String']
    /** The presigned URL to fetch metadata of the response payload that was received from the Instance execution. */
    responsePayloadMetadataUrl: Scalars['String']
    /** Specifies whether the signed-in User can update the InstanceExecutionResult. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the InstanceExecutionResult. */
    allowRemove: Scalars['Boolean']
    __typename: 'InstanceExecutionResult'
}


/**
 * Represents the configuration options for a particular IntegrationFlow as it
 * relates to an Instance.
 */
export interface InstanceFlowConfig {
    /** The ID of the object */
    id: Scalars['ID']
    /** The configuration for the IntegrationFlow associated with the Instance. */
    instance: Instance
    /** The IntegrationFlow for which configuration is being specified for the associated Instance. */
    flow: IntegrationFlow
    /** Content type of the payload for testing the IntegrationFlow associated with the Instance. */
    testContentType: (Scalars['String'] | null)
    /** Specifies whether the latest execution of this InstanceFlowConfig resulted in a failure. */
    inFailedState: Scalars['Boolean']
    /** The timestamp at which the InstanceFlowConfig was most recently executed. */
    lastExecutedAt: (Scalars['DateTime'] | null)
    /** The IntegrationFlow that is being monitored by the AlertMonitor. */
    monitors: AlertMonitorConnection
    /** The specific InstanceFlowConfig for the Instance being executed. */
    executionResults: InstanceExecutionResultConnection
    /** The IntegrationFlow which created the Log entry. */
    logs: LogConnection
    /** The URL of the endpoint that triggers execution of the InstanceFlowConfig. */
    webhookUrl: Scalars['String']
    /** An optional collection of API Keys any of which, when specified, will be required as a header value in all requests to trigger execution of this IntegrationFlow for the associated Instance. */
    apiKeys: ((Scalars['String'] | null)[] | null)
    /** Data payload for testing this IntegrationFlow associated with the Instance. */
    testPayload: (Scalars['String'] | null)
    /** Headers for testing this IntegrationFlow associated with the Instance. */
    testHeaders: (Scalars['JSONString'] | null)
    /** Specifies whether the signed-in User can update the InstanceFlowConfig. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the InstanceFlowConfig. */
    allowRemove: Scalars['Boolean']
    __typename: 'InstanceFlowConfig'
}


/** Represents a Relay Connection to a collection of AlertMonitor objects. */
export interface AlertMonitorConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (AlertMonitor | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (AlertMonitorEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'AlertMonitorConnection'
}


/**
 * Represents a set of rules that are applied to a specific Instance which
 * determine when an alert notification is sent as well to whom and how they
 * are delivered.
 */
export interface AlertMonitor {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** The name of the AlertMonitor. */
    name: Scalars['String']
    /** Specifies whether the Alert Monitor has been suspended by Prismatic. */
    systemSuspended: Scalars['Boolean']
    /** The AlertTriggers that are setup to trigger the AlertMonitor. */
    triggers: AlertTriggerConnection
    /** The AlertGroups to notify when the AlertMonitor is triggered. */
    groups: AlertGroupConnection
    /** The Users to notify when the AlertMonitor is triggered. */
    users: UserConnection
    /** The AlertWebhooks to call when the AlertMonitor is triggered. */
    webhooks: AlertWebhookConnection
    /** The log severity level condition to monitor for relevant AlertTrigger types. */
    logSeverityLevelCondition: (Scalars['Int'] | null)
    /** The execution duration condition to monitor for relevant AlertTrigger types. */
    durationSecondsCondition: (Scalars['Int'] | null)
    /** The execution overdue condition to monitor for relevant AlertTrigger types. */
    executionOverdueMinutesCondition: (Scalars['Int'] | null)
    /** The Instance that is being monitored by the AlertMonitor. */
    instance: Instance
    /** The IntegrationFlow that is being monitored by the AlertMonitor. */
    flowConfig: (InstanceFlowConfig | null)
    /** Specifies whether the AlertMonitor is currently triggered. */
    triggered: Scalars['Boolean']
    /** The timestamp when the AlertMonitor was last triggered. */
    lastTriggeredAt: (Scalars['DateTime'] | null)
    /** The AlertMonitor to which the AlertEvent is associated. */
    events: AlertEventConnection
    /** Specifies whether the signed-in User can update the AlertMonitor. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the AlertMonitor. */
    allowRemove: Scalars['Boolean']
    __typename: 'AlertMonitor'
}


/** Represents a Relay Connection to a collection of AlertTrigger objects. */
export interface AlertTriggerConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (AlertTrigger | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (AlertTriggerEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'AlertTriggerConnection'
}


/** Represents a type of event in the system that can trigger an AlertMonitor. */
export interface AlertTrigger {
    /** The ID of the object */
    id: Scalars['ID']
    /** The name of the AlertTrigger. */
    name: Scalars['String']
    /** Specifies whether the AlertTrigger is specific to an Instance rather than an InstanceFlowConfig. */
    isInstanceSpecific: Scalars['Boolean']
    /** The AlertTriggers that are setup to trigger the AlertMonitor. */
    monitors: AlertMonitorConnection
    /** Specifies whether the signed-in User can update the AlertTrigger. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the AlertTrigger. */
    allowRemove: Scalars['Boolean']
    __typename: 'AlertTrigger'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type AlertMonitorOrderField = 'NAME' | 'CUSTOMER' | 'INTEGRATION' | 'INSTANCE' | 'TRIGGERED' | 'LAST_TRIGGERED_AT' | 'TRIGGERS' | 'FLOW_CONFIG' | 'FLOW_CONFIG__FLOW' | 'CREATED_AT' | 'UPDATED_AT'


/** A Relay edge to a related AlertTrigger object and a cursor for pagination. */
export interface AlertTriggerEdge {
    /** The related object at the end of the edge. */
    node: (AlertTrigger | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'AlertTriggerEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type AlertTriggerOrderField = 'NAME'


/** Represents a Relay Connection to a collection of AlertGroup objects. */
export interface AlertGroupConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (AlertGroup | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (AlertGroupEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'AlertGroupConnection'
}


/**
 * Represents a reusable group of users and webhooks for the purposes
 * of alert notification.
 */
export interface AlertGroup {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** The name of the AlertGroup */
    name: Scalars['String']
    /** The users in the AlertGroup. */
    users: UserConnection
    /** The AlertWebhooks in the AlertGroup */
    webhooks: AlertWebhookConnection
    /** The AlertGroups to notify when the AlertMonitor is triggered. */
    monitors: AlertMonitorConnection
    /** Specifies whether the signed-in User can update the AlertGroup. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the AlertGroup. */
    allowRemove: Scalars['Boolean']
    __typename: 'AlertGroup'
}


/** Represents a Relay Connection to a collection of AlertWebhook objects. */
export interface AlertWebhookConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (AlertWebhook | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (AlertWebhookEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'AlertWebhookConnection'
}


/** Represents a Webhook that is used for the purposes of alert notification. */
export interface AlertWebhook {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** The name of the AlertWebhook. */
    name: Scalars['String']
    /** The URL of the AlertWebhook. */
    url: Scalars['String']
    /** The template that is hydrated and then used as the body of the AlertWebhook request. */
    payloadTemplate: Scalars['String']
    /** A JSON string of key/value pairs that will be sent as headers in the Webhook request. */
    headers: (Scalars['JSONString'] | null)
    /** The AlertWebhooks in the AlertGroup */
    groups: AlertGroupConnection
    /** The AlertWebhooks to call when the AlertMonitor is triggered. */
    monitors: AlertMonitorConnection
    /** Specifies whether the signed-in User can update the AlertWebhook. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the AlertWebhook. */
    allowRemove: Scalars['Boolean']
    __typename: 'AlertWebhook'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type AlertGroupOrderField = 'CREATED_AT' | 'NAME' | 'UPDATED_AT'


/** A Relay edge to a related AlertWebhook object and a cursor for pagination. */
export interface AlertWebhookEdge {
    /** The related object at the end of the edge. */
    node: (AlertWebhook | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'AlertWebhookEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type AlertWebhookOrderField = 'NAME' | 'URL' | 'CREATED_AT' | 'UPDATED_AT'


/** A Relay edge to a related AlertGroup object and a cursor for pagination. */
export interface AlertGroupEdge {
    /** The related object at the end of the edge. */
    node: (AlertGroup | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'AlertGroupEdge'
}


/** Represents a Relay Connection to a collection of AlertEvent objects. */
export interface AlertEventConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (AlertEvent | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (AlertEventEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'AlertEventConnection'
}


/**
 * Represents a specific instance of an Event that triggered a specific Alert
 * Monitor.
 */
export interface AlertEvent {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The AlertMonitor to which the AlertEvent is associated. */
    monitor: AlertMonitor
    /** Additional information about the event. */
    details: Scalars['String']
    /** Specifies whether the signed-in User can update the AlertEvent. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the AlertEvent. */
    allowRemove: Scalars['Boolean']
    __typename: 'AlertEvent'
}


/** A Relay edge to a related AlertEvent object and a cursor for pagination. */
export interface AlertEventEdge {
    /** The related object at the end of the edge. */
    node: (AlertEvent | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'AlertEventEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type AlertEventOrderField = 'CREATED_AT' | 'DETAILS' | 'CUSTOMER' | 'INTEGRATION' | 'INSTANCE' | 'MONITOR' | 'TRIGGERS' | 'FLOW_CONFIG'


/** A Relay edge to a related AlertMonitor object and a cursor for pagination. */
export interface AlertMonitorEdge {
    /** The related object at the end of the edge. */
    node: (AlertMonitor | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'AlertMonitorEdge'
}

export type ExecutionStatus = 'PENDING' | 'SUCCESS' | 'ERROR'


/** Represents the fields by which collections of the related type may be ordered. */
export type InstanceExecutionResultOrderField = 'STARTED_AT' | 'ENDED_AT'


/** Represents a Relay Connection to a collection of Log objects. */
export interface LogConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Log | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (LogEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'LogConnection'
}


/**
 * Represents a log entry that was created during a specific Execution of an
 * Instance.
 */
export interface Log {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Instance which created the Log entry. */
    instance: (Instance | null)
    /** The name of the Instance which created the Log entry. */
    instanceName: (Scalars['String'] | null)
    /** The IntegrationFlow which created the Log entry. */
    flowConfig: (InstanceFlowConfig | null)
    /** The InstanceConfigVariable which relates to the Log entry. */
    configVariable: (InstanceConfigVariable | null)
    /** The UserLevelConfigVariable which relates to the Log entry. */
    userLevelConfigVariable: (UserLevelConfigVariable | null)
    /** The key of the Required Config Variable which relates to the Log entry. */
    requiredConfigVariableKey: (Scalars['String'] | null)
    /** The specific InstanceExecutionResult that is associated with the Log entry. */
    executionResult: (InstanceExecutionResult | null)
    /** Specifies whether the associated Execution was created as part of testing. */
    isTestExecution: (Scalars['Boolean'] | null)
    /** Specifies whether the Log was generated as part of the associated Integration's Preprocess Flow. */
    fromPreprocessFlow: (Scalars['Boolean'] | null)
    /** The specific Integration that is associated with the Log entry. */
    integration: (Integration | null)
    /** The name of the Integration that is associated with the Log entry. */
    integrationName: (Scalars['String'] | null)
    /** The identifier for the version sequence of the Integration that is associated with the Log entry. */
    integrationVersionSequenceId: (Scalars['UUID'] | null)
    /** The specific Customer that is associated with the Log entry. */
    customer: (Customer | null)
    /** The name of the Customer that is associated with the Log entry. */
    customerName: (Scalars['String'] | null)
    /** The specific IntegrationFlow that is associated with the Log entry. */
    flow: (IntegrationFlow | null)
    /** The name of the IntegrationFlow that is associated with the Log entry. */
    flowName: (Scalars['String'] | null)
    /** The name of the IntegrationAction that generated this Log entry. */
    stepName: (Scalars['String'] | null)
    /** The name of the IntegrationAction that is the Loop containing the IntegrationAction that generated this Log entry, if any. */
    loopStepName: (Scalars['String'] | null)
    /** The iteration index of the containing Loop IntegrationAction at the time this Log entry was generated, if any. */
    loopStepIndex: (Scalars['Int'] | null)
    /** The timestamp at which the Log was created. */
    timestamp: Scalars['DateTime']
    /** The severity level of the Log entry. */
    severity: LogSeverityLevel
    /** The message body of the Log entry. */
    message: Scalars['String']
    /** The ID of the Instance which created the Log entry. */
    instanceId: (Scalars['ID'] | null)
    /** Specifies whether the signed-in User can update the Log. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Log. */
    allowRemove: Scalars['Boolean']
    __typename: 'Log'
}


/**
 * Associates specific values to the Required Config Variables specified by an
 * Integration when creating an Instance.
 */
export interface InstanceConfigVariable {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Instance with which the Config Variable is associated. */
    instance: Instance
    /** The Required Config Variable that is satisfied with the assignment of a Config Variable. */
    requiredConfigVariable: RequiredConfigVariable
    /** The value for the Required Config Variable that becomes part of the Instance definition. */
    value: (Scalars['String'] | null)
    /** The schedule type to show in the UI when the Config Var uses the 'schedule' dataType. */
    scheduleType: (InstanceConfigVariableScheduleType | null)
    /** An optional timezone property for when the Config Var uses the 'schedule' dataType. */
    timeZone: (Scalars['String'] | null)
    /** Status indicating if this Connection is working as expected or encountering issues. */
    status: (InstanceConfigVariableStatus | null)
    /** The timestamp at which the OAuth2 token will automatically be refreshed, if necessary. Only applies to OAuth2 methods where refresh is necessary. */
    refreshAt: (Scalars['DateTime'] | null)
    /** Contains arbitrary metadata about this Config Var. */
    meta: (Scalars['JSONString'] | null)
    /** The InstanceConfigVariable which relates to the Log entry. */
    logs: LogConnection
    /** The collection of Expressions that serve as inputs to the InstanceConfigVariable. */
    inputs: (ExpressionConnection | null)
    /** The Authorize URL of this Config Variable if associated with an OAuth 2.0 Connection. */
    authorizeUrl: (Scalars['String'] | null)
    /** The presigned URL to download the content used to populate the widget, when applicable. */
    contentUrl: (Scalars['String'] | null)
    /** The presigned URL to fetch metadata of the content used to populate the widget, when applicable. */
    contentMetadataUrl: (Scalars['String'] | null)
    /** The presigned URL to download supplemental data that may have been fetched as part of populating the content, when applicable. */
    supplementalDataUrl: (Scalars['String'] | null)
    /** The presigned URL to fetch metadata of the supplemental data that may have been fetched as part of populating the content, when applicable. */
    supplementalDataMetadataUrl: (Scalars['String'] | null)
    /** Specifies whether the signed-in User can update the InstanceConfigVariable. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the InstanceConfigVariable. */
    allowRemove: Scalars['Boolean']
    __typename: 'InstanceConfigVariable'
}


/** An enumeration. */
export type InstanceConfigVariableScheduleType = 'NONE' | 'CUSTOM' | 'MINUTE' | 'HOUR' | 'DAY' | 'WEEK'


/** An enumeration. */
export type InstanceConfigVariableStatus = 'PENDING' | 'ACTIVE' | 'ERROR'


/** Represents the fields by which collections of the related type may be ordered. */
export type LogOrderField = 'TIMESTAMP' | 'SEVERITY' | 'MESSAGE' | 'INSTANCE' | 'CUSTOMER' | 'INTEGRATION' | 'FLOW' | 'FLOW_CONFIG'


/**
 * Associates specific values to the Dynamic Config to satisfy Required Config Variables
 * of the related Instance.
 */
export interface UserLevelConfigVariable {
    /** The ID of the object */
    id: Scalars['ID']
    /** The Dynamic Config with which the Config Variable is associated. */
    config: UserLevelConfig
    /** The Required Config Variable that is satisfied with the value of this Dynamic Config Variable. */
    requiredConfigVariable: RequiredConfigVariable
    /** The value for the Required Config Variable that becomes part of the Instance definition. */
    value: (Scalars['String'] | null)
    /** The schedule type to show in the UI when the Config Var uses the 'schedule' dataType. */
    scheduleType: (UserLevelConfigVariableScheduleType | null)
    /** An optional timezone property for when the Config Var uses the 'schedule' dataType. */
    timeZone: (Scalars['String'] | null)
    /** Status indicating if this Connection is working as expected or encountering issues. */
    status: (UserLevelConfigVariableStatus | null)
    /** The timestamp at which the OAuth2 token will automatically be refreshed, if necessary. Only applies to OAuth2 methods where refresh is necessary. */
    refreshAt: (Scalars['DateTime'] | null)
    /** Contains arbitrary metadata about this Config Var. */
    meta: (Scalars['JSONString'] | null)
    /** The UserLevelConfigVariable which relates to the Log entry. */
    logs: LogConnection
    /** The collection of Expressions that serve as inputs to the UserLevelConfigVariable. */
    inputs: (ExpressionConnection | null)
    /** The Authorize URL of this Config Variable if associated with an OAuth 2.0 Connection. */
    authorizeUrl: (Scalars['String'] | null)
    /** Specifies whether the signed-in User can update the UserLevelConfigVariable. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the UserLevelConfigVariable. */
    allowRemove: Scalars['Boolean']
    __typename: 'UserLevelConfigVariable'
}


/** Provides dynamic user-driven config values to satisfy Required Config Variables of an Instance. */
export interface UserLevelConfig {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** The Instance with which the User Level Config is associated. */
    instance: Instance
    /** The User that owns the User Level Config. */
    user: User
    flowConfigs: UserLevelFlowConfigConnection
    /** The Dynamic Config with which the Config Variable is associated. */
    configVariables: UserLevelConfigVariableConnection
    /** Specifies whether the signed-in User can update the UserLevelConfig. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the UserLevelConfig. */
    allowRemove: Scalars['Boolean']
    __typename: 'UserLevelConfig'
}


/** Represents a Relay Connection to a collection of UserLevelFlowConfig objects. */
export interface UserLevelFlowConfigConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (UserLevelFlowConfig | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (UserLevelFlowConfigEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'UserLevelFlowConfigConnection'
}


/** Represents the configuration options for a particular User Level Config and Instance Flow Config pair. */
export interface UserLevelFlowConfig {
    /** The ID of the object */
    id: Scalars['ID']
    userLevelConfig: UserLevelConfig
    instanceFlowConfig: InstanceFlowConfig
    /** The URL of the endpoint that triggers execution of the UserLevelFlowConfig. */
    webhookUrl: Scalars['String']
    /** Specifies whether the signed-in User can update the UserLevelFlowConfig. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the UserLevelFlowConfig. */
    allowRemove: Scalars['Boolean']
    __typename: 'UserLevelFlowConfig'
}


/** A Relay edge to a related UserLevelFlowConfig object and a cursor for pagination. */
export interface UserLevelFlowConfigEdge {
    /** The related object at the end of the edge. */
    node: (UserLevelFlowConfig | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'UserLevelFlowConfigEdge'
}


/** Represents a Relay Connection to a collection of UserLevelConfigVariable objects. */
export interface UserLevelConfigVariableConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (UserLevelConfigVariable | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (UserLevelConfigVariableEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'UserLevelConfigVariableConnection'
}


/** A Relay edge to a related UserLevelConfigVariable object and a cursor for pagination. */
export interface UserLevelConfigVariableEdge {
    /** The related object at the end of the edge. */
    node: (UserLevelConfigVariable | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'UserLevelConfigVariableEdge'
}


/** An enumeration. */
export type UserLevelConfigVariableScheduleType = 'NONE' | 'CUSTOM' | 'MINUTE' | 'HOUR' | 'DAY' | 'WEEK'


/** An enumeration. */
export type UserLevelConfigVariableStatus = 'PENDING' | 'ACTIVE' | 'ERROR'


/** Indicates the severity level of a log message. */
export type LogSeverityLevel = 'FATAL' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'TRACE' | 'METRIC'


/** A Relay edge to a related Log object and a cursor for pagination. */
export interface LogEdge {
    /** The related object at the end of the edge. */
    node: (Log | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'LogEdge'
}


/** An enumeration. */
export type InstanceExecutionResultInvokeType = 'INTEGRATION_FLOW_TEST' | 'INTEGRATION_ENDPOINT_TEST' | 'WEBHOOK' | 'SCHEDULED' | 'DEPLOY_FLOW' | 'TEAR_DOWN_FLOW'


/** Represents a Relay Connection to a collection of InstanceStepResult objects. */
export interface InstanceStepResultConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (InstanceStepResult | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (InstanceStepResultEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'InstanceStepResultConnection'
}


/**
 * Represents the result of executing a specific step of an Integration as
 * part of an Instance execution.
 */
export interface InstanceStepResult {
    /** The ID of the object */
    id: Scalars['ID']
    /** The InstanceExecutionResult to which the InstanceStepResult is associated. */
    executionResult: InstanceExecutionResult
    /** The timestamp at which execution of the step started. */
    startedAt: Scalars['DateTime']
    /** The timestamp at which execution of the step ended. */
    endedAt: (Scalars['DateTime'] | null)
    /** The name of the IntegrationAction that generated this result. */
    stepName: (Scalars['String'] | null)
    /** The display name of the IntegrationAction that generated this result. */
    displayStepName: (Scalars['String'] | null)
    /** The name of the IntegrationAction that is the Loop containing the IntegrationAction that generated this result, if any. */
    loopStepName: (Scalars['String'] | null)
    /** The iteration index of the containing Loop IntegrationAction at the time this result was generated, if any. */
    loopStepIndex: (Scalars['Int'] | null)
    /** Specifies whether the result was generated by a Loop IntegrationAction. */
    isLoopStep: Scalars['Boolean']
    /** A string containing a sequence of space-separated 'loopStepName:iterationNumber' tokens that allow this result to be requested based solely on loop positions and iteration numbers */
    loopPath: (Scalars['String'] | null)
    /** Identifies whether this is a 'root level' result or whether this is contained in a loop. */
    isRootResult: Scalars['Boolean']
    /** The name of the branch containing the IntegrationAction that generated this result, if any. */
    branchName: (Scalars['String'] | null)
    /** Specifies whether this step result had an error during execution. */
    hasError: Scalars['Boolean']
    /** The presigned URL to download the result of this specific step of the Instance execution. */
    resultsUrl: Scalars['String']
    /** The presigned URL to fetch metadata of the result of this specific step of the Instance execution. */
    resultsMetadataUrl: Scalars['String']
    /** The presigned URL to download the inputs for this specific step if it is a Loop step. */
    loopInputsUrl: (Scalars['String'] | null)
    /** The presigned URL to fetch metadata of the inputs for this specific step if it is a Loop step. */
    loopInputsMetadataUrl: (Scalars['String'] | null)
    /** Specifies whether the signed-in User can update the InstanceStepResult. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the InstanceStepResult. */
    allowRemove: Scalars['Boolean']
    __typename: 'InstanceStepResult'
}


/** A Relay edge to a related InstanceStepResult object and a cursor for pagination. */
export interface InstanceStepResultEdge {
    /** The related object at the end of the edge. */
    node: (InstanceStepResult | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'InstanceStepResultEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type InstanceStepResultOrderField = 'STARTED_AT' | 'ENDED_AT'


/** A Relay edge to a related InstanceExecutionResult object and a cursor for pagination. */
export interface InstanceExecutionResultEdge {
    /** The related object at the end of the edge. */
    node: (InstanceExecutionResult | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'InstanceExecutionResultEdge'
}


/** A Relay edge to a related IntegrationFlow object and a cursor for pagination. */
export interface IntegrationFlowEdge {
    /** The related object at the end of the edge. */
    node: (IntegrationFlow | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'IntegrationFlowEdge'
}


/** Represents a Relay Connection to a collection of IntegrationAction objects. */
export interface IntegrationActionConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (IntegrationAction | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (IntegrationActionEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'IntegrationActionConnection'
}


/** A Relay edge to a related IntegrationAction object and a cursor for pagination. */
export interface IntegrationActionEdge {
    /** The related object at the end of the edge. */
    node: (IntegrationAction | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'IntegrationActionEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type IntegrationOrderField = 'NAME' | 'DESCRIPTION' | 'CATEGORY' | 'CUSTOMER' | 'CREATED_AT' | 'PUBLISHED_AT' | 'UPDATED_AT' | 'VERSION_NUMBER'


/** Represents a Relay Connection to a collection of InstanceConfigVariable objects. */
export interface InstanceConfigVariableConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (InstanceConfigVariable | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (InstanceConfigVariableEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'InstanceConfigVariableConnection'
}


/** A Relay edge to a related InstanceConfigVariable object and a cursor for pagination. */
export interface InstanceConfigVariableEdge {
    /** The related object at the end of the edge. */
    node: (InstanceConfigVariable | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'InstanceConfigVariableEdge'
}

export type IntegrationStoreConfiguration = 'NOT_AVAILABLE_IN_STORE' | 'AVAILABLE_NOT_DEPLOYABLE' | 'AVAILABLE_AND_DEPLOYABLE'

export type MarketplaceConfiguration = 'NOT_AVAILABLE_IN_MARKETPLACE' | 'AVAILABLE_NOT_DEPLOYABLE' | 'AVAILABLE_AND_DEPLOYABLE'


/** A Relay edge to a related Integration object and a cursor for pagination. */
export interface IntegrationEdge {
    /** The related object at the end of the edge. */
    node: (Integration | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'IntegrationEdge'
}


/** Represents a Relay Connection to a collection of UserLevelConfig objects. */
export interface UserLevelConfigConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (UserLevelConfig | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (UserLevelConfigEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'UserLevelConfigConnection'
}


/** A Relay edge to a related UserLevelConfig object and a cursor for pagination. */
export interface UserLevelConfigEdge {
    /** The related object at the end of the edge. */
    node: (UserLevelConfig | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'UserLevelConfigEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type UserLevelConfigOrderField = 'NAME' | 'EMAIL' | 'EXTERNAL_ID' | 'CREATED_AT' | 'UPDATED_AT'


/** Represents a Relay Connection to a collection of InstanceFlowConfig objects. */
export interface InstanceFlowConfigConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (InstanceFlowConfig | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (InstanceFlowConfigEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'InstanceFlowConfigConnection'
}


/** A Relay edge to a related InstanceFlowConfig object and a cursor for pagination. */
export interface InstanceFlowConfigEdge {
    /** The related object at the end of the edge. */
    node: (InstanceFlowConfig | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'InstanceFlowConfigEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type InstanceFlowConfigOrderField = 'SORT_ORDER'


/** An enumeration. */
export type InstanceConfigState = 'NEEDS_INSTANCE_CONFIGURATION' | 'NEEDS_USER_LEVEL_CONFIGURATION' | 'FULLY_CONFIGURED'


/** Represents a Relay Connection to a collection of User Level Config Variable objects. */
export interface CustomUserLevelConfigVariableConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** Contains the nodes in this connection. */
    edges: (CustomUserLevelConfigVariableEdge | null)[]
    /** List of nodes in this connection */
    nodes: (UserLevelConfigVariable | null)[]
    /** Total count of config variables */
    totalCount: Scalars['Int']
    __typename: 'CustomUserLevelConfigVariableConnection'
}


/** A Relay edge containing a `CustomUserLevelConfigVariable` and its cursor. */
export interface CustomUserLevelConfigVariableEdge {
    /** The item at the end of the edge */
    node: (UserLevelConfigVariable | null)
    /** A cursor for use in pagination */
    cursor: Scalars['String']
    __typename: 'CustomUserLevelConfigVariableEdge'
}


/** Represents a Relay Connection to a collection of InstanceDailyUsageMetrics objects. */
export interface InstanceDailyUsageMetricsConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (InstanceDailyUsageMetrics | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (InstanceDailyUsageMetricsEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'InstanceDailyUsageMetricsConnection'
}


/** A Relay edge to a related InstanceDailyUsageMetrics object and a cursor for pagination. */
export interface InstanceDailyUsageMetricsEdge {
    /** The related object at the end of the edge. */
    node: (InstanceDailyUsageMetrics | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'InstanceDailyUsageMetricsEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type InstanceDailyUsageMetricsOrderField = 'SNAPSHOT_DATE'


/** Represents snapshots of total utilization metrics for a Customer. */
export interface CustomerTotalUsageMetrics {
    /** The time the utilization metrics snapshot was created. */
    snapshotTime: Scalars['DateTime']
    /** The Customer for which utilization metrics are being collected. */
    customer: Customer
    /** The total number of Instances that are deployed. */
    deployedInstanceCount: Scalars['Int']
    /** The total number of unique Integrations that are deployed. */
    deployedUniqueIntegrationCount: Scalars['Int']
    /** The total number of Users that currently exist. */
    userCount: Scalars['Int']
    /** The ID of the object */
    id: Scalars['ID']
    /** Specifies whether the signed-in User can update the CustomerTotalUsageMetrics. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the CustomerTotalUsageMetrics. */
    allowRemove: Scalars['Boolean']
    __typename: 'CustomerTotalUsageMetrics'
}


/** Represents a Relay Connection to a collection of CustomerTotalUsageMetrics objects. */
export interface CustomerTotalUsageMetricsConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (CustomerTotalUsageMetrics | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (CustomerTotalUsageMetricsEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'CustomerTotalUsageMetricsConnection'
}


/** A Relay edge to a related CustomerTotalUsageMetrics object and a cursor for pagination. */
export interface CustomerTotalUsageMetricsEdge {
    /** The related object at the end of the edge. */
    node: (CustomerTotalUsageMetrics | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'CustomerTotalUsageMetricsEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type CustomerTotalUsageMetricsOrderField = 'SNAPSHOT_TIME'

export interface StarredRecord {
    /** The ID of the object */
    id: Scalars['ID']
    /** User that starred a record */
    user: User
    /** Date/Time when the record was starred */
    timestamp: Scalars['DateTime']
    description: (Scalars['String'] | null)
    /** Specifies whether the signed-in User can update the StarredRecord. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the StarredRecord. */
    allowRemove: Scalars['Boolean']
    __typename: 'StarredRecord'
}


/** Represents a Relay Connection to a collection of StarredRecord objects. */
export interface StarredRecordConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (StarredRecord | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (StarredRecordEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'StarredRecordConnection'
}


/** A Relay edge to a related StarredRecord object and a cursor for pagination. */
export interface StarredRecordEdge {
    /** The related object at the end of the edge. */
    node: (StarredRecord | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'StarredRecordEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type StarredRecordOrderField = 'TIMESTAMP'


/**
 * Represents a permission that has been granted to a specified object, either
 * directly or via a Role.
 */
export interface ObjectPermissionGrant {
    /** The ID of the object */
    id: Scalars['ID']
    /** The User for which the Permission is granted. */
    user: User
    /** A reference to the object for which the Permission is granted. */
    obj: Scalars['UUID']
    /** The Permission being granted. */
    permission: Permission
    /** The Role through which the Permission is granted, if applicable. */
    grantedByRole: (Role | null)
    /** Specifies whether the signed-in User can update the ObjectPermissionGrant. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the ObjectPermissionGrant. */
    allowRemove: Scalars['Boolean']
    __typename: 'ObjectPermissionGrant'
}


/** Represents a Relay Connection to a collection of ObjectPermissionGrant objects. */
export interface ObjectPermissionGrantConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (ObjectPermissionGrant | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (ObjectPermissionGrantEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ObjectPermissionGrantConnection'
}


/** A Relay edge to a related ObjectPermissionGrant object and a cursor for pagination. */
export interface ObjectPermissionGrantEdge {
    /** The related object at the end of the edge. */
    node: (ObjectPermissionGrant | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ObjectPermissionGrantEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type ObjectPermissionGrantOrderField = 'PERMISSION'


/** Represents a Relay Connection to a collection of AuthObjectType objects. */
export interface AuthObjectTypeConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (AuthObjectType | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (AuthObjectTypeEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'AuthObjectTypeConnection'
}


/** A Relay edge to a related AuthObjectType object and a cursor for pagination. */
export interface AuthObjectTypeEdge {
    /** The related object at the end of the edge. */
    node: (AuthObjectType | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'AuthObjectTypeEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type AuthObjectTypeOrderField = 'NAME'

export interface LogSeverity {
    id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    __typename: 'LogSeverity'
}


/**
 * Represents a configuration that specifies the details of an external system
 * that is used to ingest log messages generated by Instance Executions.
 */
export interface ExternalLogStream {
    /** The ID of the object */
    id: Scalars['ID']
    /** The timestamp at which the object was created. */
    createdAt: Scalars['DateTime']
    /** The timestamp at which the object was most recently updated.  */
    updatedAt: Scalars['DateTime']
    /** Name of the ExternalLogStream. */
    name: Scalars['String']
    /** The URL of the ExternalLogStream. */
    url: Scalars['String']
    /** The Log severity levels for which Logs should be sent to the ExternalLogStream. */
    severityLevels: (LogSeverity | null)[]
    /** The template that is hydrated and then used as the body of the ExternalLogStream request. */
    payloadTemplate: Scalars['String']
    /** A JSON string of key/value pairs that will be sent as headers in the ExternalLogStream request. */
    headers: (Scalars['JSONString'] | null)
    /** Specifies whether the signed-in User can update the ExternalLogStream. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the ExternalLogStream. */
    allowRemove: Scalars['Boolean']
    __typename: 'ExternalLogStream'
}


/** Represents a Relay Connection to a collection of ExternalLogStream objects. */
export interface ExternalLogStreamConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (ExternalLogStream | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (ExternalLogStreamEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ExternalLogStreamConnection'
}


/** A Relay edge to a related ExternalLogStream object and a cursor for pagination. */
export interface ExternalLogStreamEdge {
    /** The related object at the end of the edge. */
    node: (ExternalLogStream | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ExternalLogStreamEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type ExternalLogStreamOrderField = 'NAME' | 'CREATED_AT' | 'UPDATED_AT'


/** Represents a label. */
export interface Label {
    /** The ID of the object */
    id: Scalars['ID']
    /** The value of the label. */
    name: Scalars['String']
    __typename: 'Label'
}


/** Represents an integration category. */
export interface IntegrationCategory {
    /** The ID of the object */
    id: Scalars['ID']
    /** The name of the Integration category. */
    name: Scalars['String']
    __typename: 'IntegrationCategory'
}


/** Represents a component category. */
export interface ComponentCategory {
    /** The ID of the object */
    id: Scalars['ID']
    /** The name of the Component category. */
    name: Scalars['String']
    __typename: 'ComponentCategory'
}


/** Represents the collection of information necessary to upload media file. */
export interface UploadMedia {
    /** The pre-signed URL to which the file should be uploaded. */
    uploadUrl: (Scalars['String'] | null)
    /** The URL where the file is located after being uploaded. */
    objectUrl: (Scalars['String'] | null)
    /** Contains any error message that occurred as part of generating the pre-signed URL. */
    error: (Scalars['String'] | null)
    __typename: 'UploadMedia'
}

export type MediaType = 'AVATAR' | 'ATTACHMENT'

export interface HotRequestIdsResult {
    requestId: Scalars['String']
    count: (Scalars['Int'] | null)
    /** The type of request id */
    recordType: (Scalars['String'] | null)
    /** UUID of the record associated with the request */
    recordId: (Scalars['UUID'] | null)
    /** UUID of the Tenant associated with this request id */
    tenantId: (Scalars['UUID'] | null)
    /** Name of the Organization associated with this request */
    orgName: (Scalars['String'] | null)
    /** UUID of the Integration involved in this request */
    integrationId: (Scalars['String'] | null)
    /** Name of the Integration involved in this request */
    integrationName: (Scalars['String'] | null)
    /** UUID of the IntegrationFlow involved in this request, if we have enough info to know it */
    flowId: (Scalars['String'] | null)
    /** Name of the IntegrationFlow involved in this request, if we have enough info to know it */
    flowName: (Scalars['String'] | null)
    /** UUID of the Instance involved in this request */
    instanceId: (Scalars['String'] | null)
    /** Name of the Instance involved in this request */
    instanceName: (Scalars['String'] | null)
    __typename: 'HotRequestIdsResult'
}

export interface Activity {
    /** User that performed an activity */
    user: (User | null)
    /** Name of the user that performed the activity */
    userName: Scalars['String']
    /** Description of an activity performed by a user */
    description: Scalars['String']
    /** Date/Time when an activity occurred */
    timestamp: Scalars['DateTime']
    /** The ID of the object */
    id: Scalars['ID']
    /** Specifies whether the signed-in User can update the Activity. */
    allowUpdate: Scalars['Boolean']
    /** Specifies whether the signed-in User can remove the Activity. */
    allowRemove: Scalars['Boolean']
    __typename: 'Activity'
}


/** Represents a Relay Connection to a collection of Activity objects. */
export interface ActivityConnection {
    /** Pagination data for this connection. */
    pageInfo: PageInfo
    /** List of nodes in this connection. */
    nodes: (Activity | null)[]
    /** List of edges containing the nodes in this connection. */
    edges: (ActivityEdge | null)[]
    /** Total count of nodes available. */
    totalCount: Scalars['Int']
    __typename: 'ActivityConnection'
}


/** A Relay edge to a related Activity object and a cursor for pagination. */
export interface ActivityEdge {
    /** The related object at the end of the edge. */
    node: (Activity | null)
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ActivityEdge'
}


/** Represents the fields by which collections of the related type may be ordered. */
export type ActivityOrderField = 'TIMESTAMP'

export interface RootMutation {
    /**
     *     
     *     Add a requestId to the list of blocked requestIds.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    addBlockedRequestIds: (AddBlockedRequestIdsPayload | null)
    /**
     *     
     *     Enable or disable Legacy Credentials for an Organization.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    changeOrganizationUseCredentials: (ChangeOrganizationUseCredentialsPayload | null)
    /**
     *     
     *     Creates a new organization in a stack and attach a plan to that organization. If no plan name is specified, assigns "Enterprise Trial". Passed in user must already exist.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    createOrganizationNewStack: (CreateOrganizationNewStackPayload | null)
    /**
     *     
     *     Create a custom Plan and Utilization Limits for an existing Organization.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    createOrganizationPlan: (CreateOrganizationPlanPayload | null)
    /**
     *     
     *     Disable an organization by org ID
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    disableOrganization: (DisableOrganizationPayload | null)
    /**
     *     
     *     Enable an organization by org ID
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    enableOrganization: (EnableOrganizationPayload | null)
    /**
     *     
     *     Return all organizations with enterprise or professional plans.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_view].
     */
    findPaidOrganizations: (FindPaidOrganizationsPayload | null)
    /**
     *     
     *     Promote a user to be an Organization Owner.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when a value for 'customer' does not exist on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when a value for 'customer' exists on the object.
     *     4. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when a value for 'customer' exists on the object.
     */
    promoteOrganizationOwner: (PromoteOrganizationOwnerPayload | null)
    /**
     *     
     *     Register a new Internal Organization. This allows scripting creation and ensuring that our internal tenant emails
     *     end up in a valid state (verified).
     *     
     * 
     * Access is not permitted.
     */
    registerInternalOrganization: (RegisterInternalOrganizationPayload | null)
    /**
     *     
     *     Remove a requestId from the list of blocked requestIds.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    removeBlockedRequestIds: (RemoveBlockedRequestIdsPayload | null)
    /**
     *     
     *     Searches for organizations by name.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_view].
     */
    searchOrganizations: (SearchOrganizationsPayload | null)
    /**
     *     
     *     Set the expiration time for the Organization's current Plan.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    setOrganizationPlanExpiresAt: (SetOrganizationPlanExpiresAtPayload | null)
    /**
     *     
     *     Set the Plan for an existing Organization and recreate utilization status limit records.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    setOrganizationPlan: (SetOrganizationPlanPayload | null)
    /**
     *     
     *     Enable or disable features for a specified Organization's plan.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    setPlanEnabledFeatures: (SetPlanEnabledFeaturesPayload | null)
    /**
     *     
     *     Switch the Organization of the specified Organization User.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when a value for 'customer' does not exist on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when a value for 'customer' exists on the object.
     *     4. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when a value for 'customer' exists on the object.
     */
    switchOrganization: (SwitchOrganizationPayload | null)
    /**
     *     
     *     Return utilization metrics for the specified org and reporting period.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_view].
     */
    utilizationReport: (UtilizationReportPayload | null)
    /**
     *     
     *     Allows clearing a triggered AlertMonitor.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances].
     */
    clearAlertMonitor: (ClearAlertMonitorPayload | null)
    /**
     *     Creates a new AlertGroup object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    createAlertGroup: (CreateAlertGroupPayload | null)
    /**
     *     Creates a new AlertMonitor object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    createAlertMonitor: (CreateAlertMonitorPayload | null)
    /**
     *     Creates a new AlertWebhook object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    createAlertWebhook: (CreateAlertWebhookPayload | null)
    /**
     *     Removes the specified AlertGroup object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    deleteAlertGroup: (DeleteAlertGroupPayload | null)
    /**
     *     Removes the specified AlertMonitor object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     */
    deleteAlertMonitor: (DeleteAlertMonitorPayload | null)
    /**
     *     Removes the specified AlertWebhook object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    deleteAlertWebhook: (DeleteAlertWebhookPayload | null)
    /**
     *     Updates the specified AlertGroup object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    updateAlertGroup: (UpdateAlertGroupPayload | null)
    /**
     *     Updates the specified AlertMonitor object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances].
     */
    updateAlertMonitor: (UpdateAlertMonitorPayload | null)
    /**
     *     Updates the specified AlertWebhook object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    updateAlertWebhook: (UpdateAlertWebhookPayload | null)
    /**
     *     
     *     Allows the signed-in User to change their password.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when a value for 'customer' does not exist on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when a value for 'customer' exists on the object.
     *     4. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when a value for 'customer' exists on the object.
     */
    changePassword: (ChangePasswordPayload | null)
    /**
     *     Removes the specified Component object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_components].
     *     2. The signed-in User has any of the following permissions for any version of the object: [component_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_component_permissions, customer_manage_components, customer_view_components].
     */
    deleteComponent: (DeleteComponentPayload | null)
    /**
     *     
     *     Publishes a Component.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_components].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_manage_components] when 'customer' is provided in the access function context.
     */
    publishComponent: (PublishComponentPayload | null)
    /**
     *     
     *     Users should not be able to actually update a component,
     *     but will use this mutation to update the "starred" status
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'public' attribute equals: True.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_component_permissions, org_manage_components, org_view_components].
     *     3. The signed-in User has any of the following permissions for any version of the object: [component_view, component_edit, component_remove, component_admin_permissions, component_publish_new_version].
     *     4. The signed-in User has any of the following permissions for the associated Customer: [customer_view_org_components].
     */
    updateComponent: (UpdateComponentPayload | null)
    /**
     *     Creates a new UserLevelConfig object.
     * 
     * Access is not permitted.
     */
    createUserLevelConfig: (CreateUserLevelConfigPayload | null)
    /**
     *     Removes the specified UserLevelConfig object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     3. The specified object is the signed-in User.
     */
    deleteUserLevelConfig: (DeleteUserLevelConfigPayload | null)
    /**
     *     
     *     Disconnect the specified Connection.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     */
    disconnectConnection: (DisconnectConnectionPayload | null)
    /**
     *     
     *     Disconnect the specified User Level Connection.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The specified object is the signed-in User.
     */
    disconnectUserLevelConnection: (DisconnectUserLevelConnectionPayload | null)
    /**
     *     
     *     Update OAuth2 Connection properties for a given Instance Config Variable.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     */
    updateOAuth2Connection: (UpdateOAuth2ConnectionPayload | null)
    /**
     *     Creates a new ConnectionTemplate object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     */
    createConnectionTemplate: (CreateConnectionTemplatePayload | null)
    /**
     *     Removes the specified ConnectionTemplate object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     */
    deleteConnectionTemplate: (DeleteConnectionTemplatePayload | null)
    /**
     *     Updates the specified ConnectionTemplate object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     */
    updateConnectionTemplate: (UpdateConnectionTemplatePayload | null)
    /**
     *     
     *     Creates a Credential for the specified Customer.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when 'customer' is not provided in the access function context.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when 'customer' is provided in the access function context.
     *     3. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_edit] when 'customer' is provided in the access function context.
     */
    createCustomerCredential: (CreateCustomerCredentialPayload | null)
    /**
     *     
     *     Creates a Credential for the Organization of the signed-in User.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when 'customer' is not provided in the access function context.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when 'customer' is provided in the access function context.
     *     3. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_edit] when 'customer' is provided in the access function context.
     */
    createOrganizationCredential: (CreateOrganizationCredentialPayload | null)
    /**
     *     Removes the specified Credential object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when a value for 'customer' does not exist on the object.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when a value for 'customer' exists on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_edit] when a value for 'customer' exists on the object.
     */
    deleteCredential: (DeleteCredentialPayload | null)
    /**
     *     
     *     Sends an email that requests the recipient to complete the OAuth2 flow for
     *     the specified Credential.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when a value for 'customer' does not exist on the object.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when a value for 'customer' exists on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_edit] when a value for 'customer' exists on the object.
     */
    requestOAuth2CredentialAuthorization: (RequestOAuth2CredentialAuthorizationPayload | null)
    /**
     *     Updates the specified Credential object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when a value for 'customer' does not exist on the object.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when a value for 'customer' exists on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_edit] when a value for 'customer' exists on the object.
     */
    updateCredential: (UpdateCredentialPayload | null)
    /**
     *     Creates a new Customer object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_crud_customers].
     */
    createCustomer: (CreateCustomerPayload | null)
    /**
     *     Removes the specified Customer object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_crud_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_remove].
     */
    deleteCustomer: (DeleteCustomerPayload | null)
    /**
     *     Updates the specified Customer object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_crud_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_edit].
     */
    updateCustomer: (UpdateCustomerPayload | null)
    /**
     *     
     *     Replays an existing instance execution.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_edit, integration_admin_permissions].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    replayExecution: (ReplayExecutionPayload | null)
    /**
     *     Creates a new Instance object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_admin_manage_instances, customer_manage_marketplace_integrations] when 'customer' is provided in the access function context.
     */
    createInstance: (CreateInstancePayload | null)
    /**
     *     Removes the specified Instance object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     */
    deleteInstance: (DeleteInstancePayload | null)
    /**
     *     
     *     Deploys an Instance.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     */
    deployInstance: (DeployInstancePayload | null)
    /**
     *     
     *     Populates content for relevant widgets on the specified configuration
     *     wizard page of the Integration that is associated with the specified
     *     Instance.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     *     6. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_access_marketplace_integrations] when a value for 'integration.user_level_configured' exists on the object and equals 'True'.
     */
    fetchConfigWizardPageContent: (FetchConfigWizardPageContentPayload | null)
    /**
     *     
     *     Populates content for a single Data Source in the context of the specified
     *     Instance.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    fetchDataSourceContent: (FetchDataSourceContentPayload | null)
    /**
     *     
     *     Initiates execution of an InstanceFlowConfig for the purposes of testing.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    testInstanceFlowConfig: (TestInstanceFlowConfigPayload | null)
    /**
     *     
     *     Update one or more Instance config variables.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     *     6. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_access_marketplace_integrations] when a value for 'integration.user_level_configured' exists on the object and equals 'True'.
     */
    updateInstanceConfigVariables: (UpdateInstanceConfigVariablesPayload | null)
    /**
     *     Updates the specified Instance object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    updateInstance: (UpdateInstancePayload | null)
    /**
     *     
     *     Updates all Instances that reference the specified Integration to the
     *     latest published version of the specified Integration. If the Instances
     *     are deployed, it will re-deploy them as necessary.
     *     Returns an instance of the latest version of the specified Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    bulkUpdateInstancesToLatestIntegrationVersion: (BulkUpdateInstancesToLatestIntegrationVersionPayload | null)
    /**
     *     Creates a new Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_manage_integrations] when a value for 'customer.allow_embedded_designer' is provided in the access function context and equals 'True'.
     */
    createIntegration: (CreateIntegrationPayload | null)
    /**
     *     Removes the specified Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    deleteIntegration: (DeleteIntegrationPayload | null)
    /**
     *     
     *     Forks an Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_manage_integrations] when a value for 'customer.allow_embedded_designer' is provided in the access function context and equals 'True'.
     */
    forkIntegration: (ForkIntegrationPayload | null)
    /**
     *     
     *     Import an Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    importIntegration: (ImportIntegrationPayload | null)
    /**
     *     
     *     Publishes an Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_manage_integrations] when 'customer' is provided in the access function context.
     */
    publishIntegration: (PublishIntegrationPayload | null)
    /**
     *     
     *     Tests an IntegrationFlow's trigger event function for the specified event type.
     *     
     * 
     * Access is not permitted.
     */
    testFlowTriggerEvent: (TestFlowTriggerEventPayload | null)
    /**
     *     
     *     Initiates an execution for testing the endpoint configuration of the specified Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    testIntegrationEndpointConfig: (TestIntegrationEndpointConfigPayload | null)
    /**
     *     
     *     Initiates execution of an IntegrationFlow for the purposes of testing.
     *     
     * 
     * Access is not permitted.
     */
    testIntegrationFlow: (TestIntegrationFlowPayload | null)
    /**
     *     Updates the specified Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    updateIntegration: (UpdateIntegrationPayload | null)
    /**
     *     
     *     Updates the configuration of an Integration Version for use in the Integration Marketplace.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    updateIntegrationMarketplaceConfiguration: (UpdateIntegrationMarketplaceConfigurationPayload | null)
    /**
     *     
     *     Updates the availability of an Integration version.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    updateIntegrationVersionAvailability: (UpdateIntegrationVersionAvailabilityPayload | null)
    /**
     *     
     *     Validate an Integration schema.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    validateIntegrationSchema: (ValidateIntegrationSchemaPayload | null)
    /**
     *     Creates a new ExternalLogStream object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    createExternalLogStream: (CreateExternalLogStreamPayload | null)
    /**
     *     Removes the specified ExternalLogStream object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    deleteExternalLogStream: (DeleteExternalLogStreamPayload | null)
    /**
     *     Updates the specified ExternalLogStream object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    updateExternalLogStream: (UpdateExternalLogStreamPayload | null)
    /**
     *     
     *     Creates a Signing Key for the Organization of the signed-in User.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    createOrganizationSigningKey: (CreateOrganizationSigningKeyPayload | null)
    /**
     *     Removes the specified Organization object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_superuser].
     */
    deleteOrganization: (DeleteOrganizationPayload | null)
    /**
     *     
     *     Deletes the specified Signing Key.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    deleteOrganizationSigningKey: (DeleteOrganizationSigningKeyPayload | null)
    /**
     *     Creates a new OrganizationSigningKey object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    importOrganizationSigningKey: (ImportOrganizationSigningKeyPayload | null)
    /**
     *     Updates the specified Organization object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    updateOrganization: (UpdateOrganizationPayload | null)
    /**
     *     
     *     Administers a Permission to an object for the specified User.
     *     
     * 
     * Access is not permitted.
     */
    administerObjectPermission: (AdministerObjectPermissionPayload | null)
    /**
     *     
     *     Updates an Organizations Theme.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    updateTheme: (UpdateThemePayload | null)
    /**
     *     
     *     Creates a User for the specified Customer.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when 'customer' is not provided in the access function context.
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_admin_users] when 'customer' is provided in the access function context.
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when 'customer' is provided in the access function context.
     */
    createCustomerUser: (CreateCustomerUserPayload | null)
    /**
     *     
     *     Creates a User for the Organization of the signed-in User.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when 'customer' is not provided in the access function context.
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_admin_users] when 'customer' is provided in the access function context.
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when 'customer' is provided in the access function context.
     */
    createOrganizationUser: (CreateOrganizationUserPayload | null)
    /**
     *     Removes the specified User object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when the specified object is not the signed-in User and a value for 'customer' does not exist on the object.
     *     2. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when the specified object is not the signed-in User and a value for 'customer' exists on the object.
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when the specified object is not the signed-in User and a value for 'customer' exists on the object.
     */
    deleteUser: (DeleteUserPayload | null)
    /**
     *     Updates the specified User object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when a value for 'customer' does not exist on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when a value for 'customer' exists on the object.
     *     4. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when a value for 'customer' exists on the object.
     */
    updateUser: (UpdateUserPayload | null)
    __typename: 'RootMutation'
}

export interface AddBlockedRequestIdsPayload {
    result: (UpdateBlockedIdsResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'AddBlockedRequestIdsPayload'
}

export interface UpdateBlockedIdsResult {
    blockedIds: ((Scalars['String'] | null)[] | null)
    __typename: 'UpdateBlockedIdsResult'
}

export interface ErrorType {
    field: Scalars['String']
    messages: Scalars['String'][]
    __typename: 'ErrorType'
}

export interface ChangeOrganizationUseCredentialsPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'ChangeOrganizationUseCredentialsPayload'
}

export interface AdminOperationResult {
    message: (Scalars['String'] | null)
    __typename: 'AdminOperationResult'
}

export interface CreateOrganizationNewStackPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateOrganizationNewStackPayload'
}

export interface CreateOrganizationPlanPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateOrganizationPlanPayload'
}

export interface DisableOrganizationPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DisableOrganizationPayload'
}

export interface EnableOrganizationPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'EnableOrganizationPayload'
}

export interface FindPaidOrganizationsPayload {
    result: (OrgSearchResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'FindPaidOrganizationsPayload'
}

export interface OrgSearchResult {
    orgs: ((OrganizationReturnObject | null)[] | null)
    __typename: 'OrgSearchResult'
}

export interface OrganizationReturnObject {
    orgId: (Scalars['String'] | null)
    orgTenantId: (Scalars['String'] | null)
    orgName: (Scalars['String'] | null)
    planName: (Scalars['String'] | null)
    planExpiresAt: (Scalars['DateTime'] | null)
    systemSuspended: (Scalars['Boolean'] | null)
    allowCustomTheme: (Scalars['Boolean'] | null)
    allowUserLevelConfig: (Scalars['Boolean'] | null)
    allowEmbeddedDesigner: (Scalars['Boolean'] | null)
    allowExecutionRetry: (Scalars['Boolean'] | null)
    allowDisablingInstanceOutputs: (Scalars['Boolean'] | null)
    __typename: 'OrganizationReturnObject'
}

export interface PromoteOrganizationOwnerPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'PromoteOrganizationOwnerPayload'
}

export interface RegisterInternalOrganizationPayload {
    result: (RegisterInternalOrganizationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'RegisterInternalOrganizationPayload'
}

export interface RegisterInternalOrganizationResult {
    orgId: (Scalars['ID'] | null)
    __typename: 'RegisterInternalOrganizationResult'
}

export interface RemoveBlockedRequestIdsPayload {
    result: (UpdateBlockedIdsResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'RemoveBlockedRequestIdsPayload'
}

export interface SearchOrganizationsPayload {
    result: (OrgSearchResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'SearchOrganizationsPayload'
}

export interface SetOrganizationPlanExpiresAtPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'SetOrganizationPlanExpiresAtPayload'
}

export interface SetOrganizationPlanPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'SetOrganizationPlanPayload'
}

export interface SetPlanEnabledFeaturesPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'SetPlanEnabledFeaturesPayload'
}

export interface SwitchOrganizationPayload {
    result: (AdminOperationResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'SwitchOrganizationPayload'
}

export interface UtilizationReportPayload {
    result: (UtilizationReportResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UtilizationReportPayload'
}

export interface UtilizationReportResult {
    startDate: (Scalars['Date'] | null)
    endDate: (Scalars['Date'] | null)
    orgName: (Scalars['String'] | null)
    billedBy: (Scalars['String'] | null)
    quantity: (Scalars['Decimal'] | null)
    __typename: 'UtilizationReportResult'
}

export interface ClearAlertMonitorPayload {
    alertMonitor: (AlertMonitor | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'ClearAlertMonitorPayload'
}

export interface CreateAlertGroupPayload {
    alertGroup: (AlertGroup | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateAlertGroupPayload'
}

export interface CreateAlertMonitorPayload {
    alertMonitor: (AlertMonitor | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateAlertMonitorPayload'
}

export interface CreateAlertWebhookPayload {
    alertWebhook: (AlertWebhook | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateAlertWebhookPayload'
}

export interface DeleteAlertGroupPayload {
    alertGroup: (AlertGroup | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteAlertGroupPayload'
}

export interface DeleteAlertMonitorPayload {
    alertMonitor: (AlertMonitor | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteAlertMonitorPayload'
}

export interface DeleteAlertWebhookPayload {
    alertWebhook: (AlertWebhook | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteAlertWebhookPayload'
}

export interface UpdateAlertGroupPayload {
    alertGroup: (AlertGroup | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateAlertGroupPayload'
}

export interface UpdateAlertMonitorPayload {
    alertMonitor: (AlertMonitor | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateAlertMonitorPayload'
}

export interface UpdateAlertWebhookPayload {
    alertWebhook: (AlertWebhook | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateAlertWebhookPayload'
}

export interface ChangePasswordPayload {
    user: (User | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'ChangePasswordPayload'
}

export interface DeleteComponentPayload {
    component: (Component | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteComponentPayload'
}

export interface PublishComponentPayload {
    publishResult: (PublishComponentResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'PublishComponentPayload'
}

export interface PublishComponentResult {
    component: (Component | null)
    iconUploadUrl: (Scalars['String'] | null)
    packageUploadUrl: (Scalars['String'] | null)
    connectionIconUploadUrls: ((ConnectionIconUploadUrl | null)[] | null)
    __typename: 'PublishComponentResult'
}

export interface ConnectionIconUploadUrl {
    connectionKey: (Scalars['String'] | null)
    iconUploadUrl: (Scalars['String'] | null)
    __typename: 'ConnectionIconUploadUrl'
}

export interface UpdateComponentPayload {
    component: (Component | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateComponentPayload'
}

export interface CreateUserLevelConfigPayload {
    userLevelConfig: (UserLevelConfig | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateUserLevelConfigPayload'
}

export interface DeleteUserLevelConfigPayload {
    userLevelConfig: (UserLevelConfig | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteUserLevelConfigPayload'
}

export interface DisconnectConnectionPayload {
    instanceConfigVariable: (InstanceConfigVariable | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DisconnectConnectionPayload'
}

export interface DisconnectUserLevelConnectionPayload {
    userLevelConfigVariable: (UserLevelConfigVariable | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DisconnectUserLevelConnectionPayload'
}

export interface UpdateOAuth2ConnectionPayload {
    instanceConfigVariable: (InstanceConfigVariable | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateOAuth2ConnectionPayload'
}

export interface CreateConnectionTemplatePayload {
    connectionTemplate: (ConnectionTemplate | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateConnectionTemplatePayload'
}

export interface DeleteConnectionTemplatePayload {
    connectionTemplate: (ConnectionTemplate | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteConnectionTemplatePayload'
}

export interface UpdateConnectionTemplatePayload {
    connectionTemplate: (ConnectionTemplate | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateConnectionTemplatePayload'
}

export interface CreateCustomerCredentialPayload {
    credential: (Credential | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateCustomerCredentialPayload'
}

export interface CreateOrganizationCredentialPayload {
    credential: (Credential | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateOrganizationCredentialPayload'
}

export interface DeleteCredentialPayload {
    credential: (Credential | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteCredentialPayload'
}

export interface RequestOAuth2CredentialAuthorizationPayload {
    credential: (Credential | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'RequestOAuth2CredentialAuthorizationPayload'
}

export interface UpdateCredentialPayload {
    credential: (Credential | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateCredentialPayload'
}

export interface CreateCustomerPayload {
    customer: (Customer | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateCustomerPayload'
}

export interface DeleteCustomerPayload {
    customer: (Customer | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteCustomerPayload'
}

export interface UpdateCustomerPayload {
    customer: (Customer | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateCustomerPayload'
}

export interface ReplayExecutionPayload {
    instanceExecutionResult: (InstanceExecutionResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'ReplayExecutionPayload'
}

export interface CreateInstancePayload {
    instance: (Instance | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateInstancePayload'
}

export interface DeleteInstancePayload {
    instance: (Instance | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteInstancePayload'
}

export interface DeployInstancePayload {
    instance: (Instance | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeployInstancePayload'
}

export interface FetchConfigWizardPageContentPayload {
    fetchConfigWizardPageContentResult: (FetchConfigWizardPageContentResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'FetchConfigWizardPageContentPayload'
}


/** Result of fetching Config Wizard Page content. */
export interface FetchConfigWizardPageContentResult {
    /** The Instance for which Config Page content was fetched. */
    instance: (Instance | null)
    /** The name of the Configuration Page for which content was fetched. */
    pageName: (Scalars['String'] | null)
    /** The JSON string that contains a map of Config Var key to content for the widget for the associated Config Var. */
    content: (Scalars['JSONString'] | null)
    __typename: 'FetchConfigWizardPageContentResult'
}

export interface FetchDataSourceContentPayload {
    fetchDataSourceContentResult: (FetchDataSourceContentResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'FetchDataSourceContentPayload'
}


/** Result of fetching content for a single Data Source in the context of an Instance. */
export interface FetchDataSourceContentResult {
    /** The Instance that is used as the context when fetching content for the specified Data Source. */
    instance: (Instance | null)
    /** The Data Source for which to fetch content. */
    dataSource: (Action | null)
    /** The JSON string that contains the content for the specified Data Source. */
    content: (Scalars['JSONString'] | null)
    __typename: 'FetchDataSourceContentResult'
}

export interface TestInstanceFlowConfigPayload {
    testInstanceFlowConfigResult: (TestInstanceFlowConfigResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'TestInstanceFlowConfigPayload'
}


/** Result of testing an InstanceFlowConfig. */
export interface TestInstanceFlowConfigResult {
    /** The InstanceFlowConfig that was tested. */
    flowConfig: (InstanceFlowConfig | null)
    /** The HTTP status code of the response returned by the InstanceFlowConfig's Trigger. */
    statusCode: (Scalars['Int'] | null)
    /** The HTTP headers of the response returned by the InstanceFlowConfig's Trigger. */
    headers: (Scalars['JSONString'] | null)
    /** The HTTP body of the response returned by the InstanceFlowConfig's Trigger. */
    body: (Scalars['String'] | null)
    /** The InstanceExecutionResult that specifies the result of testing the InstanceFlowConfig. */
    execution: (InstanceExecutionResult | null)
    __typename: 'TestInstanceFlowConfigResult'
}

export interface UpdateInstanceConfigVariablesPayload {
    instance: (Instance | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateInstanceConfigVariablesPayload'
}

export interface UpdateInstancePayload {
    instance: (Instance | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateInstancePayload'
}

export interface BulkUpdateInstancesToLatestIntegrationVersionPayload {
    integration: (Integration | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'BulkUpdateInstancesToLatestIntegrationVersionPayload'
}

export interface CreateIntegrationPayload {
    integration: (Integration | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateIntegrationPayload'
}

export interface DeleteIntegrationPayload {
    integration: (Integration | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteIntegrationPayload'
}

export interface ForkIntegrationPayload {
    integration: (Integration | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'ForkIntegrationPayload'
}

export interface ImportIntegrationPayload {
    integration: (Integration | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'ImportIntegrationPayload'
}

export interface PublishIntegrationPayload {
    integration: (Integration | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'PublishIntegrationPayload'
}

export interface TestFlowTriggerEventPayload {
    testFlowTriggerEventResult: (TestFlowTriggerEventResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'TestFlowTriggerEventPayload'
}


/** Result of testing an IntegrationFlow's trigger event function for the specified event type. */
export interface TestFlowTriggerEventResult {
    /** The IntegrationFlow whose trigger was used for testing. */
    flow: (IntegrationFlow | null)
    /** Whether or not the IntegrationFlow's trigger event function succeeded. */
    succeeded: (Scalars['Boolean'] | null)
    __typename: 'TestFlowTriggerEventResult'
}

export interface TestIntegrationEndpointConfigPayload {
    testIntegrationEndpointConfigResult: (TestIntegrationEndpointConfigResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'TestIntegrationEndpointConfigPayload'
}


/** Result of testing an Integration endpoint config. */
export interface TestIntegrationEndpointConfigResult {
    /** The Integration for which the associated endpoint configuration was tested. */
    integration: (Integration | null)
    /** The HTTP status code of the response returned as a result of testing the Integration endpoint configuration. */
    statusCode: (Scalars['Int'] | null)
    /** The HTTP headers of the response returned as a result of testing the Integration endpoint configuration. */
    headers: (Scalars['JSONString'] | null)
    /** The HTTP body of the response returned as a result of testing the Integration endpoint configuration. */
    body: (Scalars['String'] | null)
    /** The InstanceExecutionResult that specifies the result of testing the endpoint configuration for the specified Integration. */
    execution: (InstanceExecutionResult | null)
    __typename: 'TestIntegrationEndpointConfigResult'
}

export interface TestIntegrationFlowPayload {
    testIntegrationFlowResult: (TestIntegrationFlowResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'TestIntegrationFlowPayload'
}


/** Result of testing an IntegrationFlow. */
export interface TestIntegrationFlowResult {
    /** The IntegrationFlow that was tested. */
    flow: (IntegrationFlow | null)
    /** The HTTP status code of the response returned by the InstanceFlow's Trigger. */
    statusCode: (Scalars['Int'] | null)
    /** The HTTP headers of the response returned by the InstanceFlow's Trigger. */
    headers: (Scalars['JSONString'] | null)
    /** The HTTP body of the response returned by the InstanceFlow's Trigger. */
    body: (Scalars['String'] | null)
    /** The InstanceExecutionResult that specifies the result of testing the IntegrationFlow. */
    execution: (InstanceExecutionResult | null)
    __typename: 'TestIntegrationFlowResult'
}

export interface UpdateIntegrationPayload {
    integration: (Integration | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateIntegrationPayload'
}

export interface UpdateIntegrationMarketplaceConfigurationPayload {
    integration: (Integration | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateIntegrationMarketplaceConfigurationPayload'
}

export interface UpdateIntegrationVersionAvailabilityPayload {
    integration: (Integration | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateIntegrationVersionAvailabilityPayload'
}

export interface ValidateIntegrationSchemaPayload {
    result: (ValidateIntegrationSchemaFormResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'ValidateIntegrationSchemaPayload'
}

export interface ValidateIntegrationSchemaFormResult {
    isValid: (Scalars['Boolean'] | null)
    __typename: 'ValidateIntegrationSchemaFormResult'
}

export interface CreateExternalLogStreamPayload {
    externalLogStream: (ExternalLogStream | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateExternalLogStreamPayload'
}

export interface DeleteExternalLogStreamPayload {
    externalLogStream: (ExternalLogStream | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteExternalLogStreamPayload'
}

export interface UpdateExternalLogStreamPayload {
    externalLogStream: (ExternalLogStream | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateExternalLogStreamPayload'
}

export interface CreateOrganizationSigningKeyPayload {
    result: (CreateOrganizationSigningKeyResult | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateOrganizationSigningKeyPayload'
}

export interface CreateOrganizationSigningKeyResult {
    signingKey: (OrganizationSigningKey | null)
    privateKey: (Scalars['String'] | null)
    __typename: 'CreateOrganizationSigningKeyResult'
}

export interface DeleteOrganizationPayload {
    organization: (Organization | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteOrganizationPayload'
}

export interface DeleteOrganizationSigningKeyPayload {
    organizationSigningKey: (OrganizationSigningKey | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteOrganizationSigningKeyPayload'
}

export interface ImportOrganizationSigningKeyPayload {
    organizationSigningKey: (OrganizationSigningKey | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'ImportOrganizationSigningKeyPayload'
}

export interface UpdateOrganizationPayload {
    organization: (Organization | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateOrganizationPayload'
}

export interface AdministerObjectPermissionPayload {
    user: (User | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'AdministerObjectPermissionPayload'
}

export interface UpdateThemePayload {
    theme: (Theme | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateThemePayload'
}

export interface CreateCustomerUserPayload {
    user: (User | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateCustomerUserPayload'
}

export interface CreateOrganizationUserPayload {
    user: (User | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateOrganizationUserPayload'
}

export interface DeleteUserPayload {
    user: (User | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'DeleteUserPayload'
}

export interface UpdateUserPayload {
    user: (User | null)
    errors: ErrorType[]
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateUserPayload'
}

export type Query = RootQuery
export type Mutation = RootMutation

export interface RootQueryGenqlSelection{
    /**
     * 
     *     Returns the specified OrgTotalUsageMetrics object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view_utilization].
     */
    orgTotalUsageMetric?: (OrgTotalUsageMetricsGenqlSelection & { __args: {
    /** The ID of the OrgTotalUsageMetrics object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of OrgTotalUsageMetrics objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view_utilization].
     */
    orgTotalUsageMetrics?: (OrgTotalUsageMetricsConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where snapshotTime occurs on or after the specified value. */
    snapshotTime_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where snapshotTime occurs on or before the specified value. */
    snapshotTime_Lte?: (Scalars['DateTime'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (OrgTotalUsageMetricsOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((OrgTotalUsageMetricsOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified OrgDailyUsageMetrics object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view_utilization].
     */
    orgDailyUsageMetric?: (OrgDailyUsageMetricsGenqlSelection & { __args: {
    /** The ID of the OrgDailyUsageMetrics object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of OrgDailyUsageMetrics objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view_utilization].
     */
    orgDailyUsageMetrics?: (OrgDailyUsageMetricsConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where snapshotDate occurs on or after the specified value. */
    snapshotDate_Gte?: (Scalars['Date'] | null), 
    /** Filter for objects where snapshotDate occurs on or before the specified value. */
    snapshotDate_Lte?: (Scalars['Date'] | null), 
    /** Filter for objects where snapshotDate matches the specified value. */
    snapshotDate?: (Scalars['Date'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (OrgDailyUsageMetricsOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((OrgDailyUsageMetricsOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified InstanceDailyUsageMetrics object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    instanceDailyUsageMetric?: (InstanceDailyUsageMetricsGenqlSelection & { __args: {
    /** The ID of the InstanceDailyUsageMetrics object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of InstanceDailyUsageMetrics objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    instanceDailyUsageMetrics?: (InstanceDailyUsageMetricsConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where snapshotDate occurs on or after the specified value. */
    snapshotDate_Gte?: (Scalars['Date'] | null), 
    /** Filter for objects where snapshotDate occurs on or before the specified value. */
    snapshotDate_Lte?: (Scalars['Date'] | null), 
    /** Filter for objects where snapshotDate matches the specified value. */
    snapshotDate?: (Scalars['Date'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceDailyUsageMetricsOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceDailyUsageMetricsOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified CustomerTotalUsageMetrics object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances].
     */
    customerTotalUsageMetric?: (CustomerTotalUsageMetricsGenqlSelection & { __args: {
    /** The ID of the CustomerTotalUsageMetrics object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of CustomerTotalUsageMetrics objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances].
     */
    customerTotalUsageMetrics?: (CustomerTotalUsageMetricsConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where snapshotTime occurs on or after the specified value. */
    snapshotTime_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where snapshotTime occurs on or before the specified value. */
    snapshotTime_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (CustomerTotalUsageMetricsOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((CustomerTotalUsageMetricsOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified User object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users, org_view_users].
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users, customer_view_users].
     */
    user?: (UserGenqlSelection & { __args: {
    /** The ID of the User object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of User objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users, org_view_users].
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users, customer_view_users].
     */
    users?: (UserConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where email matches the specified value. */
    email?: (Scalars['String'] | null), 
    /** Filter for objects where email contains the specified value (case insensitive). */
    email_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where externalId matches the specified value. */
    externalId?: (Scalars['String'] | null), 
    /** Filter for objects where externalId is NULL. */
    externalId_Isnull?: (Scalars['Boolean'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (UserOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((UserOrder | null)[] | null)} })
    /** Returns whether a User exists with the specified email address. */
    userExists?: { __args: {
    /** The email address to check. */
    email: Scalars['String']} }
    /**
     * 
     *     Returns the Organization Theme of the signed-in User.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    theme?: ThemeGenqlSelection
    /**
     * 
     *     Returns the specified StarredRecord object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'user' attribute is the signed-in User.
     */
    starredRecord?: (StarredRecordGenqlSelection & { __args: {
    /** The ID of the StarredRecord object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of StarredRecord objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'user' attribute is the signed-in User.
     */
    starredRecords?: (StarredRecordConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (StarredRecordOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((StarredRecordOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified Permission object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    permission?: (PermissionGenqlSelection & { __args: {
    /** The ID of the Permission object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Permission objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    permissions?: (PermissionConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where objType matches the specified ID. */
    objType?: (Scalars['ID'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (PermissionOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((PermissionOrder | null)[] | null)} })
    /**
     * 
     *     Returns a list of Organization Role objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The Role level is less than that of the signed-in User's Role.
     */
    organizationRoles?: RoleGenqlSelection
    /**
     * 
     *     Returns the specified ObjectPermissionGrant object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    objectPermissionGrant?: (ObjectPermissionGrantGenqlSelection & { __args: {
    /** The ID of the ObjectPermissionGrant object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of ObjectPermissionGrant objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    objectPermissionGrants?: (ObjectPermissionGrantConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where user matches the specified ID. */
    user?: (Scalars['ID'] | null), 
    /** Filter for objects where obj matches the specified value. */
    obj?: (Scalars['UUID'] | null), 
    /** Filter for objects where permission matches the specified ID. */
    permission?: (Scalars['ID'] | null), 
    /** Filter for objects where grantedByRole matches the specified ID. */
    grantedByRole?: (Scalars['ID'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ObjectPermissionGrantOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ObjectPermissionGrantOrder | null)[] | null)} })
    /**
     * 
     *     Returns a list of Customer Role objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The Role level is less than that of the signed-in User's Role.
     */
    customerRoles?: RoleGenqlSelection
    /**
     * 
     *     Returns the specified AuthObjectType object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    authObjectType?: (AuthObjectTypeGenqlSelection & { __args: {
    /** The ID of the AuthObjectType object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of AuthObjectType objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    authObjectTypes?: (AuthObjectTypeConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AuthObjectTypeOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AuthObjectTypeOrder | null)[] | null)} })
    /**
     * 
     *     Returns the Organization of the signed-in User if the User is an Organization User.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_view].
     */
    organization?: OrganizationGenqlSelection
    /**
     * 
     *     Returns the specified Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    marketplaceIntegration?: (IntegrationGenqlSelection & { __args: {
    /** The ID of the Integration object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Integration objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    marketplaceIntegrations?: (IntegrationConnectionGenqlSelection & { __args?: {
    /** Return only activated Integrations */
    activated?: (Scalars['Boolean'] | null), 
    /** Include non-marketplace integrations deployed to the customer of the caller */
    includeActiveIntegrations?: (Scalars['Boolean'] | null), 
    /** JSON structure defining a conditional logic expression tree to use for including specific Integrations. */
    filterQuery?: (Scalars['JSONString'] | null), 
    /** If true, `filterQuery` will be evaluated by ANDing the conditions with `activated` and `includeActiveIntegrations`. If false, it will be evaluated using OR. */
    strictMatchFilterQuery?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description matches the specified value. */
    description?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where hasUnpublishedChanges matches the specified value. */
    hasUnpublishedChanges?: (Scalars['Boolean'] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where category contains the specified value (case insensitive). */
    category_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration starts with the specified value (case insensitive). */
    marketplaceConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration.iexact matches the specified value. */
    marketplaceConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration is contained in the list of specified values. */
    marketplaceConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where useAsTemplate matches the specified value. */
    useAsTemplate?: (Scalars['Boolean'] | null), 
    /** Filter for objects where templateConfiguration starts with the specified value (case insensitive). */
    templateConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration.iexact matches the specified value. */
    templateConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration is contained in the list of specified values. */
    templateConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where allowMultipleMarketplaceInstances matches the specified value. */
    allowMultipleMarketplaceInstances?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where isCodeNative matches the specified value. */
    isCodeNative?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (IntegrationOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((IntegrationOrder | null)[] | null)} })
    /** Returns a list of LogSeverity objects. */
    logSeverityLevels?: LogSeverityGenqlSelection
    /**
     * 
     *     Returns the specified Log object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     5. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     */
    log?: (LogGenqlSelection & { __args: {
    /** The ID of the Log object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Log objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     5. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     */
    logs?: (LogConnectionGenqlSelection & { __args?: {
    /** Filter for objects where executionResult.isTestExecution matches the specified value. */
    executionResult_IsTestExecution?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where message contains the specified value (case insensitive). */
    message_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where timestamp occurs on or after the specified value. */
    timestamp_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where timestamp occurs on or before the specified value. */
    timestamp_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where severity matches the specified value. */
    severity?: (Scalars['Int'] | null), 
    /** Filter for objects where executionResult matches the specified ID. */
    executionResult?: (Scalars['ID'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where configVariable is NULL. */
    configVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where userLevelConfigVariable is NULL. */
    userLevelConfigVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integrationVersionSequenceId matches the specified value. */
    integrationVersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (LogOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((LogOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified ExternalLogStream object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    externalLogStream?: (ExternalLogStreamGenqlSelection & { __args: {
    /** The ID of the ExternalLogStream object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of ExternalLogStream objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    externalLogStreams?: (ExternalLogStreamConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ExternalLogStreamOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ExternalLogStreamOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    integration?: (IntegrationGenqlSelection & { __args: {
    /** The ID of the Integration object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Integration objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    integrations?: (IntegrationConnectionGenqlSelection & { __args?: {
    /** Returns only the version of Integrations either deployed or available in the Marketplace */
    marketplace?: (Scalars['Boolean'] | null), 
    /** Return all versions instead of only the latest */
    allVersions?: (Scalars['Boolean'] | null), 
    /** Return only Integrations that have Instances */
    hasInstances?: (Scalars['Boolean'] | null), 
    /** Return only Integrations that use outdated Components */
    hasOutdatedComponents?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description matches the specified value. */
    description?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where hasUnpublishedChanges matches the specified value. */
    hasUnpublishedChanges?: (Scalars['Boolean'] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where category contains the specified value (case insensitive). */
    category_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration starts with the specified value (case insensitive). */
    marketplaceConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration.iexact matches the specified value. */
    marketplaceConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration is contained in the list of specified values. */
    marketplaceConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where useAsTemplate matches the specified value. */
    useAsTemplate?: (Scalars['Boolean'] | null), 
    /** Filter for objects where templateConfiguration starts with the specified value (case insensitive). */
    templateConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration.iexact matches the specified value. */
    templateConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration is contained in the list of specified values. */
    templateConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where allowMultipleMarketplaceInstances matches the specified value. */
    allowMultipleMarketplaceInstances?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where isCodeNative matches the specified value. */
    isCodeNative?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (IntegrationOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((IntegrationOrder | null)[] | null)} })
    /** Returns a list of unique Integration labels. */
    integrationLabels?: LabelGenqlSelection
    /** DEPRECATED. Prefer using integrationCategories instead. */
    categories?: IntegrationCategoryGenqlSelection
    /** Returns a list of Integration categories. */
    integrationCategories?: IntegrationCategoryGenqlSelection
    /**
     * 
     *     Returns the specified Instance object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     6. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    instance?: (InstanceGenqlSelection & { __args: {
    /** The ID of the Instance object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Instance objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     6. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    instances?: (InstanceConnectionGenqlSelection & { __args?: {
    /** Opt in to new behavior. */
    compatibility?: (Scalars['Int'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description matches the specified value. */
    description?: (Scalars['String'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer.externalId matches the specified value. */
    customer_ExternalId?: (Scalars['String'] | null), 
    /** Filter for objects where enabled matches the specified value. */
    enabled?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isSystem matches the specified value. */
    isSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where needsDeploy matches the specified value. */
    needsDeploy?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceOrder | null)[] | null)} })
    /** Returns a list of unique Instance labels. */
    instanceLabels?: LabelGenqlSelection
    /**
     * 
     *     Returns the specified InstanceFlowConfig object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     6. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    instanceFlowConfig?: (InstanceFlowConfigGenqlSelection & { __args: {
    /** The ID of the InstanceFlowConfig object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of InstanceFlowConfig objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     6. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    instanceFlowConfigs?: (InstanceFlowConfigConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where flow.name matches the specified value. */
    flow_Name?: (Scalars['String'] | null), 
    /** Filter for objects where inFailedState matches the specified value. */
    inFailedState?: (Scalars['Boolean'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceFlowConfigOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceFlowConfigOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified InstanceExecutionResult object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     4. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    executionResult?: (InstanceExecutionResultGenqlSelection & { __args: {
    /** The ID of the InstanceExecutionResult object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of InstanceExecutionResult objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     *     4. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    executionResults?: (InstanceExecutionResultConnectionGenqlSelection & { __args?: {
    /** The status of the Instance execution. */
    status?: (ExecutionStatus | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where id matches the specified value. */
    id?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance is NULL. */
    instance_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration.versionSequenceId matches the specified value. */
    instance_Integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null), 
    /** Filter for objects where startedAt occurs on or after the specified value. */
    startedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where startedAt occurs on or before the specified value. */
    startedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or after the specified value. */
    endedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or before the specified value. */
    endedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt is NULL. */
    endedAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where error is NULL. */
    error_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryCount.gte matches the specified value. */
    retryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount.lte matches the specified value. */
    retryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount matches the specified value. */
    retryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.gte matches the specified value. */
    maxRetryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.lte matches the specified value. */
    maxRetryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount matches the specified value. */
    maxRetryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where retryNextAt occurs on or after the specified value. */
    retryNextAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt occurs on or before the specified value. */
    retryNextAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt is NULL. */
    retryNextAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryUniqueRequestId matches the specified value. */
    retryUniqueRequestId?: (Scalars['String'] | null), 
    /** Filter for objects where retryForExecution is NULL. */
    retryForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where replayForExecution is NULL. */
    replayForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where invokeType is contained in the list of specified values. */
    invokeType_In?: ((Scalars['String'] | null)[] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceExecutionResultOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceExecutionResultOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified Customer object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_crud_customers, org_view_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations, customer_access_marketplace_integrations].
     */
    customer?: (CustomerGenqlSelection & { __args: {
    /** The ID of the Customer object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Customer objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_crud_customers, org_view_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances, customer_manage_marketplace_integrations, customer_access_marketplace_integrations].
     */
    customers?: (CustomerConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where name starts with the specified value (case insensitive). */
    name_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where isSystem matches the specified value. */
    isSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where allowEmbeddedDesigner matches the specified value. */
    allowEmbeddedDesigner?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where externalId matches the specified value. */
    externalId?: (Scalars['String'] | null), 
    /** Filter for objects where externalId is NULL. */
    externalId_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (CustomerOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((CustomerOrder | null)[] | null)} })
    /** Returns a list of unique Customer labels. */
    customerLabels?: LabelGenqlSelection
    /**
     * 
     *     Returns the specified Credential object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_view_customers, org_manage_integrations, org_view_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances].
     */
    credential?: (CredentialGenqlSelection & { __args: {
    /** The ID of the Credential object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Credential objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_view_customers, org_manage_integrations, org_view_integrations].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_view, customer_edit, customer_remove, customer_admin_users, customer_view_users, customer_admin_instance_permissions, customer_view_instances].
     */
    credentials?: (CredentialConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where readyForUse matches the specified value. */
    readyForUse?: (Scalars['Boolean'] | null), 
    /** Filter for objects where authorizationMethod.key matches the specified value. */
    authorizationMethod_Key?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (CredentialOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((CredentialOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified AuthorizationMethod object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    authorizationMethod?: (AuthorizationMethodGenqlSelection & { __args: {
    /** The ID of the AuthorizationMethod object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of AuthorizationMethod objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    authorizationMethods?: (AuthorizationMethodConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /**
     * 
     *     Returns the specified ConnectionTemplate object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view].
     *     2. The signed-in User has any of the following permissions for the associated Customer: [customer_manage_integrations].
     */
    connectionTemplate?: (ConnectionTemplateGenqlSelection & { __args: {
    /** The ID of the ConnectionTemplate object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of ConnectionTemplate objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_view].
     *     2. The signed-in User has any of the following permissions for the associated Customer: [customer_manage_integrations].
     */
    connectionTemplates?: (ConnectionTemplateConnectionGenqlSelection & { __args?: {
    /** Connection associated with this template. */
    connectionId?: (Scalars['ID'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ConnectionTemplateOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ConnectionTemplateOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified Component object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'public' attribute equals: True.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_component_permissions, org_manage_components, org_view_components].
     *     3. The signed-in User has any of the following permissions for any version of the object: [component_view, component_edit, component_remove, component_admin_permissions, component_publish_new_version].
     *     4. The signed-in User has any of the following permissions for the associated Customer: [customer_view_org_components].
     */
    component?: (ComponentGenqlSelection & { __args: {
    /** The ID of the Component object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Component objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'public' attribute equals: True.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_component_permissions, org_manage_components, org_view_components].
     *     3. The signed-in User has any of the following permissions for any version of the object: [component_view, component_edit, component_remove, component_admin_permissions, component_publish_new_version].
     *     4. The signed-in User has any of the following permissions for the associated Customer: [customer_view_org_components].
     */
    components?: (ComponentConnectionGenqlSelection & { __args?: {
    /** Return all versions instead of only the latest */
    allVersions?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Triggers */
    hasTriggers?: (Scalars['Boolean'] | null), 
    /** Return only Components that have commonly-used Triggers */
    hasCommonTriggers?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Actions */
    hasActions?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Connections */
    hasConnections?: (Scalars['Boolean'] | null), 
    /** Return only Components that have at least one Connection that's templated */
    hasConnectionTemplates?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Data Sources */
    hasDataSources?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Data Sources of the specified type. */
    hasDataSourcesOfType?: (Scalars['String'] | null), 
    /** JSON structure defining a conditional logic expression tree to use for including specific Actions. */
    filterQuery?: (Scalars['JSONString'] | null), 
    /** Include Components that are for Code Native Integrations in addition to normal Components. */
    includeComponentsForCodeNativeIntegrations?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key contains the specified value (case insensitive). */
    key_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms contains the specified value (case insensitive). */
    searchTerms_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms.fulltext matches the specified value. */
    searchTerms_Fulltext?: (Scalars['String'] | null), 
    /** Filter for objects where public matches the specified value. */
    public?: (Scalars['Boolean'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or after the specified value. */
    versionCreatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or before the specified value. */
    versionCreatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ComponentOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ComponentOrder | null)[] | null)} })
    /** Returns a list of unique Component labels. */
    componentLabels?: LabelGenqlSelection
    /** Returns a list of Component categories. */
    componentCategories?: ComponentCategoryGenqlSelection
    /** Returns a pre-signed URL for uploading the specified media file. */
    uploadMedia?: (UploadMediaGenqlSelection & { __args: {
    /** The ID of the object with which to associate the media file. */
    objectId: Scalars['ID'], 
    /** The name of the media file. */
    fileName: Scalars['String'], 
    /** The relationship of the media file to the object. */
    mediaType: MediaType} })
    /**
     * 
     *     Returns the signed-in User.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users, org_view_users].
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers, org_view_customers].
     *     4. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users, customer_view_users].
     */
    authenticatedUser?: UserGenqlSelection
    /**
     * 
     *     Returns the specified AlertWebhook object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     */
    alertWebhook?: (AlertWebhookGenqlSelection & { __args: {
    /** The ID of the AlertWebhook object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertWebhook objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     */
    alertWebhooks?: (AlertWebhookConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where url contains the specified value (case insensitive). */
    url_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertWebhookOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertWebhookOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified AlertTrigger object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    alertTrigger?: (AlertTriggerGenqlSelection & { __args: {
    /** The ID of the AlertTrigger object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertTrigger objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    alertTriggers?: (AlertTriggerConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where isInstanceSpecific matches the specified value. */
    isInstanceSpecific?: (Scalars['Boolean'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertTriggerOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertTriggerOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified AlertMonitor object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    alertMonitor?: (AlertMonitorGenqlSelection & { __args: {
    /** The ID of the AlertMonitor object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertMonitor objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    alertMonitors?: (AlertMonitorConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.name contains the specified value (case insensitive). */
    instance_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggers contains at least one of the specified values. */
    triggers?: ((Scalars['ID'] | null)[] | null), 
    /** Filter for objects where triggers.name contains the specified value (case insensitive). */
    triggers_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggered matches the specified value. */
    triggered?: (Scalars['Boolean'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or after the specified value. */
    lastTriggeredAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or before the specified value. */
    lastTriggeredAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertMonitorOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertMonitorOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified AlertGroup object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     */
    alertGroup?: (AlertGroupGenqlSelection & { __args: {
    /** The ID of the AlertGroup object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertGroup objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     */
    alertGroups?: (AlertGroupConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertGroupOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertGroupOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified AlertEvent object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'monitor_Instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_admin_manage_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'monitor_Instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    alertEvent?: (AlertEventGenqlSelection & { __args: {
    /** The ID of the AlertEvent object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of AlertEvent objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_instance_permissions, org_manage_instances, org_view_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'monitor_Instance_Customer' attribute: [customer_admin_instance_permissions, customer_view_instances, customer_admin_manage_instances].
     *     3. The signed-in User has any of the following permissions for the object's 'monitor_Instance' attribute: [instance_admin_permissions, instance_view, instance_edit, instance_remove].
     */
    alertEvents?: (AlertEventConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where details contains the specified value (case insensitive). */
    details_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where monitor.instance.customer matches the specified ID. */
    monitor_Instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where monitor.instance.integration matches the specified ID. */
    monitor_Instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where monitor.instance matches the specified ID. */
    monitor_Instance?: (Scalars['ID'] | null), 
    /** Filter for objects where monitor.instance.name contains the specified value (case insensitive). */
    monitor_Instance_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where monitor.name contains the specified value (case insensitive). */
    monitor_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where monitor matches the specified ID. */
    monitor?: (Scalars['ID'] | null), 
    /** Filter for objects where monitor.flowConfig matches the specified ID. */
    monitor_FlowConfig?: (Scalars['ID'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertEventOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertEventOrder | null)[] | null)} })
    /** Returns a list of the top 10 'hottest' requestIds this minute. Counts include requests that are prematurely terminated due to rate limiting. */
    hotRequestIdsThisMinute?: HotRequestIdsResultGenqlSelection
    /** Returns a list of the top 10 'hottest' requestIds this hour. Counts include requests that are prematurely terminated due to rate limiting. */
    hotRequestIdsThisHour?: HotRequestIdsResultGenqlSelection
    /** Returns a list of requestIds that are blocked. */
    blockedRequestIds?: boolean | number
    /**
     * 
     *     Returns the specified Activity object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'user' attribute is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_view_activities].
     *     3. The signed-in User has any of the following permissions for the object's 'user_Customer' attribute: [customer_view_activities].
     */
    activity?: (ActivityGenqlSelection & { __args: {
    /** The ID of the Activity object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Activity objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'user' attribute is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_view_activities].
     *     3. The signed-in User has any of the following permissions for the object's 'user_Customer' attribute: [customer_view_activities].
     */
    activities?: (ActivityConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ActivityOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ActivityOrder | null)[] | null)} })
    /**
     * 
     *     Returns the specified Action object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    action?: (ActionGenqlSelection & { __args: {
    /** The ID of the Action object. */
    id: Scalars['ID']} })
    /**
     * 
     *     Returns a Relay Connection to a collection of Action objects.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. Always allowed.
     */
    actions?: (ActionConnectionGenqlSelection & { __args?: {
    /** JSON structure defining a conditional logic expression tree to use for including specific Actions. */
    filterQuery?: (Scalars['JSONString'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key contains the specified value (case insensitive). */
    key_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where label.fulltext matches the specified value. */
    label_Fulltext?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where component matches the specified ID. */
    component?: (Scalars['ID'] | null), 
    /** Filter for objects where isTrigger matches the specified value. */
    isTrigger?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isCommonTrigger matches the specified value. */
    isCommonTrigger?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isDataSource matches the specified value. */
    isDataSource?: (Scalars['Boolean'] | null), 
    /** Filter for objects where dataSourceType matches the specified value. */
    dataSourceType?: (Scalars['String'] | null), 
    /** Filter for objects where hasOnInstanceDeploy matches the specified value. */
    hasOnInstanceDeploy?: (Scalars['Boolean'] | null), 
    /** Filter for objects where hasOnInstanceDelete matches the specified value. */
    hasOnInstanceDelete?: (Scalars['Boolean'] | null), 
    /** Filter for objects where searchTerms.fulltext matches the specified value. */
    searchTerms_Fulltext?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ActionOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ActionOrder | null)[] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents snapshots of total utilization metrics for the Organization. */
export interface OrgTotalUsageMetricsGenqlSelection{
    /** The time the utilization metrics snapshot was created. */
    snapshotTime?: boolean | number
    /** The total number of Integrations that currently exist. */
    integrationCount?: boolean | number
    /** The total number of Customers that currently exist. */
    customerCount?: boolean | number
    /** The total number of Instances that are deployed. */
    deployedInstanceCount?: boolean | number
    /** The total number of unique Integrations that are deployed. */
    deployedUniqueIntegrationCount?: boolean | number
    /** The total number of Users that currently exist. */
    userCount?: boolean | number
    /** The total number of bytes of blob storage currently used. */
    blobBytesStored?: boolean | number
    /** The ID of the object */
    id?: boolean | number
    /** Specifies whether the signed-in User can update the OrgTotalUsageMetrics. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the OrgTotalUsageMetrics. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An object with an ID */
export interface NodeGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    on_OrgTotalUsageMetrics?: OrgTotalUsageMetricsGenqlSelection
    on_OrgDailyUsageMetrics?: OrgDailyUsageMetricsGenqlSelection
    on_InstanceDailyUsageMetrics?: InstanceDailyUsageMetricsGenqlSelection
    on_Instance?: InstanceGenqlSelection
    on_Customer?: CustomerGenqlSelection
    on_Organization?: OrganizationGenqlSelection
    on_Theme?: ThemeGenqlSelection
    on_ThemeColor?: ThemeColorGenqlSelection
    on_ThemeProperty?: ThemePropertyGenqlSelection
    on_OrganizationSigningKey?: OrganizationSigningKeyGenqlSelection
    on_Credential?: CredentialGenqlSelection
    on_AuthorizationMethod?: AuthorizationMethodGenqlSelection
    on_CredentialField?: CredentialFieldGenqlSelection
    on_User?: UserGenqlSelection
    on_Role?: RoleGenqlSelection
    on_AuthObjectType?: AuthObjectTypeGenqlSelection
    on_Permission?: PermissionGenqlSelection
    on_Integration?: IntegrationGenqlSelection
    on_RequiredConfigVariable?: RequiredConfigVariableGenqlSelection
    on_Connection?: ConnectionGenqlSelection
    on_Component?: ComponentGenqlSelection
    on_Action?: ActionGenqlSelection
    on_InputField?: InputFieldGenqlSelection
    on_Version?: VersionGenqlSelection
    on_ConnectionTemplate?: ConnectionTemplateGenqlSelection
    on_InputFieldTemplate?: InputFieldTemplateGenqlSelection
    on_RequiredConfigVariableCredentialType?: RequiredConfigVariableCredentialTypeGenqlSelection
    on_Expression?: ExpressionGenqlSelection
    on_IntegrationFlow?: IntegrationFlowGenqlSelection
    on_IntegrationAction?: IntegrationActionGenqlSelection
    on_InstanceExecutionResult?: InstanceExecutionResultGenqlSelection
    on_InstanceFlowConfig?: InstanceFlowConfigGenqlSelection
    on_AlertMonitor?: AlertMonitorGenqlSelection
    on_AlertTrigger?: AlertTriggerGenqlSelection
    on_AlertGroup?: AlertGroupGenqlSelection
    on_AlertWebhook?: AlertWebhookGenqlSelection
    on_AlertEvent?: AlertEventGenqlSelection
    on_Log?: LogGenqlSelection
    on_InstanceConfigVariable?: InstanceConfigVariableGenqlSelection
    on_UserLevelConfigVariable?: UserLevelConfigVariableGenqlSelection
    on_UserLevelConfig?: UserLevelConfigGenqlSelection
    on_UserLevelFlowConfig?: UserLevelFlowConfigGenqlSelection
    on_InstanceStepResult?: InstanceStepResultGenqlSelection
    on_CustomerTotalUsageMetrics?: CustomerTotalUsageMetricsGenqlSelection
    on_StarredRecord?: StarredRecordGenqlSelection
    on_ObjectPermissionGrant?: ObjectPermissionGrantGenqlSelection
    on_ExternalLogStream?: ExternalLogStreamGenqlSelection
    on_Label?: LabelGenqlSelection
    on_IntegrationCategory?: IntegrationCategoryGenqlSelection
    on_ComponentCategory?: ComponentCategoryGenqlSelection
    on_Activity?: ActivityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of OrgTotalUsageMetrics objects. */
export interface OrgTotalUsageMetricsConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: OrgTotalUsageMetricsGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: OrgTotalUsageMetricsEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export interface PageInfoGenqlSelection{
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related OrgTotalUsageMetrics object and a cursor for pagination. */
export interface OrgTotalUsageMetricsEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: OrgTotalUsageMetricsGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface OrgTotalUsageMetricsOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: OrgTotalUsageMetricsOrderField}


/** Represents snapshots of daily utilization metrics for an Organization. */
export interface OrgDailyUsageMetricsGenqlSelection{
    /** The date the utilization metrics snapshot was created. */
    snapshotDate?: boolean | number
    /** The total number of successful Instance executions on the snapshot date. */
    successfulExecutionCount?: boolean | number
    /** The total number of failed Instance executions on the snapshot date. */
    failedExecutionCount?: boolean | number
    /** The total number of steps executed on the snapshot date. */
    stepCount?: boolean | number
    /** The total execution spend on the snapshot date in MB-secs. */
    spendMbSecs?: boolean | number
    /** The ID of the object */
    id?: boolean | number
    /** Specifies whether the signed-in User can update the OrgDailyUsageMetrics. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the OrgDailyUsageMetrics. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of OrgDailyUsageMetrics objects. */
export interface OrgDailyUsageMetricsConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: OrgDailyUsageMetricsGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: OrgDailyUsageMetricsEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related OrgDailyUsageMetrics object and a cursor for pagination. */
export interface OrgDailyUsageMetricsEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: OrgDailyUsageMetricsGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface OrgDailyUsageMetricsOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: OrgDailyUsageMetricsOrderField}


/** Represents snapshots of daily utilization metrics for an Instance. */
export interface InstanceDailyUsageMetricsGenqlSelection{
    /** The date the utilization metrics snapshot was created. */
    snapshotDate?: boolean | number
    /** The Instance for which utilization metrics are being collected. */
    instance?: InstanceGenqlSelection
    /** The number of successful executions of this Instance on the snapshot date. */
    successfulExecutionCount?: boolean | number
    /** The number of failed executions of this Instance on the snapshot date. */
    failedExecutionCount?: boolean | number
    /** The number of steps executed for this Instance on the snapshot date. */
    stepCount?: boolean | number
    /** The execution spend for this Instance on the snapshot date in MB-secs. */
    spendMbSecs?: boolean | number
    /** The ID of the object */
    id?: boolean | number
    /** Specifies whether the signed-in User can update the InstanceDailyUsageMetrics. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the InstanceDailyUsageMetrics. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents an instance of an Integration which has been deployed in the
 * context of a Customer, to include Config Variable values, Credentials, and
 * a specific version of an Integration.
 */
export interface InstanceGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** The labels that are associated with the object. */
    labels?: boolean | number
    /** The name of the Instance. */
    name?: boolean | number
    /** The Customer for which the Instance is deployed. */
    customer?: CustomerGenqlSelection
    /** Additional notes about the Instance. */
    description?: boolean | number
    /** The timestamp at which the Instance was most recently deployed. */
    lastDeployedAt?: boolean | number
    /** The specific version of the Instance that is deployed. */
    deployedVersion?: boolean | number
    /** Specifies whether the Instance has been suspended by Prismatic. */
    systemSuspended?: boolean | number
    /** Specifies whether the latest execution of this Instance resulted in a failure. */
    inFailedState?: boolean | number
    /** Specifies whether a deploy is needed to reflect the newest configuration for this Instance. */
    needsDeploy?: boolean | number
    /** The timestamp at which the Instance was most recently executed. */
    lastExecutedAt?: boolean | number
    /** Specifies whether to disable the creation of logs during Instance execution. */
    logsDisabled?: boolean | number
    /** Specifies whether to disable the creation of step results during Instance execution. */
    stepResultsDisabled?: boolean | number
    /** The Instance that is being monitored by the AlertMonitor. */
    monitors?: (AlertMonitorConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertMonitorOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertMonitorOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.name contains the specified value (case insensitive). */
    instance_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggers contains at least one of the specified values. */
    triggers?: ((Scalars['ID'] | null)[] | null), 
    /** Filter for objects where triggers.name contains the specified value (case insensitive). */
    triggers_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggered matches the specified value. */
    triggered?: (Scalars['Boolean'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or after the specified value. */
    lastTriggeredAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or before the specified value. */
    lastTriggeredAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** The Instance with which the Config Variable is associated. */
    configVariables?: (InstanceConfigVariableConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where status matches the specified value. */
    status?: (Scalars['String'] | null), 
    /** Filter for objects where status is contained in the list of specified values. */
    status_In?: ((Scalars['String'] | null)[] | null)} })
    /** The Instance with which the User Level Config is associated. */
    userLevelConfigs?: (UserLevelConfigConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (UserLevelConfigOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((UserLevelConfigOrder | null)[] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where user matches the specified ID. */
    user?: (Scalars['ID'] | null), 
    /** Filter for objects where user.name.iexact matches the specified value. */
    user_Name_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where user.name contains the specified value (case insensitive). */
    user_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where user.email.iexact matches the specified value. */
    user_Email_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where user.email contains the specified value (case insensitive). */
    user_Email_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where user.externalId matches the specified value. */
    user_ExternalId?: (Scalars['String'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** The configuration for the IntegrationFlow associated with the Instance. */
    flowConfigs?: (InstanceFlowConfigConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceFlowConfigOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceFlowConfigOrder | null)[] | null), 
    /** Filter for objects where flow.name matches the specified value. */
    flow_Name?: (Scalars['String'] | null), 
    /** Filter for objects where inFailedState matches the specified value. */
    inFailedState?: (Scalars['Boolean'] | null)} })
    /** The Instance for which a specific InstanceFlowConfig is being executed. */
    executionResults?: (InstanceExecutionResultConnectionGenqlSelection & { __args?: {
    /** The status of the Instance execution. */
    status?: (ExecutionStatus | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceExecutionResultOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceExecutionResultOrder | null)[] | null), 
    /** Filter for objects where id matches the specified value. */
    id?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance is NULL. */
    instance_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration.versionSequenceId matches the specified value. */
    instance_Integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null), 
    /** Filter for objects where startedAt occurs on or after the specified value. */
    startedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where startedAt occurs on or before the specified value. */
    startedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or after the specified value. */
    endedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or before the specified value. */
    endedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt is NULL. */
    endedAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where error is NULL. */
    error_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryCount.gte matches the specified value. */
    retryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount.lte matches the specified value. */
    retryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount matches the specified value. */
    retryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.gte matches the specified value. */
    maxRetryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.lte matches the specified value. */
    maxRetryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount matches the specified value. */
    maxRetryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where retryNextAt occurs on or after the specified value. */
    retryNextAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt occurs on or before the specified value. */
    retryNextAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt is NULL. */
    retryNextAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryUniqueRequestId matches the specified value. */
    retryUniqueRequestId?: (Scalars['String'] | null), 
    /** Filter for objects where retryForExecution is NULL. */
    retryForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where replayForExecution is NULL. */
    replayForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where invokeType is contained in the list of specified values. */
    invokeType_In?: ((Scalars['String'] | null)[] | null)} })
    /** The Instance which created the Log entry. */
    logs?: (LogConnectionGenqlSelection & { __args?: {
    /** Filter for objects where executionResult.isTestExecution matches the specified value. */
    executionResult_IsTestExecution?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (LogOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((LogOrder | null)[] | null), 
    /** Filter for objects where message contains the specified value (case insensitive). */
    message_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where timestamp occurs on or after the specified value. */
    timestamp_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where timestamp occurs on or before the specified value. */
    timestamp_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where severity matches the specified value. */
    severity?: (Scalars['Int'] | null), 
    /** Filter for objects where executionResult matches the specified ID. */
    executionResult?: (Scalars['ID'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where configVariable is NULL. */
    configVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where userLevelConfigVariable is NULL. */
    userLevelConfigVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integrationVersionSequenceId matches the specified value. */
    integrationVersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null)} })
    /** Describes the state of configuration of this Instance. */
    configState?: boolean | number
    /** Specifies whether the signed-in User can deploy the Instance. */
    allowDeploy?: boolean | number
    /** Specifies whether the signed-in User can update config variables for the Instance. */
    allowUpdateConfigVariables?: boolean | number
    /** Specifies whether the Instance can be deployed through the Marketplace. */
    isCustomerDeployable?: boolean | number
    /** Specifies whether the Instance can be upgraded through the Marketplace. */
    isCustomerUpgradeable?: boolean | number
    /** The Integration that has been deployed for the Instance. */
    integration?: (IntegrationGenqlSelection & { __args?: {
    /** Opt in to new behavior. */
    compatibility?: (Scalars['Int'] | null)} })
    /** The User Level Config variables for the requesting User on this Instance. */
    userLevelConfigVariables?: (CustomUserLevelConfigVariableConnectionGenqlSelection & { __args?: {before?: (Scalars['String'] | null), after?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** Specifies whether the Instance is currently enabled and in an executable state. */
    enabled?: boolean | number
    /** Specifies whether the signed-in User can update the Instance. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Instance. */
    allowRemove?: boolean | number
    /** Indicates whether the record is starred by the signed-in User. */
    starred?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a customer, which is an object that allows for logical
 * separation of Users, Instances, and other data that are specific to a
 * particular deployment of the Organization's product(s).
 */
export interface CustomerGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** The labels that are associated with the object. */
    labels?: boolean | number
    /** The URL for the avatar image. */
    avatarUrl?: boolean | number
    /** Allows for mapping an external entity to a Prismatic record. */
    externalId?: boolean | number
    /** The name of the Customer, which must be unique within the scope of its Organization. */
    name?: boolean | number
    /** The Organization to which the Customer belongs. */
    org?: OrganizationGenqlSelection
    /** Additional notes about the Customer. */
    description?: boolean | number
    /** Specifies whether this Customer can use the Embedded Designer. */
    allowEmbeddedDesigner?: boolean | number
    /** The Customer the Credential belongs to, if any. If NULL then Organization will be specified. */
    credentials?: (CredentialConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (CredentialOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((CredentialOrder | null)[] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where readyForUse matches the specified value. */
    readyForUse?: (Scalars['Boolean'] | null), 
    /** Filter for objects where authorizationMethod.key matches the specified value. */
    authorizationMethod_Key?: (Scalars['String'] | null)} })
    /** The Customer for which the Instance is deployed. */
    instances?: (InstanceConnectionGenqlSelection & { __args?: {
    /** Opt in to new behavior. */
    compatibility?: (Scalars['Int'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description matches the specified value. */
    description?: (Scalars['String'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer.externalId matches the specified value. */
    customer_ExternalId?: (Scalars['String'] | null), 
    /** Filter for objects where enabled matches the specified value. */
    enabled?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isSystem matches the specified value. */
    isSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where needsDeploy matches the specified value. */
    needsDeploy?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null)} })
    /** The Customer the Integration belongs to, if any. If this is NULL then the Integration belongs to the Organization. */
    integrations?: (IntegrationConnectionGenqlSelection & { __args?: {
    /** Returns only the version of Integrations either deployed or available in the Marketplace */
    marketplace?: (Scalars['Boolean'] | null), 
    /** Return all versions instead of only the latest */
    allVersions?: (Scalars['Boolean'] | null), 
    /** Return only Integrations that have Instances */
    hasInstances?: (Scalars['Boolean'] | null), 
    /** Return only Integrations that use outdated Components */
    hasOutdatedComponents?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (IntegrationOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((IntegrationOrder | null)[] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description matches the specified value. */
    description?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where hasUnpublishedChanges matches the specified value. */
    hasUnpublishedChanges?: (Scalars['Boolean'] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where category contains the specified value (case insensitive). */
    category_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration starts with the specified value (case insensitive). */
    marketplaceConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration.iexact matches the specified value. */
    marketplaceConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration is contained in the list of specified values. */
    marketplaceConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where useAsTemplate matches the specified value. */
    useAsTemplate?: (Scalars['Boolean'] | null), 
    /** Filter for objects where templateConfiguration starts with the specified value (case insensitive). */
    templateConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration.iexact matches the specified value. */
    templateConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration is contained in the list of specified values. */
    templateConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where allowMultipleMarketplaceInstances matches the specified value. */
    allowMultipleMarketplaceInstances?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where isCodeNative matches the specified value. */
    isCodeNative?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null)} })
    /** The Customer the user belongs to, if any. If this is NULL then Organization will be specified. */
    users?: (UserConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (UserOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((UserOrder | null)[] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where email matches the specified value. */
    email?: (Scalars['String'] | null), 
    /** Filter for objects where email contains the specified value (case insensitive). */
    email_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where externalId matches the specified value. */
    externalId?: (Scalars['String'] | null), 
    /** Filter for objects where externalId is NULL. */
    externalId_Isnull?: (Scalars['Boolean'] | null)} })
    /** The Customer the Component belongs to, if any. If this is NULL then the Component belongs to the Organization. */
    components?: (ComponentConnectionGenqlSelection & { __args?: {
    /** Return all versions instead of only the latest */
    allVersions?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Triggers */
    hasTriggers?: (Scalars['Boolean'] | null), 
    /** Return only Components that have commonly-used Triggers */
    hasCommonTriggers?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Actions */
    hasActions?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Connections */
    hasConnections?: (Scalars['Boolean'] | null), 
    /** Return only Components that have at least one Connection that's templated */
    hasConnectionTemplates?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Data Sources */
    hasDataSources?: (Scalars['Boolean'] | null), 
    /** Return only Components that have Data Sources of the specified type. */
    hasDataSourcesOfType?: (Scalars['String'] | null), 
    /** JSON structure defining a conditional logic expression tree to use for including specific Actions. */
    filterQuery?: (Scalars['JSONString'] | null), 
    /** Include Components that are for Code Native Integrations in addition to normal Components. */
    includeComponentsForCodeNativeIntegrations?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ComponentOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ComponentOrder | null)[] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key contains the specified value (case insensitive). */
    key_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms contains the specified value (case insensitive). */
    searchTerms_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms.fulltext matches the specified value. */
    searchTerms_Fulltext?: (Scalars['String'] | null), 
    /** Filter for objects where public matches the specified value. */
    public?: (Scalars['Boolean'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or after the specified value. */
    versionCreatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or before the specified value. */
    versionCreatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null)} })
    /** Specifies whether the signed-in User can manage Attachments related to this record. */
    allowManageAttachments?: boolean | number
    /** A JSON list of objects where each object has a key for name and URL that together describe the Attachment. */
    attachments?: AttachmentGenqlSelection
    /** Specifies whether the signed-in User can add a User to the Customer. */
    allowAddUser?: boolean | number
    /** Specifies whether the signed-in User can add an Instance to the Customer. */
    allowAddInstance?: boolean | number
    /** Specifies whether the signed-in User can add an Alert Monitor to the Customer. */
    allowAddAlertMonitor?: boolean | number
    /** Specifies whether the signed-in User can add a Credential to the Customer. */
    allowAddCredential?: boolean | number
    /** Specifies whether Instances may be enabled based on the utilization allowed by the current Plan. */
    allowEnableInstance?: boolean | number
    /** Specifies whether Instances may be executed based on the utilization allowed by the current Plan. */
    allowExecuteInstance?: boolean | number
    /** Specifies whether the signed-in User's Customer has access to legacy Credentials. */
    allowConfigureCredentials?: boolean | number
    /** Specifies whether the signed-in User can add a Component to the Customer. */
    allowAddComponent?: boolean | number
    /** Specifies whether the signed-in User can add an Integration to the Customer. */
    allowAddIntegration?: boolean | number
    /** Specifies whether the signed-in User can update the Customer. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Customer. */
    allowRemove?: boolean | number
    /** Indicates whether the record is starred by the signed-in User. */
    starred?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents an organization, which is the top-level object under which all
 * other objects, such as Users, Customers, Integrations, etc., exist.
 */
export interface OrganizationGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The labels that are associated with the object. */
    labels?: boolean | number
    /** The URL for the avatar image. */
    avatarUrl?: boolean | number
    /** The unique name of the Organization. */
    name?: boolean | number
    /** Specifies whether the Organization's account has been suspended by Prismatic. */
    systemSuspended?: boolean | number
    /** Specifies whether the Organization execution utilization has exceeded the Plan's limits. */
    overExecutionLimit?: boolean | number
    /** Date and time the Organization's current Plan expires */
    planExpiresAt?: boolean | number
    featureFlags?: boolean | number
    /** The Theme associated with an Organization */
    theme?: ThemeGenqlSelection
    /** Display name of the Organization's Marketplace. */
    marketplaceName?: boolean | number
    /** The maximum number of concurrent executions allowed for this Organization. */
    concurrentExecutionLimit?: boolean | number
    signingKeys?: (OrganizationSigningKeyConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (OrganizationSigningKeyOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((OrganizationSigningKeyOrder | null)[] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** The Organization the Credential belongs to, if any. If NULL then Customer will be specified. */
    credentials?: (CredentialConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (CredentialOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((CredentialOrder | null)[] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where readyForUse matches the specified value. */
    readyForUse?: (Scalars['Boolean'] | null), 
    /** Filter for objects where authorizationMethod.key matches the specified value. */
    authorizationMethod_Key?: (Scalars['String'] | null)} })
    /** The Organization to which the Customer belongs. */
    customers?: (CustomerConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (CustomerOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((CustomerOrder | null)[] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where name starts with the specified value (case insensitive). */
    name_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where isSystem matches the specified value. */
    isSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where allowEmbeddedDesigner matches the specified value. */
    allowEmbeddedDesigner?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where externalId matches the specified value. */
    externalId?: (Scalars['String'] | null), 
    /** Filter for objects where externalId is NULL. */
    externalId_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null)} })
    /** The Organization that the User belongs to, if any. If this is NULL then Customer will be specified. */
    users?: (UserConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (UserOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((UserOrder | null)[] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where email matches the specified value. */
    email?: (Scalars['String'] | null), 
    /** Filter for objects where email contains the specified value (case insensitive). */
    email_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where externalId matches the specified value. */
    externalId?: (Scalars['String'] | null), 
    /** Filter for objects where externalId is NULL. */
    externalId_Isnull?: (Scalars['Boolean'] | null)} })
    /** Plan the Organization is subscribed to; set once payment is confirmed. */
    currentPlan?: boolean | number
    /** This field has been deprecated. */
    usesBillingPortal?: boolean | number
    /** Specifies whether the signed-in User can add a User to the Organization. */
    allowAddUser?: boolean | number
    /** Specifies whether the signed-in User can add a Customer to the Organization. */
    allowAddCustomer?: boolean | number
    /** Specifies whether the signed-in User can add a Component to the Organization. */
    allowPublishComponent?: boolean | number
    /** Specifies whether the signed-in User can add a Credential to the Organization. */
    allowAddCredential?: boolean | number
    /** Specifies whether the signed-in User can add an Integration to the Organization. */
    allowAddIntegration?: boolean | number
    /** Specifies whether the signed-in User can add an AlertWebhook to the Organization. */
    allowAddAlertWebhook?: boolean | number
    /** Specifies whether the signed-in User can add an AlertGroup to the Organization. */
    allowAddAlertGroup?: boolean | number
    /** Specifies whether the signed-in User can add an External Log stream to the Organization. */
    allowAddExternalLogStream?: boolean | number
    /** Specifies whether the signed-in User can add a Signing Key to the Organization. */
    allowAddSigningKey?: boolean | number
    /** Specifies whether the signed-in User can configure Themes for the Organization. */
    allowConfigureThemes?: boolean | number
    /** The Integrations that belong to the Organization. */
    integrations?: (IntegrationConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description matches the specified value. */
    description?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where hasUnpublishedChanges matches the specified value. */
    hasUnpublishedChanges?: (Scalars['Boolean'] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where category contains the specified value (case insensitive). */
    category_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration starts with the specified value (case insensitive). */
    marketplaceConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration.iexact matches the specified value. */
    marketplaceConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration is contained in the list of specified values. */
    marketplaceConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where useAsTemplate matches the specified value. */
    useAsTemplate?: (Scalars['Boolean'] | null), 
    /** Filter for objects where templateConfiguration starts with the specified value (case insensitive). */
    templateConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration.iexact matches the specified value. */
    templateConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration is contained in the list of specified values. */
    templateConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where allowMultipleMarketplaceInstances matches the specified value. */
    allowMultipleMarketplaceInstances?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where isCodeNative matches the specified value. */
    isCodeNative?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (IntegrationOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((IntegrationOrder | null)[] | null)} })
    /** The Components that belong to the Organization. */
    components?: (ComponentConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key contains the specified value (case insensitive). */
    key_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms contains the specified value (case insensitive). */
    searchTerms_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms.fulltext matches the specified value. */
    searchTerms_Fulltext?: (Scalars['String'] | null), 
    /** Filter for objects where public matches the specified value. */
    public?: (Scalars['Boolean'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or after the specified value. */
    versionCreatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or before the specified value. */
    versionCreatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ComponentOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ComponentOrder | null)[] | null)} })
    /** Specifies whether Instances may be enabled based on the utilization allowed by the current Plan. */
    allowEnableInstance?: boolean | number
    /** Specifies whether Instances may be executed based on the utilization allowed by the current Plan. */
    allowExecuteInstance?: boolean | number
    /** Specifies whether the current Plan allows configuration for automatic retry of Instance executions. */
    allowExecutionRetryConfig?: boolean | number
    /** Specifies whether this Plan allows configuration of a Custom Theme for the Organization. */
    allowCustomTheme?: boolean | number
    /** Specifies whether this Plan allows for creating User Level Configured Instances. */
    allowUserLevelConfig?: boolean | number
    /** Specifies whether the signed-in User can view Billing information for the Organization. */
    allowViewBilling?: boolean | number
    /** Specifies whether this Plan allows configuration of External Log Streams for the Organization. */
    allowConfigureExternalLogStreams?: boolean | number
    /** Specifies whether this Plan allows configuration of Embedded for the Organization. */
    allowConfigureEmbedded?: boolean | number
    /** Specifies whether the signed-in User's Organization has access to legacy Credentials. */
    allowConfigureCredentials?: boolean | number
    /** Specifies whether this Plan allows using the Embedded Designer the Organization. */
    allowEmbeddedDesigner?: boolean | number
    /** Specifies whether this Plan allows for disabling Instance logs and step results. */
    allowDisablingInstanceOutputs?: boolean | number
    /** This field has been deprecated. */
    overdue?: boolean | number
    /** Specifies whether the signed-in User can update the Organization. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Organization. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents the Theme associated with an Organization. */
export interface ThemeGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Theme the Color is associated with. */
    colors?: (ThemeColorConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /** The Theme the Property is associated with. */
    properties?: (ThemePropertyConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /** Specifies whether the signed-in User can update the Theme. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Theme. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of ThemeColor objects. */
export interface ThemeColorConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ThemeColorGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: ThemeColorEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Color and its various properties used to style the Organization Theme. */
export interface ThemeColorGenqlSelection{
    /** The Type of Theme Color. */
    type?: boolean | number
    /** The Theme Variant this Color will be used with. */
    variant?: boolean | number
    /** The Value of the Theme Color. */
    value?: boolean | number
    /** The ID of the object */
    id?: boolean | number
    /** Specifies whether the signed-in User can update the ThemeColor. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the ThemeColor. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related ThemeColor object and a cursor for pagination. */
export interface ThemeColorEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: ThemeColorGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of ThemeProperty objects. */
export interface ThemePropertyConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ThemePropertyGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: ThemePropertyEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Property of a given type used to style the Organization Theme. */
export interface ThemePropertyGenqlSelection{
    /** The Type of Theme Property. */
    type?: boolean | number
    /** The Value of the Theme Property. */
    value?: boolean | number
    /** The Theme Variant this Color will be used with. */
    variant?: boolean | number
    /** The ID of the object */
    id?: boolean | number
    /** Specifies whether the signed-in User can update the ThemeProperty. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the ThemeProperty. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related ThemeProperty object and a cursor for pagination. */
export interface ThemePropertyEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: ThemePropertyGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of OrganizationSigningKey objects. */
export interface OrganizationSigningKeyConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: OrganizationSigningKeyGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: OrganizationSigningKeyEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents an Organization's Signing Keys which are used to allow verification
 * of sessions from external systems.
 */
export interface OrganizationSigningKeyGenqlSelection{
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** Public key of the Signing Keypair. */
    publicKey?: boolean | number
    /** Preview of Private Key of the Signing Keypair. */
    privateKeyPreview?: boolean | number
    /** The timestamp at which the Signing Key was issued. */
    issuedAt?: boolean | number
    /** Indicates if the public key was imported (as opposed to generated in Prismatic) */
    imported?: boolean | number
    /** The ID of the object */
    id?: boolean | number
    /** Specifies whether the signed-in User can update the OrganizationSigningKey. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the OrganizationSigningKey. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related OrganizationSigningKey object and a cursor for pagination. */
export interface OrganizationSigningKeyEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: OrganizationSigningKeyGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface OrganizationSigningKeyOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: OrganizationSigningKeyOrderField}


/** Represents a Relay Connection to a collection of Credential objects. */
export interface CredentialConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: CredentialGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: CredentialEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a collection of fields and an AuthorizationMethod that together
 * specify a complete set of data necessary for interaction with an external
 * resource by a Component Action as part of an Integration.
 */
export interface CredentialGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Organization the Credential belongs to, if any. If NULL then Customer will be specified. */
    org?: OrganizationGenqlSelection
    /** The Customer the Credential belongs to, if any. If NULL then Organization will be specified. */
    customer?: CustomerGenqlSelection
    /** The name of the Credential. */
    label?: boolean | number
    /** The specific AuthorizationMethod used by the Credential. */
    authorizationMethod?: AuthorizationMethodGenqlSelection
    /** Specifies whether the Credential is ready for use by an Instance. */
    readyForUse?: boolean | number
    /** The timestamp at which the OAuth2 token will automatically be refreshed, if necessary. Only applies to OAuth2 methods where refresh is necessary. */
    refreshAt?: boolean | number
    /** Contains any error message generated by the external authorizing system that occurred during authorization. */
    authorizationError?: boolean | number
    /** Contains OAuth2 token data if applicable. */
    token?: boolean | number
    /** Contains OAuth2 context data if applicable. */
    context?: boolean | number
    /** A list of CredentialFieldValues that contain the values for the CredentialFields. */
    values?: CredentialFieldValueGenqlSelection
    /** Contains the OAuth2 Redirect URI if applicable. */
    redirectUri?: boolean | number
    /** Specifies whether the signed-in User can update the Credential. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Credential. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a type of authorization that may be used to authorize an
 * interaction with an external resource by a Component Action.
 */
export interface AuthorizationMethodGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** A string which uniquely identifies the AuthorizationMethod. */
    key?: boolean | number
    /** The name of the AuthorizationMethod. */
    label?: boolean | number
    /** Additional notes about the AuthorizationMethod. */
    description?: boolean | number
    /** The AuthorizationMethod that the CredentialField is associated to. */
    fields?: (CredentialFieldConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /** Specifies whether the signed-in User can update the AuthorizationMethod. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the AuthorizationMethod. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of CredentialField objects. */
export interface CredentialFieldConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: CredentialFieldGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: CredentialFieldEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a specific field on a Credential. */
export interface CredentialFieldGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The AuthorizationMethod that the CredentialField is associated to. */
    authorizationMethod?: AuthorizationMethodGenqlSelection
    /** A string which uniquely identifies the CredentialField in the context of the AuthorizationMethod. */
    key?: boolean | number
    /** The name of the CredentialField. */
    label?: boolean | number
    /** Specifies the data type of the value for the CredentialField. */
    type?: boolean | number
    /** Placeholder text that will appear in the CredentialField UI. */
    placeholder?: boolean | number
    /** Additional notes about the CredentialField. */
    comments?: boolean | number
    /** Specifies whether the CredentialField requires a value to be valid. */
    required?: boolean | number
    /** Specifies whether the signed-in User can update the CredentialField. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the CredentialField. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related CredentialField object and a cursor for pagination. */
export interface CredentialFieldEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: CredentialFieldGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a specific value of a CredentialField. */
export interface CredentialFieldValueGenqlSelection{
    /** The name associated with the CredentialField. */
    key?: boolean | number
    /** The value of the CredentialField. */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Credential object and a cursor for pagination. */
export interface CredentialEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: CredentialGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface CredentialOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: CredentialOrderField}


/** Represents a Relay Connection to a collection of Customer objects. */
export interface CustomerConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: CustomerGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: CustomerEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Customer object and a cursor for pagination. */
export interface CustomerEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: CustomerGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface CustomerOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: CustomerOrderField}


/** Represents a Relay Connection to a collection of User objects. */
export interface UserConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: UserGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: UserEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a user account. A User may belong to an Organization directly or
 * belong to a Customer, which itself belongs to an Organization.
 */
export interface UserGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** The URL for the avatar image. */
    avatarUrl?: boolean | number
    /** Allows for mapping an external entity to a Prismatic record. */
    externalId?: boolean | number
    /** The email address associated with the User. */
    email?: boolean | number
    /** The Organization that the User belongs to, if any. If this is NULL then Customer will be specified. */
    org?: OrganizationGenqlSelection
    /** The Customer the user belongs to, if any. If this is NULL then Organization will be specified. */
    customer?: CustomerGenqlSelection
    /** The user's preferred name. */
    name?: boolean | number
    /** The preferred contact phone number for the User. */
    phone?: boolean | number
    /** The date the User was created. */
    dateJoined?: boolean | number
    /** Designates whether the User has dark mode activated or not. */
    darkMode?: boolean | number
    /** Designates whether dark mode should be derived from the operating system. */
    darkModeSyncWithOs?: boolean | number
    /** Specifies whether the signed-in User can change the Role of the User. */
    allowChangeRoles?: boolean | number
    /** The Role associated with the User which determines its permissions. */
    role?: RoleGenqlSelection
    /** The URL for the main avatar image that is displayed in Prismatic. */
    appAvatarUrl?: boolean | number
    /** The app name displayed in Prismatic. */
    appName?: boolean | number
    /** The name displayed for the Marketplace. */
    marketplaceName?: boolean | number
    featureFlags?: boolean | number
    /** Specifies whether the signed-in User can update the User. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the User. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents an object role, which is just a collection of object permissions
 * that pertain to a specific object for a specific user.
 */
export interface RoleGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The name of the Role. Must be unique within the context of the AuthObjectType. */
    name?: boolean | number
    /** Description of the Role. */
    description?: boolean | number
    /** The type of object that the Role is associated with. */
    objType?: AuthObjectTypeGenqlSelection
    /** List of Permissions that the Role provides. */
    permissions?: (PermissionConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (PermissionOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((PermissionOrder | null)[] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where objType matches the specified ID. */
    objType?: (Scalars['ID'] | null)} })
    /** An integer that specifies the level of privilege with respect to other Roles. */
    level?: boolean | number
    /** Specifies whether the signed-in User can update the Role. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Role. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a type of object to which permissions may be assigned. */
export interface AuthObjectTypeGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** Name of the AuthObjectType. */
    name?: boolean | number
    /** Specifies whether the signed-in User can update the AuthObjectType. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the AuthObjectType. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of Permission objects. */
export interface PermissionConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: PermissionGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: PermissionEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents an object permission, which grants some access to a specific
 * user relative to a specific object.
 */
export interface PermissionGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** A unique string identity value. */
    tag?: boolean | number
    /** Name of the Permission. */
    name?: boolean | number
    /** Description of the Permission. */
    description?: boolean | number
    /** The type of object that the Permission is associated with. */
    objType?: AuthObjectTypeGenqlSelection
    /** Specifies whether the signed-in User can update the Permission. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Permission. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Permission object and a cursor for pagination. */
export interface PermissionEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: PermissionGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface PermissionOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: PermissionOrderField}


/** A Relay edge to a related User object and a cursor for pagination. */
export interface UserEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: UserGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface UserOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: UserOrderField}


/** Represents a Relay Connection to a collection of Integration objects. */
export interface IntegrationConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: IntegrationGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: IntegrationEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents the collection of information that defines an integration, to
 * include the sequence of Component Actions, or steps, inputs,
 * the trigger, and other associated data.
 */
export interface IntegrationGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** The labels that are associated with the object. */
    labels?: boolean | number
    /** The URL for the avatar image. */
    avatarUrl?: boolean | number
    /** Identifier for this version sequence. */
    versionSequenceId?: boolean | number
    /** Marked if this record is the latest version of this sequence. */
    versionIsLatest?: boolean | number
    /** Sequential number identifying this version. */
    versionNumber?: boolean | number
    /** User that created this version. */
    versionCreatedBy?: UserGenqlSelection
    /** Timestamp of the creation of this version. */
    versionCreatedAt?: boolean | number
    /** Additional comments about this version. */
    versionComment?: boolean | number
    /** Indicates if the version is available for use. */
    versionIsAvailable?: boolean | number
    /** The name of the Integration. */
    name?: boolean | number
    /** Additional notes about the Integration. */
    description?: boolean | number
    /** Rich text documentation to accompany the Integration. */
    documentation?: boolean | number
    /** Parent Integration this Integration was forked from, if any */
    parent?: IntegrationGenqlSelection
    /** The Customer the Integration belongs to, if any. If this is NULL then the Integration belongs to the Organization. */
    customer?: CustomerGenqlSelection
    /** Specifies whether the Integration definition has changes that have not yet been published. */
    hasUnpublishedChanges?: boolean | number
    /** The Marketplace Tabs available to Customer Users for configuring this Integration. */
    marketplaceTabConfiguration?: boolean | number
    /** Specifies whether the latest published version of this Integration may be used as a template to create new Integrations. */
    templateConfiguration?: boolean | number
    /** Specifies the category of the Integration. */
    category?: boolean | number
    /** Specifies an Overview of the Integration to describe its functionality for use in the Integration Marketplace. */
    overview?: boolean | number
    /** Specifies whether endpoint URLs for Instances of this Integration are unique to the flow, unique to the Instance, or if all Instances share a URL. */
    endpointType?: boolean | number
    /** The name of a Flow in the Integration that will be executed as a preprocessing step prior to any other Flow executions. */
    preprocessFlowName?: boolean | number
    /** Data payload for testing the endpoint configuration for this Integration. */
    endpointConfigTestPayload?: boolean | number
    /** Content type of the payload for testing the endpoint configuration for this Integration. */
    endpointConfigTestContentType?: boolean | number
    /** A JSON string of key/value pairs that will be sent as headers when testing the endpoint configuration for this Integration. */
    endpointConfigTestHeaders?: boolean | number
    /** The timestamp at which this Integration was most recently executed as part of an Instance. */
    lastExecutedAt?: boolean | number
    /** Specifies whether this Integration uses User Level Configs. */
    userLevelConfigured?: boolean | number
    /** Specifies whether the latest published version of this Integration may be used as a template to create new Integrations. */
    useAsTemplate?: boolean | number
    /** Specifies whether multiple Instances of this Integration may be created from the Marketplace. */
    allowMultipleMarketplaceInstances?: boolean | number
    /** Specifies whether this Integration is a Code Native Integration. */
    isCodeNative?: boolean | number
    /** Specifies the external version of this Integration, which can be used to provide semantic versioning. */
    externalVersion?: boolean | number
    requiredConfigVariables?: (RequiredConfigVariableConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (RequiredConfigVariableOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((RequiredConfigVariableOrder | null)[] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where orgOnly matches the specified value. */
    orgOnly?: (Scalars['Boolean'] | null), 
    /** Filter for objects where dataType matches the specified value. */
    dataType?: (Scalars['String'] | null), 
    /** Filter for objects where dataType is contained in the list of specified values. */
    dataType_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where hasDivider matches the specified value. */
    hasDivider?: (Scalars['Boolean'] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where dataSource matches the specified ID. */
    dataSource?: (Scalars['ID'] | null)} })
    /** The Integration that has been deployed for the Instance. */
    instances?: (InstanceConnectionGenqlSelection & { __args?: {
    /** Opt in to new behavior. */
    compatibility?: (Scalars['Int'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description matches the specified value. */
    description?: (Scalars['String'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer.externalId matches the specified value. */
    customer_ExternalId?: (Scalars['String'] | null), 
    /** Filter for objects where enabled matches the specified value. */
    enabled?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isSystem matches the specified value. */
    isSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where needsDeploy matches the specified value. */
    needsDeploy?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null)} })
    /** The Integration of which the IntegrationFlow is a part. */
    flows?: (IntegrationFlowConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /** The Integration to which the IntegrationAction is associated via the IntegrationFlow. */
    actions?: (IntegrationActionConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /** Specifies whether the signed-in User can manage Attachments related to this record. */
    allowManageAttachments?: boolean | number
    /** A JSON list of objects where each object has a key for name and URL that together describe the Attachment. */
    attachments?: AttachmentGenqlSelection
    /** The Versions of the Integration that are available. */
    versions?: (VersionConnectionGenqlSelection & { __args?: {orderBy?: (VersionOrder | null), before?: (Scalars['String'] | null), after?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** Sequence of versions of this Integration */
    versionSequence?: (IntegrationConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description matches the specified value. */
    description?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where hasUnpublishedChanges matches the specified value. */
    hasUnpublishedChanges?: (Scalars['Boolean'] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where category contains the specified value (case insensitive). */
    category_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration starts with the specified value (case insensitive). */
    marketplaceConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration.iexact matches the specified value. */
    marketplaceConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where marketplaceConfiguration is contained in the list of specified values. */
    marketplaceConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where useAsTemplate matches the specified value. */
    useAsTemplate?: (Scalars['Boolean'] | null), 
    /** Filter for objects where templateConfiguration starts with the specified value (case insensitive). */
    templateConfiguration_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration.iexact matches the specified value. */
    templateConfiguration_Iexact?: (Scalars['String'] | null), 
    /** Filter for objects where templateConfiguration is contained in the list of specified values. */
    templateConfiguration_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where allowMultipleMarketplaceInstances matches the specified value. */
    allowMultipleMarketplaceInstances?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where isCodeNative matches the specified value. */
    isCodeNative?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (IntegrationOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((IntegrationOrder | null)[] | null)} })
    /** Components associated with this Integration */
    components?: (ComponentConnectionGenqlSelection & { __args?: {
    /** Include only outdated Components associated with this Integration */
    outdated?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key contains the specified value (case insensitive). */
    key_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms contains the specified value (case insensitive). */
    searchTerms_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms.fulltext matches the specified value. */
    searchTerms_Fulltext?: (Scalars['String'] | null), 
    /** Filter for objects where public matches the specified value. */
    public?: (Scalars['Boolean'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or after the specified value. */
    versionCreatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or before the specified value. */
    versionCreatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ComponentOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ComponentOrder | null)[] | null)} })
    /** System Instance backing this Integration. */
    systemInstance?: InstanceGenqlSelection
    /** Config Variables that are used for testing during Integration design. */
    testConfigVariables?: (InstanceConfigVariableConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where status matches the specified value. */
    status?: (Scalars['String'] | null), 
    /** Filter for objects where status is contained in the list of specified values. */
    status_In?: ((Scalars['String'] | null)[] | null)} })
    /** Specifies whether the signed-in User can publish the Integration. */
    allowPublish?: boolean | number
    /** Specifies whether the signed-in User can fork the Integration. */
    allowFork?: boolean | number
    /** The YAML that is the declarative definition for the Integration. Suitable for using to re-import the Integration. */
    definition?: { __args: {
    /** Specifies the requested definition version. */
    version?: (Scalars['Int'] | null), 
    /** Specifies whether to use the Component versions in the definition or the latest version available upon import. */
    useLatestComponentVersions?: (Scalars['Boolean'] | null)} } | boolean | number
    /** Specifies whether an Integration will be available in the Integration Store and if the Integration is deployable by a Customer User. */
    storeConfiguration?: boolean | number
    /** Specifies whether an Integration will be available in the Integration Marketplace and if the Integration is deployable by a Customer User. */
    marketplaceConfiguration?: boolean | number
    /** Specifies whether the Integration can be deployed by the signed-in User. */
    isCustomerDeployable?: boolean | number
    /** The URL of the endpoint that allows testing the endpoint configuration of the Integration. */
    endpointConfigTestUrl?: boolean | number
    /** A JSON string that represents deployment configuration pages. */
    configPages?: boolean | number
    /** Specifies whether the Integration uses outdated Components */
    hasOutdatedComponents?: boolean | number
    /** Specifies whether the signed-in User can update the Integration. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Integration. */
    allowRemove?: boolean | number
    /** Object data at specified version */
    versionAt?: (IntegrationGenqlSelection & { __args?: {
    /** Fetch specific version by ID */
    id?: (Scalars['ID'] | null), 
    /** Fetch specific version by version number */
    versionNumber?: (Scalars['Int'] | null), 
    /** Fetch latest available version */
    latestAvailable?: (Scalars['Boolean'] | null)} })
    /** Indicates whether the record is starred by the signed-in User. */
    starred?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of RequiredConfigVariable objects. */
export interface RequiredConfigVariableConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: RequiredConfigVariableGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: RequiredConfigVariableEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Required Config Variable (with optional default value) associated with an Integration. */
export interface RequiredConfigVariableGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    integration?: IntegrationGenqlSelection
    /** Represents identity across different Required Config Variable versions. Not intended to be used directly by end users, as the implementation may change at any time. */
    stableId?: boolean | number
    /** The Key for the Required Config Variable. Referred to as 'Name' in the UI. */
    key?: boolean | number
    /** A user-provided value that represents identity across config var key renames. */
    stableKey?: boolean | number
    /** The header text that will appear in the UI above the Required Config Variable fields. */
    header?: boolean | number
    /** This field has been deprecated. */
    hasDivider?: boolean | number
    /** The intended datatype of the Required Config Var, used to choose an appropriate UI. */
    dataType?: boolean | number
    /** The Connection type used by this Required Config Variable. */
    connection?: ConnectionGenqlSelection
    /** The Connection Template from which this config var was derived. */
    connectionTemplate?: ConnectionTemplateGenqlSelection
    /** The valid choices when the Required Config Var uses the 'picklist' dataType. */
    pickList?: boolean | number
    /** The schedule type to show in the UI when the Required Config Var uses the 'schedule' dataType. */
    scheduleType?: boolean | number
    /** An optional timezone property for when the Required Config Var uses the 'schedule' dataType. */
    timeZone?: boolean | number
    /** The language to use in the code editor UI when the Required Config Var uses the 'code' dataType. */
    codeLanguage?: boolean | number
    /** Additional notes about the Required Config Var. */
    description?: boolean | number
    /** The UI location in which this Required Config Var will appear relative to the other Required Config Vars for the Integration. */
    sortOrder?: boolean | number
    /** Specifies whether the Required Config Variable is only viewable by Organization Users. */
    orgOnly?: boolean | number
    /** The type of collection, if the value is meant to represent a collection of values for this RequiredConfigVariable. */
    collectionType?: boolean | number
    /** The Component Data Source used by this Required Config Variable. */
    dataSource?: ActionGenqlSelection
    /** Contains arbitrary metadata about this Required Config Var. */
    meta?: boolean | number
    /** Specifies whether this Required Config Variable uses values from User Level Configs. */
    userLevelConfigured?: boolean | number
    /** The Required Config Var for which the Authorization Method is a valid type of Credential. */
    credentialTypes?: (RequiredConfigVariableCredentialTypeConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /** The default value for the Required Config Variable if none is specified on the Instance. */
    defaultValue?: boolean | number
    /** The collection of Expressions that serve as inputs to the RequiredConfigVariable. */
    inputs?: (ExpressionConnectionGenqlSelection & { __args?: {
    /** Return all Fields visible to Organization deployers */
    visibleToOrgDeployer?: (Scalars['Boolean'] | null), 
    /** Return all Fields visible to Customer deployers */
    visibleToCustomerDeployer?: (Scalars['Boolean'] | null), before?: (Scalars['String'] | null), after?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** Specifies whether the signed-in User can update the RequiredConfigVariable. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the RequiredConfigVariable. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Connection that is available on a Component. */
export interface ConnectionGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Component to which this Connection is associated. */
    component?: ComponentGenqlSelection
    /** A string which uniquely identifies the Connection in the context of the Action. */
    key?: boolean | number
    /** Specifies this Connection is the default for the Component. */
    default?: boolean | number
    /** Ordering of the Connection. */
    order?: boolean | number
    /** The name of the Connection. */
    label?: boolean | number
    /** Additional notes about the Connection. */
    comments?: boolean | number
    /** The OAuth2 flow type, if any, for this Connection. */
    oauth2Type?: boolean | number
    /** The Connection to which this InputField is associated, if any. */
    inputs?: (InputFieldConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where type matches the specified value. */
    type?: (Scalars['String'] | null), 
    /** Filter for objects where type is contained in the list of specified values. */
    type_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where action matches the specified ID. */
    action?: (Scalars['ID'] | null), 
    /** Filter for objects where shown matches the specified value. */
    shown?: (Scalars['Boolean'] | null)} })
    /** The Connection from which this template is structured. */
    templates?: (ConnectionTemplateConnectionGenqlSelection & { __args?: {
    /** Connection associated with this template. */
    connectionId?: (Scalars['ID'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ConnectionTemplateOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ConnectionTemplateOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null)} })
    /** The URL that specifies where the Connection icon exists. */
    iconUrl?: { __args: {
    /** Enable redirects to destination icon. */
    withRedirect?: (Scalars['Boolean'] | null), 
    /** Enable response cache headers and respond with icon directly. */
    withCache?: (Scalars['Boolean'] | null)} } | boolean | number
    /** Specifies whether the signed-in User can update the Connection. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Connection. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a package of related functions, or Actions, that can be added to
 * an Integration.
 */
export interface ComponentGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The labels that are associated with the object. */
    labels?: boolean | number
    /** Identifier for this version sequence. */
    versionSequenceId?: boolean | number
    /** Marked if this record is the latest version of this sequence. */
    versionIsLatest?: boolean | number
    /** Sequential number identifying this version. */
    versionNumber?: boolean | number
    /** User that created this version. */
    versionCreatedBy?: UserGenqlSelection
    /** Timestamp of the creation of this version. */
    versionCreatedAt?: boolean | number
    /** Additional comments about this version. */
    versionComment?: boolean | number
    /** Indicates if the version is available for use. */
    versionIsAvailable?: boolean | number
    /** The name of the Component. */
    label?: boolean | number
    /** Additional notes about the Component. */
    description?: boolean | number
    /** A string that uniquely identifies the Component. */
    key?: boolean | number
    /** Specifies whether the Component is publicly available or whether it's private to the Organization. */
    public?: boolean | number
    /** The Customer the Component belongs to, if any. If this is NULL then the Component belongs to the Organization. */
    customer?: CustomerGenqlSelection
    /** The hex-encoded SHA1 hash of the uploaded Component package. */
    signature?: boolean | number
    /** The URL associated with the documentation of a Component. */
    documentationUrl?: boolean | number
    /** A string that specifies the category of the Component. */
    category?: boolean | number
    /** A combination of the Component label, Component description, and every Action label and Action description for the Component to be used for searching. */
    searchTerms?: boolean | number
    /** Specifies whether the Component was created inline as part of a Code Native Integration. */
    forCodeNativeIntegration?: boolean | number
    /** The Component to which this Action is associated. */
    actions?: (ActionConnectionGenqlSelection & { __args?: {
    /** JSON structure defining a conditional logic expression tree to use for including specific Actions. */
    filterQuery?: (Scalars['JSONString'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ActionOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ActionOrder | null)[] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key contains the specified value (case insensitive). */
    key_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where label.fulltext matches the specified value. */
    label_Fulltext?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where component matches the specified ID. */
    component?: (Scalars['ID'] | null), 
    /** Filter for objects where isTrigger matches the specified value. */
    isTrigger?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isCommonTrigger matches the specified value. */
    isCommonTrigger?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isDataSource matches the specified value. */
    isDataSource?: (Scalars['Boolean'] | null), 
    /** Filter for objects where dataSourceType matches the specified value. */
    dataSourceType?: (Scalars['String'] | null), 
    /** Filter for objects where hasOnInstanceDeploy matches the specified value. */
    hasOnInstanceDeploy?: (Scalars['Boolean'] | null), 
    /** Filter for objects where hasOnInstanceDelete matches the specified value. */
    hasOnInstanceDelete?: (Scalars['Boolean'] | null), 
    /** Filter for objects where searchTerms.fulltext matches the specified value. */
    searchTerms_Fulltext?: (Scalars['String'] | null)} })
    /** The Component to which this Connection is associated. */
    connections?: (ConnectionConnectionGenqlSelection & { __args?: {
    /** Return only Connections that have at least one template */
    hasTemplates?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ConnectionOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ConnectionOrder | null)[] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key contains the specified value (case insensitive). */
    key_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where component matches the specified ID. */
    component?: (Scalars['ID'] | null), 
    /** Filter for objects where oauth2Type matches the specified value. */
    oauth2Type?: (Scalars['String'] | null), 
    /** Filter for objects where oauth2Type is contained in the list of specified values. */
    oauth2Type_In?: ((Scalars['String'] | null)[] | null)} })
    /** Specifies whether the signed-in User can manage Attachments related to this record. */
    allowManageAttachments?: boolean | number
    /** A JSON list of objects where each object has a key for name and URL that together describe the Attachment. */
    attachments?: AttachmentGenqlSelection
    /** The Versions of the Component that are available. */
    versions?: (VersionConnectionGenqlSelection & { __args?: {orderBy?: (VersionOrder | null), before?: (Scalars['String'] | null), after?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** Sequence of versions of this Component */
    versionSequence?: (ComponentConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key contains the specified value (case insensitive). */
    key_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where category matches the specified value. */
    category?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms contains the specified value (case insensitive). */
    searchTerms_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where searchTerms.fulltext matches the specified value. */
    searchTerms_Fulltext?: (Scalars['String'] | null), 
    /** Filter for objects where public matches the specified value. */
    public?: (Scalars['Boolean'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or after the specified value. */
    versionCreatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionCreatedAt occurs on or before the specified value. */
    versionCreatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where versionSequenceId matches the specified value. */
    versionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where versionNumber matches the specified value. */
    versionNumber?: (Scalars['Int'] | null), 
    /** Filter for objects where versionIsAvailable matches the specified value. */
    versionIsAvailable?: (Scalars['Boolean'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (ComponentOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((ComponentOrder | null)[] | null)} })
    /** The URL that specifies where the Component icon exists. */
    iconUrl?: { __args: {
    /** Enable redirects to destination icon. */
    withRedirect?: (Scalars['Boolean'] | null), 
    /** Enable response cache headers and respond with icon directly. */
    withCache?: (Scalars['Boolean'] | null)} } | boolean | number
    /** Specifies whether the signed-in User can update the Component. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Component. */
    allowRemove?: boolean | number
    /** Object data at specified version */
    versionAt?: (ComponentGenqlSelection & { __args?: {
    /** Fetch specific version by ID */
    id?: (Scalars['ID'] | null), 
    /** Fetch specific version by version number */
    versionNumber?: (Scalars['Int'] | null), 
    /** Fetch latest available version */
    latestAvailable?: (Scalars['Boolean'] | null)} })
    /** Indicates whether the record is starred by the signed-in User. */
    starred?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of Action objects. */
export interface ActionConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ActionGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: ActionEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an action that is available on a Component. */
export interface ActionGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Component to which this Action is associated. */
    component?: ComponentGenqlSelection
    /** A string that uniquely identifies this Action within the context of the Component. */
    key?: boolean | number
    /** Specifies whether the Action requires authorization to function. */
    authorizationRequired?: boolean | number
    /** The AuthorizationMethods that are supported by the Action. */
    authorizationMethods?: (AuthorizationMethodConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /** The name of the Action. */
    label?: boolean | number
    /** Additional notes about the Action. */
    description?: boolean | number
    /** Notes which may provide insight on the intended use of the Action. */
    directions?: boolean | number
    /** Specifies whether the Action is important and/or commonly used. */
    important?: boolean | number
    /** Specifies whether the Action will terminate Instance execution. */
    terminateExecution?: boolean | number
    /** Specifies whether an Action will break out of a loop. */
    breakLoop?: boolean | number
    /** Specifies whether the Action will allow Conditional Branching. */
    allowsBranching?: boolean | number
    /** Specifies whether the Action is a Trigger. */
    isTrigger?: boolean | number
    /** A combination of an action's text metadata to be used in search functionality. */
    searchTerms?: boolean | number
    /** The static branch names associated with an Action. */
    staticBranchNames?: boolean | number
    /** A string that associates an Input with Dynamic Branching. */
    dynamicBranchInput?: boolean | number
    /** An example of the returned payload of an Action. */
    examplePayload?: boolean | number
    /** Specifies support for synchronous responses to an Integration webhook request. */
    synchronousResponseSupport?: boolean | number
    /** Specifies support for triggering an Integration on a recurring schedule. */
    scheduleSupport?: boolean | number
    /** Specifies whether the Action is a commonly used Trigger. */
    isCommonTrigger?: boolean | number
    /** Specifies whether the Action is a Data Source. */
    isDataSource?: boolean | number
    /** Specifies the type of the resulting data from the data source. */
    dataSourceType?: boolean | number
    /** The Data Source in this Component which can provide additional details about the content for this Data Source, such as example values when selecting particular API object fields. */
    detailDataSource?: ActionGenqlSelection
    /** Specifies whether the Action, if it is a Trigger, has an Instance Deploy handler function defined. */
    hasOnInstanceDeploy?: boolean | number
    /** Specifies whether the Action, if it is a Trigger, has an Instance Delete handler function defined. */
    hasOnInstanceDelete?: boolean | number
    /** The Action to which this InputField is associated, if any. */
    inputs?: (InputFieldConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where key matches the specified value. */
    key?: (Scalars['String'] | null), 
    /** Filter for objects where key is contained in the list of specified values. */
    key_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where type matches the specified value. */
    type?: (Scalars['String'] | null), 
    /** Filter for objects where type is contained in the list of specified values. */
    type_In?: ((Scalars['String'] | null)[] | null), 
    /** Filter for objects where label contains the specified value (case insensitive). */
    label_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where action matches the specified ID. */
    action?: (Scalars['ID'] | null), 
    /** Filter for objects where shown matches the specified value. */
    shown?: (Scalars['Boolean'] | null)} })
    /** Specifies whether the signed-in User can update the Action. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Action. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of AuthorizationMethod objects. */
export interface AuthorizationMethodConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: AuthorizationMethodGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: AuthorizationMethodEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related AuthorizationMethod object and a cursor for pagination. */
export interface AuthorizationMethodEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: AuthorizationMethodGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of InputField objects. */
export interface InputFieldConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: InputFieldGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: InputFieldEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents an input field for a Component Action. Defines the basic
 * properties that must be satisfied by the input data.
 */
export interface InputFieldGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Action to which this InputField is associated, if any. */
    action?: ActionGenqlSelection
    /** The Connection to which this InputField is associated, if any. */
    connection?: ConnectionGenqlSelection
    /** A string which uniquely identifies the InputField in the context of the Action. */
    key?: boolean | number
    /** The name of the InputField. */
    label?: boolean | number
    /** Label used for the Keys of a 'keyvaluelist' collection. */
    keyLabel?: boolean | number
    /** Specifies the type of data the InputField handles. */
    type?: boolean | number
    /** Specifies the type of collection to use for storing input values, if applicable. */
    collection?: boolean | number
    /** Placeholder text that will appear in the InputField UI. */
    placeholder?: boolean | number
    /** The default value for the InputField. */
    default?: boolean | number
    /** Additional notes about the InputField. */
    comments?: boolean | number
    /** Example valid input for the InputField. */
    example?: boolean | number
    /** Specifies whether the InputField is required by the Action. */
    required?: boolean | number
    /** Specifies whether the InputField is shown in the Designer. */
    shown?: boolean | number
    /** Dictates how possible choices are provided for this InputField. */
    model?: boolean | number
    /** Language to use for the Code Field. */
    language?: boolean | number
    /** Specifies whether the signed-in User can update the InputField. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the InputField. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related InputField object and a cursor for pagination. */
export interface InputFieldEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: InputFieldGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Action object and a cursor for pagination. */
export interface ActionEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: ActionGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface ActionOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: ActionOrderField}


/** Represents a Relay Connection to a collection of Connection objects. */
export interface ConnectionConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ConnectionGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: ConnectionEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Connection object and a cursor for pagination. */
export interface ConnectionEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: ConnectionGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface ConnectionOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: ConnectionOrderField}


/** Represents the collection of data that defines an Attachment. */
export interface AttachmentGenqlSelection{
    /** The name of the Attachment. */
    name?: boolean | number
    /** The URL where the Attachment is located. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of Version objects. */
export interface VersionConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** Contains the nodes in this connection. */
    edges?: VersionEdgeGenqlSelection
    /** List of nodes in this connection */
    nodes?: VersionGenqlSelection
    /** Total count of versions */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge containing a `Version` and its cursor. */
export interface VersionEdgeGenqlSelection{
    /** The item at the end of the edge */
    node?: VersionGenqlSelection
    /** A cursor for use in pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a specific version of an object that implements the Prismatic versioning protocol. */
export interface VersionGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The sequential number that corresponds to the Version. */
    versionNumber?: boolean | number
    /** User that published this Version. */
    publishedBy?: UserGenqlSelection
    /** The timestamp when the Version was published. */
    publishedAt?: boolean | number
    /** Additional commentary/description of this Version. */
    comment?: boolean | number
    /** Specifies whether the Version is available for use. */
    isAvailable?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface VersionOrder {
/** The direction to order by. */
direction: VersionOrderDirection,
/** The field to order by. */
field: VersionOrderField}


/** Represents a Relay Connection to a collection of Component objects. */
export interface ComponentConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ComponentGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: ComponentEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Component object and a cursor for pagination. */
export interface ComponentEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: ComponentGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface ComponentOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: ComponentOrderField}


/** Represents a Relay Connection to a collection of ConnectionTemplate objects. */
export interface ConnectionTemplateConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ConnectionTemplateGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: ConnectionTemplateEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConnectionTemplateGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Connection from which this template is structured. */
    connection?: ConnectionGenqlSelection
    /** The name of this template. */
    name?: boolean | number
    /** The template that this input is associated with. */
    inputFieldTemplates?: (InputFieldTemplateConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /** Returns a list of the keys that are preset by this template. */
    templatedInputKeys?: boolean | number
    /** Returns a list of deployed customer instances that are leveraging this template. */
    instances?: (InstanceConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where description contains the specified value (case insensitive). */
    description_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where description matches the specified value. */
    description?: (Scalars['String'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer.externalId matches the specified value. */
    customer_ExternalId?: (Scalars['String'] | null), 
    /** Filter for objects where enabled matches the specified value. */
    enabled?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isSystem matches the specified value. */
    isSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where needsDeploy matches the specified value. */
    needsDeploy?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where labels contains the specified value (case insensitive). */
    labels_Icontains?: (Scalars['String'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceOrder | null)[] | null)} })
    /** Indicates template is in use on an Instance. */
    hasDeployedInstances?: boolean | number
    /** Specifies whether the signed-in User can update the ConnectionTemplate. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the ConnectionTemplate. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of InputFieldTemplate objects. */
export interface InputFieldTemplateConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: InputFieldTemplateGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: InputFieldTemplateEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface InputFieldTemplateGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The template that this input is associated with. */
    connectionTemplate?: ConnectionTemplateGenqlSelection
    /** The InputField that this template is associated with. */
    inputField?: InputFieldGenqlSelection
    /** The preset value for this input. */
    value?: boolean | number
    /** Specifies whether the signed-in User can update the InputFieldTemplate. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the InputFieldTemplate. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related InputFieldTemplate object and a cursor for pagination. */
export interface InputFieldTemplateEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: InputFieldTemplateGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of Instance objects. */
export interface InstanceConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: InstanceGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: InstanceEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Instance object and a cursor for pagination. */
export interface InstanceEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: InstanceGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface InstanceOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: InstanceOrderField}


/** A Relay edge to a related ConnectionTemplate object and a cursor for pagination. */
export interface ConnectionTemplateEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: ConnectionTemplateGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface ConnectionTemplateOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: ConnectionTemplateOrderField}


/** Represents a Relay Connection to a collection of RequiredConfigVariableCredentialType objects. */
export interface RequiredConfigVariableCredentialTypeConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: RequiredConfigVariableCredentialTypeGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: RequiredConfigVariableCredentialTypeEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a valid Credential Type for a Required Config Variable. */
export interface RequiredConfigVariableCredentialTypeGenqlSelection{
    /** The Required Config Var for which the Authorization Method is a valid type of Credential. */
    requiredConfigVariable?: RequiredConfigVariableGenqlSelection
    /** The Authorization Method that represents a valid Credential type for the Required Config Var. */
    authorizationMethod?: AuthorizationMethodGenqlSelection
    /** The ID of the object */
    id?: boolean | number
    /** Specifies whether the signed-in User can update the RequiredConfigVariableCredentialType. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the RequiredConfigVariableCredentialType. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related RequiredConfigVariableCredentialType object and a cursor for pagination. */
export interface RequiredConfigVariableCredentialTypeEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: RequiredConfigVariableCredentialTypeGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of Expression objects. */
export interface ExpressionConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** Contains the nodes in this connection. */
    edges?: ExpressionEdgeGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ExpressionGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge containing a `Expression` and its cursor. */
export interface ExpressionEdgeGenqlSelection{
    /** The item at the end of the edge */
    node?: ExpressionGenqlSelection
    /** A cursor for use in pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an expression that is used to reference Configuration Variables and results from previous steps. */
export interface ExpressionGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The name of the Expression. */
    name?: boolean | number
    /** The type of the Expression. */
    type?: boolean | number
    /** The value of the Expression. */
    value?: boolean | number
    /** An object that contains arbitrary meta data about an Expression. */
    meta?: boolean | number
    /** Specifies whether the signed-in User can remove the Expression. */
    allowRemove?: boolean | number
    /** Specifies whether the signed-in User can update the Expression. */
    allowUpdate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related RequiredConfigVariable object and a cursor for pagination. */
export interface RequiredConfigVariableEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: RequiredConfigVariableGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface RequiredConfigVariableOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: RequiredConfigVariableOrderField}


/** Represents a Relay Connection to a collection of IntegrationFlow objects. */
export interface IntegrationFlowConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: IntegrationFlowGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: IntegrationFlowEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Relates an Integration to a hierarchical structure of Component Actions
 * that define the behavior of one of potentially several workflows that
 * comprise the Integration.
 */
export interface IntegrationFlowGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** Represents identity across different integration versions. Not intended to be used directly by end users, as the implementation may change at any time. */
    stableId?: boolean | number
    /** The displayed name of the IntegrationFlow. */
    name?: boolean | number
    /** A user-provided value that represents identity across multiple integration versions and across flow renames. */
    stableKey?: boolean | number
    /** Additional notes about the IntegrationFlow. */
    description?: boolean | number
    /** The order in which the IntegrationFlow will appear in the UI. */
    sortOrder?: boolean | number
    /** Specifies whether responses to Executions of this IntegrationFlow are synchronous. Responses are asynchronous by default. */
    isSynchronous?: boolean | number
    /** Specifies the maximum number of retry attempts that will be performed for Executions of this IntegrationFlow. */
    retryMaxAttempts?: boolean | number
    /** Specifies the delay in minutes between retry attempts of Executions of this IntegrationFlow. */
    retryDelayMinutes?: boolean | number
    /** Specifies whether to use exponential backoff in scheduling retries of Executions of this IntegrationFlow. */
    retryUsesExponentialBackoff?: boolean | number
    /** The timestamp at which this IntegrationFlow was most recently executed as part of an Instance. */
    lastExecutedAt?: boolean | number
    /** Specifies the security configuration to use for the endpoint of this IntegrationFlow. */
    endpointSecurityType?: boolean | number
    /** The IntegrationAction that is the trigger for the Integration Flow. */
    trigger?: IntegrationActionGenqlSelection
    /** The URL of the endpoint that triggers execution of the Integration Flow in the Test Runner. */
    testUrl?: boolean | number
    /** Data payload for testing this Integration Flow. */
    testPayload?: boolean | number
    /** The Execution Results that were generated during testing. */
    testExecutionResults?: (InstanceExecutionResultConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where id matches the specified value. */
    id?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance is NULL. */
    instance_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration.versionSequenceId matches the specified value. */
    instance_Integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null), 
    /** Filter for objects where startedAt occurs on or after the specified value. */
    startedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where startedAt occurs on or before the specified value. */
    startedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or after the specified value. */
    endedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or before the specified value. */
    endedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt is NULL. */
    endedAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where error is NULL. */
    error_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryCount.gte matches the specified value. */
    retryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount.lte matches the specified value. */
    retryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount matches the specified value. */
    retryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.gte matches the specified value. */
    maxRetryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.lte matches the specified value. */
    maxRetryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount matches the specified value. */
    maxRetryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where retryNextAt occurs on or after the specified value. */
    retryNextAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt occurs on or before the specified value. */
    retryNextAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt is NULL. */
    retryNextAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryUniqueRequestId matches the specified value. */
    retryUniqueRequestId?: (Scalars['String'] | null), 
    /** Filter for objects where retryForExecution is NULL. */
    retryForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where replayForExecution is NULL. */
    replayForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where invokeType is contained in the list of specified values. */
    invokeType_In?: ((Scalars['String'] | null)[] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceExecutionResultOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceExecutionResultOrder | null)[] | null)} })
    /** Content type of the payload for testing this Integration Flow. */
    testContentType?: boolean | number
    /** Headers of the request for testing this Integration Flow. */
    testHeaders?: boolean | number
    /** Specifies a reference to the data to use as a Unique Request ID for retry request cancellation. */
    retryUniqueRequestIdField?: ExpressionGenqlSelection
    /** The API key(s) to use for the endpoint of this IntegrationFlow when the endpoint security type is 'organization'. */
    organizationApiKeys?: boolean | number
    /** Specifies whether the signed-in User can update the IntegrationFlow. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the IntegrationFlow. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an association of a Component Action to an Integration. */
export interface IntegrationActionGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The displayed name of the IntegrationAction. */
    name?: boolean | number
    /** A user-provided value that represents identity across multiple integration versions and across step renames. */
    stableKey?: boolean | number
    /** A brief description of the IntegrationAction. */
    description?: boolean | number
    /** The Integration to which the IntegrationAction is associated via the IntegrationFlow. */
    integration?: IntegrationGenqlSelection
    /** The specific Component Action that is being associated to the IntegrationFlow. */
    action?: ActionGenqlSelection
    /** The type of error handling to use when failures occur for this IntegrationAction. */
    errorHandlerType?: boolean | number
    /** Specifies the maximum number of retry attempts that will be performed for failures of this IntegrationAction. */
    retryMaxAttempts?: boolean | number
    /** Specifies the delay in seconds between retry attempts for failures of this IntegrationAction. */
    retryDelaySeconds?: boolean | number
    /** Specifies whether to use exponential backoff in scheduling retries for failures of this IntegrationAction. */
    retryUsesExponentialBackoff?: boolean | number
    /** Specifies whether to fail the Execution when the final retry attempt fails for this IntegrationAction, or whether to ignore and continue. */
    retryIgnoreFinalError?: boolean | number
    /** The collection of Expressions that serve as inputs to the IntegrationAction. */
    inputs?: (ExpressionConnectionGenqlSelection & { __args?: {before?: (Scalars['String'] | null), after?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** Specifies whether the signed-in User can update the IntegrationAction. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the IntegrationAction. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of InstanceExecutionResult objects. */
export interface InstanceExecutionResultConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: InstanceExecutionResultGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: InstanceExecutionResultEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents the set of results of each step of execution for an Instance. */
export interface InstanceExecutionResultGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Instance for which a specific InstanceFlowConfig is being executed. */
    instance?: InstanceGenqlSelection
    /** The specific InstanceFlowConfig for the Instance being executed. */
    flowConfig?: InstanceFlowConfigGenqlSelection
    /** The timestamp at which execution started. */
    startedAt?: boolean | number
    /** The timestamp at which execution ended. */
    endedAt?: boolean | number
    /** Any error message that occurred as part of Instance execution. */
    error?: boolean | number
    /** The Execution for which this Execution is a retry attempt. */
    retryForExecution?: InstanceExecutionResultGenqlSelection
    /** The number of times that this Execution has been retried. */
    retryCount?: boolean | number
    /** The maximum number of times that this Execution may be retried before failing. */
    maxRetryCount?: boolean | number
    /** The timestamp at which the next scheduled retry will occur. */
    retryNextAt?: boolean | number
    /** A Unique Request ID to use for retry request cancellation. */
    retryUniqueRequestId?: boolean | number
    /** The Execution with a matching Unique Request ID that caused this Execution to be canceled. */
    canceledByExecution?: InstanceExecutionResultGenqlSelection
    /** The number of MB of memory allocated by the runtime to execute this Execution. */
    allocatedMemoryMb?: boolean | number
    /** The spend for this Execution in MB-secs. */
    spendMbSecs?: boolean | number
    /** The number of steps in this Execution. */
    stepCount?: boolean | number
    /** The specific Integration that is associated with this Execution. */
    integration?: IntegrationGenqlSelection
    /** The specific IntegrationFlow that is associated with this Execution. */
    flow?: IntegrationFlowGenqlSelection
    /** Specifies whether Execution was created as part of testing. */
    isTestExecution?: boolean | number
    /** The Execution for which this Execution is a replay. */
    replayForExecution?: InstanceExecutionResultGenqlSelection
    /** The type of origin that this execution was triggered from. */
    invokeType?: boolean | number
    /** The Execution for which this Execution is a retry attempt. */
    retryAttempts?: (InstanceExecutionResultConnectionGenqlSelection & { __args?: {
    /** The status of the Instance execution. */
    status?: (ExecutionStatus | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceExecutionResultOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceExecutionResultOrder | null)[] | null), 
    /** Filter for objects where id matches the specified value. */
    id?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance is NULL. */
    instance_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration.versionSequenceId matches the specified value. */
    instance_Integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null), 
    /** Filter for objects where startedAt occurs on or after the specified value. */
    startedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where startedAt occurs on or before the specified value. */
    startedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or after the specified value. */
    endedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or before the specified value. */
    endedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt is NULL. */
    endedAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where error is NULL. */
    error_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryCount.gte matches the specified value. */
    retryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount.lte matches the specified value. */
    retryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount matches the specified value. */
    retryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.gte matches the specified value. */
    maxRetryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.lte matches the specified value. */
    maxRetryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount matches the specified value. */
    maxRetryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where retryNextAt occurs on or after the specified value. */
    retryNextAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt occurs on or before the specified value. */
    retryNextAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt is NULL. */
    retryNextAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryUniqueRequestId matches the specified value. */
    retryUniqueRequestId?: (Scalars['String'] | null), 
    /** Filter for objects where retryForExecution is NULL. */
    retryForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where replayForExecution is NULL. */
    replayForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where invokeType is contained in the list of specified values. */
    invokeType_In?: ((Scalars['String'] | null)[] | null)} })
    /** The Execution for which this Execution is a replay. */
    replays?: (InstanceExecutionResultConnectionGenqlSelection & { __args?: {
    /** The status of the Instance execution. */
    status?: (ExecutionStatus | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceExecutionResultOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceExecutionResultOrder | null)[] | null), 
    /** Filter for objects where id matches the specified value. */
    id?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance is NULL. */
    instance_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration.versionSequenceId matches the specified value. */
    instance_Integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null), 
    /** Filter for objects where startedAt occurs on or after the specified value. */
    startedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where startedAt occurs on or before the specified value. */
    startedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or after the specified value. */
    endedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or before the specified value. */
    endedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt is NULL. */
    endedAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where error is NULL. */
    error_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryCount.gte matches the specified value. */
    retryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount.lte matches the specified value. */
    retryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount matches the specified value. */
    retryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.gte matches the specified value. */
    maxRetryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.lte matches the specified value. */
    maxRetryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount matches the specified value. */
    maxRetryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where retryNextAt occurs on or after the specified value. */
    retryNextAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt occurs on or before the specified value. */
    retryNextAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt is NULL. */
    retryNextAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryUniqueRequestId matches the specified value. */
    retryUniqueRequestId?: (Scalars['String'] | null), 
    /** Filter for objects where retryForExecution is NULL. */
    retryForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where replayForExecution is NULL. */
    replayForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where invokeType is contained in the list of specified values. */
    invokeType_In?: ((Scalars['String'] | null)[] | null)} })
    /** The InstanceExecutionResult to which the InstanceStepResult is associated. */
    stepResults?: (InstanceStepResultConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceStepResultOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceStepResultOrder | null)[] | null), 
    /** Filter for objects where startedAt occurs on or after the specified value. */
    startedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where startedAt occurs on or before the specified value. */
    startedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or after the specified value. */
    endedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or before the specified value. */
    endedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where stepName matches the specified value. */
    stepName?: (Scalars['String'] | null), 
    /** Filter for objects where displayStepName matches the specified value. */
    displayStepName?: (Scalars['String'] | null), 
    /** Filter for objects where isLoopStep matches the specified value. */
    isLoopStep?: (Scalars['Boolean'] | null), 
    /** Filter for objects where loopStepName matches the specified value. */
    loopStepName?: (Scalars['String'] | null), 
    /** Filter for objects where loopStepIndex matches the specified value. */
    loopStepIndex?: (Scalars['Int'] | null), 
    /** Filter for objects where loopPath matches the specified value. */
    loopPath?: (Scalars['String'] | null), 
    /** Filter for objects where loopPath starts with the specified value (case insensitive). */
    loopPath_Istartswith?: (Scalars['String'] | null), 
    /** Filter for objects where isRootResult matches the specified value. */
    isRootResult?: (Scalars['Boolean'] | null), 
    /** Filter for objects where branchName matches the specified value. */
    branchName?: (Scalars['String'] | null), 
    /** Filter for objects where hasError matches the specified value. */
    hasError?: (Scalars['Boolean'] | null)} })
    /** The specific InstanceExecutionResult that is associated with the Log entry. */
    logs?: (LogConnectionGenqlSelection & { __args?: {
    /** Filter for objects where executionResult.isTestExecution matches the specified value. */
    executionResult_IsTestExecution?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (LogOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((LogOrder | null)[] | null), 
    /** Filter for objects where message contains the specified value (case insensitive). */
    message_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where timestamp occurs on or after the specified value. */
    timestamp_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where timestamp occurs on or before the specified value. */
    timestamp_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where severity matches the specified value. */
    severity?: (Scalars['Int'] | null), 
    /** Filter for objects where executionResult matches the specified ID. */
    executionResult?: (Scalars['ID'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where configVariable is NULL. */
    configVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where userLevelConfigVariable is NULL. */
    userLevelConfigVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integrationVersionSequenceId matches the specified value. */
    integrationVersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null)} })
    /** The status of the Instance execution. */
    status?: boolean | number
    /** The presigned URL to download the request payload that was sent to invoke Instance execution. */
    requestPayloadUrl?: boolean | number
    /** The presigned URL to fetch metadata of the request payload that was sent to invoke Instance execution. */
    requestPayloadMetadataUrl?: boolean | number
    /** The presigned URL to download the response payload that was received from the Instance execution. */
    responsePayloadUrl?: boolean | number
    /** The presigned URL to fetch metadata of the response payload that was received from the Instance execution. */
    responsePayloadMetadataUrl?: boolean | number
    /** Specifies whether the signed-in User can update the InstanceExecutionResult. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the InstanceExecutionResult. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents the configuration options for a particular IntegrationFlow as it
 * relates to an Instance.
 */
export interface InstanceFlowConfigGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The configuration for the IntegrationFlow associated with the Instance. */
    instance?: InstanceGenqlSelection
    /** The IntegrationFlow for which configuration is being specified for the associated Instance. */
    flow?: IntegrationFlowGenqlSelection
    /** Content type of the payload for testing the IntegrationFlow associated with the Instance. */
    testContentType?: boolean | number
    /** Specifies whether the latest execution of this InstanceFlowConfig resulted in a failure. */
    inFailedState?: boolean | number
    /** The timestamp at which the InstanceFlowConfig was most recently executed. */
    lastExecutedAt?: boolean | number
    /** The IntegrationFlow that is being monitored by the AlertMonitor. */
    monitors?: (AlertMonitorConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertMonitorOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertMonitorOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.name contains the specified value (case insensitive). */
    instance_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggers contains at least one of the specified values. */
    triggers?: ((Scalars['ID'] | null)[] | null), 
    /** Filter for objects where triggers.name contains the specified value (case insensitive). */
    triggers_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggered matches the specified value. */
    triggered?: (Scalars['Boolean'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or after the specified value. */
    lastTriggeredAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or before the specified value. */
    lastTriggeredAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** The specific InstanceFlowConfig for the Instance being executed. */
    executionResults?: (InstanceExecutionResultConnectionGenqlSelection & { __args?: {
    /** The status of the Instance execution. */
    status?: (ExecutionStatus | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (InstanceExecutionResultOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((InstanceExecutionResultOrder | null)[] | null), 
    /** Filter for objects where id matches the specified value. */
    id?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance is NULL. */
    instance_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration.versionSequenceId matches the specified value. */
    instance_Integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null), 
    /** Filter for objects where startedAt occurs on or after the specified value. */
    startedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where startedAt occurs on or before the specified value. */
    startedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or after the specified value. */
    endedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt occurs on or before the specified value. */
    endedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where endedAt is NULL. */
    endedAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where error is NULL. */
    error_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryCount.gte matches the specified value. */
    retryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount.lte matches the specified value. */
    retryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where retryCount matches the specified value. */
    retryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.gte matches the specified value. */
    maxRetryCount_Gte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount.lte matches the specified value. */
    maxRetryCount_Lte?: (Scalars['Int'] | null), 
    /** Filter for objects where maxRetryCount matches the specified value. */
    maxRetryCount?: (Scalars['Int'] | null), 
    /** Filter for objects where retryNextAt occurs on or after the specified value. */
    retryNextAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt occurs on or before the specified value. */
    retryNextAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where retryNextAt is NULL. */
    retryNextAt_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where retryUniqueRequestId matches the specified value. */
    retryUniqueRequestId?: (Scalars['String'] | null), 
    /** Filter for objects where retryForExecution is NULL. */
    retryForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where replayForExecution is NULL. */
    replayForExecution_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where invokeType is contained in the list of specified values. */
    invokeType_In?: ((Scalars['String'] | null)[] | null)} })
    /** The IntegrationFlow which created the Log entry. */
    logs?: (LogConnectionGenqlSelection & { __args?: {
    /** Filter for objects where executionResult.isTestExecution matches the specified value. */
    executionResult_IsTestExecution?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (LogOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((LogOrder | null)[] | null), 
    /** Filter for objects where message contains the specified value (case insensitive). */
    message_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where timestamp occurs on or after the specified value. */
    timestamp_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where timestamp occurs on or before the specified value. */
    timestamp_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where severity matches the specified value. */
    severity?: (Scalars['Int'] | null), 
    /** Filter for objects where executionResult matches the specified ID. */
    executionResult?: (Scalars['ID'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where configVariable is NULL. */
    configVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where userLevelConfigVariable is NULL. */
    userLevelConfigVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integrationVersionSequenceId matches the specified value. */
    integrationVersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null)} })
    /** The URL of the endpoint that triggers execution of the InstanceFlowConfig. */
    webhookUrl?: boolean | number
    /** An optional collection of API Keys any of which, when specified, will be required as a header value in all requests to trigger execution of this IntegrationFlow for the associated Instance. */
    apiKeys?: boolean | number
    /** Data payload for testing this IntegrationFlow associated with the Instance. */
    testPayload?: boolean | number
    /** Headers for testing this IntegrationFlow associated with the Instance. */
    testHeaders?: boolean | number
    /** Specifies whether the signed-in User can update the InstanceFlowConfig. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the InstanceFlowConfig. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of AlertMonitor objects. */
export interface AlertMonitorConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: AlertMonitorGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: AlertMonitorEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a set of rules that are applied to a specific Instance which
 * determine when an alert notification is sent as well to whom and how they
 * are delivered.
 */
export interface AlertMonitorGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** The name of the AlertMonitor. */
    name?: boolean | number
    /** Specifies whether the Alert Monitor has been suspended by Prismatic. */
    systemSuspended?: boolean | number
    /** The AlertTriggers that are setup to trigger the AlertMonitor. */
    triggers?: (AlertTriggerConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertTriggerOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertTriggerOrder | null)[] | null), 
    /** Filter for objects where isInstanceSpecific matches the specified value. */
    isInstanceSpecific?: (Scalars['Boolean'] | null)} })
    /** The AlertGroups to notify when the AlertMonitor is triggered. */
    groups?: (AlertGroupConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertGroupOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertGroupOrder | null)[] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** The Users to notify when the AlertMonitor is triggered. */
    users?: (UserConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (UserOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((UserOrder | null)[] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where email matches the specified value. */
    email?: (Scalars['String'] | null), 
    /** Filter for objects where email contains the specified value (case insensitive). */
    email_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where externalId matches the specified value. */
    externalId?: (Scalars['String'] | null), 
    /** Filter for objects where externalId is NULL. */
    externalId_Isnull?: (Scalars['Boolean'] | null)} })
    /** The AlertWebhooks to call when the AlertMonitor is triggered. */
    webhooks?: (AlertWebhookConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertWebhookOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertWebhookOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where url contains the specified value (case insensitive). */
    url_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** The log severity level condition to monitor for relevant AlertTrigger types. */
    logSeverityLevelCondition?: boolean | number
    /** The execution duration condition to monitor for relevant AlertTrigger types. */
    durationSecondsCondition?: boolean | number
    /** The execution overdue condition to monitor for relevant AlertTrigger types. */
    executionOverdueMinutesCondition?: boolean | number
    /** The Instance that is being monitored by the AlertMonitor. */
    instance?: InstanceGenqlSelection
    /** The IntegrationFlow that is being monitored by the AlertMonitor. */
    flowConfig?: InstanceFlowConfigGenqlSelection
    /** Specifies whether the AlertMonitor is currently triggered. */
    triggered?: boolean | number
    /** The timestamp when the AlertMonitor was last triggered. */
    lastTriggeredAt?: boolean | number
    /** The AlertMonitor to which the AlertEvent is associated. */
    events?: (AlertEventConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertEventOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertEventOrder | null)[] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where details contains the specified value (case insensitive). */
    details_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where monitor.instance.customer matches the specified ID. */
    monitor_Instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where monitor.instance.integration matches the specified ID. */
    monitor_Instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where monitor.instance matches the specified ID. */
    monitor_Instance?: (Scalars['ID'] | null), 
    /** Filter for objects where monitor.instance.name contains the specified value (case insensitive). */
    monitor_Instance_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where monitor.name contains the specified value (case insensitive). */
    monitor_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where monitor matches the specified ID. */
    monitor?: (Scalars['ID'] | null), 
    /** Filter for objects where monitor.flowConfig matches the specified ID. */
    monitor_FlowConfig?: (Scalars['ID'] | null)} })
    /** Specifies whether the signed-in User can update the AlertMonitor. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the AlertMonitor. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of AlertTrigger objects. */
export interface AlertTriggerConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: AlertTriggerGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: AlertTriggerEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a type of event in the system that can trigger an AlertMonitor. */
export interface AlertTriggerGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The name of the AlertTrigger. */
    name?: boolean | number
    /** Specifies whether the AlertTrigger is specific to an Instance rather than an InstanceFlowConfig. */
    isInstanceSpecific?: boolean | number
    /** The AlertTriggers that are setup to trigger the AlertMonitor. */
    monitors?: (AlertMonitorConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertMonitorOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertMonitorOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.name contains the specified value (case insensitive). */
    instance_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggers contains at least one of the specified values. */
    triggers?: ((Scalars['ID'] | null)[] | null), 
    /** Filter for objects where triggers.name contains the specified value (case insensitive). */
    triggers_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggered matches the specified value. */
    triggered?: (Scalars['Boolean'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or after the specified value. */
    lastTriggeredAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or before the specified value. */
    lastTriggeredAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** Specifies whether the signed-in User can update the AlertTrigger. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the AlertTrigger. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface AlertMonitorOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: AlertMonitorOrderField}


/** A Relay edge to a related AlertTrigger object and a cursor for pagination. */
export interface AlertTriggerEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: AlertTriggerGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface AlertTriggerOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: AlertTriggerOrderField}


/** Represents a Relay Connection to a collection of AlertGroup objects. */
export interface AlertGroupConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: AlertGroupGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: AlertGroupEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a reusable group of users and webhooks for the purposes
 * of alert notification.
 */
export interface AlertGroupGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** The name of the AlertGroup */
    name?: boolean | number
    /** The users in the AlertGroup. */
    users?: (UserConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (UserOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((UserOrder | null)[] | null), 
    /** Filter for objects where name matches the specified value. */
    name?: (Scalars['String'] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where email matches the specified value. */
    email?: (Scalars['String'] | null), 
    /** Filter for objects where email contains the specified value (case insensitive). */
    email_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer is NULL. */
    customer_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where externalId matches the specified value. */
    externalId?: (Scalars['String'] | null), 
    /** Filter for objects where externalId is NULL. */
    externalId_Isnull?: (Scalars['Boolean'] | null)} })
    /** The AlertWebhooks in the AlertGroup */
    webhooks?: (AlertWebhookConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertWebhookOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertWebhookOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where url contains the specified value (case insensitive). */
    url_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** The AlertGroups to notify when the AlertMonitor is triggered. */
    monitors?: (AlertMonitorConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertMonitorOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertMonitorOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.name contains the specified value (case insensitive). */
    instance_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggers contains at least one of the specified values. */
    triggers?: ((Scalars['ID'] | null)[] | null), 
    /** Filter for objects where triggers.name contains the specified value (case insensitive). */
    triggers_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggered matches the specified value. */
    triggered?: (Scalars['Boolean'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or after the specified value. */
    lastTriggeredAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or before the specified value. */
    lastTriggeredAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** Specifies whether the signed-in User can update the AlertGroup. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the AlertGroup. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of AlertWebhook objects. */
export interface AlertWebhookConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: AlertWebhookGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: AlertWebhookEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Webhook that is used for the purposes of alert notification. */
export interface AlertWebhookGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** The name of the AlertWebhook. */
    name?: boolean | number
    /** The URL of the AlertWebhook. */
    url?: boolean | number
    /** The template that is hydrated and then used as the body of the AlertWebhook request. */
    payloadTemplate?: boolean | number
    /** A JSON string of key/value pairs that will be sent as headers in the Webhook request. */
    headers?: boolean | number
    /** The AlertWebhooks in the AlertGroup */
    groups?: (AlertGroupConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertGroupOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertGroupOrder | null)[] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** The AlertWebhooks to call when the AlertMonitor is triggered. */
    monitors?: (AlertMonitorConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (AlertMonitorOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((AlertMonitorOrder | null)[] | null), 
    /** Filter for objects where name contains the specified value (case insensitive). */
    name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.name contains the specified value (case insensitive). */
    instance_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggers contains at least one of the specified values. */
    triggers?: ((Scalars['ID'] | null)[] | null), 
    /** Filter for objects where triggers.name contains the specified value (case insensitive). */
    triggers_Name_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where triggered matches the specified value. */
    triggered?: (Scalars['Boolean'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or after the specified value. */
    lastTriggeredAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where lastTriggeredAt occurs on or before the specified value. */
    lastTriggeredAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where createdAt occurs on or after the specified value. */
    createdAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where createdAt occurs on or before the specified value. */
    createdAt_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or after the specified value. */
    updatedAt_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where updatedAt occurs on or before the specified value. */
    updatedAt_Lte?: (Scalars['DateTime'] | null)} })
    /** Specifies whether the signed-in User can update the AlertWebhook. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the AlertWebhook. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface AlertGroupOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: AlertGroupOrderField}


/** A Relay edge to a related AlertWebhook object and a cursor for pagination. */
export interface AlertWebhookEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: AlertWebhookGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface AlertWebhookOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: AlertWebhookOrderField}


/** A Relay edge to a related AlertGroup object and a cursor for pagination. */
export interface AlertGroupEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: AlertGroupGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of AlertEvent objects. */
export interface AlertEventConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: AlertEventGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: AlertEventEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a specific instance of an Event that triggered a specific Alert
 * Monitor.
 */
export interface AlertEventGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The AlertMonitor to which the AlertEvent is associated. */
    monitor?: AlertMonitorGenqlSelection
    /** Additional information about the event. */
    details?: boolean | number
    /** Specifies whether the signed-in User can update the AlertEvent. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the AlertEvent. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related AlertEvent object and a cursor for pagination. */
export interface AlertEventEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: AlertEventGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface AlertEventOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: AlertEventOrderField}


/** A Relay edge to a related AlertMonitor object and a cursor for pagination. */
export interface AlertMonitorEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: AlertMonitorGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface InstanceExecutionResultOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: InstanceExecutionResultOrderField}


/** Represents a Relay Connection to a collection of Log objects. */
export interface LogConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: LogGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: LogEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a log entry that was created during a specific Execution of an
 * Instance.
 */
export interface LogGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Instance which created the Log entry. */
    instance?: InstanceGenqlSelection
    /** The name of the Instance which created the Log entry. */
    instanceName?: boolean | number
    /** The IntegrationFlow which created the Log entry. */
    flowConfig?: InstanceFlowConfigGenqlSelection
    /** The InstanceConfigVariable which relates to the Log entry. */
    configVariable?: InstanceConfigVariableGenqlSelection
    /** The UserLevelConfigVariable which relates to the Log entry. */
    userLevelConfigVariable?: UserLevelConfigVariableGenqlSelection
    /** The key of the Required Config Variable which relates to the Log entry. */
    requiredConfigVariableKey?: boolean | number
    /** The specific InstanceExecutionResult that is associated with the Log entry. */
    executionResult?: InstanceExecutionResultGenqlSelection
    /** Specifies whether the associated Execution was created as part of testing. */
    isTestExecution?: boolean | number
    /** Specifies whether the Log was generated as part of the associated Integration's Preprocess Flow. */
    fromPreprocessFlow?: boolean | number
    /** The specific Integration that is associated with the Log entry. */
    integration?: IntegrationGenqlSelection
    /** The name of the Integration that is associated with the Log entry. */
    integrationName?: boolean | number
    /** The identifier for the version sequence of the Integration that is associated with the Log entry. */
    integrationVersionSequenceId?: boolean | number
    /** The specific Customer that is associated with the Log entry. */
    customer?: CustomerGenqlSelection
    /** The name of the Customer that is associated with the Log entry. */
    customerName?: boolean | number
    /** The specific IntegrationFlow that is associated with the Log entry. */
    flow?: IntegrationFlowGenqlSelection
    /** The name of the IntegrationFlow that is associated with the Log entry. */
    flowName?: boolean | number
    /** The name of the IntegrationAction that generated this Log entry. */
    stepName?: boolean | number
    /** The name of the IntegrationAction that is the Loop containing the IntegrationAction that generated this Log entry, if any. */
    loopStepName?: boolean | number
    /** The iteration index of the containing Loop IntegrationAction at the time this Log entry was generated, if any. */
    loopStepIndex?: boolean | number
    /** The timestamp at which the Log was created. */
    timestamp?: boolean | number
    /** The severity level of the Log entry. */
    severity?: boolean | number
    /** The message body of the Log entry. */
    message?: boolean | number
    /** The ID of the Instance which created the Log entry. */
    instanceId?: boolean | number
    /** Specifies whether the signed-in User can update the Log. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Log. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Associates specific values to the Required Config Variables specified by an
 * Integration when creating an Instance.
 */
export interface InstanceConfigVariableGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Instance with which the Config Variable is associated. */
    instance?: InstanceGenqlSelection
    /** The Required Config Variable that is satisfied with the assignment of a Config Variable. */
    requiredConfigVariable?: RequiredConfigVariableGenqlSelection
    /** The value for the Required Config Variable that becomes part of the Instance definition. */
    value?: boolean | number
    /** The schedule type to show in the UI when the Config Var uses the 'schedule' dataType. */
    scheduleType?: boolean | number
    /** An optional timezone property for when the Config Var uses the 'schedule' dataType. */
    timeZone?: boolean | number
    /** Status indicating if this Connection is working as expected or encountering issues. */
    status?: boolean | number
    /** The timestamp at which the OAuth2 token will automatically be refreshed, if necessary. Only applies to OAuth2 methods where refresh is necessary. */
    refreshAt?: boolean | number
    /** Contains arbitrary metadata about this Config Var. */
    meta?: boolean | number
    /** The InstanceConfigVariable which relates to the Log entry. */
    logs?: (LogConnectionGenqlSelection & { __args?: {
    /** Filter for objects where executionResult.isTestExecution matches the specified value. */
    executionResult_IsTestExecution?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (LogOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((LogOrder | null)[] | null), 
    /** Filter for objects where message contains the specified value (case insensitive). */
    message_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where timestamp occurs on or after the specified value. */
    timestamp_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where timestamp occurs on or before the specified value. */
    timestamp_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where severity matches the specified value. */
    severity?: (Scalars['Int'] | null), 
    /** Filter for objects where executionResult matches the specified ID. */
    executionResult?: (Scalars['ID'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where configVariable is NULL. */
    configVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where userLevelConfigVariable is NULL. */
    userLevelConfigVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integrationVersionSequenceId matches the specified value. */
    integrationVersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null)} })
    /** The collection of Expressions that serve as inputs to the InstanceConfigVariable. */
    inputs?: (ExpressionConnectionGenqlSelection & { __args?: {
    /** Return all Fields visible to Organization deployers */
    visibleToOrgDeployer?: (Scalars['Boolean'] | null), 
    /** Return all Fields visible to Customer deployers */
    visibleToCustomerDeployer?: (Scalars['Boolean'] | null), before?: (Scalars['String'] | null), after?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** The Authorize URL of this Config Variable if associated with an OAuth 2.0 Connection. */
    authorizeUrl?: boolean | number
    /** The presigned URL to download the content used to populate the widget, when applicable. */
    contentUrl?: boolean | number
    /** The presigned URL to fetch metadata of the content used to populate the widget, when applicable. */
    contentMetadataUrl?: boolean | number
    /** The presigned URL to download supplemental data that may have been fetched as part of populating the content, when applicable. */
    supplementalDataUrl?: boolean | number
    /** The presigned URL to fetch metadata of the supplemental data that may have been fetched as part of populating the content, when applicable. */
    supplementalDataMetadataUrl?: boolean | number
    /** Specifies whether the signed-in User can update the InstanceConfigVariable. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the InstanceConfigVariable. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface LogOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: LogOrderField}


/**
 * Associates specific values to the Dynamic Config to satisfy Required Config Variables
 * of the related Instance.
 */
export interface UserLevelConfigVariableGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The Dynamic Config with which the Config Variable is associated. */
    config?: UserLevelConfigGenqlSelection
    /** The Required Config Variable that is satisfied with the value of this Dynamic Config Variable. */
    requiredConfigVariable?: RequiredConfigVariableGenqlSelection
    /** The value for the Required Config Variable that becomes part of the Instance definition. */
    value?: boolean | number
    /** The schedule type to show in the UI when the Config Var uses the 'schedule' dataType. */
    scheduleType?: boolean | number
    /** An optional timezone property for when the Config Var uses the 'schedule' dataType. */
    timeZone?: boolean | number
    /** Status indicating if this Connection is working as expected or encountering issues. */
    status?: boolean | number
    /** The timestamp at which the OAuth2 token will automatically be refreshed, if necessary. Only applies to OAuth2 methods where refresh is necessary. */
    refreshAt?: boolean | number
    /** Contains arbitrary metadata about this Config Var. */
    meta?: boolean | number
    /** The UserLevelConfigVariable which relates to the Log entry. */
    logs?: (LogConnectionGenqlSelection & { __args?: {
    /** Filter for objects where executionResult.isTestExecution matches the specified value. */
    executionResult_IsTestExecution?: (Scalars['Boolean'] | null), 
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** DEPRECATED. Prefer using sort_by instead as it allows ordering by many fields. */
    orderBy?: (LogOrder | null), 
    /** Allows specifying many field and direction pairs to sort results by. */
    sortBy?: ((LogOrder | null)[] | null), 
    /** Filter for objects where message contains the specified value (case insensitive). */
    message_Icontains?: (Scalars['String'] | null), 
    /** Filter for objects where timestamp occurs on or after the specified value. */
    timestamp_Gte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where timestamp occurs on or before the specified value. */
    timestamp_Lte?: (Scalars['DateTime'] | null), 
    /** Filter for objects where severity matches the specified value. */
    severity?: (Scalars['Int'] | null), 
    /** Filter for objects where executionResult matches the specified ID. */
    executionResult?: (Scalars['ID'] | null), 
    /** Filter for objects where isTestExecution matches the specified value. */
    isTestExecution?: (Scalars['Boolean'] | null), 
    /** Filter for objects where instance.customer matches the specified ID. */
    instance_Customer?: (Scalars['ID'] | null), 
    /** Filter for objects where customer matches the specified ID. */
    customer?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.integration matches the specified ID. */
    instance_Integration?: (Scalars['ID'] | null), 
    /** Filter for objects where instance matches the specified ID. */
    instance?: (Scalars['ID'] | null), 
    /** Filter for objects where instance.isSystem matches the specified value. */
    instance_IsSystem?: (Scalars['Boolean'] | null), 
    /** Filter for objects where flowConfig matches the specified ID. */
    flowConfig?: (Scalars['ID'] | null), 
    /** Filter for objects where flowConfig.flow matches the specified ID. */
    flowConfig_Flow?: (Scalars['ID'] | null), 
    /** Filter for objects where configVariable is NULL. */
    configVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where userLevelConfigVariable is NULL. */
    userLevelConfigVariable_Isnull?: (Scalars['Boolean'] | null), 
    /** Filter for objects where integration matches the specified ID. */
    integration?: (Scalars['ID'] | null), 
    /** Filter for objects where integration.versionSequenceId matches the specified value. */
    integration_VersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where integrationVersionSequenceId matches the specified value. */
    integrationVersionSequenceId?: (Scalars['UUID'] | null), 
    /** Filter for objects where flow matches the specified ID. */
    flow?: (Scalars['ID'] | null)} })
    /** The collection of Expressions that serve as inputs to the UserLevelConfigVariable. */
    inputs?: (ExpressionConnectionGenqlSelection & { __args?: {
    /** Return all Fields visible to Organization deployers */
    visibleToOrgDeployer?: (Scalars['Boolean'] | null), 
    /** Return all Fields visible to Customer deployers */
    visibleToCustomerDeployer?: (Scalars['Boolean'] | null), before?: (Scalars['String'] | null), after?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** The Authorize URL of this Config Variable if associated with an OAuth 2.0 Connection. */
    authorizeUrl?: boolean | number
    /** Specifies whether the signed-in User can update the UserLevelConfigVariable. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the UserLevelConfigVariable. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Provides dynamic user-driven config values to satisfy Required Config Variables of an Instance. */
export interface UserLevelConfigGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** The Instance with which the User Level Config is associated. */
    instance?: InstanceGenqlSelection
    /** The User that owns the User Level Config. */
    user?: UserGenqlSelection
    flowConfigs?: (UserLevelFlowConfigConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null)} })
    /** The Dynamic Config with which the Config Variable is associated. */
    configVariables?: (UserLevelConfigVariableConnectionGenqlSelection & { __args?: {
    /** Specifies a cursor for use in combination with `last` to implement backward pagination. */
    before?: (Scalars['String'] | null), 
    /** Specifies a cursor for use in combination with `first` to implement forward pagination. */
    after?: (Scalars['String'] | null), 
    /** A non-negative integer that specifies to return at most `first` edges after the `after` cursor. */
    first?: (Scalars['Int'] | null), 
    /** A non-negative integer that specifies to return at most `last` edges before the `before` cursor. */
    last?: (Scalars['Int'] | null), offset?: (Scalars['Int'] | null), 
    /** Filter for objects where config matches the specified ID. */
    config?: (Scalars['ID'] | null), 
    /** Filter for objects where config.instance matches the specified ID. */
    config_Instance?: (Scalars['ID'] | null), 
    /** Filter for objects where config.user matches the specified ID. */
    config_User?: (Scalars['ID'] | null), 
    /** Filter for objects where status matches the specified value. */
    status?: (Scalars['String'] | null), 
    /** Filter for objects where status is contained in the list of specified values. */
    status_In?: ((Scalars['String'] | null)[] | null)} })
    /** Specifies whether the signed-in User can update the UserLevelConfig. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the UserLevelConfig. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of UserLevelFlowConfig objects. */
export interface UserLevelFlowConfigConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: UserLevelFlowConfigGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: UserLevelFlowConfigEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents the configuration options for a particular User Level Config and Instance Flow Config pair. */
export interface UserLevelFlowConfigGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    userLevelConfig?: UserLevelConfigGenqlSelection
    instanceFlowConfig?: InstanceFlowConfigGenqlSelection
    /** The URL of the endpoint that triggers execution of the UserLevelFlowConfig. */
    webhookUrl?: boolean | number
    /** Specifies whether the signed-in User can update the UserLevelFlowConfig. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the UserLevelFlowConfig. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related UserLevelFlowConfig object and a cursor for pagination. */
export interface UserLevelFlowConfigEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: UserLevelFlowConfigGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of UserLevelConfigVariable objects. */
export interface UserLevelConfigVariableConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: UserLevelConfigVariableGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: UserLevelConfigVariableEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related UserLevelConfigVariable object and a cursor for pagination. */
export interface UserLevelConfigVariableEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: UserLevelConfigVariableGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Log object and a cursor for pagination. */
export interface LogEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: LogGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of InstanceStepResult objects. */
export interface InstanceStepResultConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: InstanceStepResultGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: InstanceStepResultEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents the result of executing a specific step of an Integration as
 * part of an Instance execution.
 */
export interface InstanceStepResultGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The InstanceExecutionResult to which the InstanceStepResult is associated. */
    executionResult?: InstanceExecutionResultGenqlSelection
    /** The timestamp at which execution of the step started. */
    startedAt?: boolean | number
    /** The timestamp at which execution of the step ended. */
    endedAt?: boolean | number
    /** The name of the IntegrationAction that generated this result. */
    stepName?: boolean | number
    /** The display name of the IntegrationAction that generated this result. */
    displayStepName?: boolean | number
    /** The name of the IntegrationAction that is the Loop containing the IntegrationAction that generated this result, if any. */
    loopStepName?: boolean | number
    /** The iteration index of the containing Loop IntegrationAction at the time this result was generated, if any. */
    loopStepIndex?: boolean | number
    /** Specifies whether the result was generated by a Loop IntegrationAction. */
    isLoopStep?: boolean | number
    /** A string containing a sequence of space-separated 'loopStepName:iterationNumber' tokens that allow this result to be requested based solely on loop positions and iteration numbers */
    loopPath?: boolean | number
    /** Identifies whether this is a 'root level' result or whether this is contained in a loop. */
    isRootResult?: boolean | number
    /** The name of the branch containing the IntegrationAction that generated this result, if any. */
    branchName?: boolean | number
    /** Specifies whether this step result had an error during execution. */
    hasError?: boolean | number
    /** The presigned URL to download the result of this specific step of the Instance execution. */
    resultsUrl?: boolean | number
    /** The presigned URL to fetch metadata of the result of this specific step of the Instance execution. */
    resultsMetadataUrl?: boolean | number
    /** The presigned URL to download the inputs for this specific step if it is a Loop step. */
    loopInputsUrl?: boolean | number
    /** The presigned URL to fetch metadata of the inputs for this specific step if it is a Loop step. */
    loopInputsMetadataUrl?: boolean | number
    /** Specifies whether the signed-in User can update the InstanceStepResult. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the InstanceStepResult. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related InstanceStepResult object and a cursor for pagination. */
export interface InstanceStepResultEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: InstanceStepResultGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface InstanceStepResultOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: InstanceStepResultOrderField}


/** A Relay edge to a related InstanceExecutionResult object and a cursor for pagination. */
export interface InstanceExecutionResultEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: InstanceExecutionResultGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related IntegrationFlow object and a cursor for pagination. */
export interface IntegrationFlowEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: IntegrationFlowGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of IntegrationAction objects. */
export interface IntegrationActionConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: IntegrationActionGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: IntegrationActionEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related IntegrationAction object and a cursor for pagination. */
export interface IntegrationActionEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: IntegrationActionGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface IntegrationOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: IntegrationOrderField}


/** Represents a Relay Connection to a collection of InstanceConfigVariable objects. */
export interface InstanceConfigVariableConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: InstanceConfigVariableGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: InstanceConfigVariableEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related InstanceConfigVariable object and a cursor for pagination. */
export interface InstanceConfigVariableEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: InstanceConfigVariableGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Integration object and a cursor for pagination. */
export interface IntegrationEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: IntegrationGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of UserLevelConfig objects. */
export interface UserLevelConfigConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: UserLevelConfigGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: UserLevelConfigEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related UserLevelConfig object and a cursor for pagination. */
export interface UserLevelConfigEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: UserLevelConfigGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface UserLevelConfigOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: UserLevelConfigOrderField}


/** Represents a Relay Connection to a collection of InstanceFlowConfig objects. */
export interface InstanceFlowConfigConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: InstanceFlowConfigGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: InstanceFlowConfigEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related InstanceFlowConfig object and a cursor for pagination. */
export interface InstanceFlowConfigEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: InstanceFlowConfigGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface InstanceFlowConfigOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: InstanceFlowConfigOrderField}


/** Represents a Relay Connection to a collection of User Level Config Variable objects. */
export interface CustomUserLevelConfigVariableConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** Contains the nodes in this connection. */
    edges?: CustomUserLevelConfigVariableEdgeGenqlSelection
    /** List of nodes in this connection */
    nodes?: UserLevelConfigVariableGenqlSelection
    /** Total count of config variables */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge containing a `CustomUserLevelConfigVariable` and its cursor. */
export interface CustomUserLevelConfigVariableEdgeGenqlSelection{
    /** The item at the end of the edge */
    node?: UserLevelConfigVariableGenqlSelection
    /** A cursor for use in pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of InstanceDailyUsageMetrics objects. */
export interface InstanceDailyUsageMetricsConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: InstanceDailyUsageMetricsGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: InstanceDailyUsageMetricsEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related InstanceDailyUsageMetrics object and a cursor for pagination. */
export interface InstanceDailyUsageMetricsEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: InstanceDailyUsageMetricsGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface InstanceDailyUsageMetricsOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: InstanceDailyUsageMetricsOrderField}


/** Represents snapshots of total utilization metrics for a Customer. */
export interface CustomerTotalUsageMetricsGenqlSelection{
    /** The time the utilization metrics snapshot was created. */
    snapshotTime?: boolean | number
    /** The Customer for which utilization metrics are being collected. */
    customer?: CustomerGenqlSelection
    /** The total number of Instances that are deployed. */
    deployedInstanceCount?: boolean | number
    /** The total number of unique Integrations that are deployed. */
    deployedUniqueIntegrationCount?: boolean | number
    /** The total number of Users that currently exist. */
    userCount?: boolean | number
    /** The ID of the object */
    id?: boolean | number
    /** Specifies whether the signed-in User can update the CustomerTotalUsageMetrics. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the CustomerTotalUsageMetrics. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of CustomerTotalUsageMetrics objects. */
export interface CustomerTotalUsageMetricsConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: CustomerTotalUsageMetricsGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: CustomerTotalUsageMetricsEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related CustomerTotalUsageMetrics object and a cursor for pagination. */
export interface CustomerTotalUsageMetricsEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: CustomerTotalUsageMetricsGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface CustomerTotalUsageMetricsOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: CustomerTotalUsageMetricsOrderField}

export interface StarredRecordGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** User that starred a record */
    user?: UserGenqlSelection
    /** Date/Time when the record was starred */
    timestamp?: boolean | number
    description?: boolean | number
    /** Specifies whether the signed-in User can update the StarredRecord. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the StarredRecord. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of StarredRecord objects. */
export interface StarredRecordConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: StarredRecordGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: StarredRecordEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related StarredRecord object and a cursor for pagination. */
export interface StarredRecordEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: StarredRecordGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface StarredRecordOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: StarredRecordOrderField}


/**
 * Represents a permission that has been granted to a specified object, either
 * directly or via a Role.
 */
export interface ObjectPermissionGrantGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The User for which the Permission is granted. */
    user?: UserGenqlSelection
    /** A reference to the object for which the Permission is granted. */
    obj?: boolean | number
    /** The Permission being granted. */
    permission?: PermissionGenqlSelection
    /** The Role through which the Permission is granted, if applicable. */
    grantedByRole?: RoleGenqlSelection
    /** Specifies whether the signed-in User can update the ObjectPermissionGrant. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the ObjectPermissionGrant. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of ObjectPermissionGrant objects. */
export interface ObjectPermissionGrantConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ObjectPermissionGrantGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: ObjectPermissionGrantEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related ObjectPermissionGrant object and a cursor for pagination. */
export interface ObjectPermissionGrantEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: ObjectPermissionGrantGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface ObjectPermissionGrantOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: ObjectPermissionGrantOrderField}


/** Represents a Relay Connection to a collection of AuthObjectType objects. */
export interface AuthObjectTypeConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: AuthObjectTypeGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: AuthObjectTypeEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related AuthObjectType object and a cursor for pagination. */
export interface AuthObjectTypeEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: AuthObjectTypeGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface AuthObjectTypeOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: AuthObjectTypeOrderField}

export interface LogSeverityGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents a configuration that specifies the details of an external system
 * that is used to ingest log messages generated by Instance Executions.
 */
export interface ExternalLogStreamGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The timestamp at which the object was created. */
    createdAt?: boolean | number
    /** The timestamp at which the object was most recently updated.  */
    updatedAt?: boolean | number
    /** Name of the ExternalLogStream. */
    name?: boolean | number
    /** The URL of the ExternalLogStream. */
    url?: boolean | number
    /** The Log severity levels for which Logs should be sent to the ExternalLogStream. */
    severityLevels?: LogSeverityGenqlSelection
    /** The template that is hydrated and then used as the body of the ExternalLogStream request. */
    payloadTemplate?: boolean | number
    /** A JSON string of key/value pairs that will be sent as headers in the ExternalLogStream request. */
    headers?: boolean | number
    /** Specifies whether the signed-in User can update the ExternalLogStream. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the ExternalLogStream. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of ExternalLogStream objects. */
export interface ExternalLogStreamConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ExternalLogStreamGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: ExternalLogStreamEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related ExternalLogStream object and a cursor for pagination. */
export interface ExternalLogStreamEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: ExternalLogStreamGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface ExternalLogStreamOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: ExternalLogStreamOrderField}


/** Represents a label. */
export interface LabelGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The value of the label. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an integration category. */
export interface IntegrationCategoryGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The name of the Integration category. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a component category. */
export interface ComponentCategoryGenqlSelection{
    /** The ID of the object */
    id?: boolean | number
    /** The name of the Component category. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents the collection of information necessary to upload media file. */
export interface UploadMediaGenqlSelection{
    /** The pre-signed URL to which the file should be uploaded. */
    uploadUrl?: boolean | number
    /** The URL where the file is located after being uploaded. */
    objectUrl?: boolean | number
    /** Contains any error message that occurred as part of generating the pre-signed URL. */
    error?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HotRequestIdsResultGenqlSelection{
    requestId?: boolean | number
    count?: boolean | number
    /** The type of request id */
    recordType?: boolean | number
    /** UUID of the record associated with the request */
    recordId?: boolean | number
    /** UUID of the Tenant associated with this request id */
    tenantId?: boolean | number
    /** Name of the Organization associated with this request */
    orgName?: boolean | number
    /** UUID of the Integration involved in this request */
    integrationId?: boolean | number
    /** Name of the Integration involved in this request */
    integrationName?: boolean | number
    /** UUID of the IntegrationFlow involved in this request, if we have enough info to know it */
    flowId?: boolean | number
    /** Name of the IntegrationFlow involved in this request, if we have enough info to know it */
    flowName?: boolean | number
    /** UUID of the Instance involved in this request */
    instanceId?: boolean | number
    /** Name of the Instance involved in this request */
    instanceName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ActivityGenqlSelection{
    /** User that performed an activity */
    user?: UserGenqlSelection
    /** Name of the user that performed the activity */
    userName?: boolean | number
    /** Description of an activity performed by a user */
    description?: boolean | number
    /** Date/Time when an activity occurred */
    timestamp?: boolean | number
    /** The ID of the object */
    id?: boolean | number
    /** Specifies whether the signed-in User can update the Activity. */
    allowUpdate?: boolean | number
    /** Specifies whether the signed-in User can remove the Activity. */
    allowRemove?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Relay Connection to a collection of Activity objects. */
export interface ActivityConnectionGenqlSelection{
    /** Pagination data for this connection. */
    pageInfo?: PageInfoGenqlSelection
    /** List of nodes in this connection. */
    nodes?: ActivityGenqlSelection
    /** List of edges containing the nodes in this connection. */
    edges?: ActivityEdgeGenqlSelection
    /** Total count of nodes available. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Relay edge to a related Activity object and a cursor for pagination. */
export interface ActivityEdgeGenqlSelection{
    /** The related object at the end of the edge. */
    node?: ActivityGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Allows specifying which field and direction to order by. */
export interface ActivityOrder {
/** The direction to order by. */
direction: OrderDirection,
/** The field to order by. */
field: ActivityOrderField}

export interface RootMutationGenqlSelection{
    /**
     *     
     *     Add a requestId to the list of blocked requestIds.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    addBlockedRequestIds?: (AddBlockedRequestIdsPayloadGenqlSelection & { __args: {input: AddBlockedRequestIdsInput} })
    /**
     *     
     *     Enable or disable Legacy Credentials for an Organization.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    changeOrganizationUseCredentials?: (ChangeOrganizationUseCredentialsPayloadGenqlSelection & { __args: {input: ChangeOrganizationUseCredentialsInput} })
    /**
     *     
     *     Creates a new organization in a stack and attach a plan to that organization. If no plan name is specified, assigns "Enterprise Trial". Passed in user must already exist.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    createOrganizationNewStack?: (CreateOrganizationNewStackPayloadGenqlSelection & { __args: {input: CreateOrganizationNewStackInput} })
    /**
     *     
     *     Create a custom Plan and Utilization Limits for an existing Organization.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    createOrganizationPlan?: (CreateOrganizationPlanPayloadGenqlSelection & { __args: {input: CreateOrganizationPlanInput} })
    /**
     *     
     *     Disable an organization by org ID
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    disableOrganization?: (DisableOrganizationPayloadGenqlSelection & { __args: {input: DisableOrganizationInput} })
    /**
     *     
     *     Enable an organization by org ID
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    enableOrganization?: (EnableOrganizationPayloadGenqlSelection & { __args: {input: EnableOrganizationInput} })
    /**
     *     
     *     Return all organizations with enterprise or professional plans.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_view].
     */
    findPaidOrganizations?: (FindPaidOrganizationsPayloadGenqlSelection & { __args: {input: FindPaidOrganizationsInput} })
    /**
     *     
     *     Promote a user to be an Organization Owner.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when a value for 'customer' does not exist on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when a value for 'customer' exists on the object.
     *     4. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when a value for 'customer' exists on the object.
     */
    promoteOrganizationOwner?: (PromoteOrganizationOwnerPayloadGenqlSelection & { __args: {input: PromoteOrganizationOwnerInput} })
    /**
     *     
     *     Register a new Internal Organization. This allows scripting creation and ensuring that our internal tenant emails
     *     end up in a valid state (verified).
     *     
     * 
     * Access is not permitted.
     */
    registerInternalOrganization?: (RegisterInternalOrganizationPayloadGenqlSelection & { __args: {input: RegisterInternalOrganizationInput} })
    /**
     *     
     *     Remove a requestId from the list of blocked requestIds.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    removeBlockedRequestIds?: (RemoveBlockedRequestIdsPayloadGenqlSelection & { __args: {input: RemoveBlockedRequestIdsInput} })
    /**
     *     
     *     Searches for organizations by name.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_view].
     */
    searchOrganizations?: (SearchOrganizationsPayloadGenqlSelection & { __args: {input: SearchOrganizationsInput} })
    /**
     *     
     *     Set the expiration time for the Organization's current Plan.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    setOrganizationPlanExpiresAt?: (SetOrganizationPlanExpiresAtPayloadGenqlSelection & { __args: {input: SetOrganizationPlanExpiresAtInput} })
    /**
     *     
     *     Set the Plan for an existing Organization and recreate utilization status limit records.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    setOrganizationPlan?: (SetOrganizationPlanPayloadGenqlSelection & { __args: {input: SetOrganizationPlanInput} })
    /**
     *     
     *     Enable or disable features for a specified Organization's plan.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    setPlanEnabledFeatures?: (SetPlanEnabledFeaturesPayloadGenqlSelection & { __args: {input: SetPlanEnabledFeaturesInput} })
    /**
     *     
     *     Switch the Organization of the specified Organization User.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when a value for 'customer' does not exist on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when a value for 'customer' exists on the object.
     *     4. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when a value for 'customer' exists on the object.
     */
    switchOrganization?: (SwitchOrganizationPayloadGenqlSelection & { __args: {input: SwitchOrganizationInput} })
    /**
     *     
     *     Return utilization metrics for the specified org and reporting period.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_view].
     */
    utilizationReport?: (UtilizationReportPayloadGenqlSelection & { __args: {input: UtilizationReportInput} })
    /**
     *     
     *     Allows clearing a triggered AlertMonitor.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances].
     */
    clearAlertMonitor?: (ClearAlertMonitorPayloadGenqlSelection & { __args: {input: ClearAlertMonitorInput} })
    /**
     *     Creates a new AlertGroup object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    createAlertGroup?: (CreateAlertGroupPayloadGenqlSelection & { __args: {input: CreateAlertGroupInput} })
    /**
     *     Creates a new AlertMonitor object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    createAlertMonitor?: (CreateAlertMonitorPayloadGenqlSelection & { __args: {input: CreateAlertMonitorInput} })
    /**
     *     Creates a new AlertWebhook object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    createAlertWebhook?: (CreateAlertWebhookPayloadGenqlSelection & { __args: {input: CreateAlertWebhookInput} })
    /**
     *     Removes the specified AlertGroup object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    deleteAlertGroup?: (DeleteAlertGroupPayloadGenqlSelection & { __args: {input: DeleteAlertGroupInput} })
    /**
     *     Removes the specified AlertMonitor object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     */
    deleteAlertMonitor?: (DeleteAlertMonitorPayloadGenqlSelection & { __args: {input: DeleteAlertMonitorInput} })
    /**
     *     Removes the specified AlertWebhook object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    deleteAlertWebhook?: (DeleteAlertWebhookPayloadGenqlSelection & { __args: {input: DeleteAlertWebhookInput} })
    /**
     *     Updates the specified AlertGroup object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    updateAlertGroup?: (UpdateAlertGroupPayloadGenqlSelection & { __args: {input: UpdateAlertGroupInput} })
    /**
     *     Updates the specified AlertMonitor object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances].
     */
    updateAlertMonitor?: (UpdateAlertMonitorPayloadGenqlSelection & { __args: {input: UpdateAlertMonitorInput} })
    /**
     *     Updates the specified AlertWebhook object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     */
    updateAlertWebhook?: (UpdateAlertWebhookPayloadGenqlSelection & { __args: {input: UpdateAlertWebhookInput} })
    /**
     *     
     *     Allows the signed-in User to change their password.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when a value for 'customer' does not exist on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when a value for 'customer' exists on the object.
     *     4. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when a value for 'customer' exists on the object.
     */
    changePassword?: (ChangePasswordPayloadGenqlSelection & { __args: {input: ChangePasswordInput} })
    /**
     *     Removes the specified Component object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_components].
     *     2. The signed-in User has any of the following permissions for any version of the object: [component_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_component_permissions, customer_manage_components, customer_view_components].
     */
    deleteComponent?: (DeleteComponentPayloadGenqlSelection & { __args: {input: DeleteComponentInput} })
    /**
     *     
     *     Publishes a Component.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_components].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_manage_components] when 'customer' is provided in the access function context.
     */
    publishComponent?: (PublishComponentPayloadGenqlSelection & { __args: {input: PublishComponentInput} })
    /**
     *     
     *     Users should not be able to actually update a component,
     *     but will use this mutation to update the "starred" status
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The object's 'public' attribute equals: True.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_component_permissions, org_manage_components, org_view_components].
     *     3. The signed-in User has any of the following permissions for any version of the object: [component_view, component_edit, component_remove, component_admin_permissions, component_publish_new_version].
     *     4. The signed-in User has any of the following permissions for the associated Customer: [customer_view_org_components].
     */
    updateComponent?: (UpdateComponentPayloadGenqlSelection & { __args: {input: UpdateComponentInput} })
    /**
     *     Creates a new UserLevelConfig object.
     * 
     * Access is not permitted.
     */
    createUserLevelConfig?: (CreateUserLevelConfigPayloadGenqlSelection & { __args: {input: CreateUserLevelConfigInput} })
    /**
     *     Removes the specified UserLevelConfig object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     3. The specified object is the signed-in User.
     */
    deleteUserLevelConfig?: (DeleteUserLevelConfigPayloadGenqlSelection & { __args: {input: DeleteUserLevelConfigInput} })
    /**
     *     
     *     Disconnect the specified Connection.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     */
    disconnectConnection?: (DisconnectConnectionPayloadGenqlSelection & { __args: {input: DisconnectConnectionInput} })
    /**
     *     
     *     Disconnect the specified User Level Connection.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The specified object is the signed-in User.
     */
    disconnectUserLevelConnection?: (DisconnectUserLevelConnectionPayloadGenqlSelection & { __args: {input: DisconnectUserLevelConnectionInput} })
    /**
     *     
     *     Update OAuth2 Connection properties for a given Instance Config Variable.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     */
    updateOAuth2Connection?: (UpdateOAuth2ConnectionPayloadGenqlSelection & { __args: {input: UpdateOAuth2ConnectionInput} })
    /**
     *     Creates a new ConnectionTemplate object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     */
    createConnectionTemplate?: (CreateConnectionTemplatePayloadGenqlSelection & { __args: {input: CreateConnectionTemplateInput} })
    /**
     *     Removes the specified ConnectionTemplate object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     */
    deleteConnectionTemplate?: (DeleteConnectionTemplatePayloadGenqlSelection & { __args: {input: DeleteConnectionTemplateInput} })
    /**
     *     Updates the specified ConnectionTemplate object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     */
    updateConnectionTemplate?: (UpdateConnectionTemplatePayloadGenqlSelection & { __args: {input: UpdateConnectionTemplateInput} })
    /**
     *     
     *     Creates a Credential for the specified Customer.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when 'customer' is not provided in the access function context.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when 'customer' is provided in the access function context.
     *     3. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_edit] when 'customer' is provided in the access function context.
     */
    createCustomerCredential?: (CreateCustomerCredentialPayloadGenqlSelection & { __args: {input: CreateCustomerCredentialInput} })
    /**
     *     
     *     Creates a Credential for the Organization of the signed-in User.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when 'customer' is not provided in the access function context.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when 'customer' is provided in the access function context.
     *     3. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_edit] when 'customer' is provided in the access function context.
     */
    createOrganizationCredential?: (CreateOrganizationCredentialPayloadGenqlSelection & { __args: {input: CreateOrganizationCredentialInput} })
    /**
     *     Removes the specified Credential object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when a value for 'customer' does not exist on the object.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when a value for 'customer' exists on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_edit] when a value for 'customer' exists on the object.
     */
    deleteCredential?: (DeleteCredentialPayloadGenqlSelection & { __args: {input: DeleteCredentialInput} })
    /**
     *     
     *     Sends an email that requests the recipient to complete the OAuth2 flow for
     *     the specified Credential.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when a value for 'customer' does not exist on the object.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when a value for 'customer' exists on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_edit] when a value for 'customer' exists on the object.
     */
    requestOAuth2CredentialAuthorization?: (RequestOAuth2CredentialAuthorizationPayloadGenqlSelection & { __args: {input: RequestOAuth2CredentialAuthorizationInput} })
    /**
     *     Updates the specified Credential object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations] when a value for 'customer' does not exist on the object.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_manage_integrations] when a value for 'customer' exists on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_edit] when a value for 'customer' exists on the object.
     */
    updateCredential?: (UpdateCredentialPayloadGenqlSelection & { __args: {input: UpdateCredentialInput} })
    /**
     *     Creates a new Customer object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_crud_customers].
     */
    createCustomer?: (CreateCustomerPayloadGenqlSelection & { __args: {input: CreateCustomerInput} })
    /**
     *     Removes the specified Customer object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_crud_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_remove].
     */
    deleteCustomer?: (DeleteCustomerPayloadGenqlSelection & { __args: {input: DeleteCustomerInput} })
    /**
     *     Updates the specified Customer object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_customers, org_crud_customers].
     *     2. The signed-in User has any of the following permissions for the object: [customer_edit].
     */
    updateCustomer?: (UpdateCustomerPayloadGenqlSelection & { __args: {input: UpdateCustomerInput} })
    /**
     *     
     *     Replays an existing instance execution.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for any version of the related integration where the object is related to a 'system' instance: [integration_edit, integration_admin_permissions].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    replayExecution?: (ReplayExecutionPayloadGenqlSelection & { __args: {input: ReplayExecutionInput} })
    /**
     *     Creates a new Instance object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_admin_manage_instances, customer_manage_marketplace_integrations] when 'customer' is provided in the access function context.
     */
    createInstance?: (CreateInstancePayloadGenqlSelection & { __args: {input: CreateInstanceInput} })
    /**
     *     Removes the specified Instance object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_remove].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     */
    deleteInstance?: (DeleteInstancePayloadGenqlSelection & { __args: {input: DeleteInstanceInput} })
    /**
     *     
     *     Deploys an Instance.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     */
    deployInstance?: (DeployInstancePayloadGenqlSelection & { __args: {input: DeployInstanceInput} })
    /**
     *     
     *     Populates content for relevant widgets on the specified configuration
     *     wizard page of the Integration that is associated with the specified
     *     Instance.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     *     6. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_access_marketplace_integrations] when a value for 'integration.user_level_configured' exists on the object and equals 'True'.
     */
    fetchConfigWizardPageContent?: (FetchConfigWizardPageContentPayloadGenqlSelection & { __args: {input: FetchConfigWizardPageContentInput} })
    /**
     *     
     *     Populates content for a single Data Source in the context of the specified
     *     Instance.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    fetchDataSourceContent?: (FetchDataSourceContentPayloadGenqlSelection & { __args: {input: FetchDataSourceContentInput} })
    /**
     *     
     *     Initiates execution of an InstanceFlowConfig for the purposes of testing.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object's 'instance' attribute: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'instance_Customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'instance_Integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'instance_Integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    testInstanceFlowConfig?: (TestInstanceFlowConfigPayloadGenqlSelection & { __args: {input: TestInstanceFlowConfigInput} })
    /**
     *     
     *     Update one or more Instance config variables.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     *     6. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_access_marketplace_integrations] when a value for 'integration.user_level_configured' exists on the object and equals 'True'.
     */
    updateInstanceConfigVariables?: (UpdateInstanceConfigVariablesPayloadGenqlSelection & { __args: {input: UpdateInstanceConfigVariablesInput} })
    /**
     *     Updates the specified Instance object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_instances].
     *     2. The signed-in User has any of the following permissions for the object: [instance_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_manage_instances, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the object's 'integration' attribute: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     5. The signed-in User has any of the following permissions for the object's 'integration_Customer' attribute: [customer_admin_manage_instances, customer_admin_integration_permissions, customer_manage_integrations].
     */
    updateInstance?: (UpdateInstancePayloadGenqlSelection & { __args: {input: UpdateInstanceInput} })
    /**
     *     
     *     Updates all Instances that reference the specified Integration to the
     *     latest published version of the specified Integration. If the Instances
     *     are deployed, it will re-deploy them as necessary.
     *     Returns an instance of the latest version of the specified Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    bulkUpdateInstancesToLatestIntegrationVersion?: (BulkUpdateInstancesToLatestIntegrationVersionPayloadGenqlSelection & { __args: {input: BulkUpdateInstancesToLatestIntegrationVersionInput} })
    /**
     *     Creates a new Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_manage_integrations] when a value for 'customer.allow_embedded_designer' is provided in the access function context and equals 'True'.
     */
    createIntegration?: (CreateIntegrationPayloadGenqlSelection & { __args: {input: CreateIntegrationInput} })
    /**
     *     Removes the specified Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    deleteIntegration?: (DeleteIntegrationPayloadGenqlSelection & { __args: {input: DeleteIntegrationInput} })
    /**
     *     
     *     Forks an Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_manage_integrations] when a value for 'customer.allow_embedded_designer' is provided in the access function context and equals 'True'.
     */
    forkIntegration?: (ForkIntegrationPayloadGenqlSelection & { __args: {input: ForkIntegrationInput} })
    /**
     *     
     *     Import an Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    importIntegration?: (ImportIntegrationPayloadGenqlSelection & { __args: {input: ImportIntegrationInput} })
    /**
     *     
     *     Publishes an Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_manage_integrations] when 'customer' is provided in the access function context.
     */
    publishIntegration?: (PublishIntegrationPayloadGenqlSelection & { __args: {input: PublishIntegrationInput} })
    /**
     *     
     *     Tests an IntegrationFlow's trigger event function for the specified event type.
     *     
     * 
     * Access is not permitted.
     */
    testFlowTriggerEvent?: (TestFlowTriggerEventPayloadGenqlSelection & { __args: {input: TestFlowTriggerEventInput} })
    /**
     *     
     *     Initiates an execution for testing the endpoint configuration of the specified Integration.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    testIntegrationEndpointConfig?: (TestIntegrationEndpointConfigPayloadGenqlSelection & { __args: {input: TestIntegrationEndpointConfigInput} })
    /**
     *     
     *     Initiates execution of an IntegrationFlow for the purposes of testing.
     *     
     * 
     * Access is not permitted.
     */
    testIntegrationFlow?: (TestIntegrationFlowPayloadGenqlSelection & { __args: {input: TestIntegrationFlowInput} })
    /**
     *     Updates the specified Integration object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    updateIntegration?: (UpdateIntegrationPayloadGenqlSelection & { __args: {input: UpdateIntegrationInput} })
    /**
     *     
     *     Updates the configuration of an Integration Version for use in the Integration Marketplace.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    updateIntegrationMarketplaceConfiguration?: (UpdateIntegrationMarketplaceConfigurationPayloadGenqlSelection & { __args: {input: UpdateIntegrationMarketplaceConfigurationInput} })
    /**
     *     
     *     Updates the availability of an Integration version.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_manage_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_edit].
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    updateIntegrationVersionAvailability?: (UpdateIntegrationVersionAvailabilityPayloadGenqlSelection & { __args: {input: UpdateIntegrationVersionAvailabilityInput} })
    /**
     *     
     *     Validate an Integration schema.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_integration_permissions, org_manage_integrations, org_view_integrations].
     *     2. The signed-in User has any of the following permissions for any version of the object: [integration_admin_permissions, integration_view, integration_edit, integration_remove].
     *     3. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_admin_instance_deploy, customer_manage_marketplace_integrations].
     *     4. The signed-in User has any of the following permissions for the associated Customer of Integrations available in the Marketplace: [customer_access_marketplace_integrations].
     *     5. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     *     6. The Customer User has any of the following permissions for the Customer and the Objects Attribute template_configuration is AVAILABLE: [customer_admin_integration_permissions, customer_manage_integrations, customer_view_integrations].
     */
    validateIntegrationSchema?: (ValidateIntegrationSchemaPayloadGenqlSelection & { __args: {input: ValidateIntegrationSchemaInput} })
    /**
     *     Creates a new ExternalLogStream object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    createExternalLogStream?: (CreateExternalLogStreamPayloadGenqlSelection & { __args: {input: CreateExternalLogStreamInput} })
    /**
     *     Removes the specified ExternalLogStream object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    deleteExternalLogStream?: (DeleteExternalLogStreamPayloadGenqlSelection & { __args: {input: DeleteExternalLogStreamInput} })
    /**
     *     Updates the specified ExternalLogStream object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    updateExternalLogStream?: (UpdateExternalLogStreamPayloadGenqlSelection & { __args: {input: UpdateExternalLogStreamInput} })
    /**
     *     
     *     Creates a Signing Key for the Organization of the signed-in User.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    createOrganizationSigningKey?: (CreateOrganizationSigningKeyPayloadGenqlSelection & { __args: {input: CreateOrganizationSigningKeyInput} })
    /**
     *     Removes the specified Organization object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_superuser].
     */
    deleteOrganization?: (DeleteOrganizationPayloadGenqlSelection & { __args: {input: DeleteOrganizationInput} })
    /**
     *     
     *     Deletes the specified Signing Key.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    deleteOrganizationSigningKey?: (DeleteOrganizationSigningKeyPayloadGenqlSelection & { __args: {input: DeleteOrganizationSigningKeyInput} })
    /**
     *     Creates a new OrganizationSigningKey object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    importOrganizationSigningKey?: (ImportOrganizationSigningKeyPayloadGenqlSelection & { __args: {input: ImportOrganizationSigningKeyInput} })
    /**
     *     Updates the specified Organization object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the object: [org_admin_users].
     */
    updateOrganization?: (UpdateOrganizationPayloadGenqlSelection & { __args: {input: UpdateOrganizationInput} })
    /**
     *     
     *     Administers a Permission to an object for the specified User.
     *     
     * 
     * Access is not permitted.
     */
    administerObjectPermission?: (AdministerObjectPermissionPayloadGenqlSelection & { __args: {input: AdministerObjectPermissionInput} })
    /**
     *     
     *     Updates an Organizations Theme.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users].
     */
    updateTheme?: (UpdateThemePayloadGenqlSelection & { __args: {input: UpdateThemeInput} })
    /**
     *     
     *     Creates a User for the specified Customer.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when 'customer' is not provided in the access function context.
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_admin_users] when 'customer' is provided in the access function context.
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when 'customer' is provided in the access function context.
     */
    createCustomerUser?: (CreateCustomerUserPayloadGenqlSelection & { __args: {input: CreateCustomerUserInput} })
    /**
     *     
     *     Creates a User for the Organization of the signed-in User.
     *     
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when 'customer' is not provided in the access function context.
     *     2. The signed-in User has any of the following permissions for the access function context object 'customer': [customer_admin_users] when 'customer' is provided in the access function context.
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when 'customer' is provided in the access function context.
     */
    createOrganizationUser?: (CreateOrganizationUserPayloadGenqlSelection & { __args: {input: CreateOrganizationUserInput} })
    /**
     *     Removes the specified User object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when the specified object is not the signed-in User and a value for 'customer' does not exist on the object.
     *     2. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when the specified object is not the signed-in User and a value for 'customer' exists on the object.
     *     3. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when the specified object is not the signed-in User and a value for 'customer' exists on the object.
     */
    deleteUser?: (DeleteUserPayloadGenqlSelection & { __args: {input: DeleteUserInput} })
    /**
     *     Updates the specified User object.
     * 
     * Access is permitted when any of the following condition(s) are met:
     *     1. The specified object is the signed-in User.
     *     2. The signed-in User has any of the following permissions for the associated Organization: [org_admin_users] when a value for 'customer' does not exist on the object.
     *     3. The signed-in User has any of the following permissions for the object's 'customer' attribute: [customer_admin_users] when a value for 'customer' exists on the object.
     *     4. The signed-in User has any of the following permissions for the associated Organization: [org_admin_customer_permissions, org_manage_customers] when a value for 'customer' exists on the object.
     */
    updateUser?: (UpdateUserPayloadGenqlSelection & { __args: {input: UpdateUserInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddBlockedRequestIdsPayloadGenqlSelection{
    result?: UpdateBlockedIdsResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateBlockedIdsResultGenqlSelection{
    blockedIds?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ErrorTypeGenqlSelection{
    field?: boolean | number
    messages?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddBlockedRequestIdsInput {
/** The requestId to block. */
blockedId: Scalars['ID'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface ChangeOrganizationUseCredentialsPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AdminOperationResultGenqlSelection{
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChangeOrganizationUseCredentialsInput {
/** Global ID of Organization for which to enable/disable Legacy Credentials. */
orgId: Scalars['ID'],
/** Whether or not Legacy Credentials are enabled for this Organization. */
enabled: Scalars['Boolean'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateOrganizationNewStackPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateOrganizationNewStackInput {
/** The name of the organization to create. */
organizationName: Scalars['String'],
/** Email of the user that should be the owner of the new organization. */
adminEmail: Scalars['String'],
/** The name of the user we are creating. There is no access to the main production DB to pull this information. */
userName?: (Scalars['String'] | null),
/** The name of a plan to assign. If omitted, a new enterprise plan will be created. */
planName?: (Scalars['String'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateOrganizationPlanPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateOrganizationPlanInput {
/** Global ID of Organization for which to create a custom Enterprise Plan. */
orgId: Scalars['ID'],
/** Billing Metric to use for billing the Organization under the Enterprise Plan. */
billedBy: Scalars['String'],
/** Specifies whether this Plan allows configuration for automatic retry of Instance executions. */
isEnterprise: Scalars['Boolean'],
/** Specifies whether this Plan allows configuration for automatic retry of Instance executions. */
allowExecutionRetry: Scalars['Boolean'],
/** Specifies whether this Plan allows configuration of a Custom Theme for the Organization. */
allowCustomTheme: Scalars['Boolean'],
/** Specifies whether this Plan allows for creating User Level Configured Instances. */
allowUserLevelConfig: Scalars['Boolean'],
/** Specifies whether this Plan allows for Customers of the Organization to use the Embedded Designer. */
allowEmbeddedDesigner: Scalars['Boolean'],
/** Specifies whether to enable or disable per-Instance configuration of persisting log and step results for the specified Organization's plan. */
allowDisablingInstanceOutputs?: (Scalars['Boolean'] | null),
/** Number of days to allow the Organization to use the Plan before expiration. */
trialPeriodDays?: (Scalars['Int'] | null),
/** Force Organization to use the new Enterprise Plan even if one already exists. */
force?: (Scalars['Boolean'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DisableOrganizationPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DisableOrganizationInput {
/** Global ID of Organization to switch to (case insensitive) */
orgId: Scalars['ID'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface EnableOrganizationPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnableOrganizationInput {
/** Global ID of Organization to switch to (case insensitive) */
orgId: Scalars['ID'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface FindPaidOrganizationsPayloadGenqlSelection{
    result?: OrgSearchResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrgSearchResultGenqlSelection{
    orgs?: OrganizationReturnObjectGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrganizationReturnObjectGenqlSelection{
    orgId?: boolean | number
    orgTenantId?: boolean | number
    orgName?: boolean | number
    planName?: boolean | number
    planExpiresAt?: boolean | number
    systemSuspended?: boolean | number
    allowCustomTheme?: boolean | number
    allowUserLevelConfig?: boolean | number
    allowEmbeddedDesigner?: boolean | number
    allowExecutionRetry?: boolean | number
    allowDisablingInstanceOutputs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FindPaidOrganizationsInput {
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface PromoteOrganizationOwnerPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PromoteOrganizationOwnerInput {
/** The Organization that the User belongs to, if any. If this is NULL then Customer will be specified. */
orgId: Scalars['ID'],
/** Email of Organization User to promote (case insensitive) */
user: Scalars['String'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface RegisterInternalOrganizationPayloadGenqlSelection{
    result?: RegisterInternalOrganizationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegisterInternalOrganizationResultGenqlSelection{
    orgId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegisterInternalOrganizationInput {
/** Name of the Owner user. */
ownerName: Scalars['String'],
/** Email of the Owner user. */
ownerEmail: Scalars['String'],
/** Password of the Owner user. */
ownerPassword: Scalars['String'],
/** Name of the Organization. */
orgName: Scalars['String'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface RemoveBlockedRequestIdsPayloadGenqlSelection{
    result?: UpdateBlockedIdsResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RemoveBlockedRequestIdsInput {
/** The requestId to unblock. */
blockedId: Scalars['ID'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface SearchOrganizationsPayloadGenqlSelection{
    result?: OrgSearchResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchOrganizationsInput {
/** The name or partial name of the organization to lookup. */
organizationName?: (Scalars['String'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface SetOrganizationPlanExpiresAtPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetOrganizationPlanExpiresAtInput {
/** Global ID of Organization for which to set the specified Plan. */
orgId: Scalars['ID'],
/** Specifies the time at which the trial period for the Organization's current Plan will expire. */
planExpiresAt: Scalars['DateTime'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface SetOrganizationPlanPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetOrganizationPlanInput {
/** Global ID of Organization for which to set the specified Plan. */
orgId: Scalars['ID'],
/** Name of Plan to set for the specified Organization. */
plan: Scalars['String'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface SetPlanEnabledFeaturesPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SetPlanEnabledFeaturesInput {
/** Global ID of Organization whose Plan needs to be modified. */
orgId: Scalars['ID'],
/** Specifies whether to enable or disable the ULC for the specified Organization's plan. */
allowUserLevelConfig?: (Scalars['Boolean'] | null),
/** Specifies whether to enable or disable embedded designer for the specified Organization's plan. */
allowEmbeddedDesigner?: (Scalars['Boolean'] | null),
/** Specifies whether to enable or disable execution retry for the specified Organization's plan. */
allowExecutionRetry?: (Scalars['Boolean'] | null),
/** Specifies whether to enable or disable custom theme for the specified Organization's plan. */
allowCustomTheme?: (Scalars['Boolean'] | null),
/** Specifies whether to enable or disable per-Instance configuration of persisting log and step results for the specified Organization's plan. */
allowDisablingInstanceOutputs?: (Scalars['Boolean'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface SwitchOrganizationPayloadGenqlSelection{
    result?: AdminOperationResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwitchOrganizationInput {
/** The Organization that the User belongs to, if any. If this is NULL then Customer will be specified. */
orgId: Scalars['ID'],
/** Email of Organization User to modify (case insensitive) */
user: Scalars['String'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UtilizationReportPayloadGenqlSelection{
    result?: UtilizationReportResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UtilizationReportResultGenqlSelection{
    startDate?: boolean | number
    endDate?: boolean | number
    orgName?: boolean | number
    billedBy?: boolean | number
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UtilizationReportInput {
/** Name of the Organization. */
orgName: Scalars['String'],
/** Start date of the reporting period. */
startDate: Scalars['Date'],
/** End date of the reporting period. */
endDate: Scalars['Date'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface ClearAlertMonitorPayloadGenqlSelection{
    alertMonitor?: AlertMonitorGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClearAlertMonitorInput {
/** The ID of the AlertMonitor to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateAlertGroupPayloadGenqlSelection{
    alertGroup?: AlertGroupGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateAlertGroupInput {
/** The name of the AlertGroup */
name?: (Scalars['String'] | null),
/** The users in the AlertGroup. */
users?: ((Scalars['ID'] | null)[] | null),
/** The AlertWebhooks in the AlertGroup */
webhooks?: ((Scalars['ID'] | null)[] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateAlertMonitorPayloadGenqlSelection{
    alertMonitor?: AlertMonitorGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateAlertMonitorInput {
/** The name of the AlertMonitor. */
name: Scalars['String'],
/** The Instance that is being monitored by the AlertMonitor. */
instance?: (Scalars['ID'] | null),
/** The IntegrationFlow that is being monitored by the AlertMonitor. */
flowConfig?: (Scalars['ID'] | null),
/** The log severity level condition to monitor for relevant AlertTrigger types. */
logSeverityLevelCondition?: (Scalars['Int'] | null),
/** The execution duration condition to monitor for relevant AlertTrigger types. */
durationSecondsCondition?: (Scalars['Int'] | null),
/** The execution overdue condition to monitor for relevant AlertTrigger types. */
executionOverdueMinutesCondition?: (Scalars['Int'] | null),
/** The AlertTriggers that are setup to trigger the AlertMonitor. */
triggers?: ((Scalars['ID'] | null)[] | null),
/** The AlertGroups to notify when the AlertMonitor is triggered. */
groups?: ((Scalars['ID'] | null)[] | null),
/** The Users to notify when the AlertMonitor is triggered. */
users?: ((Scalars['ID'] | null)[] | null),
/** The AlertWebhooks to call when the AlertMonitor is triggered. */
webhooks?: ((Scalars['ID'] | null)[] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateAlertWebhookPayloadGenqlSelection{
    alertWebhook?: AlertWebhookGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateAlertWebhookInput {
/** The name of the AlertWebhook. */
name: Scalars['String'],
/** The URL of the AlertWebhook. */
url: Scalars['String'],
/** The template that is hydrated and then used as the body of the AlertWebhook request. */
payloadTemplate: Scalars['String'],
/** A JSON string of key/value pairs that will be sent as headers in the Webhook request. */
headers?: (Scalars['String'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteAlertGroupPayloadGenqlSelection{
    alertGroup?: AlertGroupGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteAlertGroupInput {
/** The ID of the AlertGroup to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteAlertMonitorPayloadGenqlSelection{
    alertMonitor?: AlertMonitorGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteAlertMonitorInput {
/** The ID of the AlertMonitor to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteAlertWebhookPayloadGenqlSelection{
    alertWebhook?: AlertWebhookGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteAlertWebhookInput {
/** The ID of the AlertWebhook to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateAlertGroupPayloadGenqlSelection{
    alertGroup?: AlertGroupGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateAlertGroupInput {
/** The name of the AlertGroup */
name?: (Scalars['String'] | null),
/** The users in the AlertGroup. */
users?: ((Scalars['ID'] | null)[] | null),
/** The AlertWebhooks in the AlertGroup */
webhooks?: ((Scalars['ID'] | null)[] | null),
/** The ID of the AlertGroup to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateAlertMonitorPayloadGenqlSelection{
    alertMonitor?: AlertMonitorGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateAlertMonitorInput {
/** The name of the AlertMonitor. */
name?: (Scalars['String'] | null),
/** The IntegrationFlow that is being monitored by the AlertMonitor. */
flowConfig?: (Scalars['ID'] | null),
/** The log severity level condition to monitor for relevant AlertTrigger types. */
logSeverityLevelCondition?: (Scalars['Int'] | null),
/** The execution duration condition to monitor for relevant AlertTrigger types. */
durationSecondsCondition?: (Scalars['Int'] | null),
/** The execution overdue condition to monitor for relevant AlertTrigger types. */
executionOverdueMinutesCondition?: (Scalars['Int'] | null),
/** The AlertTriggers that are setup to trigger the AlertMonitor. */
triggers?: ((Scalars['ID'] | null)[] | null),
/** The AlertGroups to notify when the AlertMonitor is triggered. */
groups?: ((Scalars['ID'] | null)[] | null),
/** The Users to notify when the AlertMonitor is triggered. */
users?: ((Scalars['ID'] | null)[] | null),
/** The AlertWebhooks to call when the AlertMonitor is triggered. */
webhooks?: ((Scalars['ID'] | null)[] | null),
/** The ID of the AlertMonitor to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateAlertWebhookPayloadGenqlSelection{
    alertWebhook?: AlertWebhookGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateAlertWebhookInput {
/** The name of the AlertWebhook. */
name?: (Scalars['String'] | null),
/** The URL of the AlertWebhook. */
url?: (Scalars['String'] | null),
/** The template that is hydrated and then used as the body of the AlertWebhook request. */
payloadTemplate?: (Scalars['String'] | null),
/** A JSON string of key/value pairs that will be sent as headers in the Webhook request. */
headers?: (Scalars['String'] | null),
/** The ID of the AlertWebhook to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface ChangePasswordPayloadGenqlSelection{
    user?: UserGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChangePasswordInput {
/** The current password. */
currentPassword: Scalars['String'],
/** The new password. */
newPassword: Scalars['String'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteComponentPayloadGenqlSelection{
    component?: ComponentGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteComponentInput {
/** The ID of the Component to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface PublishComponentPayloadGenqlSelection{
    publishResult?: PublishComponentResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublishComponentResultGenqlSelection{
    component?: ComponentGenqlSelection
    iconUploadUrl?: boolean | number
    packageUploadUrl?: boolean | number
    connectionIconUploadUrls?: ConnectionIconUploadUrlGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConnectionIconUploadUrlGenqlSelection{
    connectionKey?: boolean | number
    iconUploadUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublishComponentInput {
/** The Customer the Component belongs to, if any. If this is NULL then the Component belongs to the Organization. */
customer?: (Scalars['ID'] | null),
/** The Component definition. */
definition: ComponentDefinitionInput,
/** A list of Component Actions. */
actions?: ((ActionDefinitionInput | null)[] | null),
/** A list of Component Triggers. */
triggers?: ((TriggerDefinitionInput | null)[] | null),
/** A list of Component Data Sources. */
dataSources?: ((DataSourceDefinitionInput | null)[] | null),
/** A list of Component Connections. */
connections?: ((ConnectionDefinitionInput | null)[] | null),
/** Comment about changes in this Publish. */
comment?: (Scalars['String'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}


/** Represents a collection of data that defines a Component. */
export interface ComponentDefinitionInput {
/** A string that uniquely identifies the Component. */
key: Scalars['String'],
/** Specifies whether the Component is publicly available or whether it's private to the Organization. */
public?: (Scalars['Boolean'] | null),
/** Specifies whether the Component is for a Code Native Integration. */
forCodeNativeIntegration?: (Scalars['Boolean'] | null),
/** This field has been deprecated. */
version?: (Scalars['String'] | null),
/** Specifies how the Component is displayed. */
display: ComponentDisplayDefinition,
/** Specifies how the Component handles Authorization. */
authorization?: (AuthorizationDefinition | null),
/** The URL that specifies where the Component documentation exists. */
documentationUrl?: (Scalars['String'] | null)}


/** Represents a collection of data that defines how a Component is displayed. */
export interface ComponentDisplayDefinition {
/** The name of the Component. */
label: Scalars['String'],
/** Additional notes about the Component. */
description: Scalars['String'],
/** The category of the Component. */
category?: (Scalars['String'] | null),
/** The URL that specifies where the Component icon exists. */
iconPath?: (Scalars['String'] | null)}


/** Represents authorization details for a Component. */
export interface AuthorizationDefinition {
/** Specifies whether authorization is required for the Component. */
required: Scalars['Boolean'],
/** The list of authorization methods supported by the Component. */
methods: (Scalars['String'] | null)[]}


/** Represents a collection of data that defines a Component Action. */
export interface ActionDefinitionInput {
/** A string which uniquely identifies the Action in the context of the Component. */
key: Scalars['String'],
/** Specifies how the Component Action is displayed. */
display: ActionDisplayDefinition,
/** The InputFields supported by the Component Action. */
inputs: (InputFieldDefinition | null)[],
/** Specifies how the Action handles Authorization. */
authorization?: (AuthorizationDefinition | null),
/** Specifies whether the Action will terminate Instance execution. */
terminateExecution?: (Scalars['Boolean'] | null),
/** Specifies whether an Action will break out of a loop. */
breakLoop?: (Scalars['Boolean'] | null),
/** Specifies whether the Action will allow Conditional Branching. */
allowsBranching?: (Scalars['Boolean'] | null),
/** The static branch names associated with an Action. */
staticBranchNames?: ((Scalars['String'] | null)[] | null),
/** The input associated with dynamic branching. */
dynamicBranchInput?: (Scalars['String'] | null),
/** An example of the returned payload of an Action. */
examplePayload?: (Scalars['JSONString'] | null)}


/** Represents a collection of data that defines how a Component Action is displayed. */
export interface ActionDisplayDefinition {
/** The name of the Component. */
label: Scalars['String'],
/** Additional notes about the Component. */
description: Scalars['String'],
/** The category of the Component. */
category?: (Scalars['String'] | null),
/** Notes which may provide insight on the intended use of the Action. */
directions?: (Scalars['String'] | null),
/** Specifies whether the Action is important and/or commonly used. */
important?: (Scalars['Boolean'] | null)}


/** Represents an input field for a Component Action. */
export interface InputFieldDefinition {
/** A string which uniquely identifies the InputField in the context of the Action. */
key: Scalars['String'],
/** The name of the InputField. */
label: Scalars['String'],
/** Label used for the Keys of a 'keyvaluelist' collection. */
keyLabel?: (Scalars['String'] | null),
/** Specifies the type of data the InputField handles. */
type: Scalars['String'],
/** Specifies the type of collection to use for storing input values, if applicable. */
collection?: (Scalars['String'] | null),
/** Placeholder text that will appear in the InputField UI. */
placeholder?: (Scalars['String'] | null),
/** The default value for the InputField. */
default?: (Scalars['JSONOrString'] | null),
/** Additional notes about the InputField. */
comments?: (Scalars['String'] | null),
/** An example valid input for this InputField. */
example?: (Scalars['String'] | null),
/** Specifies whether the InputField is required by the Action. */
required?: (Scalars['Boolean'] | null),
/** Dictates how possible choices are provided for this InputField. */
model?: ((InputFieldChoice | null)[] | null),
/** Language to use for the Code Field. */
language?: (Scalars['String'] | null)}


/** Represents a choice for an InputField. */
export interface InputFieldChoice {
/** The label to display for the choice. */
label: Scalars['String'],
/** The value of the choice. */
value: Scalars['String']}


/** Represents a collection of data that defines a Component Trigger. */
export interface TriggerDefinitionInput {
/** A string which uniquely identifies the Action in the context of the Component. */
key: Scalars['String'],
/** Specifies how the Component Action is displayed. */
display: ActionDisplayDefinition,
/** The InputFields supported by the Component Action. */
inputs: (InputFieldDefinition | null)[],
/** Specifies how the Action handles Authorization. */
authorization?: (AuthorizationDefinition | null),
/** Specifies whether the Action will terminate Instance execution. */
terminateExecution?: (Scalars['Boolean'] | null),
/** Specifies whether an Action will break out of a loop. */
breakLoop?: (Scalars['Boolean'] | null),
/** Specifies whether the Action will allow Conditional Branching. */
allowsBranching?: (Scalars['Boolean'] | null),
/** The static branch names associated with an Action. */
staticBranchNames?: ((Scalars['String'] | null)[] | null),
/** The input associated with dynamic branching. */
dynamicBranchInput?: (Scalars['String'] | null),
/** An example of the returned payload of an Action. */
examplePayload?: (Scalars['JSONString'] | null),
/** Specifies support for synchronous responses to an Integration webhook request. */
synchronousResponseSupport?: (Scalars['String'] | null),
/** Specifies support for triggering an Integration on a recurring schedule. */
scheduleSupport?: (Scalars['String'] | null),isCommonTrigger?: (Scalars['Boolean'] | null),hasOnInstanceDeploy?: (Scalars['Boolean'] | null),hasOnInstanceDelete?: (Scalars['Boolean'] | null)}


/** Represents a collection of data that defines a Component Data Source. */
export interface DataSourceDefinitionInput {
/** A string which uniquely identifies the Data Source in the context of the Component. */
key: Scalars['String'],
/** Specifies how the Data Source is displayed. */
display: ActionDisplayDefinition,
/** The InputFields supported by the Data Source. */
inputs: (InputFieldDefinition | null)[],
/** Specifies how the Data Source handles Authorization. */
authorization?: (AuthorizationDefinition | null),
/** The type of the resulting data from the Data Source. */
dataSourceType: Scalars['String'],
/** An example of the returned payload of an Data Source. */
examplePayload?: (Scalars['JSONString'] | null),
/** Specifies the key of a Data Source in this Component which can provide additional details about the content for this Data Source, such as example values when selecting particular API object fields. */
detailDataSource?: (Scalars['String'] | null)}


/** Represents a collection of data that defines a Component Connection. */
export interface ConnectionDefinitionInput {
/** A string which uniquely identifies the Connection in the context of the Component. */
key: Scalars['String'],
/** The name of the Connection. */
label: Scalars['String'],
/** Additional notes about the Connection. */
comments?: (Scalars['String'] | null),
/** Optional path to icon for this Connection. */
iconPath?: (Scalars['String'] | null),
/** Type of OAuth2 connection, if any. */
oauth2Type?: (Scalars['String'] | null),
/** Type of OAuth2 PKCE method, if any. */
oauth2PkceMethod?: (Scalars['String'] | null),
/** Inputs for this Connection. */
inputs?: ((ConnectionInputFieldDefinition | null)[] | null)}


/** Represents an input field for a Connection. */
export interface ConnectionInputFieldDefinition {
/** A string which uniquely identifies the InputField in the context of the Action. */
key: Scalars['String'],
/** The name of the InputField. */
label: Scalars['String'],
/** Label used for the Keys of a 'keyvaluelist' collection. */
keyLabel?: (Scalars['String'] | null),
/** Specifies the type of data the InputField handles. */
type: Scalars['String'],
/** Specifies the type of collection to use for storing input values, if applicable. */
collection?: (Scalars['String'] | null),
/** Placeholder text that will appear in the InputField UI. */
placeholder?: (Scalars['String'] | null),
/** The default value for the InputField. */
default?: (Scalars['JSONOrString'] | null),
/** Additional notes about the InputField. */
comments?: (Scalars['String'] | null),
/** An example valid input for this InputField. */
example?: (Scalars['String'] | null),
/** Specifies whether the InputField is required by the Action. */
required?: (Scalars['Boolean'] | null),
/** Dictates how possible choices are provided for this InputField. */
model?: ((InputFieldChoice | null)[] | null),
/** Language to use for the Code Field. */
language?: (Scalars['String'] | null),
/** Whether or not the field is shown to Integrators and Deployers. Field must have a default is this is `false`. */
shown?: (Scalars['Boolean'] | null)}

export interface UpdateComponentPayloadGenqlSelection{
    component?: ComponentGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateComponentInput {
/** Indicates whether the record is starred by the signed-in User. */
starred?: (Scalars['Boolean'] | null),
/** The ID of the Component to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateUserLevelConfigPayloadGenqlSelection{
    userLevelConfig?: UserLevelConfigGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateUserLevelConfigInput {
/** The Instance with which the User Level Config is associated. */
instance: Scalars['ID'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteUserLevelConfigPayloadGenqlSelection{
    userLevelConfig?: UserLevelConfigGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteUserLevelConfigInput {
/** The ID of the UserLevelConfig to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DisconnectConnectionPayloadGenqlSelection{
    instanceConfigVariable?: InstanceConfigVariableGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DisconnectConnectionInput {
/** The ID of the InstanceConfigVariable to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DisconnectUserLevelConnectionPayloadGenqlSelection{
    userLevelConfigVariable?: UserLevelConfigVariableGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DisconnectUserLevelConnectionInput {
/** The ID of the UserLevelConfigVariable to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateOAuth2ConnectionPayloadGenqlSelection{
    instanceConfigVariable?: InstanceConfigVariableGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateOAuth2ConnectionInput {
/** The timestamp at which the next refresh attempt will occur for the Connection. */
refreshAt?: (Scalars['DateTime'] | null),
/** The OAuth2 access token to use for the Connection. */
accessToken?: (Scalars['String'] | null),
/** The OAuth2 refresh token to use for the Connection. */
refreshToken?: (Scalars['String'] | null),
/** The type of OAuth2 token to use for the Connection. */
tokenType?: (Scalars['String'] | null),
/** The number of seconds until the token is expired and a refresh must occur for the Connection. */
expiresIn?: (Scalars['Int'] | null),
/** The context to use for the Connection. Completely replaces any existing value for context on the Connection. */
context?: (Scalars['String'] | null),
/** The status to use for the Connection. */
status?: (Scalars['String'] | null),
/** Additional fields to store on the token. */
additionalTokenFields?: (Scalars['String'] | null),
/** The ID of the InstanceConfigVariable to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateConnectionTemplatePayloadGenqlSelection{
    connectionTemplate?: ConnectionTemplateGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateConnectionTemplateInput {
/** The Connection from which this template is structured. */
connection: Scalars['ID'],
/** The name of this template. */
name: Scalars['String'],
/** The input presets associated with this template. */
presets: (ConnectionTemplateField | null)[],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}


/** Represents a single preset input for a ConnectionTemplate */
export interface ConnectionTemplateField {
/** The key of an InputField that the value is associated with. */
key: Scalars['String'],
/** The preset value of the field. */
value: Scalars['String']}

export interface DeleteConnectionTemplatePayloadGenqlSelection{
    connectionTemplate?: ConnectionTemplateGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteConnectionTemplateInput {
/** The ID of the ConnectionTemplate to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateConnectionTemplatePayloadGenqlSelection{
    connectionTemplate?: ConnectionTemplateGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateConnectionTemplateInput {
/** The Connection from which this template is structured. */
connection?: (Scalars['ID'] | null),
/** The name of this template. */
name?: (Scalars['String'] | null),
/** The input presets associated with this template. */
presets?: ((ConnectionTemplateField | null)[] | null),
/** The ID of the ConnectionTemplate to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateCustomerCredentialPayloadGenqlSelection{
    credential?: CredentialGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateCustomerCredentialInput {
/** The specific AuthorizationMethod used by the Credential. */
authorizationMethod: Scalars['ID'],
/** The Customer the Credential belongs to, if any. If NULL then Organization will be specified. */
customer?: (Scalars['ID'] | null),
/** The name of the Credential. */
label: Scalars['String'],
/** A list of InputCredentialFieldValues that contain the values for the CredentialFields. */
values?: ((InputCredentialFieldValue | null)[] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}


/** Represents a specific value of a CredentialField. */
export interface InputCredentialFieldValue {
/** The name associated with the CredentialField. */
key: Scalars['String'],
/** The value of the CredentialField. */
value?: (Scalars['String'] | null)}

export interface CreateOrganizationCredentialPayloadGenqlSelection{
    credential?: CredentialGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateOrganizationCredentialInput {
/** The specific AuthorizationMethod used by the Credential. */
authorizationMethod: Scalars['ID'],
/** The name of the Credential. */
label: Scalars['String'],
/** A list of InputCredentialFieldValues that contain the values for the CredentialFields. */
values?: ((InputCredentialFieldValue | null)[] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteCredentialPayloadGenqlSelection{
    credential?: CredentialGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteCredentialInput {
/** The ID of the Credential to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface RequestOAuth2CredentialAuthorizationPayloadGenqlSelection{
    credential?: CredentialGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RequestOAuth2CredentialAuthorizationInput {
/** The email of the recipient who will complete the OAuth2 authorization request. */
email?: (Scalars['String'] | null),
/** The message that will be sent to the recipient of the email. */
message?: (Scalars['String'] | null),
/** The ID of the Credential to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateCredentialPayloadGenqlSelection{
    credential?: CredentialGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateCredentialInput {
/** The name of the Credential. */
label?: (Scalars['String'] | null),
/** A list of InputCredentialFieldValues that contain the values for the CredentialFields. */
values?: ((InputCredentialFieldValue | null)[] | null),
/** The ID of the Credential to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateCustomerPayloadGenqlSelection{
    customer?: CustomerGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateCustomerInput {
/** The name of the Customer, which must be unique within the scope of its Organization. */
name: Scalars['String'],
/** Additional notes about the Customer. */
description?: (Scalars['String'] | null),
/** Specifies whether this Customer can use the Embedded Designer. */
allowEmbeddedDesigner?: (Scalars['Boolean'] | null),
/** The labels that are associated with the object. */
labels?: ((Scalars['String'] | null)[] | null),
/** Allows for mapping an external entity to a Prismatic record. */
externalId?: (Scalars['String'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteCustomerPayloadGenqlSelection{
    customer?: CustomerGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteCustomerInput {
/** The ID of the Customer to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateCustomerPayloadGenqlSelection{
    customer?: CustomerGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateCustomerInput {
/** The name of the Customer, which must be unique within the scope of its Organization. */
name?: (Scalars['String'] | null),
/** Additional notes about the Customer. */
description?: (Scalars['String'] | null),
/** Specifies whether this Customer can use the Embedded Designer. */
allowEmbeddedDesigner?: (Scalars['Boolean'] | null),
/** The labels that are associated with the object. */
labels?: ((Scalars['String'] | null)[] | null),
/** The URL for the avatar image. */
avatarUrl?: (Scalars['String'] | null),
/** Allows for mapping an external entity to a Prismatic record. */
externalId?: (Scalars['String'] | null),
/** Indicates whether the record is starred by the signed-in User. */
starred?: (Scalars['Boolean'] | null),
/** Adds the specified Attachment to the object. */
addAttachment?: (AttachmentInput | null),
/** Removes the specified Attachment from the object. */
renameAttachment?: (AttachmentRenameInput | null),
/** Renames the specified Attachment on the object. */
removeAttachment?: (AttachmentInput | null),
/** The ID of the Customer to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}


/** Represents the collection of data that defines an Attachment. */
export interface AttachmentInput {
/** The name of the Attachment. */
name: Scalars['String'],
/** The URL where the Attachment is located. */
url: Scalars['String']}


/** Represents the collection of data that allows renaming an Attachment. */
export interface AttachmentRenameInput {
/** The new name for the Attachment. */
name: Scalars['String'],
/** The old name of the Attachment. */
oldName: Scalars['String'],
/** The URL where the Attachment is located. */
url: Scalars['String']}

export interface ReplayExecutionPayloadGenqlSelection{
    instanceExecutionResult?: InstanceExecutionResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReplayExecutionInput {
/** The ID of the InstanceExecutionResult to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateInstancePayloadGenqlSelection{
    instance?: InstanceGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateInstanceInput {
/** Additional notes about the Instance. */
description?: (Scalars['String'] | null),
/** The Customer for which the Instance is deployed. */
customer: Scalars['ID'],
/** The Integration that has been deployed for the Instance. */
integration: Scalars['ID'],
/** The name of the Instance. */
name: Scalars['String'],
/** Specifies whether to disable the creation of logs during Instance execution. */
logsDisabled?: (Scalars['Boolean'] | null),
/** Specifies whether to disable the creation of step results during Instance execution. */
stepResultsDisabled?: (Scalars['Boolean'] | null),
/** The labels that are associated with the object. */
labels?: ((Scalars['String'] | null)[] | null),
/** Config variable values that are associated with the Instance. */
configVariables?: ((InputInstanceConfigVariable | null)[] | null),
/** Configuration data for each IntegrationFlow that is associated with the Instance. */
flowConfigs?: ((InputInstanceFlowConfig | null)[] | null),
/** Desired configuration mode. */
configMode?: (Scalars['String'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface InputInstanceConfigVariable {
/** The key of the Required Config Var of the Integration for which a value is being provided. */
key: Scalars['String'],
/** The value to provide for the specified Required Config Var of the Integration. */
value?: (Scalars['String'] | null),
/** The values for nested inputs of the specified Required Config Var of the Integration. */
values?: (Scalars['JSONString'] | null),
/** The schedule type for the specified Required Config Var of the Integration. */
scheduleType?: (Scalars['String'] | null),
/** The timezone for the specified Required Config Var of the Integration. */
timeZone?: (Scalars['String'] | null)}

export interface InputInstanceFlowConfig {flowId: Scalars['ID'],apiKeys?: ((Scalars['String'] | null)[] | null),
/** Data payload for testing this IntegrationFlow associated with the Instance. */
testPayload?: (Scalars['String'] | null),
/** Content type of the payload for testing this IntegrationFlow associated with the Instance. */
testContentType?: (Scalars['String'] | null),
/** Headers of the request for testing this IntegrationFlow associated with the Instance. */
testHeaders?: (Scalars['JSONString'] | null)}

export interface DeleteInstancePayloadGenqlSelection{
    instance?: InstanceGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteInstanceInput {
/** The ID of the Instance to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeployInstancePayloadGenqlSelection{
    instance?: InstanceGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeployInstanceInput {
/** When true, will deploy the instance, ignoring certain validation rules that would normally prevent deployment. */
force?: (Scalars['Boolean'] | null),
/** The ID of the Instance to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface FetchConfigWizardPageContentPayloadGenqlSelection{
    fetchConfigWizardPageContentResult?: FetchConfigWizardPageContentResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of fetching Config Wizard Page content. */
export interface FetchConfigWizardPageContentResultGenqlSelection{
    /** The Instance for which Config Page content was fetched. */
    instance?: InstanceGenqlSelection
    /** The name of the Configuration Page for which content was fetched. */
    pageName?: boolean | number
    /** The JSON string that contains a map of Config Var key to content for the widget for the associated Config Var. */
    content?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FetchConfigWizardPageContentInput {
/** The name of the Configuration Page for which content should be fetched. */
pageName?: (Scalars['String'] | null),
/** The ID of the Instance to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface FetchDataSourceContentPayloadGenqlSelection{
    fetchDataSourceContentResult?: FetchDataSourceContentResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of fetching content for a single Data Source in the context of an Instance. */
export interface FetchDataSourceContentResultGenqlSelection{
    /** The Instance that is used as the context when fetching content for the specified Data Source. */
    instance?: InstanceGenqlSelection
    /** The Data Source for which to fetch content. */
    dataSource?: ActionGenqlSelection
    /** The JSON string that contains the content for the specified Data Source. */
    content?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FetchDataSourceContentInput {
/** The Data Source for which content should be fetched. */
dataSource?: (Scalars['ID'] | null),
/** Input values for the specified Data Source. */
inputs?: ((InputExpression | null)[] | null),
/** The ID of the Instance to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}


/**
 * Represents an expression that is used to reference Configuration
 * Variables and results from previous steps.
 */
export interface InputExpression {
/** The name of the Expression. */
name: Scalars['String'],
/** The type of the Expression. */
type?: (Scalars['String'] | null),
/** The value of the Expression. */
value?: (Scalars['String'] | null),meta?: (Scalars['String'] | null)}

export interface TestInstanceFlowConfigPayloadGenqlSelection{
    testInstanceFlowConfigResult?: TestInstanceFlowConfigResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of testing an InstanceFlowConfig. */
export interface TestInstanceFlowConfigResultGenqlSelection{
    /** The InstanceFlowConfig that was tested. */
    flowConfig?: InstanceFlowConfigGenqlSelection
    /** The HTTP status code of the response returned by the InstanceFlowConfig's Trigger. */
    statusCode?: boolean | number
    /** The HTTP headers of the response returned by the InstanceFlowConfig's Trigger. */
    headers?: boolean | number
    /** The HTTP body of the response returned by the InstanceFlowConfig's Trigger. */
    body?: boolean | number
    /** The InstanceExecutionResult that specifies the result of testing the InstanceFlowConfig. */
    execution?: InstanceExecutionResultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TestInstanceFlowConfigInput {
/** The payload to send with the POST request that triggers the InstanceFlowConfig. */
payload?: (Scalars['String'] | null),
/** The content type of the payload to send with the POST request that triggers the InstanceFlowConfig. */
contentType?: (Scalars['String'] | null),
/** The headers to send with the POST request that triggers the InstanceFlowConfig. */
headers?: (Scalars['String'] | null),
/** The ID of the InstanceFlowConfig to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateInstanceConfigVariablesPayloadGenqlSelection{
    instance?: InstanceGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateInstanceConfigVariablesInput {
/** The Instance with which the Config Variable is associated. */
configVariables?: ((InputInstanceConfigVariable | null)[] | null),
/** Desired configuration mode. */
configMode?: (Scalars['String'] | null),
/** Whether the configuration is complete and ready to be deployed. */
configComplete?: (Scalars['Boolean'] | null),
/** The ID of the Instance to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateInstancePayloadGenqlSelection{
    instance?: InstanceGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateInstanceInput {
/** Additional notes about the Instance. */
description?: (Scalars['String'] | null),
/** The name of the Instance. */
name?: (Scalars['String'] | null),
/** The Integration that has been deployed for the Instance. */
integration?: (Scalars['ID'] | null),
/** Specifies whether the Instance is currently enabled and in an executable state. */
enabled?: (Scalars['Boolean'] | null),
/** Specifies whether to disable the creation of logs during Instance execution. */
logsDisabled?: (Scalars['Boolean'] | null),
/** Specifies whether to disable the creation of step results during Instance execution. */
stepResultsDisabled?: (Scalars['Boolean'] | null),
/** The labels that are associated with the object. */
labels?: ((Scalars['String'] | null)[] | null),
/** The Instance with which the Config Variable is associated. */
configVariables?: ((InputInstanceConfigVariable | null)[] | null),
/** The configuration for the IntegrationFlow associated with the Instance. */
flowConfigs?: ((InputInstanceFlowConfig | null)[] | null),
/** Specifies whether to update the value of needsDeploy as part of the mutation or leave its current value unaltered. */
preserveDeployState?: (Scalars['Boolean'] | null),
/** Desired configuration mode. */
configMode?: (Scalars['String'] | null),
/** Indicates whether the record is starred by the signed-in User. */
starred?: (Scalars['Boolean'] | null),
/** The ID of the Instance to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface BulkUpdateInstancesToLatestIntegrationVersionPayloadGenqlSelection{
    integration?: IntegrationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BulkUpdateInstancesToLatestIntegrationVersionInput {
/** The ID of the Integration to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateIntegrationPayloadGenqlSelection{
    integration?: IntegrationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateIntegrationInput {
/** The name of the Integration. */
name: Scalars['String'],
/** Additional notes about the Integration. */
description?: (Scalars['String'] | null),
/** The Customer the Integration belongs to, if any. If this is NULL then the Integration belongs to the Organization. */
customer?: (Scalars['ID'] | null),
/** Data payload for testing the endpoint configuration for this Integration. */
endpointConfigTestPayload?: (Scalars['String'] | null),
/** Content type of the payload for testing the endpoint configuration for this Integration. */
endpointConfigTestContentType?: (Scalars['String'] | null),
/** A JSON string of key/value pairs that will be sent as headers when testing the endpoint configuration for this Integration. */
endpointConfigTestHeaders?: (Scalars['String'] | null),
/** The labels that are associated with the object. */
labels?: ((Scalars['String'] | null)[] | null),
/** The YAML serialized definition of the Integration to import. */
definition?: (Scalars['String'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteIntegrationPayloadGenqlSelection{
    integration?: IntegrationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteIntegrationInput {
/** The ID of the Integration to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface ForkIntegrationPayloadGenqlSelection{
    integration?: IntegrationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ForkIntegrationInput {
/** The name of the Integration. */
name: Scalars['String'],
/** Additional notes about the Integration. */
description?: (Scalars['String'] | null),
/** Parent Integration this Integration was forked from, if any */
parent: Scalars['ID'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface ImportIntegrationPayloadGenqlSelection{
    integration?: IntegrationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImportIntegrationInput {
/** The Customer the Integration belongs to, if any. If this is NULL then the Integration belongs to the Organization. */
customer?: (Scalars['ID'] | null),
/** The YAML serialized definition of the Integration to import. */
definition: Scalars['String'],
/** The ID of the Integration being imported. */
integrationId?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface PublishIntegrationPayloadGenqlSelection{
    integration?: IntegrationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublishIntegrationInput {
/** Comment about changes in this Publish. */
comment?: (Scalars['String'] | null),
/** The ID of the Integration to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface TestFlowTriggerEventPayloadGenqlSelection{
    testFlowTriggerEventResult?: TestFlowTriggerEventResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of testing an IntegrationFlow's trigger event function for the specified event type. */
export interface TestFlowTriggerEventResultGenqlSelection{
    /** The IntegrationFlow whose trigger was used for testing. */
    flow?: IntegrationFlowGenqlSelection
    /** Whether or not the IntegrationFlow's trigger event function succeeded. */
    succeeded?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TestFlowTriggerEventInput {
/** The type of system event to use for testing. */
eventType: Scalars['String'],
/** The ID of the IntegrationFlow to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface TestIntegrationEndpointConfigPayloadGenqlSelection{
    testIntegrationEndpointConfigResult?: TestIntegrationEndpointConfigResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of testing an Integration endpoint config. */
export interface TestIntegrationEndpointConfigResultGenqlSelection{
    /** The Integration for which the associated endpoint configuration was tested. */
    integration?: IntegrationGenqlSelection
    /** The HTTP status code of the response returned as a result of testing the Integration endpoint configuration. */
    statusCode?: boolean | number
    /** The HTTP headers of the response returned as a result of testing the Integration endpoint configuration. */
    headers?: boolean | number
    /** The HTTP body of the response returned as a result of testing the Integration endpoint configuration. */
    body?: boolean | number
    /** The InstanceExecutionResult that specifies the result of testing the endpoint configuration for the specified Integration. */
    execution?: InstanceExecutionResultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TestIntegrationEndpointConfigInput {
/** The payload to send with the POST request to test the endpoint configuration for the Integration. */
payload?: (Scalars['String'] | null),
/** The content type of the payload to send with the POST request to test the endpoint configuration for the Integration. */
contentType?: (Scalars['String'] | null),
/** The headers to send with the POST request to test the endpoint configuration for the Integration. */
headers?: (Scalars['String'] | null),
/** The ID of the Integration to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface TestIntegrationFlowPayloadGenqlSelection{
    testIntegrationFlowResult?: TestIntegrationFlowResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Result of testing an IntegrationFlow. */
export interface TestIntegrationFlowResultGenqlSelection{
    /** The IntegrationFlow that was tested. */
    flow?: IntegrationFlowGenqlSelection
    /** The HTTP status code of the response returned by the InstanceFlow's Trigger. */
    statusCode?: boolean | number
    /** The HTTP headers of the response returned by the InstanceFlow's Trigger. */
    headers?: boolean | number
    /** The HTTP body of the response returned by the InstanceFlow's Trigger. */
    body?: boolean | number
    /** The InstanceExecutionResult that specifies the result of testing the IntegrationFlow. */
    execution?: InstanceExecutionResultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TestIntegrationFlowInput {
/** The payload to send with the POST request that triggers the Integration Flow Test Instance. */
payload?: (Scalars['String'] | null),
/** The content type of the payload to send with the POST request that triggers the Integration Flow Test Instance. */
contentType?: (Scalars['String'] | null),
/** The headers to send with the POST request that triggers the Integration Flow Test Instance. */
headers?: (Scalars['String'] | null),
/** The ID of the IntegrationFlow to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateIntegrationPayloadGenqlSelection{
    integration?: IntegrationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateIntegrationInput {
/** The name of the Integration. */
name?: (Scalars['String'] | null),
/** Additional notes about the Integration. */
description?: (Scalars['String'] | null),
/** Specifies the category of the Integration. */
category?: (Scalars['String'] | null),
/** The Customer the Integration belongs to, if any. If this is NULL then the Integration belongs to the Organization. */
customer?: (Scalars['ID'] | null),
/** Data payload for testing the endpoint configuration for this Integration. */
endpointConfigTestPayload?: (Scalars['String'] | null),
/** Content type of the payload for testing the endpoint configuration for this Integration. */
endpointConfigTestContentType?: (Scalars['String'] | null),
/** A JSON string of key/value pairs that will be sent as headers when testing the endpoint configuration for this Integration. */
endpointConfigTestHeaders?: (Scalars['String'] | null),
/** Specifies whether the latest published version of this Integration may be used as a template to create new Integrations. */
useAsTemplate?: (Scalars['Boolean'] | null),
/** Specifies whether the latest published version of this Integration may be used as a template to create new Integrations. */
templateConfiguration?: (Scalars['String'] | null),
/** Specifies whether multiple Instances of this Integration may be created from the Marketplace. */
allowMultipleMarketplaceInstances?: (Scalars['Boolean'] | null),
/** The labels that are associated with the object. */
labels?: ((Scalars['String'] | null)[] | null),
/** The URL for the avatar image. */
avatarUrl?: (Scalars['String'] | null),
/** Config Variables that have been specified for the purposes of testing the Integration. */
testConfigVariables?: ((InputInstanceConfigVariable | null)[] | null),
/** The Integration of which the IntegrationFlow is a part. */
flows?: ((InputIntegrationFlow | null)[] | null),
/** The YAML serialized definition of the Integration to import. */
definition?: (Scalars['String'] | null),
/** Indicates whether the record is starred by the signed-in User. */
starred?: (Scalars['Boolean'] | null),
/** Adds the specified Attachment to the object. */
addAttachment?: (AttachmentInput | null),
/** Removes the specified Attachment from the object. */
renameAttachment?: (AttachmentRenameInput | null),
/** Renames the specified Attachment on the object. */
removeAttachment?: (AttachmentInput | null),
/** The ID of the Integration to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface InputIntegrationFlow {id: Scalars['ID'],
/** Data payload for testing this IntegrationFlow. */
testPayload?: (Scalars['String'] | null),
/** Content type of the payload for testing this IntegrationFlow. */
testContentType?: (Scalars['String'] | null),
/** Headers of the request for testing this IntegrationFlow. */
testHeaders?: (Scalars['JSONString'] | null),organizationApiKeys?: ((Scalars['String'] | null)[] | null)}

export interface UpdateIntegrationMarketplaceConfigurationPayloadGenqlSelection{
    integration?: IntegrationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateIntegrationMarketplaceConfigurationInput {
/** Specifies an Overview of the Integration to describe its functionality for use in the Integration Marketplace. */
overview?: (Scalars['String'] | null),
/** Specifies whether an Integration will be available in the Integration Marketplace and if the Integration is deployable by a Customer User. */
marketplaceConfiguration?: (Scalars['String'] | null),
/** The Marketplace Tabs available to Customer Users for configuring this Integration. */
marketplaceTabConfiguration?: (Scalars['String'] | null),
/** Specifies whether multiple Instances of this Integration may be created from the Marketplace. */
allowMultipleMarketplaceInstances?: (Scalars['Boolean'] | null),
/** The ID of the Integration to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateIntegrationVersionAvailabilityPayloadGenqlSelection{
    integration?: IntegrationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateIntegrationVersionAvailabilityInput {
/** Flag the Integration version as available or not */
available: Scalars['Boolean'],
/** The ID of the Integration to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface ValidateIntegrationSchemaPayloadGenqlSelection{
    result?: ValidateIntegrationSchemaFormResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ValidateIntegrationSchemaFormResultGenqlSelection{
    isValid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ValidateIntegrationSchemaInput {
/** The YAML serialized definition of the Integration to validate. */
definition: Scalars['String'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateExternalLogStreamPayloadGenqlSelection{
    externalLogStream?: ExternalLogStreamGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateExternalLogStreamInput {
/** Name of the ExternalLogStream. */
name: Scalars['String'],
/** The URL of the ExternalLogStream. */
url: Scalars['String'],
/** The template that is hydrated and then used as the body of the ExternalLogStream request. */
payloadTemplate: Scalars['String'],
/** A JSON string of key/value pairs that will be sent as headers in the ExternalLogStream request. */
headers?: (Scalars['String'] | null),
/** The Log severity levels for which Logs should be sent to the ExternalLogStream. */
severityLevels: (LogSeverityLevelInput | null)[],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface LogSeverityLevelInput {
/** The integer value of the log severity level. */
id: Scalars['Int'],
/** The description of the log severity level. */
name: Scalars['String']}

export interface DeleteExternalLogStreamPayloadGenqlSelection{
    externalLogStream?: ExternalLogStreamGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteExternalLogStreamInput {
/** The ID of the ExternalLogStream to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateExternalLogStreamPayloadGenqlSelection{
    externalLogStream?: ExternalLogStreamGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateExternalLogStreamInput {
/** Name of the ExternalLogStream. */
name?: (Scalars['String'] | null),
/** The URL of the ExternalLogStream. */
url?: (Scalars['String'] | null),
/** The template that is hydrated and then used as the body of the ExternalLogStream request. */
payloadTemplate?: (Scalars['String'] | null),
/** A JSON string of key/value pairs that will be sent as headers in the ExternalLogStream request. */
headers?: (Scalars['String'] | null),
/** The Log severity levels for which Logs should be sent to the ExternalLogStream. */
severityLevels?: ((LogSeverityLevelInput | null)[] | null),
/** The ID of the ExternalLogStream to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateOrganizationSigningKeyPayloadGenqlSelection{
    result?: CreateOrganizationSigningKeyResultGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateOrganizationSigningKeyResultGenqlSelection{
    signingKey?: OrganizationSigningKeyGenqlSelection
    privateKey?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateOrganizationSigningKeyInput {
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteOrganizationPayloadGenqlSelection{
    organization?: OrganizationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteOrganizationInput {
/** The ID of the Organization to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteOrganizationSigningKeyPayloadGenqlSelection{
    organizationSigningKey?: OrganizationSigningKeyGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteOrganizationSigningKeyInput {
/** The ID of the OrganizationSigningKey to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface ImportOrganizationSigningKeyPayloadGenqlSelection{
    organizationSigningKey?: OrganizationSigningKeyGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImportOrganizationSigningKeyInput {
/** Public key of the Signing Keypair. */
publicKey: Scalars['String'],
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateOrganizationPayloadGenqlSelection{
    organization?: OrganizationGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateOrganizationInput {
/** The unique name of the Organization. */
name?: (Scalars['String'] | null),
/** Display name of the Organization's Marketplace. */
marketplaceName?: (Scalars['String'] | null),featureFlags?: (Scalars['String'] | null),
/** The labels that are associated with the object. */
labels?: ((Scalars['String'] | null)[] | null),
/** The URL for the avatar image. */
avatarUrl?: (Scalars['String'] | null),
/** The ID of the Organization to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface AdministerObjectPermissionPayloadGenqlSelection{
    user?: UserGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AdministerObjectPermissionInput {
/** Specifies whether to grant or revoke the specified Permission. */
grant: Scalars['Boolean'],
/** The Permission to grant for the specified object. */
permission: Scalars['ID'],
/** The object for which the specified Permission is being granted. */
object: Scalars['ID'],
/** The ID of the User to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateThemePayloadGenqlSelection{
    theme?: ThemeGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateThemeInput {
/** A list of inputs that describe the colors used in the theme. */
colors?: ((ThemeColorInput | null)[] | null),
/** A list of inputs that describe the properties used in the theme. */
properties?: ((ThemePropertyInput | null)[] | null),
/** The ID of the Theme to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}


/** Represents a Theme Color of a given Type and the Variant that it is associated with. */
export interface ThemeColorInput {
/** The type of Color. */
type: Scalars['String'],
/** The Theme variant the color is associated with */
variant: Scalars['String'],
/** The value of the color. */
value: Scalars['String']}


/** Represents a Property used to style a Theme */
export interface ThemePropertyInput {
/** The type of Theme Property. */
type: Scalars['String'],
/** The value of the Property. */
value: Scalars['String'],
/** The Theme variant the color is associated with */
variant?: (Scalars['String'] | null)}

export interface CreateCustomerUserPayloadGenqlSelection{
    user?: UserGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateCustomerUserInput {
/** The email address associated with the User. */
email: Scalars['String'],
/** The user's preferred name. */
name?: (Scalars['String'] | null),
/** The Customer the user belongs to, if any. If this is NULL then Organization will be specified. */
customer?: (Scalars['ID'] | null),role: Scalars['ID'],
/** The preferred contact phone number for the User. */
phone?: (Scalars['String'] | null),
/** Allows for mapping an external entity to a Prismatic record. */
externalId?: (Scalars['String'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface CreateOrganizationUserPayloadGenqlSelection{
    user?: UserGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateOrganizationUserInput {
/** The email address associated with the User. */
email: Scalars['String'],
/** The user's preferred name. */
name?: (Scalars['String'] | null),
/** The Role to associate with the User. */
role: Scalars['ID'],
/** The preferred contact phone number for the User. */
phone?: (Scalars['String'] | null),
/** Allows for mapping an external entity to a Prismatic record. */
externalId?: (Scalars['String'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface DeleteUserPayloadGenqlSelection{
    user?: UserGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteUserInput {
/** The ID of the User to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export interface UpdateUserPayloadGenqlSelection{
    user?: UserGenqlSelection
    errors?: ErrorTypeGenqlSelection
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateUserInput {
/** The user's preferred name. */
name?: (Scalars['String'] | null),
/** Designates whether the User has dark mode activated or not. */
darkMode?: (Scalars['Boolean'] | null),
/** Designates whether dark mode should be derived from the operating system. */
darkModeSyncWithOs?: (Scalars['Boolean'] | null),
/** The role to associate with the User. */
role?: (Scalars['ID'] | null),
/** The preferred contact phone number for the User. */
phone?: (Scalars['String'] | null),featureFlags?: (Scalars['String'] | null),
/** The URL for the avatar image. */
avatarUrl?: (Scalars['String'] | null),
/** Allows for mapping an external entity to a Prismatic record. */
externalId?: (Scalars['String'] | null),
/** The ID of the User to mutate. */
id?: (Scalars['ID'] | null),
/** A unique identifier for the client performing the mutation. */
clientMutationId?: (Scalars['String'] | null)}

export type QueryGenqlSelection = RootQueryGenqlSelection
export type MutationGenqlSelection = RootMutationGenqlSelection


    const RootQuery_possibleTypes: string[] = ['RootQuery']
    export const isRootQuery = (obj?: { __typename?: any } | null): obj is RootQuery => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQuery"')
      return RootQuery_possibleTypes.includes(obj.__typename)
    }
    


    const OrgTotalUsageMetrics_possibleTypes: string[] = ['OrgTotalUsageMetrics']
    export const isOrgTotalUsageMetrics = (obj?: { __typename?: any } | null): obj is OrgTotalUsageMetrics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrgTotalUsageMetrics"')
      return OrgTotalUsageMetrics_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['OrgTotalUsageMetrics','OrgDailyUsageMetrics','InstanceDailyUsageMetrics','Instance','Customer','Organization','Theme','ThemeColor','ThemeProperty','OrganizationSigningKey','Credential','AuthorizationMethod','CredentialField','User','Role','AuthObjectType','Permission','Integration','RequiredConfigVariable','Connection','Component','Action','InputField','Version','ConnectionTemplate','InputFieldTemplate','RequiredConfigVariableCredentialType','Expression','IntegrationFlow','IntegrationAction','InstanceExecutionResult','InstanceFlowConfig','AlertMonitor','AlertTrigger','AlertGroup','AlertWebhook','AlertEvent','Log','InstanceConfigVariable','UserLevelConfigVariable','UserLevelConfig','UserLevelFlowConfig','InstanceStepResult','CustomerTotalUsageMetrics','StarredRecord','ObjectPermissionGrant','ExternalLogStream','Label','IntegrationCategory','ComponentCategory','Activity']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const OrgTotalUsageMetricsConnection_possibleTypes: string[] = ['OrgTotalUsageMetricsConnection']
    export const isOrgTotalUsageMetricsConnection = (obj?: { __typename?: any } | null): obj is OrgTotalUsageMetricsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrgTotalUsageMetricsConnection"')
      return OrgTotalUsageMetricsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const OrgTotalUsageMetricsEdge_possibleTypes: string[] = ['OrgTotalUsageMetricsEdge']
    export const isOrgTotalUsageMetricsEdge = (obj?: { __typename?: any } | null): obj is OrgTotalUsageMetricsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrgTotalUsageMetricsEdge"')
      return OrgTotalUsageMetricsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OrgDailyUsageMetrics_possibleTypes: string[] = ['OrgDailyUsageMetrics']
    export const isOrgDailyUsageMetrics = (obj?: { __typename?: any } | null): obj is OrgDailyUsageMetrics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrgDailyUsageMetrics"')
      return OrgDailyUsageMetrics_possibleTypes.includes(obj.__typename)
    }
    


    const OrgDailyUsageMetricsConnection_possibleTypes: string[] = ['OrgDailyUsageMetricsConnection']
    export const isOrgDailyUsageMetricsConnection = (obj?: { __typename?: any } | null): obj is OrgDailyUsageMetricsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrgDailyUsageMetricsConnection"')
      return OrgDailyUsageMetricsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const OrgDailyUsageMetricsEdge_possibleTypes: string[] = ['OrgDailyUsageMetricsEdge']
    export const isOrgDailyUsageMetricsEdge = (obj?: { __typename?: any } | null): obj is OrgDailyUsageMetricsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrgDailyUsageMetricsEdge"')
      return OrgDailyUsageMetricsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceDailyUsageMetrics_possibleTypes: string[] = ['InstanceDailyUsageMetrics']
    export const isInstanceDailyUsageMetrics = (obj?: { __typename?: any } | null): obj is InstanceDailyUsageMetrics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceDailyUsageMetrics"')
      return InstanceDailyUsageMetrics_possibleTypes.includes(obj.__typename)
    }
    


    const Instance_possibleTypes: string[] = ['Instance']
    export const isInstance = (obj?: { __typename?: any } | null): obj is Instance => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstance"')
      return Instance_possibleTypes.includes(obj.__typename)
    }
    


    const Customer_possibleTypes: string[] = ['Customer']
    export const isCustomer = (obj?: { __typename?: any } | null): obj is Customer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomer"')
      return Customer_possibleTypes.includes(obj.__typename)
    }
    


    const Organization_possibleTypes: string[] = ['Organization']
    export const isOrganization = (obj?: { __typename?: any } | null): obj is Organization => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganization"')
      return Organization_possibleTypes.includes(obj.__typename)
    }
    


    const Theme_possibleTypes: string[] = ['Theme']
    export const isTheme = (obj?: { __typename?: any } | null): obj is Theme => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTheme"')
      return Theme_possibleTypes.includes(obj.__typename)
    }
    


    const ThemeColorConnection_possibleTypes: string[] = ['ThemeColorConnection']
    export const isThemeColorConnection = (obj?: { __typename?: any } | null): obj is ThemeColorConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThemeColorConnection"')
      return ThemeColorConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ThemeColor_possibleTypes: string[] = ['ThemeColor']
    export const isThemeColor = (obj?: { __typename?: any } | null): obj is ThemeColor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThemeColor"')
      return ThemeColor_possibleTypes.includes(obj.__typename)
    }
    


    const ThemeColorEdge_possibleTypes: string[] = ['ThemeColorEdge']
    export const isThemeColorEdge = (obj?: { __typename?: any } | null): obj is ThemeColorEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThemeColorEdge"')
      return ThemeColorEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ThemePropertyConnection_possibleTypes: string[] = ['ThemePropertyConnection']
    export const isThemePropertyConnection = (obj?: { __typename?: any } | null): obj is ThemePropertyConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThemePropertyConnection"')
      return ThemePropertyConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ThemeProperty_possibleTypes: string[] = ['ThemeProperty']
    export const isThemeProperty = (obj?: { __typename?: any } | null): obj is ThemeProperty => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThemeProperty"')
      return ThemeProperty_possibleTypes.includes(obj.__typename)
    }
    


    const ThemePropertyEdge_possibleTypes: string[] = ['ThemePropertyEdge']
    export const isThemePropertyEdge = (obj?: { __typename?: any } | null): obj is ThemePropertyEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThemePropertyEdge"')
      return ThemePropertyEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationSigningKeyConnection_possibleTypes: string[] = ['OrganizationSigningKeyConnection']
    export const isOrganizationSigningKeyConnection = (obj?: { __typename?: any } | null): obj is OrganizationSigningKeyConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationSigningKeyConnection"')
      return OrganizationSigningKeyConnection_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationSigningKey_possibleTypes: string[] = ['OrganizationSigningKey']
    export const isOrganizationSigningKey = (obj?: { __typename?: any } | null): obj is OrganizationSigningKey => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationSigningKey"')
      return OrganizationSigningKey_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationSigningKeyEdge_possibleTypes: string[] = ['OrganizationSigningKeyEdge']
    export const isOrganizationSigningKeyEdge = (obj?: { __typename?: any } | null): obj is OrganizationSigningKeyEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationSigningKeyEdge"')
      return OrganizationSigningKeyEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CredentialConnection_possibleTypes: string[] = ['CredentialConnection']
    export const isCredentialConnection = (obj?: { __typename?: any } | null): obj is CredentialConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCredentialConnection"')
      return CredentialConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Credential_possibleTypes: string[] = ['Credential']
    export const isCredential = (obj?: { __typename?: any } | null): obj is Credential => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCredential"')
      return Credential_possibleTypes.includes(obj.__typename)
    }
    


    const AuthorizationMethod_possibleTypes: string[] = ['AuthorizationMethod']
    export const isAuthorizationMethod = (obj?: { __typename?: any } | null): obj is AuthorizationMethod => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthorizationMethod"')
      return AuthorizationMethod_possibleTypes.includes(obj.__typename)
    }
    


    const CredentialFieldConnection_possibleTypes: string[] = ['CredentialFieldConnection']
    export const isCredentialFieldConnection = (obj?: { __typename?: any } | null): obj is CredentialFieldConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCredentialFieldConnection"')
      return CredentialFieldConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CredentialField_possibleTypes: string[] = ['CredentialField']
    export const isCredentialField = (obj?: { __typename?: any } | null): obj is CredentialField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCredentialField"')
      return CredentialField_possibleTypes.includes(obj.__typename)
    }
    


    const CredentialFieldEdge_possibleTypes: string[] = ['CredentialFieldEdge']
    export const isCredentialFieldEdge = (obj?: { __typename?: any } | null): obj is CredentialFieldEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCredentialFieldEdge"')
      return CredentialFieldEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CredentialFieldValue_possibleTypes: string[] = ['CredentialFieldValue']
    export const isCredentialFieldValue = (obj?: { __typename?: any } | null): obj is CredentialFieldValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCredentialFieldValue"')
      return CredentialFieldValue_possibleTypes.includes(obj.__typename)
    }
    


    const CredentialEdge_possibleTypes: string[] = ['CredentialEdge']
    export const isCredentialEdge = (obj?: { __typename?: any } | null): obj is CredentialEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCredentialEdge"')
      return CredentialEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerConnection_possibleTypes: string[] = ['CustomerConnection']
    export const isCustomerConnection = (obj?: { __typename?: any } | null): obj is CustomerConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerConnection"')
      return CustomerConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerEdge_possibleTypes: string[] = ['CustomerEdge']
    export const isCustomerEdge = (obj?: { __typename?: any } | null): obj is CustomerEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerEdge"')
      return CustomerEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserConnection_possibleTypes: string[] = ['UserConnection']
    export const isUserConnection = (obj?: { __typename?: any } | null): obj is UserConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserConnection"')
      return UserConnection_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const Role_possibleTypes: string[] = ['Role']
    export const isRole = (obj?: { __typename?: any } | null): obj is Role => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRole"')
      return Role_possibleTypes.includes(obj.__typename)
    }
    


    const AuthObjectType_possibleTypes: string[] = ['AuthObjectType']
    export const isAuthObjectType = (obj?: { __typename?: any } | null): obj is AuthObjectType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthObjectType"')
      return AuthObjectType_possibleTypes.includes(obj.__typename)
    }
    


    const PermissionConnection_possibleTypes: string[] = ['PermissionConnection']
    export const isPermissionConnection = (obj?: { __typename?: any } | null): obj is PermissionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPermissionConnection"')
      return PermissionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Permission_possibleTypes: string[] = ['Permission']
    export const isPermission = (obj?: { __typename?: any } | null): obj is Permission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPermission"')
      return Permission_possibleTypes.includes(obj.__typename)
    }
    


    const PermissionEdge_possibleTypes: string[] = ['PermissionEdge']
    export const isPermissionEdge = (obj?: { __typename?: any } | null): obj is PermissionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPermissionEdge"')
      return PermissionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserEdge_possibleTypes: string[] = ['UserEdge']
    export const isUserEdge = (obj?: { __typename?: any } | null): obj is UserEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserEdge"')
      return UserEdge_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationConnection_possibleTypes: string[] = ['IntegrationConnection']
    export const isIntegrationConnection = (obj?: { __typename?: any } | null): obj is IntegrationConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationConnection"')
      return IntegrationConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Integration_possibleTypes: string[] = ['Integration']
    export const isIntegration = (obj?: { __typename?: any } | null): obj is Integration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegration"')
      return Integration_possibleTypes.includes(obj.__typename)
    }
    


    const RequiredConfigVariableConnection_possibleTypes: string[] = ['RequiredConfigVariableConnection']
    export const isRequiredConfigVariableConnection = (obj?: { __typename?: any } | null): obj is RequiredConfigVariableConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequiredConfigVariableConnection"')
      return RequiredConfigVariableConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RequiredConfigVariable_possibleTypes: string[] = ['RequiredConfigVariable']
    export const isRequiredConfigVariable = (obj?: { __typename?: any } | null): obj is RequiredConfigVariable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequiredConfigVariable"')
      return RequiredConfigVariable_possibleTypes.includes(obj.__typename)
    }
    


    const Connection_possibleTypes: string[] = ['Connection']
    export const isConnection = (obj?: { __typename?: any } | null): obj is Connection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnection"')
      return Connection_possibleTypes.includes(obj.__typename)
    }
    


    const Component_possibleTypes: string[] = ['Component']
    export const isComponent = (obj?: { __typename?: any } | null): obj is Component => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponent"')
      return Component_possibleTypes.includes(obj.__typename)
    }
    


    const ActionConnection_possibleTypes: string[] = ['ActionConnection']
    export const isActionConnection = (obj?: { __typename?: any } | null): obj is ActionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActionConnection"')
      return ActionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Action_possibleTypes: string[] = ['Action']
    export const isAction = (obj?: { __typename?: any } | null): obj is Action => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAction"')
      return Action_possibleTypes.includes(obj.__typename)
    }
    


    const AuthorizationMethodConnection_possibleTypes: string[] = ['AuthorizationMethodConnection']
    export const isAuthorizationMethodConnection = (obj?: { __typename?: any } | null): obj is AuthorizationMethodConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthorizationMethodConnection"')
      return AuthorizationMethodConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AuthorizationMethodEdge_possibleTypes: string[] = ['AuthorizationMethodEdge']
    export const isAuthorizationMethodEdge = (obj?: { __typename?: any } | null): obj is AuthorizationMethodEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthorizationMethodEdge"')
      return AuthorizationMethodEdge_possibleTypes.includes(obj.__typename)
    }
    


    const InputFieldConnection_possibleTypes: string[] = ['InputFieldConnection']
    export const isInputFieldConnection = (obj?: { __typename?: any } | null): obj is InputFieldConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInputFieldConnection"')
      return InputFieldConnection_possibleTypes.includes(obj.__typename)
    }
    


    const InputField_possibleTypes: string[] = ['InputField']
    export const isInputField = (obj?: { __typename?: any } | null): obj is InputField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInputField"')
      return InputField_possibleTypes.includes(obj.__typename)
    }
    


    const InputFieldEdge_possibleTypes: string[] = ['InputFieldEdge']
    export const isInputFieldEdge = (obj?: { __typename?: any } | null): obj is InputFieldEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInputFieldEdge"')
      return InputFieldEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ActionEdge_possibleTypes: string[] = ['ActionEdge']
    export const isActionEdge = (obj?: { __typename?: any } | null): obj is ActionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActionEdge"')
      return ActionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ConnectionConnection_possibleTypes: string[] = ['ConnectionConnection']
    export const isConnectionConnection = (obj?: { __typename?: any } | null): obj is ConnectionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnectionConnection"')
      return ConnectionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ConnectionEdge_possibleTypes: string[] = ['ConnectionEdge']
    export const isConnectionEdge = (obj?: { __typename?: any } | null): obj is ConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnectionEdge"')
      return ConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Attachment_possibleTypes: string[] = ['Attachment']
    export const isAttachment = (obj?: { __typename?: any } | null): obj is Attachment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAttachment"')
      return Attachment_possibleTypes.includes(obj.__typename)
    }
    


    const VersionConnection_possibleTypes: string[] = ['VersionConnection']
    export const isVersionConnection = (obj?: { __typename?: any } | null): obj is VersionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersionConnection"')
      return VersionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const VersionEdge_possibleTypes: string[] = ['VersionEdge']
    export const isVersionEdge = (obj?: { __typename?: any } | null): obj is VersionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersionEdge"')
      return VersionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Version_possibleTypes: string[] = ['Version']
    export const isVersion = (obj?: { __typename?: any } | null): obj is Version => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersion"')
      return Version_possibleTypes.includes(obj.__typename)
    }
    


    const ComponentConnection_possibleTypes: string[] = ['ComponentConnection']
    export const isComponentConnection = (obj?: { __typename?: any } | null): obj is ComponentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponentConnection"')
      return ComponentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ComponentEdge_possibleTypes: string[] = ['ComponentEdge']
    export const isComponentEdge = (obj?: { __typename?: any } | null): obj is ComponentEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponentEdge"')
      return ComponentEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ConnectionTemplateConnection_possibleTypes: string[] = ['ConnectionTemplateConnection']
    export const isConnectionTemplateConnection = (obj?: { __typename?: any } | null): obj is ConnectionTemplateConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnectionTemplateConnection"')
      return ConnectionTemplateConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ConnectionTemplate_possibleTypes: string[] = ['ConnectionTemplate']
    export const isConnectionTemplate = (obj?: { __typename?: any } | null): obj is ConnectionTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnectionTemplate"')
      return ConnectionTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const InputFieldTemplateConnection_possibleTypes: string[] = ['InputFieldTemplateConnection']
    export const isInputFieldTemplateConnection = (obj?: { __typename?: any } | null): obj is InputFieldTemplateConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInputFieldTemplateConnection"')
      return InputFieldTemplateConnection_possibleTypes.includes(obj.__typename)
    }
    


    const InputFieldTemplate_possibleTypes: string[] = ['InputFieldTemplate']
    export const isInputFieldTemplate = (obj?: { __typename?: any } | null): obj is InputFieldTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInputFieldTemplate"')
      return InputFieldTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const InputFieldTemplateEdge_possibleTypes: string[] = ['InputFieldTemplateEdge']
    export const isInputFieldTemplateEdge = (obj?: { __typename?: any } | null): obj is InputFieldTemplateEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInputFieldTemplateEdge"')
      return InputFieldTemplateEdge_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceConnection_possibleTypes: string[] = ['InstanceConnection']
    export const isInstanceConnection = (obj?: { __typename?: any } | null): obj is InstanceConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceConnection"')
      return InstanceConnection_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceEdge_possibleTypes: string[] = ['InstanceEdge']
    export const isInstanceEdge = (obj?: { __typename?: any } | null): obj is InstanceEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceEdge"')
      return InstanceEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ConnectionTemplateEdge_possibleTypes: string[] = ['ConnectionTemplateEdge']
    export const isConnectionTemplateEdge = (obj?: { __typename?: any } | null): obj is ConnectionTemplateEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnectionTemplateEdge"')
      return ConnectionTemplateEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RequiredConfigVariableCredentialTypeConnection_possibleTypes: string[] = ['RequiredConfigVariableCredentialTypeConnection']
    export const isRequiredConfigVariableCredentialTypeConnection = (obj?: { __typename?: any } | null): obj is RequiredConfigVariableCredentialTypeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequiredConfigVariableCredentialTypeConnection"')
      return RequiredConfigVariableCredentialTypeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RequiredConfigVariableCredentialType_possibleTypes: string[] = ['RequiredConfigVariableCredentialType']
    export const isRequiredConfigVariableCredentialType = (obj?: { __typename?: any } | null): obj is RequiredConfigVariableCredentialType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequiredConfigVariableCredentialType"')
      return RequiredConfigVariableCredentialType_possibleTypes.includes(obj.__typename)
    }
    


    const RequiredConfigVariableCredentialTypeEdge_possibleTypes: string[] = ['RequiredConfigVariableCredentialTypeEdge']
    export const isRequiredConfigVariableCredentialTypeEdge = (obj?: { __typename?: any } | null): obj is RequiredConfigVariableCredentialTypeEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequiredConfigVariableCredentialTypeEdge"')
      return RequiredConfigVariableCredentialTypeEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ExpressionConnection_possibleTypes: string[] = ['ExpressionConnection']
    export const isExpressionConnection = (obj?: { __typename?: any } | null): obj is ExpressionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExpressionConnection"')
      return ExpressionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ExpressionEdge_possibleTypes: string[] = ['ExpressionEdge']
    export const isExpressionEdge = (obj?: { __typename?: any } | null): obj is ExpressionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExpressionEdge"')
      return ExpressionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Expression_possibleTypes: string[] = ['Expression']
    export const isExpression = (obj?: { __typename?: any } | null): obj is Expression => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExpression"')
      return Expression_possibleTypes.includes(obj.__typename)
    }
    


    const RequiredConfigVariableEdge_possibleTypes: string[] = ['RequiredConfigVariableEdge']
    export const isRequiredConfigVariableEdge = (obj?: { __typename?: any } | null): obj is RequiredConfigVariableEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequiredConfigVariableEdge"')
      return RequiredConfigVariableEdge_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationFlowConnection_possibleTypes: string[] = ['IntegrationFlowConnection']
    export const isIntegrationFlowConnection = (obj?: { __typename?: any } | null): obj is IntegrationFlowConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationFlowConnection"')
      return IntegrationFlowConnection_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationFlow_possibleTypes: string[] = ['IntegrationFlow']
    export const isIntegrationFlow = (obj?: { __typename?: any } | null): obj is IntegrationFlow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationFlow"')
      return IntegrationFlow_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationAction_possibleTypes: string[] = ['IntegrationAction']
    export const isIntegrationAction = (obj?: { __typename?: any } | null): obj is IntegrationAction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationAction"')
      return IntegrationAction_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceExecutionResultConnection_possibleTypes: string[] = ['InstanceExecutionResultConnection']
    export const isInstanceExecutionResultConnection = (obj?: { __typename?: any } | null): obj is InstanceExecutionResultConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceExecutionResultConnection"')
      return InstanceExecutionResultConnection_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceExecutionResult_possibleTypes: string[] = ['InstanceExecutionResult']
    export const isInstanceExecutionResult = (obj?: { __typename?: any } | null): obj is InstanceExecutionResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceExecutionResult"')
      return InstanceExecutionResult_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceFlowConfig_possibleTypes: string[] = ['InstanceFlowConfig']
    export const isInstanceFlowConfig = (obj?: { __typename?: any } | null): obj is InstanceFlowConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceFlowConfig"')
      return InstanceFlowConfig_possibleTypes.includes(obj.__typename)
    }
    


    const AlertMonitorConnection_possibleTypes: string[] = ['AlertMonitorConnection']
    export const isAlertMonitorConnection = (obj?: { __typename?: any } | null): obj is AlertMonitorConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertMonitorConnection"')
      return AlertMonitorConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AlertMonitor_possibleTypes: string[] = ['AlertMonitor']
    export const isAlertMonitor = (obj?: { __typename?: any } | null): obj is AlertMonitor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertMonitor"')
      return AlertMonitor_possibleTypes.includes(obj.__typename)
    }
    


    const AlertTriggerConnection_possibleTypes: string[] = ['AlertTriggerConnection']
    export const isAlertTriggerConnection = (obj?: { __typename?: any } | null): obj is AlertTriggerConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertTriggerConnection"')
      return AlertTriggerConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AlertTrigger_possibleTypes: string[] = ['AlertTrigger']
    export const isAlertTrigger = (obj?: { __typename?: any } | null): obj is AlertTrigger => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertTrigger"')
      return AlertTrigger_possibleTypes.includes(obj.__typename)
    }
    


    const AlertTriggerEdge_possibleTypes: string[] = ['AlertTriggerEdge']
    export const isAlertTriggerEdge = (obj?: { __typename?: any } | null): obj is AlertTriggerEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertTriggerEdge"')
      return AlertTriggerEdge_possibleTypes.includes(obj.__typename)
    }
    


    const AlertGroupConnection_possibleTypes: string[] = ['AlertGroupConnection']
    export const isAlertGroupConnection = (obj?: { __typename?: any } | null): obj is AlertGroupConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertGroupConnection"')
      return AlertGroupConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AlertGroup_possibleTypes: string[] = ['AlertGroup']
    export const isAlertGroup = (obj?: { __typename?: any } | null): obj is AlertGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertGroup"')
      return AlertGroup_possibleTypes.includes(obj.__typename)
    }
    


    const AlertWebhookConnection_possibleTypes: string[] = ['AlertWebhookConnection']
    export const isAlertWebhookConnection = (obj?: { __typename?: any } | null): obj is AlertWebhookConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertWebhookConnection"')
      return AlertWebhookConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AlertWebhook_possibleTypes: string[] = ['AlertWebhook']
    export const isAlertWebhook = (obj?: { __typename?: any } | null): obj is AlertWebhook => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertWebhook"')
      return AlertWebhook_possibleTypes.includes(obj.__typename)
    }
    


    const AlertWebhookEdge_possibleTypes: string[] = ['AlertWebhookEdge']
    export const isAlertWebhookEdge = (obj?: { __typename?: any } | null): obj is AlertWebhookEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertWebhookEdge"')
      return AlertWebhookEdge_possibleTypes.includes(obj.__typename)
    }
    


    const AlertGroupEdge_possibleTypes: string[] = ['AlertGroupEdge']
    export const isAlertGroupEdge = (obj?: { __typename?: any } | null): obj is AlertGroupEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertGroupEdge"')
      return AlertGroupEdge_possibleTypes.includes(obj.__typename)
    }
    


    const AlertEventConnection_possibleTypes: string[] = ['AlertEventConnection']
    export const isAlertEventConnection = (obj?: { __typename?: any } | null): obj is AlertEventConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertEventConnection"')
      return AlertEventConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AlertEvent_possibleTypes: string[] = ['AlertEvent']
    export const isAlertEvent = (obj?: { __typename?: any } | null): obj is AlertEvent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertEvent"')
      return AlertEvent_possibleTypes.includes(obj.__typename)
    }
    


    const AlertEventEdge_possibleTypes: string[] = ['AlertEventEdge']
    export const isAlertEventEdge = (obj?: { __typename?: any } | null): obj is AlertEventEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertEventEdge"')
      return AlertEventEdge_possibleTypes.includes(obj.__typename)
    }
    


    const AlertMonitorEdge_possibleTypes: string[] = ['AlertMonitorEdge']
    export const isAlertMonitorEdge = (obj?: { __typename?: any } | null): obj is AlertMonitorEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlertMonitorEdge"')
      return AlertMonitorEdge_possibleTypes.includes(obj.__typename)
    }
    


    const LogConnection_possibleTypes: string[] = ['LogConnection']
    export const isLogConnection = (obj?: { __typename?: any } | null): obj is LogConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogConnection"')
      return LogConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Log_possibleTypes: string[] = ['Log']
    export const isLog = (obj?: { __typename?: any } | null): obj is Log => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLog"')
      return Log_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceConfigVariable_possibleTypes: string[] = ['InstanceConfigVariable']
    export const isInstanceConfigVariable = (obj?: { __typename?: any } | null): obj is InstanceConfigVariable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceConfigVariable"')
      return InstanceConfigVariable_possibleTypes.includes(obj.__typename)
    }
    


    const UserLevelConfigVariable_possibleTypes: string[] = ['UserLevelConfigVariable']
    export const isUserLevelConfigVariable = (obj?: { __typename?: any } | null): obj is UserLevelConfigVariable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLevelConfigVariable"')
      return UserLevelConfigVariable_possibleTypes.includes(obj.__typename)
    }
    


    const UserLevelConfig_possibleTypes: string[] = ['UserLevelConfig']
    export const isUserLevelConfig = (obj?: { __typename?: any } | null): obj is UserLevelConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLevelConfig"')
      return UserLevelConfig_possibleTypes.includes(obj.__typename)
    }
    


    const UserLevelFlowConfigConnection_possibleTypes: string[] = ['UserLevelFlowConfigConnection']
    export const isUserLevelFlowConfigConnection = (obj?: { __typename?: any } | null): obj is UserLevelFlowConfigConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLevelFlowConfigConnection"')
      return UserLevelFlowConfigConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserLevelFlowConfig_possibleTypes: string[] = ['UserLevelFlowConfig']
    export const isUserLevelFlowConfig = (obj?: { __typename?: any } | null): obj is UserLevelFlowConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLevelFlowConfig"')
      return UserLevelFlowConfig_possibleTypes.includes(obj.__typename)
    }
    


    const UserLevelFlowConfigEdge_possibleTypes: string[] = ['UserLevelFlowConfigEdge']
    export const isUserLevelFlowConfigEdge = (obj?: { __typename?: any } | null): obj is UserLevelFlowConfigEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLevelFlowConfigEdge"')
      return UserLevelFlowConfigEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserLevelConfigVariableConnection_possibleTypes: string[] = ['UserLevelConfigVariableConnection']
    export const isUserLevelConfigVariableConnection = (obj?: { __typename?: any } | null): obj is UserLevelConfigVariableConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLevelConfigVariableConnection"')
      return UserLevelConfigVariableConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserLevelConfigVariableEdge_possibleTypes: string[] = ['UserLevelConfigVariableEdge']
    export const isUserLevelConfigVariableEdge = (obj?: { __typename?: any } | null): obj is UserLevelConfigVariableEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLevelConfigVariableEdge"')
      return UserLevelConfigVariableEdge_possibleTypes.includes(obj.__typename)
    }
    


    const LogEdge_possibleTypes: string[] = ['LogEdge']
    export const isLogEdge = (obj?: { __typename?: any } | null): obj is LogEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogEdge"')
      return LogEdge_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceStepResultConnection_possibleTypes: string[] = ['InstanceStepResultConnection']
    export const isInstanceStepResultConnection = (obj?: { __typename?: any } | null): obj is InstanceStepResultConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceStepResultConnection"')
      return InstanceStepResultConnection_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceStepResult_possibleTypes: string[] = ['InstanceStepResult']
    export const isInstanceStepResult = (obj?: { __typename?: any } | null): obj is InstanceStepResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceStepResult"')
      return InstanceStepResult_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceStepResultEdge_possibleTypes: string[] = ['InstanceStepResultEdge']
    export const isInstanceStepResultEdge = (obj?: { __typename?: any } | null): obj is InstanceStepResultEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceStepResultEdge"')
      return InstanceStepResultEdge_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceExecutionResultEdge_possibleTypes: string[] = ['InstanceExecutionResultEdge']
    export const isInstanceExecutionResultEdge = (obj?: { __typename?: any } | null): obj is InstanceExecutionResultEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceExecutionResultEdge"')
      return InstanceExecutionResultEdge_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationFlowEdge_possibleTypes: string[] = ['IntegrationFlowEdge']
    export const isIntegrationFlowEdge = (obj?: { __typename?: any } | null): obj is IntegrationFlowEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationFlowEdge"')
      return IntegrationFlowEdge_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationActionConnection_possibleTypes: string[] = ['IntegrationActionConnection']
    export const isIntegrationActionConnection = (obj?: { __typename?: any } | null): obj is IntegrationActionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationActionConnection"')
      return IntegrationActionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationActionEdge_possibleTypes: string[] = ['IntegrationActionEdge']
    export const isIntegrationActionEdge = (obj?: { __typename?: any } | null): obj is IntegrationActionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationActionEdge"')
      return IntegrationActionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceConfigVariableConnection_possibleTypes: string[] = ['InstanceConfigVariableConnection']
    export const isInstanceConfigVariableConnection = (obj?: { __typename?: any } | null): obj is InstanceConfigVariableConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceConfigVariableConnection"')
      return InstanceConfigVariableConnection_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceConfigVariableEdge_possibleTypes: string[] = ['InstanceConfigVariableEdge']
    export const isInstanceConfigVariableEdge = (obj?: { __typename?: any } | null): obj is InstanceConfigVariableEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceConfigVariableEdge"')
      return InstanceConfigVariableEdge_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationEdge_possibleTypes: string[] = ['IntegrationEdge']
    export const isIntegrationEdge = (obj?: { __typename?: any } | null): obj is IntegrationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationEdge"')
      return IntegrationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserLevelConfigConnection_possibleTypes: string[] = ['UserLevelConfigConnection']
    export const isUserLevelConfigConnection = (obj?: { __typename?: any } | null): obj is UserLevelConfigConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLevelConfigConnection"')
      return UserLevelConfigConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserLevelConfigEdge_possibleTypes: string[] = ['UserLevelConfigEdge']
    export const isUserLevelConfigEdge = (obj?: { __typename?: any } | null): obj is UserLevelConfigEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserLevelConfigEdge"')
      return UserLevelConfigEdge_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceFlowConfigConnection_possibleTypes: string[] = ['InstanceFlowConfigConnection']
    export const isInstanceFlowConfigConnection = (obj?: { __typename?: any } | null): obj is InstanceFlowConfigConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceFlowConfigConnection"')
      return InstanceFlowConfigConnection_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceFlowConfigEdge_possibleTypes: string[] = ['InstanceFlowConfigEdge']
    export const isInstanceFlowConfigEdge = (obj?: { __typename?: any } | null): obj is InstanceFlowConfigEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceFlowConfigEdge"')
      return InstanceFlowConfigEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CustomUserLevelConfigVariableConnection_possibleTypes: string[] = ['CustomUserLevelConfigVariableConnection']
    export const isCustomUserLevelConfigVariableConnection = (obj?: { __typename?: any } | null): obj is CustomUserLevelConfigVariableConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomUserLevelConfigVariableConnection"')
      return CustomUserLevelConfigVariableConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CustomUserLevelConfigVariableEdge_possibleTypes: string[] = ['CustomUserLevelConfigVariableEdge']
    export const isCustomUserLevelConfigVariableEdge = (obj?: { __typename?: any } | null): obj is CustomUserLevelConfigVariableEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomUserLevelConfigVariableEdge"')
      return CustomUserLevelConfigVariableEdge_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceDailyUsageMetricsConnection_possibleTypes: string[] = ['InstanceDailyUsageMetricsConnection']
    export const isInstanceDailyUsageMetricsConnection = (obj?: { __typename?: any } | null): obj is InstanceDailyUsageMetricsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceDailyUsageMetricsConnection"')
      return InstanceDailyUsageMetricsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const InstanceDailyUsageMetricsEdge_possibleTypes: string[] = ['InstanceDailyUsageMetricsEdge']
    export const isInstanceDailyUsageMetricsEdge = (obj?: { __typename?: any } | null): obj is InstanceDailyUsageMetricsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstanceDailyUsageMetricsEdge"')
      return InstanceDailyUsageMetricsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerTotalUsageMetrics_possibleTypes: string[] = ['CustomerTotalUsageMetrics']
    export const isCustomerTotalUsageMetrics = (obj?: { __typename?: any } | null): obj is CustomerTotalUsageMetrics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerTotalUsageMetrics"')
      return CustomerTotalUsageMetrics_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerTotalUsageMetricsConnection_possibleTypes: string[] = ['CustomerTotalUsageMetricsConnection']
    export const isCustomerTotalUsageMetricsConnection = (obj?: { __typename?: any } | null): obj is CustomerTotalUsageMetricsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerTotalUsageMetricsConnection"')
      return CustomerTotalUsageMetricsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerTotalUsageMetricsEdge_possibleTypes: string[] = ['CustomerTotalUsageMetricsEdge']
    export const isCustomerTotalUsageMetricsEdge = (obj?: { __typename?: any } | null): obj is CustomerTotalUsageMetricsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerTotalUsageMetricsEdge"')
      return CustomerTotalUsageMetricsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StarredRecord_possibleTypes: string[] = ['StarredRecord']
    export const isStarredRecord = (obj?: { __typename?: any } | null): obj is StarredRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStarredRecord"')
      return StarredRecord_possibleTypes.includes(obj.__typename)
    }
    


    const StarredRecordConnection_possibleTypes: string[] = ['StarredRecordConnection']
    export const isStarredRecordConnection = (obj?: { __typename?: any } | null): obj is StarredRecordConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStarredRecordConnection"')
      return StarredRecordConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StarredRecordEdge_possibleTypes: string[] = ['StarredRecordEdge']
    export const isStarredRecordEdge = (obj?: { __typename?: any } | null): obj is StarredRecordEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStarredRecordEdge"')
      return StarredRecordEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ObjectPermissionGrant_possibleTypes: string[] = ['ObjectPermissionGrant']
    export const isObjectPermissionGrant = (obj?: { __typename?: any } | null): obj is ObjectPermissionGrant => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isObjectPermissionGrant"')
      return ObjectPermissionGrant_possibleTypes.includes(obj.__typename)
    }
    


    const ObjectPermissionGrantConnection_possibleTypes: string[] = ['ObjectPermissionGrantConnection']
    export const isObjectPermissionGrantConnection = (obj?: { __typename?: any } | null): obj is ObjectPermissionGrantConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isObjectPermissionGrantConnection"')
      return ObjectPermissionGrantConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ObjectPermissionGrantEdge_possibleTypes: string[] = ['ObjectPermissionGrantEdge']
    export const isObjectPermissionGrantEdge = (obj?: { __typename?: any } | null): obj is ObjectPermissionGrantEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isObjectPermissionGrantEdge"')
      return ObjectPermissionGrantEdge_possibleTypes.includes(obj.__typename)
    }
    


    const AuthObjectTypeConnection_possibleTypes: string[] = ['AuthObjectTypeConnection']
    export const isAuthObjectTypeConnection = (obj?: { __typename?: any } | null): obj is AuthObjectTypeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthObjectTypeConnection"')
      return AuthObjectTypeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AuthObjectTypeEdge_possibleTypes: string[] = ['AuthObjectTypeEdge']
    export const isAuthObjectTypeEdge = (obj?: { __typename?: any } | null): obj is AuthObjectTypeEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthObjectTypeEdge"')
      return AuthObjectTypeEdge_possibleTypes.includes(obj.__typename)
    }
    


    const LogSeverity_possibleTypes: string[] = ['LogSeverity']
    export const isLogSeverity = (obj?: { __typename?: any } | null): obj is LogSeverity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogSeverity"')
      return LogSeverity_possibleTypes.includes(obj.__typename)
    }
    


    const ExternalLogStream_possibleTypes: string[] = ['ExternalLogStream']
    export const isExternalLogStream = (obj?: { __typename?: any } | null): obj is ExternalLogStream => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExternalLogStream"')
      return ExternalLogStream_possibleTypes.includes(obj.__typename)
    }
    


    const ExternalLogStreamConnection_possibleTypes: string[] = ['ExternalLogStreamConnection']
    export const isExternalLogStreamConnection = (obj?: { __typename?: any } | null): obj is ExternalLogStreamConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExternalLogStreamConnection"')
      return ExternalLogStreamConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ExternalLogStreamEdge_possibleTypes: string[] = ['ExternalLogStreamEdge']
    export const isExternalLogStreamEdge = (obj?: { __typename?: any } | null): obj is ExternalLogStreamEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExternalLogStreamEdge"')
      return ExternalLogStreamEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Label_possibleTypes: string[] = ['Label']
    export const isLabel = (obj?: { __typename?: any } | null): obj is Label => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLabel"')
      return Label_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationCategory_possibleTypes: string[] = ['IntegrationCategory']
    export const isIntegrationCategory = (obj?: { __typename?: any } | null): obj is IntegrationCategory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationCategory"')
      return IntegrationCategory_possibleTypes.includes(obj.__typename)
    }
    


    const ComponentCategory_possibleTypes: string[] = ['ComponentCategory']
    export const isComponentCategory = (obj?: { __typename?: any } | null): obj is ComponentCategory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponentCategory"')
      return ComponentCategory_possibleTypes.includes(obj.__typename)
    }
    


    const UploadMedia_possibleTypes: string[] = ['UploadMedia']
    export const isUploadMedia = (obj?: { __typename?: any } | null): obj is UploadMedia => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUploadMedia"')
      return UploadMedia_possibleTypes.includes(obj.__typename)
    }
    


    const HotRequestIdsResult_possibleTypes: string[] = ['HotRequestIdsResult']
    export const isHotRequestIdsResult = (obj?: { __typename?: any } | null): obj is HotRequestIdsResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHotRequestIdsResult"')
      return HotRequestIdsResult_possibleTypes.includes(obj.__typename)
    }
    


    const Activity_possibleTypes: string[] = ['Activity']
    export const isActivity = (obj?: { __typename?: any } | null): obj is Activity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivity"')
      return Activity_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityConnection_possibleTypes: string[] = ['ActivityConnection']
    export const isActivityConnection = (obj?: { __typename?: any } | null): obj is ActivityConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityConnection"')
      return ActivityConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ActivityEdge_possibleTypes: string[] = ['ActivityEdge']
    export const isActivityEdge = (obj?: { __typename?: any } | null): obj is ActivityEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivityEdge"')
      return ActivityEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootMutation_possibleTypes: string[] = ['RootMutation']
    export const isRootMutation = (obj?: { __typename?: any } | null): obj is RootMutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootMutation"')
      return RootMutation_possibleTypes.includes(obj.__typename)
    }
    


    const AddBlockedRequestIdsPayload_possibleTypes: string[] = ['AddBlockedRequestIdsPayload']
    export const isAddBlockedRequestIdsPayload = (obj?: { __typename?: any } | null): obj is AddBlockedRequestIdsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddBlockedRequestIdsPayload"')
      return AddBlockedRequestIdsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateBlockedIdsResult_possibleTypes: string[] = ['UpdateBlockedIdsResult']
    export const isUpdateBlockedIdsResult = (obj?: { __typename?: any } | null): obj is UpdateBlockedIdsResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateBlockedIdsResult"')
      return UpdateBlockedIdsResult_possibleTypes.includes(obj.__typename)
    }
    


    const ErrorType_possibleTypes: string[] = ['ErrorType']
    export const isErrorType = (obj?: { __typename?: any } | null): obj is ErrorType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isErrorType"')
      return ErrorType_possibleTypes.includes(obj.__typename)
    }
    


    const ChangeOrganizationUseCredentialsPayload_possibleTypes: string[] = ['ChangeOrganizationUseCredentialsPayload']
    export const isChangeOrganizationUseCredentialsPayload = (obj?: { __typename?: any } | null): obj is ChangeOrganizationUseCredentialsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChangeOrganizationUseCredentialsPayload"')
      return ChangeOrganizationUseCredentialsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const AdminOperationResult_possibleTypes: string[] = ['AdminOperationResult']
    export const isAdminOperationResult = (obj?: { __typename?: any } | null): obj is AdminOperationResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAdminOperationResult"')
      return AdminOperationResult_possibleTypes.includes(obj.__typename)
    }
    


    const CreateOrganizationNewStackPayload_possibleTypes: string[] = ['CreateOrganizationNewStackPayload']
    export const isCreateOrganizationNewStackPayload = (obj?: { __typename?: any } | null): obj is CreateOrganizationNewStackPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateOrganizationNewStackPayload"')
      return CreateOrganizationNewStackPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateOrganizationPlanPayload_possibleTypes: string[] = ['CreateOrganizationPlanPayload']
    export const isCreateOrganizationPlanPayload = (obj?: { __typename?: any } | null): obj is CreateOrganizationPlanPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateOrganizationPlanPayload"')
      return CreateOrganizationPlanPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DisableOrganizationPayload_possibleTypes: string[] = ['DisableOrganizationPayload']
    export const isDisableOrganizationPayload = (obj?: { __typename?: any } | null): obj is DisableOrganizationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDisableOrganizationPayload"')
      return DisableOrganizationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const EnableOrganizationPayload_possibleTypes: string[] = ['EnableOrganizationPayload']
    export const isEnableOrganizationPayload = (obj?: { __typename?: any } | null): obj is EnableOrganizationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnableOrganizationPayload"')
      return EnableOrganizationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const FindPaidOrganizationsPayload_possibleTypes: string[] = ['FindPaidOrganizationsPayload']
    export const isFindPaidOrganizationsPayload = (obj?: { __typename?: any } | null): obj is FindPaidOrganizationsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFindPaidOrganizationsPayload"')
      return FindPaidOrganizationsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const OrgSearchResult_possibleTypes: string[] = ['OrgSearchResult']
    export const isOrgSearchResult = (obj?: { __typename?: any } | null): obj is OrgSearchResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrgSearchResult"')
      return OrgSearchResult_possibleTypes.includes(obj.__typename)
    }
    


    const OrganizationReturnObject_possibleTypes: string[] = ['OrganizationReturnObject']
    export const isOrganizationReturnObject = (obj?: { __typename?: any } | null): obj is OrganizationReturnObject => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganizationReturnObject"')
      return OrganizationReturnObject_possibleTypes.includes(obj.__typename)
    }
    


    const PromoteOrganizationOwnerPayload_possibleTypes: string[] = ['PromoteOrganizationOwnerPayload']
    export const isPromoteOrganizationOwnerPayload = (obj?: { __typename?: any } | null): obj is PromoteOrganizationOwnerPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromoteOrganizationOwnerPayload"')
      return PromoteOrganizationOwnerPayload_possibleTypes.includes(obj.__typename)
    }
    


    const RegisterInternalOrganizationPayload_possibleTypes: string[] = ['RegisterInternalOrganizationPayload']
    export const isRegisterInternalOrganizationPayload = (obj?: { __typename?: any } | null): obj is RegisterInternalOrganizationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRegisterInternalOrganizationPayload"')
      return RegisterInternalOrganizationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const RegisterInternalOrganizationResult_possibleTypes: string[] = ['RegisterInternalOrganizationResult']
    export const isRegisterInternalOrganizationResult = (obj?: { __typename?: any } | null): obj is RegisterInternalOrganizationResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRegisterInternalOrganizationResult"')
      return RegisterInternalOrganizationResult_possibleTypes.includes(obj.__typename)
    }
    


    const RemoveBlockedRequestIdsPayload_possibleTypes: string[] = ['RemoveBlockedRequestIdsPayload']
    export const isRemoveBlockedRequestIdsPayload = (obj?: { __typename?: any } | null): obj is RemoveBlockedRequestIdsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRemoveBlockedRequestIdsPayload"')
      return RemoveBlockedRequestIdsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SearchOrganizationsPayload_possibleTypes: string[] = ['SearchOrganizationsPayload']
    export const isSearchOrganizationsPayload = (obj?: { __typename?: any } | null): obj is SearchOrganizationsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchOrganizationsPayload"')
      return SearchOrganizationsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SetOrganizationPlanExpiresAtPayload_possibleTypes: string[] = ['SetOrganizationPlanExpiresAtPayload']
    export const isSetOrganizationPlanExpiresAtPayload = (obj?: { __typename?: any } | null): obj is SetOrganizationPlanExpiresAtPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetOrganizationPlanExpiresAtPayload"')
      return SetOrganizationPlanExpiresAtPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SetOrganizationPlanPayload_possibleTypes: string[] = ['SetOrganizationPlanPayload']
    export const isSetOrganizationPlanPayload = (obj?: { __typename?: any } | null): obj is SetOrganizationPlanPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetOrganizationPlanPayload"')
      return SetOrganizationPlanPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SetPlanEnabledFeaturesPayload_possibleTypes: string[] = ['SetPlanEnabledFeaturesPayload']
    export const isSetPlanEnabledFeaturesPayload = (obj?: { __typename?: any } | null): obj is SetPlanEnabledFeaturesPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSetPlanEnabledFeaturesPayload"')
      return SetPlanEnabledFeaturesPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SwitchOrganizationPayload_possibleTypes: string[] = ['SwitchOrganizationPayload']
    export const isSwitchOrganizationPayload = (obj?: { __typename?: any } | null): obj is SwitchOrganizationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSwitchOrganizationPayload"')
      return SwitchOrganizationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UtilizationReportPayload_possibleTypes: string[] = ['UtilizationReportPayload']
    export const isUtilizationReportPayload = (obj?: { __typename?: any } | null): obj is UtilizationReportPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUtilizationReportPayload"')
      return UtilizationReportPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UtilizationReportResult_possibleTypes: string[] = ['UtilizationReportResult']
    export const isUtilizationReportResult = (obj?: { __typename?: any } | null): obj is UtilizationReportResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUtilizationReportResult"')
      return UtilizationReportResult_possibleTypes.includes(obj.__typename)
    }
    


    const ClearAlertMonitorPayload_possibleTypes: string[] = ['ClearAlertMonitorPayload']
    export const isClearAlertMonitorPayload = (obj?: { __typename?: any } | null): obj is ClearAlertMonitorPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isClearAlertMonitorPayload"')
      return ClearAlertMonitorPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateAlertGroupPayload_possibleTypes: string[] = ['CreateAlertGroupPayload']
    export const isCreateAlertGroupPayload = (obj?: { __typename?: any } | null): obj is CreateAlertGroupPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateAlertGroupPayload"')
      return CreateAlertGroupPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateAlertMonitorPayload_possibleTypes: string[] = ['CreateAlertMonitorPayload']
    export const isCreateAlertMonitorPayload = (obj?: { __typename?: any } | null): obj is CreateAlertMonitorPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateAlertMonitorPayload"')
      return CreateAlertMonitorPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateAlertWebhookPayload_possibleTypes: string[] = ['CreateAlertWebhookPayload']
    export const isCreateAlertWebhookPayload = (obj?: { __typename?: any } | null): obj is CreateAlertWebhookPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateAlertWebhookPayload"')
      return CreateAlertWebhookPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteAlertGroupPayload_possibleTypes: string[] = ['DeleteAlertGroupPayload']
    export const isDeleteAlertGroupPayload = (obj?: { __typename?: any } | null): obj is DeleteAlertGroupPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteAlertGroupPayload"')
      return DeleteAlertGroupPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteAlertMonitorPayload_possibleTypes: string[] = ['DeleteAlertMonitorPayload']
    export const isDeleteAlertMonitorPayload = (obj?: { __typename?: any } | null): obj is DeleteAlertMonitorPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteAlertMonitorPayload"')
      return DeleteAlertMonitorPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteAlertWebhookPayload_possibleTypes: string[] = ['DeleteAlertWebhookPayload']
    export const isDeleteAlertWebhookPayload = (obj?: { __typename?: any } | null): obj is DeleteAlertWebhookPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteAlertWebhookPayload"')
      return DeleteAlertWebhookPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateAlertGroupPayload_possibleTypes: string[] = ['UpdateAlertGroupPayload']
    export const isUpdateAlertGroupPayload = (obj?: { __typename?: any } | null): obj is UpdateAlertGroupPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateAlertGroupPayload"')
      return UpdateAlertGroupPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateAlertMonitorPayload_possibleTypes: string[] = ['UpdateAlertMonitorPayload']
    export const isUpdateAlertMonitorPayload = (obj?: { __typename?: any } | null): obj is UpdateAlertMonitorPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateAlertMonitorPayload"')
      return UpdateAlertMonitorPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateAlertWebhookPayload_possibleTypes: string[] = ['UpdateAlertWebhookPayload']
    export const isUpdateAlertWebhookPayload = (obj?: { __typename?: any } | null): obj is UpdateAlertWebhookPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateAlertWebhookPayload"')
      return UpdateAlertWebhookPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ChangePasswordPayload_possibleTypes: string[] = ['ChangePasswordPayload']
    export const isChangePasswordPayload = (obj?: { __typename?: any } | null): obj is ChangePasswordPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChangePasswordPayload"')
      return ChangePasswordPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteComponentPayload_possibleTypes: string[] = ['DeleteComponentPayload']
    export const isDeleteComponentPayload = (obj?: { __typename?: any } | null): obj is DeleteComponentPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteComponentPayload"')
      return DeleteComponentPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PublishComponentPayload_possibleTypes: string[] = ['PublishComponentPayload']
    export const isPublishComponentPayload = (obj?: { __typename?: any } | null): obj is PublishComponentPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublishComponentPayload"')
      return PublishComponentPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PublishComponentResult_possibleTypes: string[] = ['PublishComponentResult']
    export const isPublishComponentResult = (obj?: { __typename?: any } | null): obj is PublishComponentResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublishComponentResult"')
      return PublishComponentResult_possibleTypes.includes(obj.__typename)
    }
    


    const ConnectionIconUploadUrl_possibleTypes: string[] = ['ConnectionIconUploadUrl']
    export const isConnectionIconUploadUrl = (obj?: { __typename?: any } | null): obj is ConnectionIconUploadUrl => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnectionIconUploadUrl"')
      return ConnectionIconUploadUrl_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateComponentPayload_possibleTypes: string[] = ['UpdateComponentPayload']
    export const isUpdateComponentPayload = (obj?: { __typename?: any } | null): obj is UpdateComponentPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateComponentPayload"')
      return UpdateComponentPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateUserLevelConfigPayload_possibleTypes: string[] = ['CreateUserLevelConfigPayload']
    export const isCreateUserLevelConfigPayload = (obj?: { __typename?: any } | null): obj is CreateUserLevelConfigPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateUserLevelConfigPayload"')
      return CreateUserLevelConfigPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteUserLevelConfigPayload_possibleTypes: string[] = ['DeleteUserLevelConfigPayload']
    export const isDeleteUserLevelConfigPayload = (obj?: { __typename?: any } | null): obj is DeleteUserLevelConfigPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteUserLevelConfigPayload"')
      return DeleteUserLevelConfigPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DisconnectConnectionPayload_possibleTypes: string[] = ['DisconnectConnectionPayload']
    export const isDisconnectConnectionPayload = (obj?: { __typename?: any } | null): obj is DisconnectConnectionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDisconnectConnectionPayload"')
      return DisconnectConnectionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DisconnectUserLevelConnectionPayload_possibleTypes: string[] = ['DisconnectUserLevelConnectionPayload']
    export const isDisconnectUserLevelConnectionPayload = (obj?: { __typename?: any } | null): obj is DisconnectUserLevelConnectionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDisconnectUserLevelConnectionPayload"')
      return DisconnectUserLevelConnectionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateOAuth2ConnectionPayload_possibleTypes: string[] = ['UpdateOAuth2ConnectionPayload']
    export const isUpdateOAuth2ConnectionPayload = (obj?: { __typename?: any } | null): obj is UpdateOAuth2ConnectionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateOAuth2ConnectionPayload"')
      return UpdateOAuth2ConnectionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateConnectionTemplatePayload_possibleTypes: string[] = ['CreateConnectionTemplatePayload']
    export const isCreateConnectionTemplatePayload = (obj?: { __typename?: any } | null): obj is CreateConnectionTemplatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateConnectionTemplatePayload"')
      return CreateConnectionTemplatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteConnectionTemplatePayload_possibleTypes: string[] = ['DeleteConnectionTemplatePayload']
    export const isDeleteConnectionTemplatePayload = (obj?: { __typename?: any } | null): obj is DeleteConnectionTemplatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteConnectionTemplatePayload"')
      return DeleteConnectionTemplatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateConnectionTemplatePayload_possibleTypes: string[] = ['UpdateConnectionTemplatePayload']
    export const isUpdateConnectionTemplatePayload = (obj?: { __typename?: any } | null): obj is UpdateConnectionTemplatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateConnectionTemplatePayload"')
      return UpdateConnectionTemplatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateCustomerCredentialPayload_possibleTypes: string[] = ['CreateCustomerCredentialPayload']
    export const isCreateCustomerCredentialPayload = (obj?: { __typename?: any } | null): obj is CreateCustomerCredentialPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateCustomerCredentialPayload"')
      return CreateCustomerCredentialPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateOrganizationCredentialPayload_possibleTypes: string[] = ['CreateOrganizationCredentialPayload']
    export const isCreateOrganizationCredentialPayload = (obj?: { __typename?: any } | null): obj is CreateOrganizationCredentialPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateOrganizationCredentialPayload"')
      return CreateOrganizationCredentialPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteCredentialPayload_possibleTypes: string[] = ['DeleteCredentialPayload']
    export const isDeleteCredentialPayload = (obj?: { __typename?: any } | null): obj is DeleteCredentialPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteCredentialPayload"')
      return DeleteCredentialPayload_possibleTypes.includes(obj.__typename)
    }
    


    const RequestOAuth2CredentialAuthorizationPayload_possibleTypes: string[] = ['RequestOAuth2CredentialAuthorizationPayload']
    export const isRequestOAuth2CredentialAuthorizationPayload = (obj?: { __typename?: any } | null): obj is RequestOAuth2CredentialAuthorizationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRequestOAuth2CredentialAuthorizationPayload"')
      return RequestOAuth2CredentialAuthorizationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateCredentialPayload_possibleTypes: string[] = ['UpdateCredentialPayload']
    export const isUpdateCredentialPayload = (obj?: { __typename?: any } | null): obj is UpdateCredentialPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateCredentialPayload"')
      return UpdateCredentialPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateCustomerPayload_possibleTypes: string[] = ['CreateCustomerPayload']
    export const isCreateCustomerPayload = (obj?: { __typename?: any } | null): obj is CreateCustomerPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateCustomerPayload"')
      return CreateCustomerPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteCustomerPayload_possibleTypes: string[] = ['DeleteCustomerPayload']
    export const isDeleteCustomerPayload = (obj?: { __typename?: any } | null): obj is DeleteCustomerPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteCustomerPayload"')
      return DeleteCustomerPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateCustomerPayload_possibleTypes: string[] = ['UpdateCustomerPayload']
    export const isUpdateCustomerPayload = (obj?: { __typename?: any } | null): obj is UpdateCustomerPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateCustomerPayload"')
      return UpdateCustomerPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ReplayExecutionPayload_possibleTypes: string[] = ['ReplayExecutionPayload']
    export const isReplayExecutionPayload = (obj?: { __typename?: any } | null): obj is ReplayExecutionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReplayExecutionPayload"')
      return ReplayExecutionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateInstancePayload_possibleTypes: string[] = ['CreateInstancePayload']
    export const isCreateInstancePayload = (obj?: { __typename?: any } | null): obj is CreateInstancePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateInstancePayload"')
      return CreateInstancePayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteInstancePayload_possibleTypes: string[] = ['DeleteInstancePayload']
    export const isDeleteInstancePayload = (obj?: { __typename?: any } | null): obj is DeleteInstancePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteInstancePayload"')
      return DeleteInstancePayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeployInstancePayload_possibleTypes: string[] = ['DeployInstancePayload']
    export const isDeployInstancePayload = (obj?: { __typename?: any } | null): obj is DeployInstancePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeployInstancePayload"')
      return DeployInstancePayload_possibleTypes.includes(obj.__typename)
    }
    


    const FetchConfigWizardPageContentPayload_possibleTypes: string[] = ['FetchConfigWizardPageContentPayload']
    export const isFetchConfigWizardPageContentPayload = (obj?: { __typename?: any } | null): obj is FetchConfigWizardPageContentPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFetchConfigWizardPageContentPayload"')
      return FetchConfigWizardPageContentPayload_possibleTypes.includes(obj.__typename)
    }
    


    const FetchConfigWizardPageContentResult_possibleTypes: string[] = ['FetchConfigWizardPageContentResult']
    export const isFetchConfigWizardPageContentResult = (obj?: { __typename?: any } | null): obj is FetchConfigWizardPageContentResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFetchConfigWizardPageContentResult"')
      return FetchConfigWizardPageContentResult_possibleTypes.includes(obj.__typename)
    }
    


    const FetchDataSourceContentPayload_possibleTypes: string[] = ['FetchDataSourceContentPayload']
    export const isFetchDataSourceContentPayload = (obj?: { __typename?: any } | null): obj is FetchDataSourceContentPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFetchDataSourceContentPayload"')
      return FetchDataSourceContentPayload_possibleTypes.includes(obj.__typename)
    }
    


    const FetchDataSourceContentResult_possibleTypes: string[] = ['FetchDataSourceContentResult']
    export const isFetchDataSourceContentResult = (obj?: { __typename?: any } | null): obj is FetchDataSourceContentResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFetchDataSourceContentResult"')
      return FetchDataSourceContentResult_possibleTypes.includes(obj.__typename)
    }
    


    const TestInstanceFlowConfigPayload_possibleTypes: string[] = ['TestInstanceFlowConfigPayload']
    export const isTestInstanceFlowConfigPayload = (obj?: { __typename?: any } | null): obj is TestInstanceFlowConfigPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestInstanceFlowConfigPayload"')
      return TestInstanceFlowConfigPayload_possibleTypes.includes(obj.__typename)
    }
    


    const TestInstanceFlowConfigResult_possibleTypes: string[] = ['TestInstanceFlowConfigResult']
    export const isTestInstanceFlowConfigResult = (obj?: { __typename?: any } | null): obj is TestInstanceFlowConfigResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestInstanceFlowConfigResult"')
      return TestInstanceFlowConfigResult_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateInstanceConfigVariablesPayload_possibleTypes: string[] = ['UpdateInstanceConfigVariablesPayload']
    export const isUpdateInstanceConfigVariablesPayload = (obj?: { __typename?: any } | null): obj is UpdateInstanceConfigVariablesPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateInstanceConfigVariablesPayload"')
      return UpdateInstanceConfigVariablesPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateInstancePayload_possibleTypes: string[] = ['UpdateInstancePayload']
    export const isUpdateInstancePayload = (obj?: { __typename?: any } | null): obj is UpdateInstancePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateInstancePayload"')
      return UpdateInstancePayload_possibleTypes.includes(obj.__typename)
    }
    


    const BulkUpdateInstancesToLatestIntegrationVersionPayload_possibleTypes: string[] = ['BulkUpdateInstancesToLatestIntegrationVersionPayload']
    export const isBulkUpdateInstancesToLatestIntegrationVersionPayload = (obj?: { __typename?: any } | null): obj is BulkUpdateInstancesToLatestIntegrationVersionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBulkUpdateInstancesToLatestIntegrationVersionPayload"')
      return BulkUpdateInstancesToLatestIntegrationVersionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateIntegrationPayload_possibleTypes: string[] = ['CreateIntegrationPayload']
    export const isCreateIntegrationPayload = (obj?: { __typename?: any } | null): obj is CreateIntegrationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateIntegrationPayload"')
      return CreateIntegrationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteIntegrationPayload_possibleTypes: string[] = ['DeleteIntegrationPayload']
    export const isDeleteIntegrationPayload = (obj?: { __typename?: any } | null): obj is DeleteIntegrationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteIntegrationPayload"')
      return DeleteIntegrationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ForkIntegrationPayload_possibleTypes: string[] = ['ForkIntegrationPayload']
    export const isForkIntegrationPayload = (obj?: { __typename?: any } | null): obj is ForkIntegrationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isForkIntegrationPayload"')
      return ForkIntegrationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ImportIntegrationPayload_possibleTypes: string[] = ['ImportIntegrationPayload']
    export const isImportIntegrationPayload = (obj?: { __typename?: any } | null): obj is ImportIntegrationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImportIntegrationPayload"')
      return ImportIntegrationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const PublishIntegrationPayload_possibleTypes: string[] = ['PublishIntegrationPayload']
    export const isPublishIntegrationPayload = (obj?: { __typename?: any } | null): obj is PublishIntegrationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublishIntegrationPayload"')
      return PublishIntegrationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const TestFlowTriggerEventPayload_possibleTypes: string[] = ['TestFlowTriggerEventPayload']
    export const isTestFlowTriggerEventPayload = (obj?: { __typename?: any } | null): obj is TestFlowTriggerEventPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestFlowTriggerEventPayload"')
      return TestFlowTriggerEventPayload_possibleTypes.includes(obj.__typename)
    }
    


    const TestFlowTriggerEventResult_possibleTypes: string[] = ['TestFlowTriggerEventResult']
    export const isTestFlowTriggerEventResult = (obj?: { __typename?: any } | null): obj is TestFlowTriggerEventResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestFlowTriggerEventResult"')
      return TestFlowTriggerEventResult_possibleTypes.includes(obj.__typename)
    }
    


    const TestIntegrationEndpointConfigPayload_possibleTypes: string[] = ['TestIntegrationEndpointConfigPayload']
    export const isTestIntegrationEndpointConfigPayload = (obj?: { __typename?: any } | null): obj is TestIntegrationEndpointConfigPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestIntegrationEndpointConfigPayload"')
      return TestIntegrationEndpointConfigPayload_possibleTypes.includes(obj.__typename)
    }
    


    const TestIntegrationEndpointConfigResult_possibleTypes: string[] = ['TestIntegrationEndpointConfigResult']
    export const isTestIntegrationEndpointConfigResult = (obj?: { __typename?: any } | null): obj is TestIntegrationEndpointConfigResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestIntegrationEndpointConfigResult"')
      return TestIntegrationEndpointConfigResult_possibleTypes.includes(obj.__typename)
    }
    


    const TestIntegrationFlowPayload_possibleTypes: string[] = ['TestIntegrationFlowPayload']
    export const isTestIntegrationFlowPayload = (obj?: { __typename?: any } | null): obj is TestIntegrationFlowPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestIntegrationFlowPayload"')
      return TestIntegrationFlowPayload_possibleTypes.includes(obj.__typename)
    }
    


    const TestIntegrationFlowResult_possibleTypes: string[] = ['TestIntegrationFlowResult']
    export const isTestIntegrationFlowResult = (obj?: { __typename?: any } | null): obj is TestIntegrationFlowResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestIntegrationFlowResult"')
      return TestIntegrationFlowResult_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateIntegrationPayload_possibleTypes: string[] = ['UpdateIntegrationPayload']
    export const isUpdateIntegrationPayload = (obj?: { __typename?: any } | null): obj is UpdateIntegrationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateIntegrationPayload"')
      return UpdateIntegrationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateIntegrationMarketplaceConfigurationPayload_possibleTypes: string[] = ['UpdateIntegrationMarketplaceConfigurationPayload']
    export const isUpdateIntegrationMarketplaceConfigurationPayload = (obj?: { __typename?: any } | null): obj is UpdateIntegrationMarketplaceConfigurationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateIntegrationMarketplaceConfigurationPayload"')
      return UpdateIntegrationMarketplaceConfigurationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateIntegrationVersionAvailabilityPayload_possibleTypes: string[] = ['UpdateIntegrationVersionAvailabilityPayload']
    export const isUpdateIntegrationVersionAvailabilityPayload = (obj?: { __typename?: any } | null): obj is UpdateIntegrationVersionAvailabilityPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateIntegrationVersionAvailabilityPayload"')
      return UpdateIntegrationVersionAvailabilityPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ValidateIntegrationSchemaPayload_possibleTypes: string[] = ['ValidateIntegrationSchemaPayload']
    export const isValidateIntegrationSchemaPayload = (obj?: { __typename?: any } | null): obj is ValidateIntegrationSchemaPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidateIntegrationSchemaPayload"')
      return ValidateIntegrationSchemaPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ValidateIntegrationSchemaFormResult_possibleTypes: string[] = ['ValidateIntegrationSchemaFormResult']
    export const isValidateIntegrationSchemaFormResult = (obj?: { __typename?: any } | null): obj is ValidateIntegrationSchemaFormResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidateIntegrationSchemaFormResult"')
      return ValidateIntegrationSchemaFormResult_possibleTypes.includes(obj.__typename)
    }
    


    const CreateExternalLogStreamPayload_possibleTypes: string[] = ['CreateExternalLogStreamPayload']
    export const isCreateExternalLogStreamPayload = (obj?: { __typename?: any } | null): obj is CreateExternalLogStreamPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateExternalLogStreamPayload"')
      return CreateExternalLogStreamPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteExternalLogStreamPayload_possibleTypes: string[] = ['DeleteExternalLogStreamPayload']
    export const isDeleteExternalLogStreamPayload = (obj?: { __typename?: any } | null): obj is DeleteExternalLogStreamPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteExternalLogStreamPayload"')
      return DeleteExternalLogStreamPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateExternalLogStreamPayload_possibleTypes: string[] = ['UpdateExternalLogStreamPayload']
    export const isUpdateExternalLogStreamPayload = (obj?: { __typename?: any } | null): obj is UpdateExternalLogStreamPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateExternalLogStreamPayload"')
      return UpdateExternalLogStreamPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateOrganizationSigningKeyPayload_possibleTypes: string[] = ['CreateOrganizationSigningKeyPayload']
    export const isCreateOrganizationSigningKeyPayload = (obj?: { __typename?: any } | null): obj is CreateOrganizationSigningKeyPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateOrganizationSigningKeyPayload"')
      return CreateOrganizationSigningKeyPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateOrganizationSigningKeyResult_possibleTypes: string[] = ['CreateOrganizationSigningKeyResult']
    export const isCreateOrganizationSigningKeyResult = (obj?: { __typename?: any } | null): obj is CreateOrganizationSigningKeyResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateOrganizationSigningKeyResult"')
      return CreateOrganizationSigningKeyResult_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteOrganizationPayload_possibleTypes: string[] = ['DeleteOrganizationPayload']
    export const isDeleteOrganizationPayload = (obj?: { __typename?: any } | null): obj is DeleteOrganizationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteOrganizationPayload"')
      return DeleteOrganizationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteOrganizationSigningKeyPayload_possibleTypes: string[] = ['DeleteOrganizationSigningKeyPayload']
    export const isDeleteOrganizationSigningKeyPayload = (obj?: { __typename?: any } | null): obj is DeleteOrganizationSigningKeyPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteOrganizationSigningKeyPayload"')
      return DeleteOrganizationSigningKeyPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ImportOrganizationSigningKeyPayload_possibleTypes: string[] = ['ImportOrganizationSigningKeyPayload']
    export const isImportOrganizationSigningKeyPayload = (obj?: { __typename?: any } | null): obj is ImportOrganizationSigningKeyPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImportOrganizationSigningKeyPayload"')
      return ImportOrganizationSigningKeyPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateOrganizationPayload_possibleTypes: string[] = ['UpdateOrganizationPayload']
    export const isUpdateOrganizationPayload = (obj?: { __typename?: any } | null): obj is UpdateOrganizationPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateOrganizationPayload"')
      return UpdateOrganizationPayload_possibleTypes.includes(obj.__typename)
    }
    


    const AdministerObjectPermissionPayload_possibleTypes: string[] = ['AdministerObjectPermissionPayload']
    export const isAdministerObjectPermissionPayload = (obj?: { __typename?: any } | null): obj is AdministerObjectPermissionPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAdministerObjectPermissionPayload"')
      return AdministerObjectPermissionPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateThemePayload_possibleTypes: string[] = ['UpdateThemePayload']
    export const isUpdateThemePayload = (obj?: { __typename?: any } | null): obj is UpdateThemePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateThemePayload"')
      return UpdateThemePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateCustomerUserPayload_possibleTypes: string[] = ['CreateCustomerUserPayload']
    export const isCreateCustomerUserPayload = (obj?: { __typename?: any } | null): obj is CreateCustomerUserPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateCustomerUserPayload"')
      return CreateCustomerUserPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateOrganizationUserPayload_possibleTypes: string[] = ['CreateOrganizationUserPayload']
    export const isCreateOrganizationUserPayload = (obj?: { __typename?: any } | null): obj is CreateOrganizationUserPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateOrganizationUserPayload"')
      return CreateOrganizationUserPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteUserPayload_possibleTypes: string[] = ['DeleteUserPayload']
    export const isDeleteUserPayload = (obj?: { __typename?: any } | null): obj is DeleteUserPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteUserPayload"')
      return DeleteUserPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateUserPayload_possibleTypes: string[] = ['UpdateUserPayload']
    export const isUpdateUserPayload = (obj?: { __typename?: any } | null): obj is UpdateUserPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateUserPayload"')
      return UpdateUserPayload_possibleTypes.includes(obj.__typename)
    }
    

export const enumOrderDirection = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumOrgTotalUsageMetricsOrderField = {
   SNAPSHOT_TIME: 'SNAPSHOT_TIME' as const
}

export const enumOrgDailyUsageMetricsOrderField = {
   SNAPSHOT_DATE: 'SNAPSHOT_DATE' as const
}

export const enumThemeColorType = {
   PRIMARY: 'PRIMARY' as const,
   SECONDARY: 'SECONDARY' as const,
   ACCENT: 'ACCENT' as const,
   WARNING: 'WARNING' as const,
   ERROR: 'ERROR' as const,
   INFO: 'INFO' as const,
   SUCCESS: 'SUCCESS' as const,
   OTHER01: 'OTHER01' as const,
   ICON_COLOR: 'ICON_COLOR' as const,
   LINK_COLOR: 'LINK_COLOR' as const,
   SIDEBAR: 'SIDEBAR' as const,
   BACKGROUND: 'BACKGROUND' as const,
   DEBUG: 'DEBUG' as const,
   TRACE: 'TRACE' as const,
   METRIC: 'METRIC' as const
}

export const enumThemeColorVariant = {
   DARK: 'DARK' as const,
   LIGHT: 'LIGHT' as const,
   EMBEDDED_DARK: 'EMBEDDED_DARK' as const,
   EMBEDDED_LIGHT: 'EMBEDDED_LIGHT' as const
}

export const enumThemePropertyType = {
   BORDER_RADIUS: 'BORDER_RADIUS' as const,
   DISABLE_ELEVATION: 'DISABLE_ELEVATION' as const
}

export const enumThemePropertyVariant = {
   DARK: 'DARK' as const,
   LIGHT: 'LIGHT' as const,
   EMBEDDED_DARK: 'EMBEDDED_DARK' as const,
   EMBEDDED_LIGHT: 'EMBEDDED_LIGHT' as const
}

export const enumOrganizationSigningKeyOrderField = {
   CREATED_AT: 'CREATED_AT' as const,
   UPDATED_AT: 'UPDATED_AT' as const
}

export const enumCredentialFieldType = {
   TEXT: 'TEXT' as const,
   STRING: 'STRING' as const,
   PASSWORD: 'PASSWORD' as const,
   KEYVALUE: 'KEYVALUE' as const
}

export const enumCredentialOrderField = {
   LABEL: 'LABEL' as const,
   AUTHORIZATION_METHOD: 'AUTHORIZATION_METHOD' as const,
   CUSTOMER: 'CUSTOMER' as const
}

export const enumCustomerOrderField = {
   NAME: 'NAME' as const,
   DESCRIPTION: 'DESCRIPTION' as const,
   CREATED_AT: 'CREATED_AT' as const,
   UPDATED_AT: 'UPDATED_AT' as const
}

export const enumPermissionOrderField = {
   NAME: 'NAME' as const
}

export const enumUserOrderField = {
   NAME: 'NAME' as const,
   EMAIL: 'EMAIL' as const,
   CREATED_AT: 'CREATED_AT' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   CUSTOMER: 'CUSTOMER' as const,
   ROLE: 'ROLE' as const
}

export const enumIntegrationTemplateConfiguration = {
   NOT_AVAILABLE: 'NOT_AVAILABLE' as const,
   AVAILABLE: 'AVAILABLE' as const,
   ORG_AVAILABLE: 'ORG_AVAILABLE' as const,
   CUSTOMER_AVAILABLE: 'CUSTOMER_AVAILABLE' as const
}

export const enumIntegrationEndpointType = {
   FLOW_SPECIFIC: 'FLOW_SPECIFIC' as const,
   INSTANCE_SPECIFIC: 'INSTANCE_SPECIFIC' as const,
   SHARED_INSTANCE: 'SHARED_INSTANCE' as const
}

export const enumRequiredConfigVariableDataType = {
   STRING: 'STRING' as const,
   DATE: 'DATE' as const,
   TIMESTAMP: 'TIMESTAMP' as const,
   PICKLIST: 'PICKLIST' as const,
   SCHEDULE: 'SCHEDULE' as const,
   CODE: 'CODE' as const,
   CREDENTIAL: 'CREDENTIAL' as const,
   BOOLEAN: 'BOOLEAN' as const,
   NUMBER: 'NUMBER' as const,
   CONNECTION: 'CONNECTION' as const,
   OBJECTSELECTION: 'OBJECTSELECTION' as const,
   OBJECTFIELDMAP: 'OBJECTFIELDMAP' as const,
   JSONFORM: 'JSONFORM' as const
}

export const enumActionSynchronousResponseSupport = {
   INVALID: 'INVALID' as const,
   VALID: 'VALID' as const,
   REQUIRED: 'REQUIRED' as const
}

export const enumActionScheduleSupport = {
   INVALID: 'INVALID' as const,
   VALID: 'VALID' as const,
   REQUIRED: 'REQUIRED' as const
}

export const enumActionDataSourceType = {
   STRING: 'STRING' as const,
   DATE: 'DATE' as const,
   TIMESTAMP: 'TIMESTAMP' as const,
   PICKLIST: 'PICKLIST' as const,
   SCHEDULE: 'SCHEDULE' as const,
   CODE: 'CODE' as const,
   CREDENTIAL: 'CREDENTIAL' as const,
   BOOLEAN: 'BOOLEAN' as const,
   NUMBER: 'NUMBER' as const,
   CONNECTION: 'CONNECTION' as const,
   OBJECTSELECTION: 'OBJECTSELECTION' as const,
   OBJECTFIELDMAP: 'OBJECTFIELDMAP' as const,
   JSONFORM: 'JSONFORM' as const
}

export const enumInputFieldType = {
   STRING: 'STRING' as const,
   TEXT: 'TEXT' as const,
   PASSWORD: 'PASSWORD' as const,
   BOOLEAN: 'BOOLEAN' as const,
   CODE: 'CODE' as const,
   DATA: 'DATA' as const,
   CONDITIONAL: 'CONDITIONAL' as const,
   CONNECTION: 'CONNECTION' as const,
   OBJECTSELECTION: 'OBJECTSELECTION' as const,
   OBJECTFIELDMAP: 'OBJECTFIELDMAP' as const,
   JSONFORM: 'JSONFORM' as const,
   DYNAMICOBJECTSELECTION: 'DYNAMICOBJECTSELECTION' as const,
   DYNAMICFIELDSELECTION: 'DYNAMICFIELDSELECTION' as const
}

export const enumInputFieldCollection = {
   VALUELIST: 'VALUELIST' as const,
   KEYVALUELIST: 'KEYVALUELIST' as const
}

export const enumActionOrderField = {
   LABEL: 'LABEL' as const,
   IS_TRIGGER: 'IS_TRIGGER' as const,
   IS_COMMON_TRIGGER: 'IS_COMMON_TRIGGER' as const,
   IS_DATA_SOURCE: 'IS_DATA_SOURCE' as const
}

export const enumConnectionOrderField = {
   ORDER: 'ORDER' as const,
   LABEL: 'LABEL' as const,
   KEY: 'KEY' as const
}

export const enumVersionOrderDirection = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumVersionOrderField = {
   PUBLISHED_AT: 'PUBLISHED_AT' as const,
   PUBLISHED_BY: 'PUBLISHED_BY' as const,
   VERSION_NUMBER: 'VERSION_NUMBER' as const
}

export const enumComponentOrderField = {
   LABEL: 'LABEL' as const,
   DESCRIPTION: 'DESCRIPTION' as const,
   CATEGORY: 'CATEGORY' as const,
   CUSTOMER: 'CUSTOMER' as const,
   VERSION_CREATED_AT: 'VERSION_CREATED_AT' as const,
   VERSION_NUMBER: 'VERSION_NUMBER' as const
}

export const enumConnectionOauth2Type = {
   AUTHORIZATION_CODE: 'AUTHORIZATION_CODE' as const,
   CLIENT_CREDENTIALS: 'CLIENT_CREDENTIALS' as const
}

export const enumInstanceOrderField = {
   NAME: 'NAME' as const,
   DESCRIPTION: 'DESCRIPTION' as const,
   CUSTOMER: 'CUSTOMER' as const,
   INTEGRATION: 'INTEGRATION' as const,
   VERSION: 'VERSION' as const,
   CATEGORY: 'CATEGORY' as const,
   ENABLED: 'ENABLED' as const,
   CREATED_AT: 'CREATED_AT' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   LAST_EXECUTED_AT: 'LAST_EXECUTED_AT' as const
}

export const enumConnectionTemplateOrderField = {
   NAME: 'NAME' as const
}

export const enumRequiredConfigVariableScheduleType = {
   NONE: 'NONE' as const,
   CUSTOM: 'CUSTOM' as const,
   MINUTE: 'MINUTE' as const,
   HOUR: 'HOUR' as const,
   DAY: 'DAY' as const,
   WEEK: 'WEEK' as const
}

export const enumRequiredConfigVariableCodeLanguage = {
   XML: 'XML' as const,
   HTML: 'HTML' as const,
   JSON: 'JSON' as const
}

export const enumRequiredConfigVariableCollectionType = {
   VALUELIST: 'VALUELIST' as const,
   KEYVALUELIST: 'KEYVALUELIST' as const
}

export const enumExpressionType = {
   VALUE: 'VALUE' as const,
   COMPLEX: 'COMPLEX' as const,
   REFERENCE: 'REFERENCE' as const,
   TEMPLATE: 'TEMPLATE' as const,
   CONFIGVAR: 'CONFIGVAR' as const
}

export const enumRequiredConfigVariableOrderField = {
   SORT_ORDER: 'SORT_ORDER' as const
}

export const enumIntegrationFlowEndpointSecurityType = {
   UNSECURED: 'UNSECURED' as const,
   CUSTOMER_OPTIONAL: 'CUSTOMER_OPTIONAL' as const,
   CUSTOMER_REQUIRED: 'CUSTOMER_REQUIRED' as const,
   ORGANIZATION: 'ORGANIZATION' as const
}

export const enumIntegrationActionErrorHandlerType = {
   FAIL: 'FAIL' as const,
   IGNORE: 'IGNORE' as const,
   RETRY: 'RETRY' as const
}

export const enumAlertMonitorOrderField = {
   NAME: 'NAME' as const,
   CUSTOMER: 'CUSTOMER' as const,
   INTEGRATION: 'INTEGRATION' as const,
   INSTANCE: 'INSTANCE' as const,
   TRIGGERED: 'TRIGGERED' as const,
   LAST_TRIGGERED_AT: 'LAST_TRIGGERED_AT' as const,
   TRIGGERS: 'TRIGGERS' as const,
   FLOW_CONFIG: 'FLOW_CONFIG' as const,
   FLOW_CONFIG__FLOW: 'FLOW_CONFIG__FLOW' as const,
   CREATED_AT: 'CREATED_AT' as const,
   UPDATED_AT: 'UPDATED_AT' as const
}

export const enumAlertTriggerOrderField = {
   NAME: 'NAME' as const
}

export const enumAlertGroupOrderField = {
   CREATED_AT: 'CREATED_AT' as const,
   NAME: 'NAME' as const,
   UPDATED_AT: 'UPDATED_AT' as const
}

export const enumAlertWebhookOrderField = {
   NAME: 'NAME' as const,
   URL: 'URL' as const,
   CREATED_AT: 'CREATED_AT' as const,
   UPDATED_AT: 'UPDATED_AT' as const
}

export const enumAlertEventOrderField = {
   CREATED_AT: 'CREATED_AT' as const,
   DETAILS: 'DETAILS' as const,
   CUSTOMER: 'CUSTOMER' as const,
   INTEGRATION: 'INTEGRATION' as const,
   INSTANCE: 'INSTANCE' as const,
   MONITOR: 'MONITOR' as const,
   TRIGGERS: 'TRIGGERS' as const,
   FLOW_CONFIG: 'FLOW_CONFIG' as const
}

export const enumExecutionStatus = {
   PENDING: 'PENDING' as const,
   SUCCESS: 'SUCCESS' as const,
   ERROR: 'ERROR' as const
}

export const enumInstanceExecutionResultOrderField = {
   STARTED_AT: 'STARTED_AT' as const,
   ENDED_AT: 'ENDED_AT' as const
}

export const enumInstanceConfigVariableScheduleType = {
   NONE: 'NONE' as const,
   CUSTOM: 'CUSTOM' as const,
   MINUTE: 'MINUTE' as const,
   HOUR: 'HOUR' as const,
   DAY: 'DAY' as const,
   WEEK: 'WEEK' as const
}

export const enumInstanceConfigVariableStatus = {
   PENDING: 'PENDING' as const,
   ACTIVE: 'ACTIVE' as const,
   ERROR: 'ERROR' as const
}

export const enumLogOrderField = {
   TIMESTAMP: 'TIMESTAMP' as const,
   SEVERITY: 'SEVERITY' as const,
   MESSAGE: 'MESSAGE' as const,
   INSTANCE: 'INSTANCE' as const,
   CUSTOMER: 'CUSTOMER' as const,
   INTEGRATION: 'INTEGRATION' as const,
   FLOW: 'FLOW' as const,
   FLOW_CONFIG: 'FLOW_CONFIG' as const
}

export const enumUserLevelConfigVariableScheduleType = {
   NONE: 'NONE' as const,
   CUSTOM: 'CUSTOM' as const,
   MINUTE: 'MINUTE' as const,
   HOUR: 'HOUR' as const,
   DAY: 'DAY' as const,
   WEEK: 'WEEK' as const
}

export const enumUserLevelConfigVariableStatus = {
   PENDING: 'PENDING' as const,
   ACTIVE: 'ACTIVE' as const,
   ERROR: 'ERROR' as const
}

export const enumLogSeverityLevel = {
   FATAL: 'FATAL' as const,
   ERROR: 'ERROR' as const,
   WARN: 'WARN' as const,
   INFO: 'INFO' as const,
   DEBUG: 'DEBUG' as const,
   TRACE: 'TRACE' as const,
   METRIC: 'METRIC' as const
}

export const enumInstanceExecutionResultInvokeType = {
   INTEGRATION_FLOW_TEST: 'INTEGRATION_FLOW_TEST' as const,
   INTEGRATION_ENDPOINT_TEST: 'INTEGRATION_ENDPOINT_TEST' as const,
   WEBHOOK: 'WEBHOOK' as const,
   SCHEDULED: 'SCHEDULED' as const,
   DEPLOY_FLOW: 'DEPLOY_FLOW' as const,
   TEAR_DOWN_FLOW: 'TEAR_DOWN_FLOW' as const
}

export const enumInstanceStepResultOrderField = {
   STARTED_AT: 'STARTED_AT' as const,
   ENDED_AT: 'ENDED_AT' as const
}

export const enumIntegrationOrderField = {
   NAME: 'NAME' as const,
   DESCRIPTION: 'DESCRIPTION' as const,
   CATEGORY: 'CATEGORY' as const,
   CUSTOMER: 'CUSTOMER' as const,
   CREATED_AT: 'CREATED_AT' as const,
   PUBLISHED_AT: 'PUBLISHED_AT' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   VERSION_NUMBER: 'VERSION_NUMBER' as const
}

export const enumIntegrationStoreConfiguration = {
   NOT_AVAILABLE_IN_STORE: 'NOT_AVAILABLE_IN_STORE' as const,
   AVAILABLE_NOT_DEPLOYABLE: 'AVAILABLE_NOT_DEPLOYABLE' as const,
   AVAILABLE_AND_DEPLOYABLE: 'AVAILABLE_AND_DEPLOYABLE' as const
}

export const enumMarketplaceConfiguration = {
   NOT_AVAILABLE_IN_MARKETPLACE: 'NOT_AVAILABLE_IN_MARKETPLACE' as const,
   AVAILABLE_NOT_DEPLOYABLE: 'AVAILABLE_NOT_DEPLOYABLE' as const,
   AVAILABLE_AND_DEPLOYABLE: 'AVAILABLE_AND_DEPLOYABLE' as const
}

export const enumUserLevelConfigOrderField = {
   NAME: 'NAME' as const,
   EMAIL: 'EMAIL' as const,
   EXTERNAL_ID: 'EXTERNAL_ID' as const,
   CREATED_AT: 'CREATED_AT' as const,
   UPDATED_AT: 'UPDATED_AT' as const
}

export const enumInstanceFlowConfigOrderField = {
   SORT_ORDER: 'SORT_ORDER' as const
}

export const enumInstanceConfigState = {
   NEEDS_INSTANCE_CONFIGURATION: 'NEEDS_INSTANCE_CONFIGURATION' as const,
   NEEDS_USER_LEVEL_CONFIGURATION: 'NEEDS_USER_LEVEL_CONFIGURATION' as const,
   FULLY_CONFIGURED: 'FULLY_CONFIGURED' as const
}

export const enumInstanceDailyUsageMetricsOrderField = {
   SNAPSHOT_DATE: 'SNAPSHOT_DATE' as const
}

export const enumCustomerTotalUsageMetricsOrderField = {
   SNAPSHOT_TIME: 'SNAPSHOT_TIME' as const
}

export const enumStarredRecordOrderField = {
   TIMESTAMP: 'TIMESTAMP' as const
}

export const enumObjectPermissionGrantOrderField = {
   PERMISSION: 'PERMISSION' as const
}

export const enumAuthObjectTypeOrderField = {
   NAME: 'NAME' as const
}

export const enumExternalLogStreamOrderField = {
   NAME: 'NAME' as const,
   CREATED_AT: 'CREATED_AT' as const,
   UPDATED_AT: 'UPDATED_AT' as const
}

export const enumMediaType = {
   AVATAR: 'AVATAR' as const,
   ATTACHMENT: 'ATTACHMENT' as const
}

export const enumActivityOrderField = {
   TIMESTAMP: 'TIMESTAMP' as const
}
