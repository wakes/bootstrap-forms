<noscript>
	<select id="$id" name="$Name" class="<% if extraClass %> $extraClass<% end_if %>">
<% loop $Options %>
		<option <% if $Selected %>selected="selected"<% end_if %> value="$Value">$Label</option>
<% end_loop %>
	</select>
</noscript>
<div class="btn-group<% if extraClass %> $extraClass<% end_if %>">
<% loop $Options %>
  <button type="button" data-value="$Value" class="btn <% if $Selected %>active<% end_if %>">$Label</button>
<% end_loop %>
</div>
<input id="$id" type="hidden" name="$Name" value="$Value">