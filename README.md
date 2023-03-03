# SimpleForms.Web

A simple one-pager umbraco website to do a few things 

- Explain what the SimpleForms package is
- Use the SimpleForms package to create a contact form on the website
- Demonstrate hosting an Umbraco website on Azure
- Demonstrate using Github Actions to build and deploy the website on Azure

## Getting Started

To create this website I ran the following commands. *Note : as this is a live site, I've removed the password from the command line.*

    # Ensure we have the latest Umbraco templates
    dotnet new -i Umbraco.Templates::10.4.0

    # Create solution/project
    dotnet new sln --name "SimpleForms"
    dotnet new umbraco --force -n "SimpleForms.Web" --friendly-name "Administrator" --email "carl@sargunar.com" --password "XXXXXX" --development-database-type SQLite
    dotnet sln add "SimpleForms.Web"

    # Add SimpleForms and uSync packages
    dotnet add "SimpleForms.Web" package Umbraco.Community.SimpleForms
    dotnet add "SimpleForms.Web" package uSync --version 10.3.2

    dotnet run --project "SimpleForms.Web"
    #Running

This will get you a basic Umbraco website with the SimpleForms package installed. I have also made some changes to the appSettings.json file to configure Modelsbuilder how I prefer to normally set it up.

## Adding a basic contact form

Add the following sippet into your page if you want to use standard contact form built into the package.

    # Add this using statement to the top of your page
    @using Umbraco.Community.SimpleForms.Models;


    # Add this to the body of your page where you want to render the form    
    <section class="section section">
        @{
            await Html.RenderPartialAsync("SimpleFormsContact", new SimpleContactFormViewModel());
        }
    </section>

