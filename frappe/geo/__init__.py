import json

from frappe.frappeclient import FrappeClient


class GeoSource(FrappeClient):
	def get_list(self, doctype, args):
		"""
		Get list of documents from remote site
		"""
		return super().get_list(
			doctype,
			fields=args.get("fields"),
			filters=args.get("filters") or args.get("or_filters"),
			limit_page_length=args.get("page_length") or args.get("limit_page_length"),
			limit_start=args.get("start") or args.get("limit_start"),
		)

	def get_count(self, doctype, args):
		"""
		Get count of documents from remote site
		"""
		return super().get_api(
			"frappe.desk.reportview.get_count",
			{"doctype": doctype, "filters": json.dumps(args.get("filters") or args.get("or_filters"))},
		)


geo_Source = GeoSource("https://hosting.zaviago.com", api_key="d01573463f4e0a4", api_secret="9cc0bbd234fd898")
