ALTER TABLE "product_variants" RENAME COLUMN "varian_option_id" TO "variant_option_id";--> statement-breakpoint
ALTER TABLE "product_variants" DROP CONSTRAINT "product_variants_varian_option_id_variant_options_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_variant_option_id_variant_options_id_fk" FOREIGN KEY ("variant_option_id") REFERENCES "public"."variant_options"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
