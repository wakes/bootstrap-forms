<div class="<% if $extraClass %>$extraClass<% end_if %>">
    <% if $Options.Count %>
        <% loop $Options %>
		<div class="radio btn btn-default <% if $isChecked %>active<% end_if %> <% if $Top.Inline %>inline<% end_if %>">
                <label>
                    <input id="$ID" class="radio" name="$Name" type="radio" value="$Value"<% if $isChecked %> checked<% end_if %><% if $isDisabled %> disabled<% end_if %>>
                    $Title
                </label>
            </div>
        <% end_loop %>
    <% else %>
        <li>No options available</li>
    <% end_if %>
</div>