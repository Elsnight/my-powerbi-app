import "./App.css";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        */ es con una url publica*/
        <iframe
          title="tablero7_seguimiento_comercios_admins_HappyPay"
          width="600"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiYmE3OGQ4NjgtYjE4MS00ZTY5LWI3NDMtMzk5MzI2NWUyMjQ4IiwidCI6IjU4ZjFmZGU3LWUzMjYtNGFhOS04ZTAxLTAxOTY5NGYzMWYxMCIsImMiOjR9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
        */ es con token */
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: "0a3b1253-5e75-4288-a733-3c24211ac543",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=0a3b1253-5e75-4288-a733-3c24211ac543&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtQy1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",

            accessToken:
              "H4sIAAAAAAAEACWTta7sCAIF_-WmXsl2m1d6QZuZOTMzs0fz73t3Jq_klOr89WMmTz8l-c9_f4qX2ex9OtkoGCfLcmCM5CovAuJXGWDtlBvac694iAvGn6hKhLaBuTt5nNUdoSA5fcPrjWkVzsxbSsDaixpb1S6y0hrY2ni5IMZl12D_QqHjuteCCRf_yTsrtmePa3lITQtbjgg31HcaWaEi9xVYviGCL--zkwMdw6ZoKi1AuK46YRyuKBZN7KS06Ts7cLxif5mPp3oQI4QLt6VHs-uUrn9sLxlH6VLAfpvTaiyejFNIa5d9dV5zjQncreSsMsfULjkIwtEPzOwpzxiBUWvZDTMNywiiInngR9_RIfiOUVnM-2nNlB3JUb7CIsSEgKe6wjZnxXS3ApcjAsJzdltPYLhzU9Z-EAfdeK0jM2RRBH7iP4WLGkBE7EXp5rjraWmjtcKAvsJK6u7q0EVJ1ZQXJGWcCNs29Dbz8JsDIUigUGw2glAfKJ7da7YmE3XRpwyphzzOyptbKzcAGYSg9G9S9tOJER1slqAGvhVCHOEUSigq1ICGwMW1InxI78B9NN2e88JByfs30z-H6-jrtPvwM7DaIkTX2iLcN2dJquy_nlDOw8W1utB2d8q7U_AFJ5wFwtdtil1qR8CcIdhzvvdj-qUeqOZvBT7QZeCujgtuXLGlZFVUvK8jipL1wDob6xk-fsLXHKQjPWA0SHhQiTP4wuPafYyhNgxEjOU4y9sZYkrr5eZhZtW-o1cg9ABVLzM6xWXlefG0FJ_F4DUDJpd2enib3jUb8teU0QuZo3zYkd14l24WjwhtMDSeaPwEoJGwEWCE5FsKD4QSg-hLUVl8qI6awkeiVpG4ElGb5ZndUNOyEPM-LjzJOlUJA1zjotbWflbT3xcLyVaZW2IMYsPuRC0EvP78-fnPD7M-8z4pxfN7s1iGl1OukZygWc2PE3nIv-koVFuF9xF5IkIPCNJVSO5pIU4iiXN1D59PmolQgY1GBuurShdLHAzkqpLCbXiMl6Y0J6ASXzstxCFCxX5XQEcYFXx6S2q4hcYCx9oZgKG-PcFMC1FPWmhrK4AIdgW-3vdh6D1CRs8J3haum0Dibpvjfc6hd0WTTIRxyHBTzhWRqRGfp-uBzwjbqTkPIv3VkmS3x1T8pBMPIKTF99kHekS-WNE9Z9RPXpZcuQFhSHr9wMVf0eib8JhnogiTgp6efiBAMl4UWs_UrQnHY-4FMbX3hB2bYRfCYJOFStTRsdxuvFY0xbc-UXakQbK0izQMa7B01r-an7kuVsn_tXwN16rgAa9zDxK1kfVsMUZ9_6GcphqT_ViLX0wBPnYkDqcZkZe3CQNVKyl_RpaLtEl5SRtCxGFHTR8zaQDXY_zW3zsqJcLWHFZV8EHqsEmwqQP7mN0XdYdtQQEeDEnH2F69wb_VkgkY6k1pcMWCMFYjQZx4p2ZdOvO1we5AL20a4i9xxelWuApWCxCbi-2t4csy2Y5UOUG2_gSN4ssBWvUnlxSQE7Lozdjo4a_YKqlPxaN5Llvx3afY44jhOfU1Yijs70Sz205x_D2_iHBsnxBjclV5GlKtbqIYJ1K8j1xwlnxLDTRTI9M8QOA88GO4fJOnUGHpNktHh58ye8pfXy6r8G5Ih5N6n9ZkZQPk5z2EPg7CiaHvos5dae4h_L_5v_8HRt4lW1oGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtQy1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzI1NTUyOTczLCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",

            tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              background: models.BackgroundType.Transparent,
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event.detail);
                },
              ],
              ["visualClicked", () => console.log("visual clicked")],
              ["pageChanged", (event) => console.log(event)],
            ])
          }
          //https://medium.com/globant/how-to-embed-a-power-bi-report-in-react-f27e975e0a
          //https://learn.microsoft.com/es-es/rest/api/power-bi/reports/get-report#code-try-0
          cssClassName={"Embed-container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
