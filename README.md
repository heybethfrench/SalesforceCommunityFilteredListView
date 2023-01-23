# Filtered List View for Salesforce Community/Experience

This component uses custom metadata to store naming conventions for list view names.  Use a naming convention at the beginning of the list view name to identify lists to display to community/experience uses.  The use case that gave me this idea was different list views for different languages.

When adding the component to the comminity/experience site, you can pick from sObjects and list view filters.  The list view filter looks at a custom metadata record that identifies the naming convention, and then returns all the list views that start with that naming convention.  However, your community or experience users will not see the naming convention.

## Salesforce Documentation

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)