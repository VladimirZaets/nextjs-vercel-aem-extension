/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

function ExtensionRegistration() {
  const init = async () => {
      const register = await import('@adobe/uix-guest').then(module => module.register);
      const guestConnection = await register({
        id: "nextjs-extension",
        methods: {
          headerMenu: {
            getButtons() {
              return [
                {
                  id: "my.company.export-button",
                  label: "supermans",
                  icon: 'Export',
                  onClick: () => {
                    guestConnection.host.modal.showUrl({
                      title: "Extension Modal",
                      url: "https://nextjs-vercel-aem-extension.vercel.app/", // absolute or relative path
                    })
                  },
                }
              ];
            },
          },
        }
      });
  };
    init().catch((error) => console.error("MYERRORRR", error));

  return <div>IFrame for integration with Host (AEM)...</div>
}

export default ExtensionRegistration;
