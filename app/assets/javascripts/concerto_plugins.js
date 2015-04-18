function setPlaceHolderToggleSource()
{
  source = $('select#concerto_plugin_source').val();
  field = $('input#concerto_plugin_source_url');
  if (field.length > 0) {
    if (source == 'rubygems') {
      $(field).closest('div.clearfix').hide();
    } else {
      if (source == 'git') {
        $(field).attr('placeholder', 'https://foo.bar/baz/repo.git');
      } else if (source == 'path') {
        $(field).attr('placeholder', '/path/to/extracted/gem');
      }
      $(field).closest('div.clearfix').show();
      $('input#concerto_plugin_gem_name').focus();
    }
  }
}

function bindListeners() {
  // hookup the listener to toggle placeholder text and visibility of source url
  $('select#concerto_plugin_source').change(setPlaceHolderToggleSource);
  // since the default source is rubygems, hide the source url on load
  $('select#concerto_plugin_source').trigger('change');
}

$(document).ready(bindListeners);
$(document).on('page:change', bindListeners);
