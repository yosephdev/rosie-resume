function fetchGitHubInformation() {
    const username = $("#gh-username").val().trim();
    if (!username) {
      $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
      return;
    }
  
    $("#gh-user-data").html(
      `<div id="loader">
        <img src="assets/css/loader.gif" alt="loading..." />
      </div>`
    );
  
    $.ajax({
      url: `https://api.github.com/users/${username}`,
      method: "GET",
      dataType: "json",
      success: function(userData) {
        $("#gh-user-data").html(userInformationHTML(userData));
      },
      error: function(errorResponse) {
        if (errorResponse.status === 404) {
          $("#gh-user-data").html(
            `<h2>No information found for user ${username}</h2>`
          );
        } else {
          console.error(errorResponse);
          $("#gh-user-data").html(
            `<h2>Error: ${errorResponse.responseJSON.message}</h2>`
          );
        }
      }
    });
  }    
  
  $("#gh-username").on("input", fetchGitHubInformation);